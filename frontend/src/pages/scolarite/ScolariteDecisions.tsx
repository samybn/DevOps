import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Gavel, CheckCircle2, Clock, Award, FileText } from 'lucide-react';

interface DecisionRecord {
  id: string;
  doctorant: string;
  sujet: string;
  dateSoutenance: string;
  decision: 'admis' | 'corrections' | 'ajourne';
  decisionLabel: string;
  mention?: string;
  echeanceCorrections?: string;
  statutCorrections?: 'Non requis' | 'Déposé (En attente)' | 'Validé';
  attestationGeneree: boolean;
}

const decisionsList: DecisionRecord[] = [
  {
    id: '1',
    doctorant: 'Amira Benali',
    sujet: 'Optimisation des réseaux de capteurs pour la surveillance environnementale',
    dateSoutenance: '18 nov. 2026',
    decision: 'admis',
    decisionLabel: 'Admis',
    mention: 'Très Honorable avec Félicitations',
    statutCorrections: 'Validé',
    attestationGeneree: true,
  },
  {
    id: '2',
    doctorant: 'Yacine Meziane',
    sujet: 'Apprentissage profond pour le diagnostic des maladies rétiniennes',
    dateSoutenance: '24 nov. 2026',
    decision: 'corrections',
    decisionLabel: 'Corrections requises',
    echeanceCorrections: '24 février 2027 (3 mois)',
    statutCorrections: 'Déposé (En attente)',
    attestationGeneree: false,
  },
];

export function ScolariteDecisions() {
  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Gestion des verdicts
          </span>
          <h1 className="font-serif text-h1 text-app-text">Décisions et suivi des corrections</h1>
          <p className="text-body text-app-text-secondary">
            Contrôle des délais de corrections post-soutenance, validation définitive et délivrance des attestations provisoires.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {decisionsList.map((d) => (
          <Card key={d.id} className="gap-5">
            <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-title text-app-text">{d.doctorant}</span>
                  <span className="text-caption text-app-text-secondary">· Soutenu le {d.dateSoutenance}</span>
                </div>
                <p className="text-caption text-app-text-secondary">{d.sujet}</p>
                {d.mention && (
                  <span className="text-caption font-medium text-decision-admis-text">
                    Mention : {d.mention}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <StatusBadge status={d.decision} label={d.decisionLabel} />
                {d.attestationGeneree ? (
                  <Button variant="outline" size="sm" icon={<Award size={14} />}>
                    Télécharger l'attestation
                  </Button>
                ) : (
                  <Button variant="primary" size="sm">
                    Valider corrections & Attestation
                  </Button>
                )}
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            <div className="grid grid-cols-3 gap-4 w-full text-caption max-sm:grid-cols-1">
              <div className="flex flex-col p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">État des corrections</span>
                <span className="font-medium text-app-text mt-0.5">{d.statutCorrections}</span>
              </div>
              <div className="flex flex-col p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">Échéance limite</span>
                <span className="font-medium text-app-text mt-0.5">{d.echeanceCorrections || 'Aucune'}</span>
              </div>
              <div className="flex flex-col p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">Diplomation</span>
                <span className={`font-medium mt-0.5 ${d.attestationGeneree ? 'text-status-soutenu-text' : 'text-peach-text'}`}>
                  {d.attestationGeneree ? 'Attestation émise' : 'En attente de clôture'}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

