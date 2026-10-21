import { Resend } from "resend";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, subject, message } = body;

  // Validation
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return Response.json({ error: "Veuillez remplir tous les champs obligatoires." }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return Response.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();

  const { data, error } = await supabase
    .from("contact_messages")
    .insert({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      subject: subject.trim(),
      message: message.trim(),
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error);
    return Response.json({ error: "Erreur lors de l'enregistrement du message." }, { status: 500 });
  }

  // Envoi des emails (non bloquant pour la réponse si un email échoue)
  try {
    await resend.emails.send({
      from: "DBM Maroc <onboarding@resend.dev>", // à remplacer par une adresse vérifiée sur ton domaine
      to: process.env.CONTACT_NOTIFICATION_EMAIL,
      subject: `Nouveau message de contact : ${subject.trim()}`,
      html: `
        <h2>Nouveau message reçu</h2>
        <p><strong>Nom :</strong> ${firstName.trim()} ${lastName.trim()}</p>
        <p><strong>Email :</strong> ${email.trim()}</p>
        <p><strong>Téléphone :</strong> ${phone?.trim() || "Non renseigné"}</p>
        <p><strong>Sujet :</strong> ${subject.trim()}</p>
        <p><strong>Message :</strong></p>
        <p>${message.trim().replace(/\n/g, "<br/>")}</p>
      `,
    });

    await resend.emails.send({
      from: "DBM Maroc <onboarding@resend.dev>",
      to: email.trim(),
      subject: "Nous avons bien reçu votre message",
      html: `
        <p>Bonjour ${firstName.trim()},</p>
        <p>Merci de nous avoir contactés. Notre équipe reviendra vers vous dans les plus brefs délais.</p>
        <p>— L'équipe DBM Maroc</p>
      `,
    });
  } catch (emailError) {
    console.error("Resend error:", emailError);
    // On ne fait pas échouer la requête pour autant : le message est déjà enregistré
  }

  return Response.json({ success: true, id: data.id }, { status: 201 });
}