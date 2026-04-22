# Portfolio — Dylan BOLADO

Application web vitrine professionnelle développée en React dans le cadre de l'évaluation L3 M2I.

🔗 **Site en ligne :** https://portfolio-topaz-zeta-93.vercel.app  
📁 **Repo GitHub :** https://github.com/DyBobo/Portfolio

---

## Stack technique

| Technologie | Rôle |
|---|---|
| React 19 + Vite | Framework & bundler |
| React Router v7 | Navigation multi-pages |
| GitHub API v3 | Récupération des projets dynamiques |
| Formspree | Envoi du formulaire de contact |
| qrcode.react | Génération du QR Code vCard |
| Vercel | Déploiement & CI/CD |

---

## Fonctionnalités

- **Galerie de projets hybride** — fusion GitHub API + JSON local avec anti-doublon, recherche en temps réel, filtres par catégorie, tri
- **Formulaire de contact** — validation côté client sans bibliothèque, feedback UX, envoi via Formspree
- **QR Code vCard** — scannable sur smartphone, bouton téléchargement vCard pour desktop
- **Navigation** — React Router v6, liens actifs, page 404, scroll auto en haut de page
- **Design** — thème sombre minimaliste, responsive mobile/tablette/desktop

---

## Installation locale

```bash
# 1. Cloner le repo
git clone https://github.com/DyBobo/Portfolio.git
cd Portfolio

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env à partir du template
cp .env.example .env
# Puis remplir VITE_FORMSPREE_URL avec votre endpoint Formspree

# 4. Lancer le serveur de développement
npm run dev
```

---

## Variables d'environnement

Créez un fichier `.env` à la racine (ne jamais commiter ce fichier) :

```
VITE_FORMSPREE_URL=https://formspree.io/f/VOTRE_ID
```

Le fichier `.env.example` contient le template commenté.

---

## Structure du projet

```
src/
├── Components/       # Composants réutilisables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── QRCodeComponent.jsx
│   └── ScrollToTop.jsx
├── Pages/            # Une page = un fichier
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── ProjectDetail.jsx
│   └── NotFound.jsx
├── Data/
│   └── projects.json # Projets hors-GitHub
├── Styles/
│   └── App.css
├── App.jsx
└── main.jsx
public/
├── contact.vcf       # vCard pour le QR Code
└── .env.example
```

---

## Déploiement Vercel

Le projet est déployé automatiquement via Vercel à chaque push sur la branche `main`.

Configuration requise dans **Vercel → Project Settings → Environment Variables** :
- `VITE_FORMSPREE_URL` = votre endpoint Formspree

---

## Auteur

**Dylan BOLADO**  
Étudiant M2I L3 — Sécurité Systèmes & Réseaux  
Alternant Gouvernance des Risques & RGPD chez Monext  
[LinkedIn](https://www.linkedin.com/in/dylan-bolado-56742426b/) · [GitHub](https://github.com/DyBobo)