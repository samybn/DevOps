# Application de gestion des soutenances de doctorat

Portail académique de gestion du cycle de vie des thèses de doctorat pour les universités algériennes (conforme aux réglementations universitaires et aux maquettes Figma).

---

## 📁 Architecture du projet

Le projet est structuré sous forme de monorepo standardisé avec npm workspaces :

```
devops/
├── backend/                  # Service backend Node.js (healthcheck, tâches planifiées, notifications)
│   ├── src/
│   │   └── index.js
│   └── package.json
├── frontend/                 # Application web React + Vite + Tailwind CSS (27 écrans intégrés)
│   ├── src/
│   │   ├── components/       # Design System (Button, Card, Input, StatusBadge, Sidebar, Header...)
│   │   ├── pages/            # 27 pages organisées par rôle
│   │   ├── App.tsx           # Routeur principal & navigation des 6 rôles
│   │   ├── main.tsx
│   │   └── index.css         # Thème clair conforme aux jetons Figma
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── .env                      # Variables d'environnement locales (ignoré par git)
├── .gitignore                # Fichiers et dossiers ignorés
├── package.json              # Racine du monorepo npm
├── package-lock.json         # Verrouillage des dépendances npm
└── README.md                 # Documentation du projet
```

---

## 🚀 Démarrage rapide

### Prérequis
- **Node.js** : version 20+ recommandée
- **npm** : version 10+

### Installation des dépendances
Depuis la racine du projet :
```bash
npm install
```

### Lancement en développement
```bash
npm run dev
```

---

## 🎨 Design System & Rôles

Conforme aux spécifications du design Figma :
- **Thème clair** : Palette neutre (`#f5f5f7`, `#ffffff`, `#e2e2e5`), touches d'action bleue institutionnelle (`#0071e3`, `#0066cc`) et accents pêche (`#fbe1d1` / `#5d2a1a`).
- **Typographie** : *Source Serif 4* pour les en-têtes et chiffres éditoriaux, *Inter* pour l'interface UI.
- **Formes** : Rayons doux (`rounded-card` 20px, `rounded-field` 12px, `rounded-pill` 9999px), sans ombres superflues sur les cartes.

---

## 🧭 Plan du site & Écrans intégrés (27 écrans)

### 1. Espace Public & Authentification
- `/agenda` : Consultation publique des soutenances programmées
- `/connexion` : Page d'accès avec sélecteur de rôle rapide
- `/mot-de-passe-oublie` : Demande de réinitialisation
- `/confirmation-reset` : Notification d'envoi du lien
- `/profil` : Fiche personnelle et préférences

### 2. Espace Doctorant
- `/doctorant` : Tableau de bord, notifications et progression
- `/doctorant/these` : Fiche administrative de thèse et direction
- `/doctorant/manuscrit` : Dépôt du manuscrit PDF, calcul SHA-256 et embargo
- `/doctorant/jury` : Composition du jury
- `/doctorant/decision` : Procès-verbal de soutenance et mention
- `/doctorant/attestation` : Visualisation et téléchargement de l'attestation de succès

### 3. Espace Directeur de thèse
- `/directeur` : Suivi global des doctorants encadrés
- `/directeur/these/:id` : Validation de l'état d'avancement et autorisation de dépôt
- `/directeur/jury/:id` : Proposition de commission d'examen avec contrôle automatique des règles réglementaires algériennes (4 à 8 membres, Président Professeur, 2 rapporteurs habilités HDR, ≥ 40% d'examinateurs externes)

### 4. Espace Responsable de Département
- `/departement/validations` : File des propositions de jurys soumises
- `/departement/validations/:id` : Revue détaillée de conformité et validation / rejet motivé

### 5. Espace Membre du Jury
- `/jury/theses` : Thèses assignées à évaluer
- `/jury/lecture/:id` : Visualisation du manuscrit et métadonnées
- `/jury/rapport/:id` : Dépôt de rapport d'expertise (Favorable / Réserves / Défavorable)
- `/jury/seance/:id` : Feuille de délibération et signature

### 6. Espace Scolarité & Administration
- `/scolarite` : Vue synthétique de l'état des soutenances
- `/scolarite/planification` : Attribution des créneaux et détection automatique des conflits de salle
- `/scolarite/convocations` : Génération et émission des ordres de mission
- `/scolarite/deroulement` : Gestion de la séance le jour J
- `/scolarite/decisions` : Saisie des PV et mentions
- `/scolarite/archives` : Consultation de l'historique et conservation

### 7. Espace Administrateur
- `/admin/utilisateurs` : Gestion des comptes et affectation des rôles
- `/admin/regles-jury` : Paramétrage des critères de recevabilité des jurys
- `/admin/salles` : Gestion des salles et équipements
- `/admin/supervision` : Surveillance des flux et journaux d'audit
- `/admin/statistiques` : Tableaux de bord de suivi avec export de données CSV
