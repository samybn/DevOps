import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { UserCog, Plus, Search, Shield, CheckCircle2 } from 'lucide-react';

interface UserRecord {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  grade?: string;
  etablissement: string;
  actif: boolean;
}

const usersList: UserRecord[] = [
  {
    id: '1',
    nom: 'Benali',
    prenom: 'Amira',
    email: 'amira.benali@univ-demo.dz',
    role: 'Doctorant',
    etablissement: 'Université de Démonstration',
    actif: true,
  },
  {
    id: '2',
    nom: 'Haddad',
    prenom: 'Karim',
    email: 'k.haddad@univ-demo.dz',
    role: 'Directeur de thèse',
    grade: 'Professeur',
    etablissement: 'Université de Démonstration',
    actif: true,
  },
  {
    id: '3',
    nom: 'Mansouri',
    prenom: 'Fatima Zohra',
    email: 'fz.mansouri@univ-alger1.dz',
    role: 'Membre de jury',
    grade: 'Professeur (HDR)',
    etablissement: 'Université d’Alger 1',
    actif: true,
  },
  {
    id: '4',
    nom: 'Bouzid',
    prenom: 'Omar',
    email: 'o.bouzid@univ-demo.dz',
    role: 'Responsable de département',
    grade: 'Professeur',
    etablissement: 'Université de Démonstration',
    actif: true,
  },
  {
    id: '5',
    nom: 'Guerfi',
    prenom: 'Samir',
    email: 's.guerfi@univ-demo.dz',
    role: 'Scolarité',
    etablissement: 'Université de Démonstration',
    actif: true,
  },
  {
    id: '6',
    nom: 'Admin',
    prenom: 'Système',
    email: 'admin@univ-demo.dz',
    role: 'Administrateur',
    etablissement: 'Université de Démonstration',
    actif: true,
  },
];

export function AdminUtilisateurs() {
  const [search, setSearch] = useState('');

  const filtered = usersList.filter((u) =>
    `${u.nom} ${u.prenom} ${u.email} ${u.role}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Administration du portail
          </span>
          <h1 className="font-serif text-h1 text-app-text">Comptes et droits d'accès</h1>
          <p className="text-body text-app-text-secondary">
            Gestion des comptes institutionnels, affectation des rôles applicatifs et accréditations.
          </p>
        </div>

        <Button variant="primary" icon={<Plus size={16} />}>
          Créer un compte
        </Button>
      </div>

      <Card className="gap-5">
        <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <div className="flex items-center gap-3">
            <UserCog size={22} className="text-app-action" />
            <h2 className="text-title text-app-text">Utilisateurs enregistrés ({usersList.length})</h2>
          </div>

          <div className="flex items-center gap-2 p-2 bg-app-nested rounded-field">
            <Search size={16} className="text-app-text-secondary" />
            <input
              type="search"
              placeholder="Rechercher par nom, email, rôle..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-caption text-app-text placeholder:text-app-text-secondary w-64"
            />
          </div>
        </div>

        <div className="flex flex-col w-full divide-y divide-app-border text-body-sm">
          {filtered.map((u) => (
            <div key={u.id} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 gap-4 max-sm:flex-col max-sm:items-start">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-app-text">
                    {u.prenom} {u.nom}
                  </span>
                  {u.grade && (
                    <span className="text-tiny px-2 py-0.5 rounded-pill bg-app-nested text-app-text-secondary">
                      {u.grade}
                    </span>
                  )}
                  <span className="text-tiny px-2 py-0.5 rounded-pill bg-status-valide-bg text-status-valide-text font-medium">
                    {u.role}
                  </span>
                </div>
                <span className="text-caption text-app-text-secondary">
                  {u.email} · {u.etablissement}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-tiny text-status-soutenu-text bg-status-soutenu-bg px-2.5 py-1 rounded-pill font-medium">
                  Actif
                </span>
                <Button variant="outline" size="sm">
                  Modifier les droits
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

