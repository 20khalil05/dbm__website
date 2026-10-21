"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.target);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Une erreur est survenue. Veuillez réessayer.");
        setStatus("error");
        return;
      }

      setStatus("success");
      e.target.reset();
    } catch {
      setErrorMessage("Impossible de contacter le serveur. Vérifiez votre connexion.");
      setStatus("error");
    }
  }

  return (
    <div
      className="flex w-full flex-col gap-6 rounded-2xl bg-white p-8"
      style={{ boxShadow: "0px 10px 40px 0px #00000014" }}
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Send us a Message
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Fill out the form below and our team will get back to you as soon
          as possible.
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

        <Input
          name="subject"
          label="Subject"
          type="text"
          placeholder="Select a subject"
          required
        />

        <TextArea
          name="message"
          label="Message"
          placeholder="Tell us about your project or inquiry..."
          rows={5}
          required
        />

        {status === "success" && (
          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            <CheckCircle2 size={18} />
            Votre message a bien été envoyé. Nous vous répondrons rapidement.
          </div>
        )}

        {status === "error" && (
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
          disabled={status === "loading"}
        >
          {status === "loading" ? "Envoi en cours..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}