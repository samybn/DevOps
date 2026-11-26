import { Link, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';
import { Users, FileText, ArrowLeft, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function DirecteurThese() {
  const { id } = useParams();

  return (
    <>
      <div className="flex items-center gap-3">
        <Link to="/directeur/doctorants" className="text-app-text-secondary hover:text-app-text">
          <ArrowLeft size={20} />
        </Link>
        <span className="text-caption text-app-text-secondary">Retour à la liste des doctorants</span>
      </div>

      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Dossier n° DOC-2023-004{id || '1'}
          </span>
          <h1 className="font-serif text-h1 text-app-text">Amira Benali</h1>
          <p className="text-body text-app-text-secondary">
            Optimisation des réseaux de capteurs pour la surveillance environnementale
          </p>
        </div>
        <StatusBadge status="valide" label="Jury validé" />
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          {/* Fiche de synthèse */}
          <Card className="gap-5">
            <h2 className="text-title text-app-text">Synthèse de la thèse</h2>
            <div className="grid grid-cols-2 gap-4 w-full text-body-sm">
              <div className="flex flex-col p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">Laboratoire</span>
                <span className="font-medium text-app-text">LRSI (Systèmes Intelligents)</span>
              </div>
              <div className="flex flex-col p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">Inscription initiale</span>
                <span className="font-medium text-app-text">Octobre 2023 (3e année)</span>
              </div>
              <div className="flex flex-col p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">Manuscrit actif</span>
                <span className="font-medium text-app-text">v2 (184 pages · SHA certifié)</span>
              </div>
              <div className="flex flex-col p-3 bg-app-nested rounded-field">
                <span className="text-tiny text-app-text-secondary">Date de soutenance prévue</span>
                <span className="font-medium text-app-text">18 novembre 2026 à 09:00</span>
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            {/* Workflow steps */}
            <div className="flex flex-col gap-3 w-full">
              <span className="text-label text-app-text">État d'avancement du cycle</span>
              <div className="flex items-center justify-between gap-2 overflow-x-auto py-1">
                {[
                  { step: '1. Dépôt', status: 'done', desc: 'Validé' },
                  { step: '2. Jury', status: 'done', desc: 'Validé' },
                  { step: '3. Rapports', status: 'done', desc: 'Favorables' },
                  { step: '4. Convocation', status: 'current', desc: 'En cours' },
                  { step: '5. Séance', status: 'pending', desc: 'À venir' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`flex flex-col p-3 rounded-field flex-1 text-center ${
                      s.status === 'done'
                        ? 'bg-decision-admis-bg text-decision-admis-text'
                        : s.status === 'current'
                        ? 'bg-status-valide-bg text-status-valide-text'
                        : 'bg-app-nested text-app-text-secondary'
                    }`}
                  >
                    <span className="text-caption font-semibold">{s.step}</span>
                    <span className="text-tiny mt-0.5">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Action cards */}
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <Card className="gap-3">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-app-action" />
                <h3 className="text-label text-app-text">Commission de soutenance</h3>
              </div>
              <p className="text-caption text-app-text-secondary">
                Consultez ou révisez la composition du jury et le contrôle d'éligibilité en temps réel.
              </p>
              <Link to={`/directeur/these/${id || '1'}/jury`} className="mt-2">
                <Button variant="outline" size="sm">
                  Voir la composition du jury →
                </Button>
              </Link>
            </Card>

            <Card className="gap-3">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-app-action" />
                <h3 className="text-label text-app-text">Manuscrit & Rapports</h3>
              </div>
              <p className="text-caption text-app-text-secondary">
                Téléchargez le manuscrit validé et les rapports d'expertise déposés par les rapporteurs.
              </p>
              <Button variant="outline" size="sm" icon={<Download size={14} />} className="mt-2">
                Télécharger le pack (PDF)
              </Button>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <div className="flex items-center gap-2 text-label text-app-text">
              <ShieldCheck size={18} className="text-status-soutenu-text" />
              <span>Conformité académique</span>
            </div>
            <ul className="text-caption text-app-text-secondary flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-status-soutenu-text" />
                <span>Article de rang A/B publié</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-status-soutenu-text" />
                <span>2 communications internationales</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-status-soutenu-text" />
                <span>Avis favorable du directeur émis</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}

