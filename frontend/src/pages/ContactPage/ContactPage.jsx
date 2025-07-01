import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Message sent! Confirmation email has been sent.");
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name"  required placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" required placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" required placeholder="Message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Send</button>
    </form>
  );
}
