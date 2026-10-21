import { Resend } from "resend";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_for_build");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 Mo

export async function POST(request) {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const jobId = formData.get("jobId") || null;
  const firstName = formData.get("firstName")?.toString().trim();
  const lastName = formData.get("lastName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const coverLetter = formData.get("coverLetter")?.toString().trim();
  const cvFile = formData.get("cv");

  // Validation des champs
  if (!firstName || !lastName || !email) {
    return Response.json({ error: "Nom, prénom et email sont obligatoires." }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: "Adresse email invalide." }, { status: 400 });
  }
  if (!cvFile || typeof cvFile === "string") {
    return Response.json({ error: "Le CV est obligatoire." }, { status: 400 });
  }
  if (cvFile.type !== "application/pdf") {
    return Response.json({ error: "Le CV doit être un fichier PDF." }, { status: 400 });
  }
  if (cvFile.size > MAX_FILE_SIZE) {
    return Response.json({ error: "Le CV ne doit pas dépasser 5 Mo." }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();

  // Upload du CV vers Supabase Storage
  const safeName = cvFile.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const filePath = `${jobId || "spontaneous"}/${Date.now()}-${safeName}`;

  const { error: uploadError } = await supabase.storage
    .from("cvs")
    .upload(filePath, cvFile, { contentType: "application/pdf" });

  if (uploadError) {
    console.error("Supabase storage upload error:", uploadError);
    return Response.json({ error: "Erreur lors de l'envoi du CV." }, { status: 500 });
  }

  // Enregistrement de la candidature
  const { data, error } = await supabase
    .from("applications")
    .insert({
      job_id: jobId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || null,
      cover_letter: coverLetter || null,
      cv_path: filePath,
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase applications insert error:", error);
    return Response.json({ error: "Erreur lors de l'enregistrement de la candidature." }, { status: 500 });
  }

  // Récupération du titre du poste (si candidature ciblée) pour l'email
  let jobTitle = "Candidature spontanée";
  if (jobId) {
    const { data: job } = await supabase.from("jobs").select("title").eq("id", jobId).single();
    if (job) jobTitle = job.title;
  }

  // Lien signé temporaire (7 jours) pour que l'équipe RH puisse consulter le CV
  const { data: signedUrlData } = await supabase.storage
    .from("cvs")
    .createSignedUrl(filePath, 60 * 60 * 24 * 7);

  try {
    await resend.emails.send({
      from: "DBM Maroc <onboarding@resend.dev>",
      to: process.env.CONTACT_NOTIFICATION_EMAIL,
      subject: `Nouvelle candidature : ${jobTitle}`,
      html: `
        <h2>Nouvelle candidature reçue</h2>
        <p><strong>Poste :</strong> ${jobTitle}</p>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        ${coverLetter ? `<p><strong>Lettre de motivation :</strong></p><p>${coverLetter.replace(/\n/g, "<br/>")}</p>` : ""}
        <p><strong>CV :</strong> ${
          signedUrlData?.signedUrl
            ? `<a href="${signedUrlData.signedUrl}">Télécharger le CV</a> (lien valable 7 jours)`
            : "Erreur lors de la génération du lien"
        }</p>
      `,
    });

    await resend.emails.send({
      from: "DBM Maroc <onboarding@resend.dev>",
      to: email,
      subject: "Nous avons bien reçu votre candidature",
      html: `
        <p>Bonjour ${firstName},</p>
        <p>Nous avons bien reçu votre candidature pour le poste : <strong>${jobTitle}</strong>.</p>
        <p>Notre équipe RH l'examinera et reviendra vers vous prochainement.</p>
        <p>— L'équipe DBM Maroc</p>
      `,
    });
  } catch (emailError) {
    console.error("Resend error:", emailError);
  }

  return Response.json({ success: true, id: data.id }, { status: 201 });
}