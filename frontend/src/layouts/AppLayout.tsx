import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';

type Role = 'doctorant' | 'directeur' | 'departement' | 'jury' | 'scolarite' | 'admin';

const roleBreadcrumbs: Record<Role, string> = {
  doctorant: 'Doctorant',
  directeur: 'Directeur de thèse',
  departement: 'Responsable de département',
  jury: 'Membre de jury',
  scolarite: 'Scolarité',
  admin: 'Administration',
};

interface AppLayoutProps {
  role: Role;
}

export function AppLayout({ role }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-app-bg">
      <Sidebar role={role} />
      <div className="flex flex-col flex-1 min-w-0">
        <Header breadcrumb={roleBreadcrumbs[role]} />
        <div className="flex flex-col flex-1 p-8 gap-6">
          <Outlet />
        </div>
        <footer className="flex items-center justify-between px-8 py-4">
          <span className="text-caption text-app-text-secondary">Université de Démonstration</span>
          <span className="text-caption text-app-text-secondary">Confidentialité · Assistance</span>
        </footer>
      </div>
    </div>
  );
}

