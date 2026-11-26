import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Activity, RefreshCw, CheckCircle2, AlertTriangle, ShieldCheck, Database, Server } from 'lucide-react';

interface JobRunRecord {
  id: string;
  nom: string;
  planification: string;
  derniereExec: string;
  duree: string;
  statut: 'succes' | 'echec';
  details: string;
}

const jobsList: JobRunRecord[] = [
  {
    id: '1',
    nom: 'rappels-echeance',
    planification: 'Quotidien à 06:00 UTC',
    derniereExec: 'Aujourd’hui à 06:00',
    duree: '1.24 s',
    statut: 'succes',
    details: '3 rappels de rapports envoyés, 1 alerte soutenance dans 48h',
  },
  {
    id: '2',
    nom: 'envoi-convocations',
    planification: 'Toutes les 15 minutes',
    derniereExec: 'Il y a 8 min',
    duree: '450 ms',
    statut: 'succes',
    details: '0 convocation en file d’attente',
  },
  {
    id: '3',
    nom: 'levee-embargo',
    planification: 'Quotidien à 01:00 UTC',
    derniereExec: 'Aujourd’hui à 01:00',
    duree: '210 ms',
    statut: 'succes',
    details: '0 manuscrit à lever',
  },
  {
    id: '4',
    nom: 'sauvegarde',
    planification: 'Quotidien à 03:00 UTC',
    derniereExec: 'Aujourd’hui à 03:00',
    duree: '14.8 s',
    statut: 'succes',
    details: 'Dump PostgreSQL (42 Mo) + S3 R2 sync (1.4 Go) chiffré AES-256',
  },
];

export function AdminSupervision() {
  const [runningJob, setRunningJob] = useState<string | null>(null);

  const handleRerun = (id: string) => {
    setRunningJob(id);
    setTimeout(() => {
      setRunningJob(null);
    }, 1500);
  };

  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Observabilité & Tâches d'arrière-plan
          </span>
          <h1 className="font-serif text-h1 text-app-text">Supervision et santé du système</h1>
          <p className="text-body text-app-text-secondary">
            Suivi des cron jobs Render, état du worker de messagerie, journalisation des exécutions et intégrité des sauvegardes.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-decision-admis-bg text-decision-admis-text rounded-pill text-caption font-medium">
            <span className="w-2 h-2 rounded-full bg-status-soutenu-text animate-pulse" />
            Worker Render : Opérationnel (/health 200 OK)
          </div>
        </div>
      </div>

      {/* System health metrics */}
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          { label: 'Disponibilité globale', value: '99.98%', desc: 'Derniers 30 jours', icon: <Server size={18} /> },
          { label: 'Tâches exécutées (24h)', value: '98', desc: '100% de succès', icon: <Activity size={18} /> },
          { label: 'Dernière sauvegarde', value: '03:00', desc: 'R2 Cloudflare chiffré', icon: <Database size={18} /> },
          { label: 'File d’e-mails Resend', value: '0', desc: 'En attente', icon: <ShieldCheck size={18} /> },
        ].map((m, i) => (
          <Card key={i} className="p-5 gap-2">
            <div className="flex items-center justify-between text-app-text-secondary">
              <span className="text-caption">{m.label}</span>
              <span className="text-app-action">{m.icon}</span>
            </div>
            <span className="font-serif text-display text-app-text leading-none">{m.value}</span>
            <span className="text-tiny text-status-soutenu-text font-medium">{m.desc}</span>
          </Card>
        ))}
      </div>

      {/* Scheduled jobs table */}
      <Card className="gap-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Activity size={22} className="text-app-action" />
            <h2 className="text-title text-app-text">Tâches planifiées (Worker Node/TS)</h2>
          </div>
        </div>

        <div className="flex flex-col w-full divide-y divide-app-border text-body-sm">
          {jobsList.map((job) => (
            <div key={job.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4 max-sm:flex-col max-sm:items-start">
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-label text-app-text font-semibold">{job.nom}</span>
                  <span className="text-tiny px-2 py-0.5 rounded-pill bg-app-nested text-app-text-secondary">
                    {job.planification}
                  </span>
                </div>
                <p className="text-caption text-app-text-secondary">{job.details}</p>
                <span className="text-tiny text-app-text-secondary">
                  Dernier run : {job.derniereExec} · Durée : {job.duree}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-tiny text-status-soutenu-text bg-status-soutenu-bg px-2.5 py-1 rounded-pill font-medium">
                  Succès
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<RefreshCw size={14} className={runningJob === job.id ? 'animate-spin' : ''} />}
                  onClick={() => handleRerun(job.id)}
                  disabled={runningJob === job.id}
                >
                  {runningJob === job.id ? 'Exécution...' : 'Relancer'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

