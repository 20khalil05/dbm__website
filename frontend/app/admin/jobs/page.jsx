"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus, LogOut } from "lucide-react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const BRANDS = ["ACCENT", "AGX", "SCREENADS", "RAMZO"];
const TYPES = ["Full-Time", "Part-Time", "Remote"];

const EMPTY_FORM = {
  title: "",
  brand: BRANDS[0],
  location: "",
  type: TYPES[0],
  tags: "",
  description: "",
  isActive: true,
};

export default function AdminJobsPage() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState("loading");
  const [editingId, setEditingId] = useState(null); // null = pas de formulaire ouvert, "new" = création
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function fetchJobs() {
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/jobs");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setJobs(data.jobs);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchJobs();
  }, []);

  function openCreateForm() {
    setForm(EMPTY_FORM);
    setEditingId("new");
    setError("");
  }

  function openEditForm(job) {
    setForm({
      title: job.title,
      brand: job.brand,
      location: job.location,
      type: job.type,
      tags: job.tags.join(", "),
      description: job.description || "",
      isActive: job.is_active,
    });
    setEditingId(job.id);
    setError("");
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title: form.title,
      brand: form.brand,
      location: form.location,
      type: form.type,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      description: form.description,
      isActive: form.isActive,
    };

    const isNew = editingId === "new";
    const url = isNew ? "/api/admin/jobs" : `/api/admin/jobs/${editingId}`;
    const method = isNew ? "POST" : "PATCH";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erreur lors de l'enregistrement.");
        setSaving(false);
        return;
      }

      setEditingId(null);
      setSaving(false);
      fetchJobs();
    } catch {
      setError("Impossible de contacter le serveur.");
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Supprimer cette offre définitivement ?")) return;

    try {
      await fetch(`/api/admin/jobs/${id}`, { method: "DELETE" });
      fetchJobs();
    } catch {
      alert("Erreur lors de la suppression.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Gestion des offres d emploi</h1>
          <div className="flex gap-3">
            <Button variant="primary" size="sm" icon={Plus} iconPosition="left" onClick={openCreateForm}>
              Nouvelle offre
            </Button>
            <Button variant="outlineLight" size="sm" icon={LogOut} iconPosition="left" onClick={handleLogout}>
                Déconnexion
            </Button>
          </div>
        </div>

        {editingId && (
          <form
            onSubmit={handleSave}
            className="mt-6 flex flex-col gap-4 rounded-2xl bg-white p-6"
            style={{ boxShadow: "0px 10px 40px 0px #00000014" }}
          >
            <h2 className="font-bold text-slate-900">
              {editingId === "new" ? "Créer une offre" : "Modifier l'offre"}
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Titre"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
              <Input
                label="Localisation"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-900">Marque</label>
                <select
                  value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700"
                >
                  {BRANDS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-900">Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700"
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <Input
              label="Tags (séparés par des virgules)"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              placeholder="Sales, B2B, Account Management"
            />

            <TextArea
              label="Description"
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              />
              Offre active (visible publiquement)
            </label>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex gap-3">
              <Button variant="primary" type="submit" disabled={saving}>
                {saving ? "Enregistrement..." : "Enregistrer"}
              </Button>
              <Button variant="outlineLight" type="button" onClick={() => setEditingId(null)}>
                Annuler
              </Button>
            </div>
          </form>
        )}

        <div className="mt-6 flex flex-col gap-3">
          {status === "loading" && <p className="text-sm text-slate-400">Chargement...</p>}
          {status === "error" && <p className="text-sm text-red-500">Erreur de chargement.</p>}

          {status === "success" &&
            jobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between rounded-xl bg-white p-4"
                style={{ boxShadow: "0px 4px 16px 0px #00000010" }}
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {job.title}{" "}
                    {!job.is_active && (
                      <span className="ml-2 rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-500">
                        Inactive
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-slate-500">
                    {job.brand} · {job.location} · {job.type}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditForm(job)}
                    className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}