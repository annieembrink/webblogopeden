import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "email") {
      setEmailValid(validateEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Skriv in en riktigt mail-adress");
      return;
    }

    setIsSending(true);

    // Add a timeout to fail fast on very slow servers
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s

    try {
      const res = await fetch("https://webblogopeden-backend-1.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!res.ok) {
        const errorData = await res.json();
        alert("Misslyckades med att skicka meddelandet: " + (errorData.message || "Unknown error"));
      } else {
        alert("Meddelandet är skickat! Ett bekräftelsemail har skickats till dig.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      if (err.name === "AbortError") {
        alert("Något gick fel... Försök igen senare.");
      } else {
        console.error("Network error:", err);
        alert("Något gick fel... Försök igen senare.");
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contactContainer">
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          placeholder="Namn"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ borderColor: emailValid ? '' : 'red' }}
        />
        {!emailValid && <small style={{ color: 'red' }}>Invalid email format</small>}
        <textarea
          name="message"
          placeholder="Meddelande"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSending}>
          {isSending ? (
            <div className="spinnerWithText">
              <div className="spinner" />
              <span style={{ marginLeft: "8px" }}>Skickar...</span>
            </div>
          ) : (
            "Skickar"
          )}
        </button>
      </form>
      <p>webblogopeden@gmail.com</p>
    </div>
  );
}
