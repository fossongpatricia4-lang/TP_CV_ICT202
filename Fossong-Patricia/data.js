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
  name:      "FOSSONG TSOFACK PATRICIA",           // Ex: "Alice Mbarga"
  role:      "Développeuse Front-end et UI/UX Designer",   // Ex: "Développeuse Front-end"
  specialty: "Génie Logiciel",  // Ex: "HTML / CSS / JavaScript"
  city:      "Yaoundé",                 // Ex: "Yaoundé"
  email:     "fossongpatricia@gmail.com",
  phone:     "+237 679 31 90 03",
  color:     "#3959e7",   // Couleur accent (hex) — change-la à ton goût
  initials:  "FP",        // Tes initiales (2 lettres) si pas de photo

  /* ── À PROPOS ── */
  bio:  `Étudiante a l'université de Yaoundé 1 en faculté de science informatique(ICT4D) spécialisée en Génie Logiciel et je vie a l'École des Postes Neptune de Yaoundé.
je suis passionnée par le design et le développement Front-end.
J'aime créer des interfaces belles et intuitives qui mettent la technologie
au service du développement. Transformer une idée en une expérience visuelle
soignée, c'est ce qui me motive chaque jour.`,

  /* ── COMPÉTENCES ── */
  /* Liste tes compétences séparées par des virgules */
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    "React.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "Figma",
    "CANVA",
    "Adobe Photoshop",
    // Ajoute autant que tu veux...
  ],

  /* ── PARCOURS ── */
  /* Chaque entrée = une expérience ou formation */
  parcours_scolaire: [
    {
      title: "Licence 2 — Génie Logiciel · ICT4D",  // Ex: "Licence en Informatique"
      sub:   "Université de Yaoundé I · 2024–2026",           // Ex: "Université de Yaoundé I · 2022–2025"
      desc:  "Formation en ingénierie logicielle orientée technologies pour le développement. Spécialisation en développement web, design d'interfaces et expériences utilisateur."
    },
    {
      title: "GCE Advanced Level",
      sub:   "Mario Academic Complex(MAC) · 2024",
      desc:  "J'ai obtenu mon GCE A/L, base solide en sciences qui oriente vers les filières technologiques(Informatique)."
    },
  {
    title: "Stage - logonedigital",
    sub:   "Yaoundé · 2024",
    desc:  "Stage de 10 jours en développement web(un projet de gestion de finance) et Dart où j'ai obtenu une attestation à la création d'un projet de gestion d'argence en utilisant HTML, CSS et JavaScript et Dart."
  },
  {
    title: "Projet Hult Prize",
    sub:   "Compétition internationale  · 2026",
    desc:  "J'ai participé à la compétition Hult Prize 2026 avec un projet appelé NUTRI-TRUST qui m'a permis d'utiliser mes competances en design et grace a cela mon equipe et etions parmis les gagnants de cette competition et a la fin recu une attestation de participation."
  }
    // Ajoute autant d'entrées que tu veux...
  ],

  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)

};
