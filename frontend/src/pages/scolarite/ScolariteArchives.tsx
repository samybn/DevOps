import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Archive, Download, Search, FileCheck, CheckCircle } from 'lucide-react';

interface ArchiveItem {
  id: string;
  doctorant: string;
  sujet: string;
  directeur: string;
  dateCloture: string;
  ceristArchive: boolean;
  taillePack: string;
}

const archivesData: ArchiveItem[] = [
  {
    id: '1',
    doctorant: 'Amira Benali',
    sujet: 'Optimisation des réseaux de capteurs pour la surveillance environnementale',
    directeur: 'Pr. Karim Haddad',
    dateCloture: '21 novembre 2026',
    ceristArchive: true,
    taillePack: '28.4 Mo',
  },
  {
    id: '0',
    doctorant: 'Mourad Zidane',
    sujet: 'Cryptographie post-quantique sur architectures matérielles dédiées',
    directeur: 'Pr. Mohamed Touati',
    dateCloture: '15 juin 2026',
    ceristArchive: true,
    taillePack: '34.1 Mo',
  },
];

export function ScolariteArchives() {
  const [search, setSearch] = useState('');

  const filtered = archivesData.filter((a) =>
    `${a.doctorant} ${a.sujet} ${a.directeur}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Conservation & Dépôt légal
          </span>
          <h1 className="font-serif text-h1 text-app-text">Archives numériques des thèses</h1>
          <p className="text-body text-app-text-secondary">
            Consultez les dossiers complets des soutenances clôturées, certifiées et versées au dépôt légal universitaire.
          </p>
        </div>
      </div>

      <Card className="gap-5">
        <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <div className="flex items-center gap-3">
            <Archive size={22} className="text-app-action" />
            <h2 className="text-title text-app-text">Fonds des thèses archivées ({archivesData.length})</h2>
          </div>

          <div className="flex items-center gap-2 p-2 bg-app-nested rounded-field">
            <Search size={16} className="text-app-text-secondary" />
            <input
              type="search"
              placeholder="Rechercher une thèse archivée..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-caption text-app-text placeholder:text-app-text-secondary w-64"
            />
          </div>
        </div>

        <div className="flex flex-col w-full divide-y divide-app-border text-body-sm">
          {filtered.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4 max-sm:flex-col max-sm:items-start">
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-label text-app-text font-medium">{item.doctorant}</span>
                  <span className="text-caption text-app-text-secondary">· Direction : {item.directeur}</span>
                  <span className="text-tiny px-2 py-0.5 rounded-pill bg-status-soutenu-bg text-status-soutenu-text font-medium">
                    CERIST archivé
                  </span>
                </div>
                <p className="text-caption text-app-text-secondary line-clamp-1">{item.sujet}</p>
                <span className="text-tiny text-app-text-secondary">
                  Dossier clos le {item.dateCloture} · Archive scellée ({item.taillePack})
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <StatusBadge status="clos" label="Clos" />
                <Button variant="outline" size="sm" icon={<Download size={14} />}>
                  Télécharger le pack complet (ZIP)
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

