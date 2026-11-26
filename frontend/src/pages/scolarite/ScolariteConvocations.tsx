import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Mail, Send, CheckCircle2, Clock, Download } from 'lucide-react';

interface ConvocationGroup {
  soutenanceId: string;
  doctorant: string;
  date: string;
  heure: string;
  salle: string;
  destinatairesCount: number;
  statutEnvoi: 'envoyee' | 'a_envoyer';
  destinataires: { nom: string; role: string; email: string; statut: 'envoyee' | 'a_envoyer' }[];
}

const convocationsData: ConvocationGroup[] = [
  {
    soutenanceId: '1',
    doctorant: 'Amira Benali',
    date: '18 nov. 2026',
    heure: '09:00',
    salle: 'Salle des thèses',
    destinatairesCount: 6,
    statutEnvoi: 'envoyee',
    destinataires: [
      { nom: 'Amira Benali', role: 'Candidate', email: 'amira.benali@univ-demo.dz', statut: 'envoyee' },
      { nom: 'Pr. Omar Bouzid', role: 'Président', email: 'o.bouzid@univ-demo.dz', statut: 'envoyee' },
      { nom: 'Pr. Fatima Zohra Mansouri', role: 'Rapporteur', email: 'fz.mansouri@univ-alger1.dz', statut: 'envoyee' },
      { nom: 'Dr. Salim Rahmani', role: 'Rapporteur', email: 's.rahmani@univ-constantine2.dz', statut: 'envoyee' },
      { nom: 'Pr. Karim Haddad', role: 'Directeur', email: 'k.haddad@univ-demo.dz', statut: 'envoyee' },
      { nom: 'Dr. Meriem Cherif', role: 'Examinatrice', email: 'm.cherif@univ-demo.dz', statut: 'envoyee' },
    ],
  },
  {
    soutenanceId: '2',
    doctorant: 'Yacine Meziane',
    date: '24 nov. 2026',
    heure: '14:00',
    salle: 'Amphi A',
    destinatairesCount: 7,
    statutEnvoi: 'a_envoyer',
    destinataires: [
      { nom: 'Yacine Meziane', role: 'Candidat', email: 'y.meziane@univ-demo.dz', statut: 'a_envoyer' },
      { nom: 'Pr. Nadia Belkacem', role: 'Directrice', email: 'n.belkacem@univ-demo.dz', statut: 'a_envoyer' },
    ],
  },
];

export function ScolariteConvocations() {
  const [data, setData] = useState(convocationsData);

  const handleSendBatch = (id: string) => {
    setData((prev) =>
      prev.map((item) =>
        item.soutenanceId === id ? { ...item, statutEnvoi: 'envoyee' } : item
      )
    );
  };

  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Correspondance officielle
          </span>
          <h1 className="font-serif text-h1 text-app-text">Convocations aux soutenances</h1>
          <p className="text-body text-app-text-secondary">
            Génération et diffusion des convocations formelles pour les membres du jury et les candidats.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {data.map((c) => (
          <Card key={c.soutenanceId} className="gap-5">
            <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-title text-app-text">Soutenance : {c.doctorant}</span>
                  <span className="text-caption text-app-text-secondary">
                    · {c.date} à {c.heure} ({c.salle})
                  </span>
                </div>
                <span className="text-caption text-app-text-secondary">
                  {c.destinatairesCount} destinataires officiels (Candidat, Direction, Membres du jury)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <StatusBadge
                  status={c.statutEnvoi === 'envoyee' ? 'valide' : 'convoque'}
                  label={c.statutEnvoi === 'envoyee' ? 'Convocations envoyées' : 'À envoyer'}
                />
                {c.statutEnvoi === 'a_envoyer' ? (
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<Send size={14} />}
                    onClick={() => handleSendBatch(c.soutenanceId)}
                  >
                    Envoyer toutes les convocations
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" icon={<Download size={14} />}>
                    Télécharger les lettres (PDF)
                  </Button>
                )}
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            <div className="flex flex-col gap-2 w-full">
              <span className="text-label text-app-text">Liste de diffusion des convocations</span>
              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                {c.destinataires.map((d, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-app-nested rounded-field text-caption">
                    <div className="flex flex-col">
                      <span className="font-medium text-app-text">{d.nom} ({d.role})</span>
                      <span className="text-tiny text-app-text-secondary">{d.email}</span>
                    </div>
                    <span className={`text-tiny px-2 py-0.5 rounded-pill ${
                      c.statutEnvoi === 'envoyee' ? 'bg-status-soutenu-bg text-status-soutenu-text' : 'bg-peach-bg text-peach-text'
                    }`}>
                      {c.statutEnvoi === 'envoyee' ? 'Distribué' : 'En attente'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

