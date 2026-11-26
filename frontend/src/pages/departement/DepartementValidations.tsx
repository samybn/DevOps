import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';
import { ClipboardCheck, Search, Filter } from 'lucide-react';

interface JuryValidationItem {
  id: string;
  doctorant: string;
  directeur: string;
  sujet: string;
  dateSoumission: string;
  membresCount: number;
  statut: 'propose' | 'valide';
  statutLabel: string;
  conforme: boolean;
}

const jurySubmissions: JuryValidationItem[] = [
  {
    id: '101',
    doctorant: 'Amira Benali',
    directeur: 'Pr. Karim Haddad',
    sujet: 'Optimisation des réseaux de capteurs pour la surveillance environnementale',
    dateSoumission: '28 octobre 2026',
    membresCount: 5,
    statut: 'valide',
    statutLabel: 'Validé',
    conforme: true,
  },
  {
    id: '102',
    doctorant: 'Yacine Meziane',
    directeur: 'Pr. Nadia Belkacem',
    sujet: 'Apprentissage profond pour le diagnostic des maladies rétiniennes',
    dateSoumission: '29 octobre 2026',
    membresCount: 6,
    statut: 'valide',
    statutLabel: 'Validé',
    conforme: true,
  },
  {
    id: '103',
    doctorant: 'Inès Boudiaf',
    directeur: 'Pr. Ahmed Mansouri',
    sujet: 'Valorisation des ressources hydriques en milieu semi-aride',
    dateSoumission: '31 octobre 2026',
    membresCount: 5,
    statut: 'propose',
    statutLabel: 'En attente d’approbation',
    conforme: true,
  },
];

export function DepartementValidations() {
  const [filter, setFilter] = useState<'all' | 'pending'>('all');

  const displayed = filter === 'pending'
    ? jurySubmissions.filter((j) => j.statut === 'propose')
    : jurySubmissions;

  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Espace Département Informatique
          </span>
          <h1 className="font-serif text-h1 text-app-text">Validation des jurys de thèse</h1>
          <p className="text-body text-app-text-secondary">
            Examinez la conformité des commissions de soutenance soumises par les directeurs de thèse et délivrez l'autorisation départementale.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={filter === 'all' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            Tous ({jurySubmissions.length})
          </Button>
          <Button
            variant={filter === 'pending' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter('pending')}
          >
            À valider ({jurySubmissions.filter((j) => j.statut === 'propose').length})
          </Button>
        </div>
      </div>

      <Card className="gap-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <ClipboardCheck size={22} className="text-app-action" />
            <h2 className="text-title text-app-text">Propositions soumises ({displayed.length})</h2>
          </div>
        </div>

        <div className="flex flex-col w-full divide-y divide-app-border">
          {displayed.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4 max-sm:flex-col max-sm:items-start">
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-label text-app-text font-medium">{item.doctorant}</span>
                  <span className="text-tiny text-app-text-secondary">
                    Direction : {item.directeur}
                  </span>
                  <span className="text-tiny px-2 py-0.5 rounded-pill bg-app-nested text-app-text-secondary">
                    {item.membresCount} membres
                  </span>
                </div>
                <p className="text-caption text-app-text-secondary line-clamp-1">
                  {item.sujet}
                </p>
                <span className="text-tiny text-app-text-secondary">
                  Soumis le {item.dateSoumission}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <StatusBadge status={item.statut} label={item.statutLabel} />
                <Link to={`/departement/validations/${item.id}`}>
                  <Button variant="outline" size="sm">
                    Examiner le jury →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

