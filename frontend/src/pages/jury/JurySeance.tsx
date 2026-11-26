import { Link, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Award, CheckCircle2 } from 'lucide-react';

export function JurySeance() {
  const { id } = useParams();

  return (
    <>
      <div className="flex items-center gap-3">
        <Link to="/jury/theses" className="text-app-text-secondary hover:text-app-text">
          <ArrowLeft size={20} />
        </Link>
        <span className="text-caption text-app-text-secondary">Retour à mes thèses</span>
      </div>

      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Séance de soutenance · Thèse DOC-2023-004{id || '1'}
          </span>
          <h1 className="font-serif text-h1 text-app-text">Déroulement de la séance</h1>
          <p className="text-body text-app-text-secondary">
            Candidat(e) : Amira Benali · Sujet : Optimisation des réseaux de capteurs pour la surveillance environnementale
          </p>
        </div>

        <StatusBadge status="convoque" label="Séance Convoquée" />
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          {/* Scheduling & location */}
          <Card className="gap-5">
            <h2 className="text-title text-app-text">Informations de la séance</h2>
            <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1">
              <div className="flex items-center gap-3 p-3 bg-app-nested rounded-field">
                <Calendar size={20} className="text-app-action shrink-0" />
                <div className="flex flex-col">
                  <span className="text-tiny text-app-text-secondary">Date</span>
                  <span className="text-label text-app-text">18 nov. 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-app-nested rounded-field">
                <Clock size={20} className="text-app-action shrink-0" />
                <div className="flex flex-col">
                  <span className="text-tiny text-app-text-secondary">Heure</span>
                  <span className="text-label text-app-text">09:00</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-app-nested rounded-field">
                <MapPin size={20} className="text-app-action shrink-0" />
                <div className="flex flex-col">
                  <span className="text-tiny text-app-text-secondary">Salle</span>
                  <span className="text-label text-app-text">Salle des thèses</span>
                </div>
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            {/* Protocol checklist */}
            <div className="flex flex-col gap-3 w-full">
              <span className="text-label text-app-text">Protocole académique de la séance</span>
              <div className="flex flex-col gap-2 text-caption text-app-text-secondary">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-app-nested flex items-center justify-center font-medium text-app-text text-tiny">1</span>
                  <span>Ouverture de la séance publique par le Président du jury (5 min)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-app-nested flex items-center justify-center font-medium text-app-text text-tiny">2</span>
                  <span>Exposé oral de la candidate sur ses travaux de thèse (45 min)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-app-nested flex items-center justify-center font-medium text-app-text text-tiny">3</span>
                  <span>Intervention des rapporteurs puis des examinateurs (60 min)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-app-nested flex items-center justify-center font-medium text-app-text text-tiny">4</span>
                  <span>Délibération à huis clos et signature du Procès-Verbal (30 min)</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <span className="text-label text-app-text">Procès-verbal de délibération</span>
            <p className="text-caption text-app-text-secondary leading-relaxed">
              Le président de séance saisira le procès-verbal et la mention décidée par le jury dès la clôture des délibérations.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

