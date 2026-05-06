/* =====================================================================
   data.js — EXEMPLE REMPLI : Alice Mbarga
   (Voir member-template/data.js pour la version vierge)
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
  name:      "Alice Mbarga",
  role:      "Développeuse Front-end",
  specialty: "HTML / CSS / JavaScript",
  city:      "Yaoundé",
  email:     "alice.mbarga@exemple.cm",
  phone:     "+237 655 123 456",
  color:     "#c8f060",
  initials:  "AM",

  bio: `Passionnée par les interfaces accessibles et le design web,
je transforme des maquettes en expériences interactives soignées.
J'aime que chaque pixel soit à sa place et que chaque interaction soit fluide.`,

  skills: [
    "HTML5", "CSS3", "JavaScript", "Figma", "Git", "Responsive Design"
  ],

  parcours: [
    {
      title: "Licence en Informatique",
      sub:   "Université de Yaoundé I · 2022–2025",
      desc:  "Spécialisation en développement web et interfaces utilisateur. Projet de fin d'études : refonte du portail étudiant."
    },
    {
      title: "Stage Développeuse Web",
      sub:   "TechCM Yaoundé · Juil–Oct 2024",
      desc:  "Intégration de maquettes Figma, développement de composants HTML/CSS/JS pour une plateforme e-commerce."
    },
    {
      title: "Baccalauréat série C",
      sub:   "Lycée de la Cité Verte · 2022",
      desc:  "Mention Bien. Orientation vers les filières scientifiques et numériques."
    },
  ],

  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)

};
