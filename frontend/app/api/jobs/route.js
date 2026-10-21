import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword")?.trim();
  const location = searchParams.get("location")?.trim();
  const brand = searchParams.get("brand")?.trim();
  const type = searchParams.get("type")?.trim();
  const remote = searchParams.get("remote") === "true";

  const supabase = getSupabaseServerClient();

  let query = supabase
    .from("jobs")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (keyword) {
    query = query.ilike("title", `%${keyword}%`);
  }
  if (location) {
    query = query.ilike("location", `%${location}%`);
  }
  if (brand) {
    query = query.eq("brand", brand);
  }
  if (remote) {
    query = query.or("type.eq.Remote,location.ilike.%Remote%");
  } else if (type) {
    query = query.eq("type", type);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase jobs fetch error:", error);
    return Response.json({ error: "Erreur lors de la récupération des offres." }, { status: 500 });
  }

  return Response.json({ jobs: data });
}