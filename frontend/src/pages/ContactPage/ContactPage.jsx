import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to send message: " + (errorData.message || "Unknown error"));
      } else {
        alert("Message sent! Confirmation email has been sent.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Could not connect to the server. Please try again later.");
    }
  };

  return (
    <div className="contactContainer">
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Send</button>
    </form>
    <p>webblogopeden@gmail.com</p>
    </div>
  );
}
