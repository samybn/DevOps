import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, FileText, Bell, ArrowRight, UserCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';

export function DoctorantDashboard() {
  const [readNotifications, setReadNotifications] = useState(false);

  return (
    <>
      {/* Title section */}
      <div className="flex flex-col gap-3">
        <span className="text-caption text-app-text-secondary tracking-wide uppercase">
          Mon parcours doctoral
        </span>
        <h1 className="font-serif text-h1 text-app-text">Navigation et notifications</h1>
        <p className="text-body text-app-text-secondary">
          Votre espace institutionnel et le suivi en temps réel de votre dossier de soutenance.
        </p>
      </div>

      <div className="flex items-start gap-6 max-lg:flex-col">
        {/* Left column */}
        <div className="flex flex-col gap-6 flex-1 w-full">
          {/* Card: Votre espace */}
          <Card>
            <h2 className="text-title text-app-text">Votre espace</h2>
            <div className="flex items-center gap-4 w-full">
              <div className="flex w-10 h-10 items-center justify-center bg-app-nested rounded-field">
                <UserCheck size={20} className="text-app-text" />
              </div>
              <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-label text-app-text">Amira Benali</span>
                <span className="text-caption text-app-text-secondary">
                  Doctorant · Université de Démonstration · LRSI
                </span>
              </div>
            </div>
            <hr className="w-full border-0 h-px bg-app-border" />
            <p className="text-body text-app-text">
              Les informations et actions affichées sont adaptées à vos responsabilités et à l'avancement de votre thèse.
            </p>
            <Link to="/doctorant/these">
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                Consulter les détails de ma thèse →
              </Button>
            </Link>
          </Card>

          {/* Card: Mon dossier */}
          <Card>
            <div className="flex items-center justify-between w-full">
              <h2 className="text-title text-app-text">Mon dossier de thèse</h2>
              <StatusBadge status="valide" label="Jury validé" />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col gap-1">
                <span className="text-label text-app-text">
                  Optimisation des réseaux de capteurs pour la surveillance environnementale
                </span>
                <span className="text-caption text-app-text-secondary">
                  Thèse de doctorat en Informatique · Inscrit en 2023 · Laboratoire LRSI
                </span>
              </div>
              <div className="flex items-center gap-2 text-caption text-app-text-secondary mt-1">
                <span>Directeur : Pr. Karim Haddad</span>
                <span>·</span>
                <span>Manuscrit déposé : v2 (validé)</span>
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            {/* Workflow timeline pills */}
            <div className="w-full flex items-center justify-between gap-2 overflow-x-auto py-2">
              {[
                { step: '01', label: 'Proposé', done: true },
                { step: '02', label: 'Validé', current: true },
                { step: '03', label: 'Convoqué', pending: true },
                { step: '04', label: 'Soutenu', pending: true },
                { step: '05', label: 'Clos', pending: true },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-pill text-caption whitespace-nowrap ${
                    item.done
                      ? 'bg-status-soutenu-bg text-status-soutenu-text font-medium'
                      : item.current
                      ? 'bg-status-valide-bg text-status-valide-text font-medium'
                      : 'bg-app-nested text-app-text-secondary'
                  }`}
                >
                  <span>{item.step}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <Link to="/doctorant/manuscrit" className="mt-2">
              <Button variant="outline">
                Gérer mes manuscrits et documents
              </Button>
            </Link>
          </Card>
        </div>

        {/* Right column: Notifications */}
        <Card className="w-[380px] shrink-0 max-lg:w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-title text-app-text">Notifications</h2>
            <div className="flex items-center gap-2">
              <span className="bg-app-nested px-2.5 py-1 rounded-pill text-badge text-app-text-secondary">
                {readNotifications ? 0 : 2} non lue{readNotifications ? '' : 's'}
              </span>
            </div>
          </div>

          {!readNotifications && (
            <button
              type="button"
              onClick={() => setReadNotifications(true)}
              className="text-caption text-app-link self-start"
            >
              Tout marquer comme lu
            </button>
          )}

          <div className="flex flex-col gap-3 w-full">
            <article className={`p-3 rounded-field flex gap-3 ${!readNotifications ? 'bg-app-nested' : ''}`}>
              <div className="flex w-9 h-9 shrink-0 items-center justify-center bg-app-surface rounded-field">
                <CheckCircle size={18} className="text-status-valide-text" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-label text-app-text">Jury validé</h3>
                <p className="text-caption text-app-text-secondary">
                  La composition de votre jury a été formellement validée par le département.
                </p>
                <span className="text-tiny text-app-text-secondary">Il y a 12 min</span>
              </div>
            </article>

            <article className={`p-3 rounded-field flex gap-3 ${!readNotifications ? 'bg-app-nested' : ''}`}>
              <div className="flex w-9 h-9 shrink-0 items-center justify-center bg-app-surface rounded-field">
                <Clock size={18} className="text-peach-text" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-label text-app-text">Rapports d'expertise en cours</h3>
                <p className="text-caption text-app-text-secondary">
                  2 rapporteurs sur 2 ont reçu le manuscrit. Les avis sont attendus sous 30 jours.
                </p>
                <span className="text-tiny text-app-text-secondary">Il y a 2 h</span>
              </div>
            </article>

            <article className="p-3 rounded-field flex gap-3">
              <div className="flex w-9 h-9 shrink-0 items-center justify-center bg-app-surface rounded-field">
                <FileText size={18} className="text-app-text-secondary" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-label text-app-text">Manuscrit initial déposé</h3>
                <p className="text-caption text-app-text-secondary">
                  Votre fichier PDF a passé le contrôle d'intégrité avec succès (SHA-256 certifié).
                </p>
                <span className="text-tiny text-app-text-secondary">Il y a 3 jours</span>
              </div>
            </article>
          </div>

          <Link to="/doctorant/jury" className="w-full mt-2">
            <Button variant="outline" className="w-full">
              Voir l'état de mon jury
            </Button>
          </Link>
        </Card>
      </div>
    </>
  );
}

