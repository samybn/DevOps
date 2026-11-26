import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ArrowLeft, CheckCircle2, ShieldCheck, XCircle, Users } from 'lucide-react';

export function DepartementValidationDetail() {
  const { juryId } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [validated, setValidated] = useState(false);
  const [refused, setRefused] = useState(false);

  const handleValider = () => {
    setValidated(true);
    setRefused(false);
  };

  const handleRefuser = () => {
    setRefused(true);
    setValidated(false);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <Link to="/departement/validations" className="text-app-text-secondary hover:text-app-text">
          <ArrowLeft size={20} />
        </Link>
        <span className="text-caption text-app-text-secondary">Retour aux validations de jurys</span>
      </div>

      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Examen du jury · Réf JURY-{juryId || '103'}
          </span>
          <h1 className="font-serif text-h1 text-app-text">Instruction de la proposition</h1>
          <p className="text-body text-app-text-secondary">
            Candidat(e) : Inès Boudiaf · Thèse dirigée par le Pr. Ahmed Mansouri
          </p>
        </div>

        <StatusBadge
          status={validated ? 'valide' : refused ? 'ajourne' : 'propose'}
          label={validated ? 'Jury Approuvé' : refused ? 'Refusé / À réviser' : 'En attente d’avis'}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Main review section */}
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-5">
            <h2 className="text-title text-app-text">Composition soumise à examen (5 membres)</h2>

            <div className="flex flex-col w-full divide-y divide-app-border text-body-sm">
              {[
                { nom: 'Pr. Mustapha Cheriet', grade: 'Professeur', role: 'Président', etab: 'Université de Démonstration', ext: false },
                { nom: 'Pr. Linda Benachenhou', grade: 'Professeur (HDR)', role: 'Rapporteur', etab: 'Université d’Alger 1', ext: true },
                { nom: 'Dr. Kamel Ouali', grade: 'MCA (HDR)', role: 'Rapporteur', etab: 'Université de Blida 1', ext: true },
                { nom: 'Pr. Ahmed Mansouri', grade: 'Professeur', role: 'Directeur de thèse', etab: 'Université de Démonstration', ext: false },
                { nom: 'Dr. Soraya Dahmani', grade: 'MCA', role: 'Examinatrice', etab: 'Université de Démonstration', ext: false },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-app-text">{m.nom}</span>
                      <span className="text-tiny px-2 py-0.5 rounded-pill bg-app-nested text-app-text-secondary font-medium">
                        {m.role}
                      </span>
                      {m.ext && (
                        <span className="text-tiny px-2 py-0.5 rounded-pill bg-status-valide-bg text-status-valide-text">
                          Externe
                        </span>
                      )}
                    </div>
                    <span className="text-caption text-app-text-secondary">{m.grade} · {m.etab}</span>
                  </div>
                </div>
              ))}
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            {/* Décision du département form */}
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="dept-comment" className="text-label text-app-text">
                Observations ou réserves éventuelles du département
              </label>
              <textarea
                id="dept-comment"
                rows={3}
                placeholder="Indiquez ici vos recommandations ou le motif en cas de refus..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-3 rounded-field border border-app-border bg-app-surface text-body-sm text-app-text outline-none focus:border-app-action resize-none"
              />
            </div>

            {validated && (
              <div className="flex items-center gap-2 p-3 bg-decision-admis-bg text-decision-admis-text rounded-field text-caption font-medium">
                <CheckCircle2 size={18} />
                <span>Le jury a été validé avec succès. Le dossier passe au statut Validé et est transmis à la scolarité.</span>
              </div>
            )}

            {refused && (
              <div className="flex items-center gap-2 p-3 bg-decision-ajourne-bg text-decision-ajourne-text rounded-field text-caption font-medium">
                <XCircle size={18} />
                <span>La proposition a été renvoyée au directeur de thèse avec vos observations.</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 w-full pt-2">
              <Button
                variant="outline"
                onClick={handleRefuser}
                disabled={validated}
              >
                Refuser la proposition
              </Button>
              <Button
                variant="primary"
                onClick={handleValider}
                disabled={validated}
              >
                Valider et autoriser le jury
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar compliance check */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <div className="flex items-center gap-2 text-label text-app-text">
              <ShieldCheck size={18} className="text-status-soutenu-text" />
              <span>Contrôle d'éligibilité automatique</span>
            </div>
            <ul className="text-caption text-app-text-secondary flex flex-col gap-2.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-status-soutenu-text shrink-0" />
                <span>5 membres (Plage légale 4-8 respectée)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-status-soutenu-text shrink-0" />
                <span>Président de rang Professeur</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-status-soutenu-text shrink-0" />
                <span>2 rapporteurs titulaires de l'HDR</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-status-soutenu-text shrink-0" />
                <span>2 membres externes (40% d'externalité)</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}

