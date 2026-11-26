import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, CheckCircle2, FileText, Upload, Send, AlertTriangle } from 'lucide-react';

export function JuryRapport() {
  const { id } = useParams();
  const [avis, setAvis] = useState<'favorable' | 'reserves' | 'defavorable'>('favorable');
  const [appreciation, setAppreciation] = useState(
    "Le travail présenté par la candidate démontre une excellente maîtrise du sujet. La démarche expérimentale est rigoureuse et les résultats obtenus sont appuyés par une publication de rang A dans une revue internationale reconnue. J'émets un avis très favorable à la soutenance de cette thèse."
  );
  const [submitted, setSubmitted] = useState(true);

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
            Rapport d'expertise préalable
          </span>
          <h1 className="font-serif text-h1 text-app-text">Avis de soutenance</h1>
          <p className="text-body text-app-text-secondary">
            Candidat(e) : Amira Benali · Sujet : Optimisation des réseaux de capteurs pour la surveillance environnementale
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-6">
            <h2 className="text-title text-app-text">Formulaire d'évaluation réglementaire</h2>

            {/* Avis buttons */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-label text-app-text">Avis global du rapporteur</span>
              <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                {[
                  { id: 'favorable', label: 'Avis Favorable', sub: 'Autorise la soutenance sans réserve', color: 'border-status-soutenu-text text-status-soutenu-text' },
                  { id: 'reserves', label: 'Avis avec réserves', sub: 'Corrections préalables requises', color: 'border-peach-text text-peach-text' },
                  { id: 'defavorable', label: 'Avis Défavorable', sub: 'Refus de soutenance motivé', color: 'border-decision-ajourne-text text-decision-ajourne-text' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAvis(item.id as any)}
                    className={`flex flex-col p-3 rounded-field border text-left transition-colors ${
                      avis === item.id
                        ? 'bg-app-nested border-app-action'
                        : 'bg-app-surface border-app-border hover:bg-app-nested/50'
                    }`}
                  >
                    <span className="text-label text-app-text font-medium">{item.label}</span>
                    <span className="text-tiny text-app-text-secondary mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Appreciation area */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="appreciation-text" className="text-label text-app-text">
                Appréciation détaillée et analyse critique des travaux
              </label>
              <textarea
                id="appreciation-text"
                rows={8}
                value={appreciation}
                onChange={(e) => setAppreciation(e.target.value)}
                className="w-full p-4 rounded-field border border-app-border bg-app-surface text-body-sm text-app-text outline-none focus:border-app-action leading-relaxed resize-none"
              />
            </div>

            {/* Upload signed report optional */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-label text-app-text">Rapport signé (Document PDF joint)</span>
              <div className="flex items-center justify-between p-3 rounded-field bg-app-nested border border-app-border">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-app-action" />
                  <span className="text-body-sm text-app-text">rapport_expertise_benali_signe.pdf</span>
                  <span className="text-tiny text-status-soutenu-text">(Validé)</span>
                </div>
                <Button variant="outline" size="sm">
                  Remplacer le PDF
                </Button>
              </div>
            </div>

            {submitted && (
              <div className="flex items-center gap-2 p-3 bg-decision-admis-bg text-decision-admis-text rounded-field text-caption font-medium">
                <CheckCircle2 size={18} />
                <span>Votre rapport a été formellement déposé et notifié à la scolarité et au directeur de thèse.</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 w-full pt-2">
              <Button variant="primary" icon={<Send size={16} />} onClick={() => setSubmitted(true)}>
                Enregistrer et signer le rapport
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <span className="text-label text-app-text">Délais réglementaires</span>
            <p className="text-caption text-app-text-secondary leading-relaxed">
              Le rapport d'expertise doit être remis au plus tard 3 semaines avant la date envisagée de soutenance pour permettre la délivrance des convocations.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

