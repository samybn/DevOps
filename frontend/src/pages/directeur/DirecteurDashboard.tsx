import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, FileText, Clock, ArrowRight, Plus, Search } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';

interface DoctorantItem {
  id: string;
  nom: string;
  sujet: string;
  annee: string;
  statut: 'propose' | 'valide' | 'convoque' | 'soutenu' | 'clos';
  statutLabel: string;
  avancement: string;
}

const doctorantsList: DoctorantItem[] = [
  {
    id: '1',
    nom: 'Amira Benali',
    sujet: 'Optimisation des réseaux de capteurs pour la surveillance environnementale',
    annee: '3e année',
    statut: 'valide',
    statutLabel: 'Jury validé',
    avancement: '90%',
  },
  {
    id: '2',
    nom: 'Yacine Meziane',
    sujet: 'Apprentissage profond pour le diagnostic des maladies rétiniennes',
    annee: '3e année',
    statut: 'convoque',
    statutLabel: 'Convoqué (24 nov.)',
    avancement: '95%',
  },
  {
    id: '3',
    nom: 'Inès Boudiaf',
    sujet: 'Valorisation des ressources hydriques en milieu semi-aride',
    annee: '4e année',
    statut: 'propose',
    statutLabel: 'Jury en révision',
    avancement: '80%',
  },
  {
    id: '4',
    nom: 'Tarek Belhadj',
    sujet: 'Architectures neuromorphiques pour le traitement du signal radar',
    annee: '2e année',
    statut: 'propose',
    statutLabel: 'Recherche en cours',
    avancement: '50%',
  },
];

export function DirecteurDashboard() {
  const [search, setSearch] = useState('');

  const filtered = doctorantsList.filter((d) =>
    `${d.nom} ${d.sujet}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Title */}
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Espace Directeur de thèse
          </span>
          <h1 className="font-serif text-h1 text-app-text">Bonjour, Pr. Karim Haddad</h1>
          <p className="text-body text-app-text-secondary">
            Supervision académique de vos doctorants et suivi des jurys de soutenance.
          </p>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          { label: 'Doctorants suivis', value: '4', detail: '2 soutenances ce semestre', icon: <Users size={20} /> },
          { label: 'Jurys à instruire', value: '1', detail: '1 dossier en attente', icon: <FileText size={20} /> },
          { label: 'Séances prévues', value: '2', detail: 'Novembre 2026', icon: <Calendar size={20} /> },
          { label: 'Taux de conformité', value: '100%', detail: 'Règles ministérielles', icon: <Clock size={20} /> },
        ].map((s) => (
          <Card key={s.label} className="p-5 gap-3">
            <div className="flex items-center justify-between w-full text-app-text-secondary">
              <span className="text-caption">{s.label}</span>
              <span className="text-app-action">{s.icon}</span>
            </div>
            <div className="flex items-baseline justify-between w-full">
              <span className="font-serif text-display text-app-text leading-none">{s.value}</span>
              <span className="text-tiny text-status-soutenu-text font-medium">{s.detail}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Main doctorants list */}
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-5">
            <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-3">
              <h2 className="text-title text-app-text">Mes doctorants ({doctorantsList.length})</h2>

              <div className="flex items-center gap-2 p-2 bg-app-nested rounded-field">
                <Search size={16} className="text-app-text-secondary" />
                <input
                  type="search"
                  placeholder="Filtrer..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none text-caption text-app-text placeholder:text-app-text-secondary w-32"
                />
              </div>
            </div>

            <div className="flex flex-col w-full divide-y divide-app-border">
              {filtered.map((d) => (
                <div key={d.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4 max-sm:flex-col max-sm:items-start">
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-label text-app-text font-medium">{d.nom}</span>
                      <span className="text-tiny px-2 py-0.5 rounded-pill bg-app-nested text-app-text-secondary">
                        {d.annee}
                      </span>
                    </div>
                    <p className="text-caption text-app-text-secondary line-clamp-1">
                      {d.sujet}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <StatusBadge status={d.statut} label={d.statutLabel} />
                    <Link to={`/directeur/these/${d.id}`}>
                      <Button variant="outline" size="sm">
                        Gérer le dossier →
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column: Recent activity & quick links */}
        <div className="flex flex-col gap-6">
          <Card className="gap-4">
            <h3 className="text-title text-app-text">Activités récentes</h3>
            <div className="flex flex-col gap-3">
              {[
                { title: 'Validation du jury', desc: 'Le jury d’Amira Benali a été approuvé par le département.', time: 'Il y a 2 h' },
                { title: 'Dépôt de manuscrit v2', desc: 'Yacine Meziane a téléversé sa version corrigée.', time: 'Hier' },
                { title: 'Rapport favorable reçu', desc: 'Pr. Mansouri a soumis son avis d’expertise.', time: 'Il y a 3 jours' },
              ].map((a, i) => (
                <div key={i} className="flex flex-col gap-0.5 p-3 rounded-field bg-app-nested">
                  <span className="text-label text-app-text">{a.title}</span>
                  <span className="text-caption text-app-text-secondary">{a.desc}</span>
                  <span className="text-tiny text-app-text-secondary mt-1">{a.time}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card peach className="gap-3">
            <span className="text-caption font-semibold tracking-wide uppercase text-peach-text">
              Action requise
            </span>
            <h4 className="font-serif text-h3 text-peach-text">
              Proposition de jury pour Inès Boudiaf
            </h4>
            <p className="text-body-sm text-peach-text">
              Le manuscrit v1 a été déposé. Vous pouvez dès à présent composer la commission de soutenance pour vérification d'éligibilité.
            </p>
            <Link to="/directeur/these/3/jury" className="mt-2">
              <Button variant="outline" size="sm" className="bg-white border-peach-text/30 text-peach-text hover:bg-white/80">
                Composer le jury →
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}

