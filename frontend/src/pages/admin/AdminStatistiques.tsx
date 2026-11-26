import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BarChart3, Download, TrendingUp, Clock, CheckCircle2, Award } from 'lucide-react';

export function AdminStatistiques() {
  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,Annee,Doctorant,Specialite,Statut,Decision,Mention\n2026,Amira Benali,Informatique,Clos,Admis,Tres Honorable avec Felicitations\n2026,Yacine Meziane,Informatique,Convoque,En cours,-\n2026,Ines Boudiaf,Genie Civil,Valide,En attente,-";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "statistiques_soutenances_2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Indicateurs de performance
          </span>
          <h1 className="font-serif text-h1 text-app-text">Statistiques académiques</h1>
          <p className="text-body text-app-text-secondary">
            Mesure des délais de traitement, taux de diplomation et répartition des décisions du conseil scientifique.
          </p>
        </div>

        <Button variant="outline" icon={<Download size={16} />} onClick={handleExportCSV}>
          Exporter en CSV
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          { label: 'Délai moyen d’expertise', value: '24 j.', desc: 'Objectif réglementaire : 30 j.', icon: <Clock size={18} /> },
          { label: 'Taux de réussite direct', value: '92%', desc: 'Admis sans révision lourde', icon: <TrendingUp size={18} /> },
          { label: 'Soutenances (Année 2026)', value: '48', desc: '+15% par rapport à 2025', icon: <Award size={18} /> },
          { label: 'Délai Dépôt → Soutenance', value: '46 j.', desc: 'Fluidité optimale', icon: <CheckCircle2 size={18} /> },
        ].map((k, i) => (
          <Card key={i} className="p-5 gap-2">
            <div className="flex items-center justify-between text-app-text-secondary">
              <span className="text-caption">{k.label}</span>
              <span className="text-app-action">{k.icon}</span>
            </div>
            <span className="font-serif text-display text-app-text leading-none">{k.value}</span>
            <span className="text-tiny text-status-soutenu-text font-medium">{k.desc}</span>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        {/* Répartition des décisions */}
        <Card className="gap-5">
          <h2 className="text-title text-app-text">Répartition des décisions de jury</h2>
          <div className="flex flex-col gap-3 w-full">
            {[
              { label: 'Admis (Très Honorable avec Félicitations)', pct: 45, count: '22 dossiers', color: 'bg-decision-admis-bg text-decision-admis-text' },
              { label: 'Admis (Très Honorable)', pct: 47, count: '23 dossiers', color: 'bg-status-valide-bg text-status-valide-text' },
              { label: 'Corrections requises (sous 3 mois)', pct: 8, count: '3 dossiers', color: 'bg-peach-bg text-peach-text' },
              { label: 'Ajourné', pct: 0, count: '0 dossier', color: 'bg-decision-ajourne-bg text-decision-ajourne-text' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1.5 p-3 rounded-field bg-app-nested">
                <div className="flex items-center justify-between text-caption">
                  <span className="font-medium text-app-text">{item.label}</span>
                  <span className="text-app-text-secondary font-semibold">{item.count} ({item.pct}%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-app-border overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Délais moyens par étape */}
        <Card className="gap-5">
          <h2 className="text-title text-app-text">Délais moyens par étape du workflow</h2>
          <div className="flex flex-col gap-4 w-full text-caption">
            {[
              { etape: 'Dépôt manuscrit → Validation du jury', duree: '8 jours ouvrés', statut: 'Rapide' },
              { etape: 'Instruction des rapports d’expertise', duree: '24 jours ouvrés', statut: 'Conforme' },
              { etape: 'Émission de convocation → Séancé', duree: '21 jours calendaires', statut: 'Conforme' },
              { etape: 'Séance → Délivrance attestation', duree: '3 jours ouvrés', statut: 'Optimal' },
            ].map((step, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-app-border last:border-0">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">{step.etape}</span>
                  <span className="text-tiny text-app-text-secondary">Moyenne observée</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-app-text">{step.duree}</strong>
                  <span className="text-tiny px-2 py-0.5 rounded-pill bg-status-soutenu-bg text-status-soutenu-text">
                    {step.statut}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

