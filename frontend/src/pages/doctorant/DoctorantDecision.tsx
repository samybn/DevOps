import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';
import { Award, CheckCircle, FileText, Download, Calendar, ShieldCheck } from 'lucide-react';

export function DoctorantDecision() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-app-text-secondary tracking-wide uppercase">
          Résultats de la délibération
        </span>
        <h1 className="font-serif text-h1 text-app-text">Décision et procès-verbal</h1>
        <p className="text-body text-app-text-secondary">
          Consultez la décision officielle rendue par le jury de soutenance à l'issue de la délibération à huis clos.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Main decision card */}
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-6">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-1">
                <span className="text-caption text-app-text-secondary">Verdict du jury</span>
                <h2 className="font-serif text-h2 text-app-text">Candidat Admis au grade de Docteur</h2>
              </div>
              <StatusBadge status="admis" label="Admis" />
            </div>

            {/* Mention pill */}
            <div className="flex items-center gap-3 p-4 bg-decision-admis-bg rounded-field w-full">
              <Award size={24} className="text-decision-admis-text shrink-0" />
              <div className="flex flex-col">
                <span className="text-caption text-decision-admis-text font-medium uppercase tracking-wide">
                  Mention attribuée
                </span>
                <span className="text-label text-decision-admis-text font-semibold">
                  Très Honorable avec les Félicitations du Jury
                </span>
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            {/* Procès-verbal details */}
            <div className="flex flex-col gap-3 w-full">
              <span className="text-label text-app-text">Procès-verbal de soutenance</span>
              <p className="text-body-sm text-app-text-secondary leading-relaxed">
                Le jury réuni le 18 novembre 2026, après avoir entendu la candidate en son exposé et dans ses réponses aux questions, a délibéré conformément aux textes en vigueur. Il souligne l'excellente qualité méthodologique du manuscrit et l'originalité des contributions scientifiques apportées dans le domaine de la surveillance environnementale distribuée.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full pt-2 max-sm:grid-cols-1">
              <div className="flex flex-col gap-1 p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">Président de séance</span>
                <span className="text-label text-app-text">Pr. Omar Bouzid</span>
                <span className="text-tiny text-status-soutenu-text">Signature électronique validée</span>
              </div>

              <div className="flex flex-col gap-1 p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">Statut des corrections</span>
                <span className="text-label text-app-text">Corrections mineures</span>
                <span className="text-tiny text-status-soutenu-text">Dépôt validé le 20 nov. 2026</span>
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-3">
              <span className="text-caption text-app-text-secondary">
                Document d'archive certifié conforme et scellé.
              </span>
              <Button variant="outline" icon={<Download size={16} />}>
                Télécharger le PV signé (PDF)
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <div className="flex items-center gap-2 text-label text-app-text">
              <ShieldCheck size={18} className="text-app-action" />
              <span>Effets juridiques</span>
            </div>
            <p className="text-caption text-app-text-secondary leading-relaxed">
              La décision de délibération confère le titre de Docteur de plein droit à compter de la date de la séance, sous réserve du dépôt régulier du manuscrit définitif archivé.
            </p>
          </Card>

          <Card className="gap-3 bg-status-valide-bg border-status-valide-bg">
            <div className="flex items-center gap-2 text-label text-status-valide-text">
              <CheckCircle size={18} />
              <span>Diplomation en cours</span>
            </div>
            <p className="text-body-sm text-status-valide-text">
              Votre attestation provisoire de succès est d'ores et déjà disponible dans l'onglet dédié.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

