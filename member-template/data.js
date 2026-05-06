/* =====================================================================
   data.js — FICHIER PERSONNEL DE CHAQUE MEMBRE
   =====================================================================

   INSTRUCTIONS :
   ──────────────
   1. Remplis TOUTES les informations ci-dessous avec tes vraies données.
   2. Dépose ta photo dans ce dossier et nomme-la :  photo.jpg
   3. Dépose ta vidéo dans ce dossier et nomme-la :  video.mp4
   4. Dépose ton audio dans ce dossier et nomme-la : audio.mp3
   5. N'efface pas les guillemets ni les virgules !

===================================================================== */

const MEMBER = {

  /* ── INFOS PERSONNELLES ── */
  name:      "Ton Prénom Nom",           // Ex: "Alice Mbarga"
  role:      "Ton titre / spécialité",   // Ex: "Développeuse Front-end"
  specialty: "Ta spécialité détaillée",  // Ex: "HTML / CSS / JavaScript"
  city:      "Ta ville",                 // Ex: "Yaoundé"
  email:     "ton.email@exemple.com",
  phone:     "+237 6xx xxx xxx",
  color:     "#c8f060",   // Couleur accent (hex) — change-la à ton goût
  initials:  "XX",        // Tes initiales (2 lettres) si pas de photo

  /* ── À PROPOS ── */
  bio: `Écris ici une courte présentation de toi-même.
Parle de ta passion, de ce que tu fais, de ce qui te motive.
Tu peux écrire plusieurs phrases.`,

  /* ── COMPÉTENCES ── */
  /* Liste tes compétences séparées par des virgules */
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    // Ajoute autant que tu veux...
  ],

  /* ── PARCOURS ── */
  /* Chaque entrée = une expérience ou formation */
  parcours: [
    {
      title: "Titre du diplôme ou du poste",   // Ex: "Licence en Informatique"
      sub:   "Établissement · Année",           // Ex: "Université de Yaoundé I · 2022–2025"
      desc:  "Courte description de cette étape de ton parcours."
    },
    {
      title: "Deuxième expérience",
      sub:   "Entreprise ou école · Année",
      desc:  "Ce que tu y as fait ou appris."
    },
    // Ajoute autant d'entrées que tu veux...
  ],

  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)

};
