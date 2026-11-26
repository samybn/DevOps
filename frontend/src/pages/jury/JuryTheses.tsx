import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';
import { BookOpen, Calendar, Clock, MapPin } from 'lucide-react';

interface JuryTheseItem {
  id: string;
  doctorant: string;
  sujet: string;
  role: 'Rapporteur' | 'Président' | 'Examinateur';
  dateSoutenance?: string;
  heure?: string;
  salle?: string;
  rapportStatut: 'A déposer' | 'Déposé' | 'Non requis';
  manuscritVersion: string;
}

const juryThesesList: JuryTheseItem[] = [
  {
    id: '1',
    doctorant: 'Amira Benali',
    sujet: 'Optimisation des réseaux de capteurs pour la surveillance environnementale',
    role: 'Rapporteur',
    dateSoutenance: '18 novembre 2026',
    heure: '09:00',
    salle: 'Salle des thèses',
    rapportStatut: 'Déposé',
    manuscritVersion: 'v2 (184 pages)',
  },
  {
    id: '2',
    doctorant: 'Yacine Meziane',
    sujet: 'Apprentissage profond pour le diagnostic des maladies rétiniennes',
    role: 'Examinateur',
    dateSoutenance: '24 novembre 2026',
    heure: '14:00',
    salle: 'Amphi A',
    rapportStatut: 'Non requis',
    manuscritVersion: 'v1 (160 pages)',
  },
  {
    id: '3',
    doctorant: 'Inès Boudiaf',
    sujet: 'Valorisation des ressources hydriques en milieu semi-aride',
    role: 'Rapporteur',
    rapportStatut: 'A déposer',
    manuscritVersion: 'v1 (175 pages)',
  },
];

export function JuryTheses() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-app-text-secondary tracking-wide uppercase">
          Espace Membre de jury
        </span>
        <h1 className="font-serif text-h1 text-app-text">Mes commissions de thèse</h1>
        <p className="text-body text-app-text-secondary">
          Consultez les manuscrits des thèses pour lesquelles vous êtes désigné(e) expert(e) ou membre du jury.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {juryThesesList.map((t) => (
          <Card key={t.id} className="gap-4">
            <div className="flex items-start justify-between gap-4 w-full max-sm:flex-col">
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-caption text-app-text-secondary">Candidat(e) :</span>
                  <span className="text-label text-app-text font-semibold">{t.doctorant}</span>
                  <span className="text-tiny px-2 py-0.5 rounded-pill bg-app-nested text-app-text-secondary font-medium">
                    Votre rôle : {t.role}
                  </span>
                </div>
                <h2 className="font-serif text-h3 text-app-text font-normal">{t.sujet}</h2>
                <span className="text-caption text-app-text-secondary">
                  Manuscrit : {t.manuscritVersion}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {t.role === 'Rapporteur' && (
                  <span
                    className={`text-badge px-2.5 py-1 rounded-pill ${
                      t.rapportStatut === 'Déposé'
                        ? 'bg-decision-admis-bg text-decision-admis-text'
                        : 'bg-peach-bg text-peach-text'
                    }`}
                  >
                    Rapport : {t.rapportStatut}
                  </span>
                )}
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-3">
              {t.dateSoutenance ? (
                <div className="flex items-center gap-4 text-caption text-app-text-secondary">
                  <span className="inline-flex items-center gap-1.5 text-app-text font-medium">
                    <Calendar size={16} className="text-app-action" />
                    {t.dateSoutenance}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={16} />
                    {t.heure}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={16} />
                    {t.salle}
                  </span>
                </div>
              ) : (
                <span className="text-caption text-app-text-secondary">
                  Date de séance en attente des rapports d'expertise
                </span>
              )}

              <div className="flex items-center gap-2">
                <Link to={`/jury/these/${t.id}/lecture`}>
                  <Button variant="outline" size="sm">
                    Lire le manuscrit
                  </Button>
                </Link>
                {t.role === 'Rapporteur' && (
                  <Link to={`/jury/these/${t.id}/rapport`}>
                    <Button variant="primary" size="sm">
                      {t.rapportStatut === 'Déposé' ? 'Voir mon rapport' : 'Rédiger mon rapport'}
                    </Button>
                  </Link>
                )}
                <Link to={`/jury/these/${t.id}/seance`}>
                  <Button variant="ghost" size="sm">
                    Séance →
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

