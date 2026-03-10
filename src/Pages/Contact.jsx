import { useState } from 'react';

const Contact = () => {
  // Voici les variables qui manquaient (le "status")
  const [status, setStatus] = useState("");
  
  // On récupère l'URL Formspree depuis ton fichier .env
  const formUrl = import.meta.env.VITE_FORMSPREE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("✅ Merci ! Votre message a bien été envoyé.");
        form.reset();
      } else {
        setStatus("❌ Oups ! Il y a eu un problème lors de l'envoi.");
      }
    } catch (error) {
      setStatus("❌ Erreur de connexion au serveur.");
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>📧 Contactez-moi</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" name="name" placeholder="Votre Nom" required style={{ padding: '10px' }} />
        <input type="email" name="_replyto" placeholder="Votre Email" required style={{ padding: '10px' }} />
        <input type="text" name="subject" placeholder="Sujet du message" required style={{ padding: '10px' }} />

        <textarea 
          name="message" 
          placeholder="Votre message (minimum 20 caractères)" 
          required 
          minLength="20"
          style={{ padding: '10px', height: '150px' }}
        ></textarea>

        <button type="submit" style={{ padding: '12px', background: '#222', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
          Envoyer le message
        </button>
      </form>

      {/* C'est cette ligne qui causait l'erreur si 'status' n'était pas défini au début */}
      {status && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e7f3ff', borderRadius: '5px', textAlign: 'center' }}>
          {status}
        </div>
      )}
    </div>
  );
};

export default Contact;