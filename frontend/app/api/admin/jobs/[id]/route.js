import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { requireAdmin } from "@/lib/adminAuth";

export async function PATCH(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;

  const { id } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { title, brand, location, type, tags, description, isActive } = body;

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("jobs")
    .update({
      title: title?.trim(),
      brand: brand?.trim(),
      location: location?.trim(),
      type: type?.trim(),
      tags: Array.isArray(tags) ? tags : [],
      description: description?.trim() || null,
      is_active: isActive,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return Response.json({ error: "Erreur lors de la mise à jour." }, { status: 500 });
  }
  return Response.json({ job: data });
}

export async function DELETE(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const supabase = getSupabaseServerClient();
  const { error } = await supabase.from("jobs").delete().eq("id", id);

  if (error) {
    return Response.json({ error: "Erreur lors de la suppression." }, { status: 500 });
  }
  return Response.json({ success: true });
}