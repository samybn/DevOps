import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Search, ArrowLeft, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';

interface SoutenanceItem {
  id: string;
  titre: string;
  doctorant: string;
  directeur: string;
  laboratoire: string;
  date: string;
  heure: string;
  salle: string;
  statut: 'convoque' | 'valide';
}

const soutenancesData: SoutenanceItem[] = [
  {
    id: '1',
    titre: 'Optimisation des réseaux de capteurs sans fil pour la surveillance environnementale en milieu aride',
    doctorant: 'Amira Benali',
    directeur: 'Pr. Karim Haddad',
    laboratoire: 'LRSI (Systèmes Intelligents)',
    date: '18 novembre 2026',
    heure: '09:00',
    salle: 'Salle des thèses (Bât. Informatique)',
    statut: 'convoque',
  },
  {
    id: '2',
    titre: 'Apprentissage profond appliqué au diagnostic précoce des pathologies rétiniennes',
    doctorant: 'Yacine Meziane',
    directeur: 'Pr. Nadia Belkacem',
    laboratoire: 'LMCS (Modélisation & Calcul)',
    date: '24 novembre 2026',
    heure: '14:00',
    salle: 'Amphithéâtre A',
    statut: 'convoque',
  },
  {
    id: '3',
    titre: 'Valorisation des ressources hydriques et gestion prédictive par jumeaux numériques',
    doctorant: 'Inès Boudiaf',
    directeur: 'Pr. Ahmed Mansouri',
    laboratoire: 'LGCE (Génie Civil & Environnement)',
    date: '02 décembre 2026',
    heure: '10:00',
    salle: 'Salle 204',
    statut: 'convoque',
  },
];

export function AgendaPublic() {
  const [search, setSearch] = useState('');

  const filtered = soutenancesData.filter((item) =>
    `${item.titre} ${item.doctorant} ${item.directeur} ${item.laboratoire}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header public */}
      <header className="flex items-center justify-between px-8 py-6 bg-app-surface border-b border-app-border">
        <div className="flex items-center gap-3">
          <GraduationCap size={28} className="text-app-text" />
          <div className="flex flex-col">
            <span className="font-serif text-h3 text-app-text leading-tight">Soutenances</span>
            <span className="text-caption text-app-text-secondary">Agenda public · Université de Démonstration</span>
          </div>
        </div>
        <Link
          to="/connexion"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-app-action text-white text-label hover:bg-app-action-hover transition-colors"
        >
          <ArrowLeft size={16} />
          Accès portail
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-6 py-10 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">Diffusion publique</span>
          <h1 className="font-serif text-h1 text-app-text">Prochaines soutenances de doctorat</h1>
          <p className="text-body text-app-text-secondary max-w-2xl">
            Consultez les dates, horaires et lieux des soutenances de thèses programmées au sein de l'établissement. Les séances sont publiques sous réserve des capacités d'accueil.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-3 p-3 bg-app-surface rounded-field border border-app-border max-w-md">
          <Search size={18} className="text-app-text-secondary shrink-0" />
          <input
            type="search"
            placeholder="Rechercher un candidat, sujet, laboratoire…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-body-sm text-app-text placeholder:text-app-text-secondary"
          />
        </div>

        {/* List of soutenances */}
        <div className="flex flex-col gap-4">
          {filtered.length > 0 ? (
            filtered.map((s) => (
              <Card key={s.id} className="gap-4 hover:border-app-text/20 transition-colors">
                <div className="flex items-start justify-between gap-4 w-full max-sm:flex-col">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <span className="text-caption text-app-text-secondary">{s.laboratoire}</span>
                    <h2 className="font-serif text-h3 text-app-text font-normal">{s.titre}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-label text-app-text">Candidat(e) : {s.doctorant}</span>
                      <span className="text-caption text-app-text-secondary">· Direction : {s.directeur}</span>
                    </div>
                  </div>
                  <StatusBadge status={s.statut} label="Séance programmée" />
                </div>

                <hr className="w-full border-0 h-px bg-app-border" />

                <div className="flex items-center gap-6 text-caption text-app-text-secondary max-sm:flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-app-text font-medium">
                    <Calendar size={16} className="text-app-action" />
                    {s.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={16} />
                    {s.heure}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={16} />
                    {s.salle}
                  </span>
                </div>
              </Card>
            ))
          ) : (
            <div className="p-8 text-center text-body-sm text-app-text-secondary bg-app-surface rounded-card border border-app-border">
              Aucune soutenance trouvée pour votre recherche.
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-app-border py-6 px-8 text-center text-caption text-app-text-secondary bg-app-surface">
        Portail académique · Décret exécutif n° 98-254 et arrêtés ministériels relatifs aux études doctorales
      </footer>
    </div>
  );
}

