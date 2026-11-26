import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, Plus, Trash2, ShieldCheck, Users } from 'lucide-react';

interface Membre {
  id: string;
  nom: string;
  grade: 'Professeur' | 'MCA' | 'MCB' | 'Autre';
  hdr: boolean;
  role: 'Président' | 'Rapporteur' | 'Examinateur' | 'Directeur de thèse';
  etablissement: string;
  estExterne: boolean;
}

const initialMembres: Membre[] = [
  {
    id: '1',
    nom: 'Pr. Omar Bouzid',
    grade: 'Professeur',
    hdr: true,
    role: 'Président',
    etablissement: 'Université de Démonstration',
    estExterne: false,
  },
  {
    id: '2',
    nom: 'Pr. Fatima Zohra Mansouri',
    grade: 'Professeur',
    hdr: true,
    role: 'Rapporteur',
    etablissement: 'Université d’Alger 1',
    estExterne: true,
  },
  {
    id: '3',
    nom: 'Dr. Salim Rahmani',
    grade: 'MCA',
    hdr: true,
    role: 'Rapporteur',
    etablissement: 'Université de Constantine 2',
    estExterne: true,
  },
  {
    id: '4',
    nom: 'Pr. Karim Haddad',
    grade: 'Professeur',
    hdr: true,
    role: 'Directeur de thèse',
    etablissement: 'Université de Démonstration',
    estExterne: false,
  },
  {
    id: '5',
    nom: 'Dr. Meriem Cherif',
    grade: 'MCA',
    hdr: false,
    role: 'Examinateur',
    etablissement: 'Université de Démonstration',
    estExterne: false,
  },
];

export function DirecteurJury() {
  const { id } = useParams();
  const [membres, setMembres] = useState<Membre[]>(initialMembres);

  // Live evaluation based on provisional Algerian regulations (prompt section 8)
  const totalMembres = membres.length;
  const president = membres.find((m) => m.role === 'Président');
  const rapporteurs = membres.filter((m) => m.role === 'Rapporteur');
  const rapporteursHdr = rapporteurs.filter((m) => m.hdr);
  const externes = membres.filter((m) => m.estExterne);
  const proportionExterne = totalMembres > 0 ? (externes.length / totalMembres) * 100 : 0;

  const regleTaille = totalMembres >= 4 && totalMembres <= 8;
  const reglePresident = !!president && president.grade === 'Professeur';
  const regleRapporteurs = rapporteurs.length === 2 && rapporteursHdr.length === 2;
  const regleExternes = proportionExterne >= 40; // minimum required

  const juryConforme = regleTaille && reglePresident && regleRapporteurs && regleExternes;

  const handleRemoveMembre = (membreId: string) => {
    setMembres(membres.filter((m) => m.id !== membreId));
  };

  const handleAddSampleMember = () => {
    const newId = String(Date.now());
    setMembres([
      ...membres,
      {
        id: newId,
        nom: 'Dr. Nouvel Expert',
        grade: 'MCA',
        hdr: true,
        role: 'Examinateur',
        etablissement: 'Université d’Oran',
        estExterne: true,
      },
    ]);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <Link to={`/directeur/these/${id || '1'}`} className="text-app-text-secondary hover:text-app-text">
          <ArrowLeft size={20} />
        </Link>
        <span className="text-caption text-app-text-secondary">Retour au dossier de thèse</span>
      </div>

      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Proposition de jury · Candidat(e) : Amira Benali
          </span>
          <h1 className="font-serif text-h1 text-app-text">Contrôle d'éligibilité du jury</h1>
          <p className="text-body text-app-text-secondary">
            Composez la commission de soutenance. Le moteur de règles évalue automatiquement la conformité réglementaire.
          </p>
        </div>

        <StatusBadge
          status={juryConforme ? 'valide' : 'propose'}
          label={juryConforme ? 'Jury Éligible' : 'Non Conforme'}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Members list */}
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-5">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-app-action" />
                <h2 className="text-title text-app-text">Composition proposée ({totalMembres} membres)</h2>
              </div>
              <Button variant="outline" size="sm" icon={<Plus size={14} />} onClick={handleAddSampleMember}>
                Ajouter un membre
              </Button>
            </div>

            <div className="flex flex-col w-full divide-y divide-app-border">
              {membres.map((m) => (
                <div key={m.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-label text-app-text font-medium">{m.nom}</span>
                      <span className="text-tiny px-2 py-0.5 rounded-pill bg-app-nested text-app-text font-medium">
                        {m.role}
                      </span>
                      {m.estExterne && (
                        <span className="text-tiny px-2 py-0.5 rounded-pill bg-status-valide-bg text-status-valide-text">
                          Externe
                        </span>
                      )}
                      {m.hdr && (
                        <span className="text-tiny px-1.5 py-0.5 rounded-pill bg-app-nested text-app-text-secondary">
                          HDR
                        </span>
                      )}
                    </div>
                    <span className="text-caption text-app-text-secondary">
                      {m.grade} · {m.etablissement}
                    </span>
                  </div>

                  {m.role !== 'Directeur de thèse' && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMembre(m.id)}
                      className="text-app-text-secondary hover:text-decision-ajourne-text p-1"
                      aria-label="Supprimer ce membre"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            <div className="flex items-center justify-between w-full">
              <span className="text-caption text-app-text-secondary">
                Règles de composition v2.4 (Arrêté ministériel relatif à l'habilitation universitaire)
              </span>
              <Button
                variant="primary"
                disabled={!juryConforme}
                className={!juryConforme ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Soumettre pour validation au département
              </Button>
            </div>
          </Card>
        </div>

        {/* Live Eligibility Panel */}
        <div className="flex flex-col gap-6">
          <Card className="gap-4">
            <div className="flex items-center gap-2 text-title text-app-text">
              <ShieldCheck size={20} className="text-app-action" />
              <span>Contrôle d'éligibilité</span>
            </div>

            <p className="text-caption text-app-text-secondary">
              Évaluation en direct des critères obligatoires pour soumission.
            </p>

            <div className="flex flex-col gap-3 w-full">
              {/* Règle 1 : Nombre total */}
              <div className="flex items-start gap-3 p-3 bg-app-nested rounded-field">
                {regleTaille ? (
                  <CheckCircle2 size={18} className="text-status-soutenu-text shrink-0 mt-0.5" />
                ) : (
                  <XCircle size={18} className="text-decision-ajourne-text shrink-0 mt-0.5" />
                )}
                <div className="flex flex-col">
                  <span className="text-caption font-medium text-app-text">Effectif du jury (4 à 8 membres)</span>
                  <span className="text-tiny text-app-text-secondary">
                    Constaté : {totalMembres} membres
                  </span>
                </div>
              </div>

              {/* Règle 2 : Président de grade Professeur */}
              <div className="flex items-start gap-3 p-3 bg-app-nested rounded-field">
                {reglePresident ? (
                  <CheckCircle2 size={18} className="text-status-soutenu-text shrink-0 mt-0.5" />
                ) : (
                  <XCircle size={18} className="text-decision-ajourne-text shrink-0 mt-0.5" />
                )}
                <div className="flex flex-col">
                  <span className="text-caption font-medium text-app-text">Président de grade Professeur</span>
                  <span className="text-tiny text-app-text-secondary">
                    {president ? `${president.nom} (${president.grade})` : 'Aucun président désigné'}
                  </span>
                </div>
              </div>

              {/* Règle 3 : Deux rapporteurs avec HDR */}
              <div className="flex items-start gap-3 p-3 bg-app-nested rounded-field">
                {regleRapporteurs ? (
                  <CheckCircle2 size={18} className="text-status-soutenu-text shrink-0 mt-0.5" />
                ) : (
                  <XCircle size={18} className="text-decision-ajourne-text shrink-0 mt-0.5" />
                )}
                <div className="flex flex-col">
                  <span className="text-caption font-medium text-app-text">Exactement 2 rapporteurs titulaires de l'HDR</span>
                  <span className="text-tiny text-app-text-secondary">
                    Constaté : {rapporteurs.length} rapporteur(s) dont {rapporteursHdr.length} HDR
                  </span>
                </div>
              </div>

              {/* Règle 4 : Membres externes */}
              <div className="flex items-start gap-3 p-3 bg-app-nested rounded-field">
                {regleExternes ? (
                  <CheckCircle2 size={18} className="text-status-soutenu-text shrink-0 mt-0.5" />
                ) : (
                  <XCircle size={18} className="text-decision-ajourne-text shrink-0 mt-0.5" />
                )}
                <div className="flex flex-col">
                  <span className="text-caption font-medium text-app-text">Part minimale de membres externes (≥ 40%)</span>
                  <span className="text-tiny text-app-text-secondary">
                    Constaté : {externes.length}/{totalMembres} ({Math.round(proportionExterne)}%)
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card peach className="gap-3">
            <span className="text-caption font-semibold tracking-wide uppercase text-peach-text">
              Note réglementaire
            </span>
            <p className="text-body-sm text-peach-text">
              Le directeur de thèse participe aux délibérations mais ne peut pas assurer la présidence du jury ni être rapporteur du travail qu'il a dirigé.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

