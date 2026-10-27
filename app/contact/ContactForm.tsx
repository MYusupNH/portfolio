"use client";

import { useState, type FormEvent } from "react";

type Props = { email: string; whatsapp: string };

export default function ContactForm({ email, whatsapp }: Props) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim() || !message.trim()) {
      setError("Nama dan pesan wajib diisi.");
      return false;
    }
    setError("");
    return true;
  };

  const sendWhatsapp = () => {
    if (!validate()) return;
    const text = [
      `Halo, saya ${name.trim()}.`,
      subject.trim() ? `Perihal: ${subject.trim()}` : "",
      "",
      message.trim(),
    ]
      .filter((line, i) => line !== "" || i > 1)
      .join("\n");

    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subj = subject.trim() || `Pesan dari ${name.trim()}`;
    const body = `Halo, saya ${name.trim()}.\n\n${message.trim()}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendWhatsapp();
  };

  return (
    <form className="cn-form" onSubmit={onSubmit} noValidate>
      <label className="cn-field">
        <span>Nama</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama lengkap kamu"
          autoComplete="name"
        />
      </label>

      <label className="cn-field">
        <span>Perihal</span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Tujuan pesan (opsional)"
        />
      </label>

      <label className="cn-field">
        <span>Pesan</span>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis pesanmu di sini..."
        />
      </label>

      {error && (
        <p className="cn-error" role="alert">
          {error}
        </p>
      )}

      <div className="cn-actions">
        <button type="submit" className="cn-btn">
          Kirim via WhatsApp
        </button>
        <button type="button" className="cn-btn ghost" onClick={sendEmail}>
          Kirim via Email
        </button>
      </div>
    </form>
  );
}