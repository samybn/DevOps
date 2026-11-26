import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';
import { Users, FileCheck, Calendar, Clock, MapPin, Download } from 'lucide-react';

interface MembreJury {
  nom: string;
  grade: string;
  qualite: string;
  etablissement: string;
  role: 'Président' | 'Rapporteur' | 'Examinateur' | 'Directeur de thèse';
  statutRapport?: 'Déposé (Favorable)' | 'En attente' | 'Non applicable';
}

const membresJury: MembreJury[] = [
  {
    nom: 'Pr. Omar Bouzid',
    grade: 'Professeur',
    qualite: 'Président du jury',
    etablissement: 'Université de Démonstration',
    role: 'Président',
    statutRapport: 'Non applicable',
  },
  {
    nom: 'Pr. Fatima Zohra Mansouri',
    grade: 'Professeur (HDR)',
    qualite: 'Rapporteur externe',
    etablissement: 'Université d’Alger 1',
    role: 'Rapporteur',
    statutRapport: 'Déposé (Favorable)',
  },
  {
    nom: 'Dr. Salim Rahmani',
    grade: 'Maître de Conférences A (HDR)',
    qualite: 'Rapporteur externe',
    etablissement: 'Université de Constantine 2',
    role: 'Rapporteur',
    statutRapport: 'Déposé (Favorable)',
  },
  {
    nom: 'Pr. Karim Haddad',
    grade: 'Professeur',
    qualite: 'Directeur de thèse',
    etablissement: 'Université de Démonstration',
    role: 'Directeur de thèse',
    statutRapport: 'Non applicable',
  },
  {
    nom: 'Dr. Meriem Cherif',
    grade: 'Maître de Conférences A',
    qualite: 'Examinatrice interne',
    etablissement: 'Université de Démonstration',
    role: 'Examinateur',
    statutRapport: 'Non applicable',
  },
];

export function DoctorantJury() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-app-text-secondary tracking-wide uppercase">
          Commission de soutenance
        </span>
        <h1 className="font-serif text-h1 text-app-text">Jury et convocation</h1>
        <p className="text-body text-app-text-secondary">
          Composition réglementaire du jury validée par le conseil scientifique et avis d'expertise.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Jury list */}
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-5">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-app-action" />
                <h2 className="text-title text-app-text">Membres du jury (5 membres)</h2>
              </div>
              <StatusBadge status="valide" label="Jury conforme & validé" />
            </div>

            <div className="flex flex-col w-full divide-y divide-app-border">
              {membresJury.map((m) => (
                <div key={m.nom} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-label text-app-text font-medium">{m.nom}</span>
                      <span className="text-tiny px-2 py-0.5 rounded-pill bg-app-nested text-app-text-secondary">
                        {m.role}
                      </span>
                    </div>
                    <span className="text-caption text-app-text-secondary">
                      {m.grade} · {m.qualite} · {m.etablissement}
                    </span>
                  </div>

                  {m.role === 'Rapporteur' && (
                    <div className="flex items-center gap-2">
                      <span className={`text-badge px-2.5 py-1 rounded-pill ${
                        m.statutRapport?.includes('Favorable')
                          ? 'bg-decision-admis-bg text-decision-admis-text'
                          : 'bg-peach-bg text-peach-text'
                      }`}>
                        {m.statutRapport}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Avis de soutenance / Planning card */}
          <Card className="gap-5">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-title text-app-text">Convocation officielle</h2>
              <StatusBadge status="convoque" label="Convocation émise" />
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1">
              <div className="flex items-center gap-3 p-3 bg-app-nested rounded-field">
                <Calendar size={20} className="text-app-action shrink-0" />
                <div className="flex flex-col">
                  <span className="text-tiny text-app-text-secondary">Date fixée</span>
                  <span className="text-label text-app-text">18 nov. 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-app-nested rounded-field">
                <Clock size={20} className="text-app-action shrink-0" />
                <div className="flex flex-col">
                  <span className="text-tiny text-app-text-secondary">Heure de début</span>
                  <span className="text-label text-app-text">09:00</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-app-nested rounded-field">
                <MapPin size={20} className="text-app-action shrink-0" />
                <div className="flex flex-col">
                  <span className="text-tiny text-app-text-secondary">Salle réservée</span>
                  <span className="text-label text-app-text">Salle des thèses</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full pt-2">
              <span className="text-caption text-app-text-secondary">
                Document officiel signé numériquement par le doyen de la faculté.
              </span>
              <Button variant="outline" size="sm" icon={<Download size={14} />}>
                Télécharger ma convocation (PDF)
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar notes */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <div className="flex items-center gap-2 text-label text-app-text">
              <FileCheck size={18} className="text-status-soutenu-text" />
              <span>Rapports préalables</span>
            </div>
            <p className="text-caption text-app-text-secondary leading-relaxed">
              Les deux rapporteurs ont formulé un avis favorable sans réserve majeure. Le dossier a été transmis à la scolarité pour organisation matérielle de la séance.
            </p>
          </Card>

          <Card peach className="gap-3">
            <span className="text-caption font-semibold tracking-wide uppercase text-peach-text">
              Rappel au candidat
            </span>
            <p className="text-body-sm text-peach-text">
              Vous êtes invité(e) à vous présenter 30 minutes avant le début de la séance afin de tester le matériel de projection et de visioconférence.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

