import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';
import { CalendarDays, Mail, Gavel, Archive, CheckCircle2, Clock } from 'lucide-react';

export function ScolariteDashboard() {
  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Scolarité & Bureau des soutenances
          </span>
          <h1 className="font-serif text-h1 text-app-text">Tableau de bord scolarité</h1>
          <p className="text-body text-app-text-secondary">
            Planification des soutenances, convocation des jurys, enregistrement des PV et archivage légal.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          { label: 'À planifier', count: '3', desc: 'Rapports favorables reçus' },
          { label: 'Convocations à envoyer', count: '1', desc: 'Séances sous 3 semaines' },
          { label: 'Soutenances ce mois', count: '4', desc: 'Novembre 2026' },
          { label: 'Diplômes en cours', count: '2', desc: 'Attestations délivrées' },
        ].map((s, i) => (
          <Card key={i} className="p-5 gap-2">
            <span className="text-caption text-app-text-secondary">{s.label}</span>
            <span className="font-serif text-display text-app-text leading-none">{s.count}</span>
            <span className="text-tiny text-app-text-secondary mt-1">{s.desc}</span>
          </Card>
        ))}
      </div>

      {/* Action shortcuts */}
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        <Card className="gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-field bg-app-nested flex items-center justify-center">
              <CalendarDays size={20} className="text-app-action" />
            </div>
            <div className="flex flex-col">
              <span className="text-title text-app-text">Planification</span>
              <span className="text-caption text-app-text-secondary">Réservation de salles et calendrier</span>
            </div>
          </div>
          <p className="text-caption text-app-text-secondary">
            Programmez la date, l'heure et la salle des séances validées sans conflit d'horaire ni de salle.
          </p>
          <Link to="/scolarite/planification" className="mt-auto">
            <Button variant="outline" size="sm" className="w-full">
              Gérer le planning →
            </Button>
          </Link>
        </Card>

        <Card className="gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-field bg-app-nested flex items-center justify-center">
              <Mail size={20} className="text-app-action" />
            </div>
            <div className="flex flex-col">
              <span className="text-title text-app-text">Convocations</span>
              <span className="text-caption text-app-text-secondary">Émission et suivi de distribution</span>
            </div>
          </div>
          <p className="text-caption text-app-text-secondary">
            Générez les lettres officielles de convocation pour les membres du jury et le candidat.
          </p>
          <Link to="/scolarite/convocations" className="mt-auto">
            <Button variant="outline" size="sm" className="w-full">
              Suivre les envois →
            </Button>
          </Link>
        </Card>

        <Card className="gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-field bg-app-nested flex items-center justify-center">
              <Gavel size={20} className="text-app-action" />
            </div>
            <div className="flex flex-col">
              <span className="text-title text-app-text">PV & Décisions</span>
              <span className="text-caption text-app-text-secondary">Enregistrement des délibérations</span>
            </div>
          </div>
          <p className="text-caption text-app-text-secondary">
            Saisie de la mention, contrôle des corrections mineures et délivrance des attestations.
          </p>
          <Link to="/scolarite/decisions" className="mt-auto">
            <Button variant="outline" size="sm" className="w-full">
              Saisir les décisions →
            </Button>
          </Link>
        </Card>
      </div>

      {/* Dossiers récents */}
      <Card className="gap-5">
        <h2 className="text-title text-app-text">Dossiers de soutenance récents</h2>

        <div className="flex flex-col w-full divide-y divide-app-border text-body-sm">
          {[
            { id: '1', nom: 'Amira Benali', statut: 'convoque', label: 'Convoqué', date: '18 nov. 2026', salle: 'Salle des thèses' },
            { id: '2', nom: 'Yacine Meziane', statut: 'convoque', label: 'Convoqué', date: '24 nov. 2026', salle: 'Amphi A' },
            { id: '3', nom: 'Inès Boudiaf', statut: 'valide', label: 'Jury validé', date: 'À planifier', salle: '-' },
          ].map((d) => (
            <div key={d.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <div className="flex items-center gap-4">
                <span className="font-medium text-app-text">{d.nom}</span>
                <span className="text-caption text-app-text-secondary">Séance : {d.date} ({d.salle})</span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={d.statut as any} label={d.label} />
                <Link to={`/scolarite/soutenance/${d.id}/deroulement`}>
                  <Button variant="ghost" size="sm">
                    Gérer →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

