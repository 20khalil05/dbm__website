import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return Response.json({ error: "Erreur lors de la récupération des offres." }, { status: 500 });
  }
  return Response.json({ jobs: data });
}

export async function POST(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { title, brand, location, type, tags, description, isActive } = body;

  if (!title?.trim() || !brand?.trim() || !location?.trim() || !type?.trim()) {
    return Response.json({ error: "Titre, marque, localisation et type sont obligatoires." }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("jobs")
    .insert({
      title: title.trim(),
      brand: brand.trim(),
      location: location.trim(),
      type: type.trim(),
      tags: Array.isArray(tags) ? tags : [],
      description: description?.trim() || null,
      is_active: isActive !== false,
    })
    .select()
    .single();

  if (error) {
    return Response.json({ error: "Erreur lors de la création de l'offre." }, { status: 500 });
  }
  return Response.json({ job: data }, { status: 201 });
}