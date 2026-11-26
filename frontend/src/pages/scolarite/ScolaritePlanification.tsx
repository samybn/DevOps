import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { CalendarDays, Clock, MapPin, AlertCircle, CheckCircle2, Building2 } from 'lucide-react';

interface Creneau {
  id: string;
  salle: string;
  doctorant: string;
  date: string;
  heureDebut: string;
  dureeMin: number;
}

const planningExistant: Creneau[] = [
  {
    id: '1',
    salle: 'Salle des thèses',
    doctorant: 'Amira Benali',
    date: '2026-11-18',
    heureDebut: '09:00',
    dureeMin: 180,
  },
  {
    id: '2',
    salle: 'Amphi A',
    doctorant: 'Yacine Meziane',
    date: '2026-11-24',
    heureDebut: '14:00',
    dureeMin: 180,
  },
];

export function ScolaritePlanification() {
  const [selectedThese, setSelectedThese] = useState('3');
  const [date, setDate] = useState('2026-11-18');
  const [heure, setHeure] = useState('09:00');
  const [salle, setSalle] = useState('Salle des thèses');

  // Conflict check simulation:
  const conflitDetecte = date === '2026-11-18' && salle === 'Salle des thèses' && heure === '09:00';

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-app-text-secondary tracking-wide uppercase">
          Organisation logistique
        </span>
        <h1 className="font-serif text-h1 text-app-text">Planification des soutenances</h1>
        <p className="text-body text-app-text-secondary">
          Programmez les séances de soutenance avec contrôle automatique des chevauchements de salles et de jurys.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Planning form */}
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-6">
            <h2 className="text-title text-app-text">Programmer une soutenance</h2>

            <div className="flex flex-col gap-4 w-full">
              {/* Select candidate */}
              <div className="flex flex-col gap-2">
                <label className="text-label text-app-text">Dossier de thèse prêt pour planification</label>
                <select
                  value={selectedThese}
                  onChange={(e) => setSelectedThese(e.target.value)}
                  className="w-full p-3 bg-app-surface rounded-field border border-app-border text-body-sm text-app-text outline-none focus:border-app-action"
                >
                  <option value="3">Inès Boudiaf — Valorisation des ressources hydriques (Jury validé)</option>
                  <option value="1">Amira Benali — Optimisation des réseaux de capteurs (Jury validé)</option>
                  <option value="2">Yacine Meziane — Apprentissage profond (Jury validé)</option>
                </select>
              </div>

              {/* Date, Time, Room */}
              <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="text-label text-app-text">Date de soutenance</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="p-3 bg-app-surface rounded-field border border-app-border text-body-sm text-app-text outline-none focus:border-app-action"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-label text-app-text">Heure de début</label>
                  <input
                    type="time"
                    value={heure}
                    onChange={(e) => setHeure(e.target.value)}
                    className="p-3 bg-app-surface rounded-field border border-app-border text-body-sm text-app-text outline-none focus:border-app-action"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-label text-app-text">Salle de soutenance</label>
                  <select
                    value={salle}
                    onChange={(e) => setSalle(e.target.value)}
                    className="p-3 bg-app-surface rounded-field border border-app-border text-body-sm text-app-text outline-none focus:border-app-action"
                  >
                    <option value="Salle des thèses">Salle des thèses (Cap. 60)</option>
                    <option value="Amphi A">Amphithéâtre A (Cap. 200)</option>
                    <option value="Salle 204">Salle 204 (Cap. 35)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Conflict detection banner */}
            {conflitDetecte ? (
              <div className="flex items-start gap-3 p-4 bg-decision-ajourne-bg text-decision-ajourne-text rounded-field w-full">
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-label font-semibold">Conflit de réservation détecté !</span>
                  <span className="text-caption">
                    La <strong>Salle des thèses</strong> est déjà réservée le 18 novembre 2026 de 09:00 à 12:00 pour la soutenance d'Amira Benali. Veuillez sélectionner un autre créneau ou une autre salle.
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 p-3 bg-decision-admis-bg text-decision-admis-text rounded-field text-caption font-medium">
                <CheckCircle2 size={18} />
                <span>Créneau disponible. Aucun chevauchement de salle ni de membre de jury.</span>
              </div>
            )}

            <div className="flex justify-end w-full">
              <Button variant="primary" disabled={conflitDetecte}>
                Valider et enregistrer la planification
              </Button>
            </div>
          </Card>

          {/* Occupancy list */}
          <Card className="gap-4">
            <h3 className="text-title text-app-text">Séances déjà planifiées</h3>
            <div className="flex flex-col w-full divide-y divide-app-border text-body-sm">
              {planningExistant.map((p) => (
                <div key={p.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-medium text-app-text">{p.doctorant}</span>
                    <span className="text-caption text-app-text-secondary">
                      {p.salle} · {p.date} à {p.heureDebut} ({p.dureeMin} min)
                    </span>
                  </div>
                  <StatusBadge status="convoque" label="Réservé" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar rooms info */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <div className="flex items-center gap-2 text-label text-app-text">
              <Building2 size={18} className="text-app-action" />
              <span>Salles académiques</span>
            </div>
            <div className="flex flex-col gap-2.5 text-caption text-app-text-secondary">
              <div className="flex justify-between py-1 border-b border-app-border">
                <span>Salle des thèses</span>
                <span className="text-app-text font-medium">Bât. Info · 60 pl.</span>
              </div>
              <div className="flex justify-between py-1 border-b border-app-border">
                <span>Amphithéâtre A</span>
                <span className="text-app-text font-medium">Bât. Central · 200 pl.</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Salle 204</span>
                <span className="text-app-text font-medium">Bât. Recherche · 35 pl.</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

