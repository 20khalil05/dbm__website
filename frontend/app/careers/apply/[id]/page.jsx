"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Upload } from "lucide-react";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import Button from "../../../components/Button";

export default function ApplyPage() {
  const { id } = useParams();
  const router = useRouter();

  const [job, setJob] = useState(null);
  const [jobStatus, setJobStatus] = useState("loading"); // loading | success | error
  const [formStatus, setFormStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setJob(data.job);
        setJobStatus("success");
      } catch {
        setJobStatus("error");
      }
    }
    fetchJob();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    const form = e.target;
    const formData = new FormData(form);
    formData.set("jobId", id);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Une erreur est survenue.");
        setFormStatus("error");
        return;
      }

      setFormStatus("success");
      form.reset();
      setFileName("");
    } catch {
      setErrorMessage("Impossible de contacter le serveur.");
      setFormStatus("error");
    }
  }

  if (jobStatus === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-400">Chargement de l&apos;offre...</p>
      </main>
    );
  }

  if (jobStatus === "error" || !job) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
        <p className="text-lg font-semibold text-slate-900">Cette offre n&apos;existe plus ou n&apos;est plus disponible.</p>
        <Button variant="primary" onClick={() => router.push("/careers")}>
          Retour aux offres
        </Button>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 px-6 py-16">
      <div
        className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-2xl bg-white p-8"
        style={{ boxShadow: "0px 10px 40px 0px #00000014" }}
      >
        <div>
          <p className="text-sm font-semibold text-red-600">Postuler pour</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">{job.title}</h1>
          <p className="mt-1 text-sm text-slate-500">
            {job.brand} · {job.location} · {job.type}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input name="firstName" label="First Name" type="text" placeholder="John" required />
            <Input name="lastName" label="Last Name" type="text" placeholder="Doe" required />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              name="email"
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              required
            />
            <Input
              name="phone"
              label="Phone Number"
              type="tel"
              placeholder="+212 6 00 00 00 00"
            />
          </div>

          <TextArea
            name="coverLetter"
            label="Lettre de motivation (optionnel)"
            placeholder="Parlez-nous de votre motivation pour ce poste..."
            rows={5}
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-900">CV (PDF, 5 Mo max)</label>
            <label
              htmlFor="cv-upload"
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500 hover:border-red-500 hover:text-red-600"
            >
              <Upload size={16} />
              {fileName || "Choisir un fichier PDF"}
            </label>
            <input
              id="cv-upload"
              name="cv"
              type="file"
              accept="application/pdf"
              required
              className="hidden"
              onChange={(e) => setFileName(e.target.files[0]?.name || "")}
            />
          </div>

          {formStatus === "success" && (
            <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
              <CheckCircle2 size={18} />
              Votre candidature a bien été envoyée. Nous vous répondrons rapidement.
            </div>
          )}

          {formStatus === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle size={18} />
              {errorMessage}
            </div>
          )}

          <Button
            variant="primary"
            type="submit"
            icon={Send}
            iconPosition="left"
            className="w-full"
            disabled={formStatus === "loading"}
          >
            {formStatus === "loading" ? "Envoi en cours..." : "Envoyer ma candidature"}
          </Button>
        </form>
      </div>
    </main>
  );
}