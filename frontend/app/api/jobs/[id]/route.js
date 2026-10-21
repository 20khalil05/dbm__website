import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function GET(request, { params }) {
  const { id } = await params;
  const supabase = getSupabaseServerClient();

  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .eq("is_active", true)
    .single();

  if (error || !data) {
    return Response.json({ error: "Offre introuvable." }, { status: 404 });
  }

  return Response.json({ job: data });
}