"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    department: "general"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    alert("Formulaire envoyé !");
  };

  return (
    <div className="form-container">
      <h1>Formulaire de contact</h1>
      <p className="subtitle">Remplissez les champs ci-dessous</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom complet *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom et prénom"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vous@exemple.fr"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Service</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="general">Service général</option>
            <option value="support">Support technique</option>
            <option value="sales">Ventes</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Votre message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre demande..."
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Envoyer le message
        </button>
      </form>

      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: 3rem auto;
          padding: 2rem;
          background: #FFFFFF;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: #6B7280;
          margin-bottom: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: #1A1A1A;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem 1rem;
          border: 2px solid #E5E7EB;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s;
          outline: none;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #DC2626;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          padding: 0.9rem 2rem;
          background: #DC2626;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          background: #B91C1C;
        }

        @media (max-width: 768px) {
          .form-container {
            margin: 1.5rem;
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}