import { useState } from 'react';
import QRCodeComponent from '../Components/QRCodeComponent';

const Contact = () => {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!fields.name.trim()) newErrors.name = 'Le nom est requis.';
    if (!fields.email.trim()) newErrors.email = "L'email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) newErrors.email = "Format d'email invalide.";
    if (!fields.subject) newErrors.subject = 'Veuillez choisir un sujet.';
    if (!fields.message.trim()) newErrors.message = 'Le message est requis.';
    else if (fields.message.trim().length < 20) newErrors.message = 'Le message doit contenir au moins 20 caractères.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setSending(true);
    setStatus('');
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/maqpeqqa", {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) { setStatus('success'); setFields({ name: '', email: '', subject: '', message: '' }); setErrors({}); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
    finally { setSending(false); }
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <h1>Contactez-moi</h1>
        <div className="home-divider"></div>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="name">Prénom / Nom *</label>
            <input
              id="name" type="text" name="name"
              value={fields.name} onChange={handleChange}
              placeholder="Prénom NOM"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email" type="email" name="email"
              value={fields.email} onChange={handleChange}
              placeholder="votre@email.com"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* SELECT avec les 4 options demandées par l'énoncé */}
          <div className="form-group">
            <label htmlFor="subject">Sujet *</label>
            <select
              id="subject" name="subject"
              value={fields.subject} onChange={handleChange}
              className={errors.subject ? 'input-error' : ''}
            >
              <option value="">-- Choisir un sujet --</option>
              <option value="Opportunité">Opportunité</option>
              <option value="Question">Question</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.subject && <span className="error-msg">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message * (min. 20 caractères)</label>
            <textarea
              id="message" name="message"
              value={fields.message} onChange={handleChange}
              placeholder="Votre message ici..."
              rows={6}
              className={errors.message ? 'input-error' : ''}
            />
            <span className="char-count">{fields.message.length} / 20 min</span>
            {errors.message && <span className="error-msg">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-primary submit-btn" disabled={sending}>
            {sending ? '⏳ Envoi en cours...' : '✉️ Envoyer le message'}
          </button>
        </form>

        {status === 'success' && (
          <div className="form-feedback success">✅ Merci ! Votre message a bien été envoyé.</div>
        )}
        {status === 'error' && (
          <div className="form-feedback error-feedback">
            ❌ Problème lors de l'envoi. Contactez-moi directement à{' '}
            <a href="mailto:dylan.bolado@orange.fr">dylan.bolado@orange.fr</a>.
          </div>
        )}
      </div>

      <div className="contact-right">
        <div className="contact-info">
          <h3>Me retrouver</h3>
          <p>📧 <a href="mailto:dylan.bolado@orange.fr">dylan.bolado@orange.fr</a></p>
          <p>💼 <a href="https://www.linkedin.com/in/dylan-bolado-56742426b/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p>🐙 <a href="https://github.com/DyBobo" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
        <div className="contact-qr-box">
          <QRCodeComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;