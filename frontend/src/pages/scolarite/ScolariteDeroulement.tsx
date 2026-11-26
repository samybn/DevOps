import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ArrowLeft, Upload, CheckCircle2, Award, FileText } from 'lucide-react';

export function ScolariteDeroulement() {
  const { id } = useParams();
  const [decision, setDecision] = useState<'admis' | 'corrections' | 'ajourne'>('admis');
  const [mention, setMention] = useState('Très Honorable avec Félicitations');
  const [pvUploaded, setPvUploaded] = useState(true);

  return (
    <>
      <div className="flex items-center gap-3">
        <Link to="/scolarite" className="text-app-text-secondary hover:text-app-text">
          <ArrowLeft size={20} />
        </Link>
        <span className="text-caption text-app-text-secondary">Retour au tableau de bord</span>
      </div>

      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Enregistrement des résultats · Soutenance DOC-2023-004{id || '1'}
          </span>
          <h1 className="font-serif text-h1 text-app-text">Procès-verbal de délibération</h1>
          <p className="text-body text-app-text-secondary">
            Candidat(e) : Amira Benali · Sujet : Optimisation des réseaux de capteurs pour la surveillance environnementale
          </p>
        </div>

        <StatusBadge status="soutenu" label="Séance Tenue" />
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-6">
            <h2 className="text-title text-app-text">Saisie du résultat délibéré par le jury</h2>

            {/* Decision selection */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-label text-app-text">Type de décision arrêtée</span>
              <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                {[
                  { id: 'admis', label: 'Admis', sub: 'Diplomation autorisée' },
                  { id: 'corrections', label: 'Corrections requises', sub: 'Manuscrit à réviser sous 3 mois' },
                  { id: 'ajourne', label: 'Ajourné', sub: 'Soutenance non validée' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDecision(item.id as any)}
                    className={`flex flex-col p-3 rounded-field border text-left transition-colors ${
                      decision === item.id
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

            {/* Mention selection if admis */}
            {decision === 'admis' && (
              <div className="flex flex-col gap-2 w-full">
                <label className="text-label text-app-text">Mention décernée</label>
                <select
                  value={mention}
                  onChange={(e) => setMention(e.target.value)}
                  className="w-full p-3 bg-app-surface rounded-field border border-app-border text-body-sm text-app-text outline-none focus:border-app-action"
                >
                  <option value="Très Honorable avec Félicitations">Très Honorable avec les Félicitations du Jury</option>
                  <option value="Très Honorable">Très Honorable</option>
                  <option value="Honorable">Honorable</option>
                </select>
              </div>
            )}

            {/* Upload PV scan */}
            <div className="flex flex-col gap-3 w-full">
              <span className="text-label text-app-text">Téléversement du PV signé de soutenance</span>
              <div className="flex items-center justify-between p-4 bg-app-nested rounded-field border border-app-border">
                <div className="flex items-center gap-3">
                  <FileText size={22} className="text-app-action" />
                  <div className="flex flex-col">
                    <span className="text-body-sm text-app-text font-medium">pv_soutenance_signe_benali.pdf</span>
                    <span className="text-caption text-status-soutenu-text">Signatures de tous les membres vérifiées</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" icon={<Upload size={14} />}>
                  Remplacer le scan
                </Button>
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            <div className="flex items-center justify-between w-full">
              <span className="text-caption text-app-text-secondary">
                L'enregistrement du PV clôture la séance et déclenche la notification au candidat.
              </span>
              <Button variant="primary">
                Enregistrer le verdict officiel
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <span className="text-label text-app-text">Vérification de présence</span>
            <div className="flex flex-col gap-2 text-caption text-app-text-secondary">
              <div className="flex items-center justify-between py-1 border-b border-app-border">
                <span>Pr. Omar Bouzid (Président)</span>
                <span className="text-status-soutenu-text font-medium">Présent</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-app-border">
                <span>Pr. F.Z. Mansouri (Rapporteur)</span>
                <span className="text-status-soutenu-text font-medium">Présente (Visio)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-app-border">
                <span>Dr. S. Rahmani (Rapporteur)</span>
                <span className="text-status-soutenu-text font-medium">Présent</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Pr. K. Haddad (Directeur)</span>
                <span className="text-status-soutenu-text font-medium">Présent</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

