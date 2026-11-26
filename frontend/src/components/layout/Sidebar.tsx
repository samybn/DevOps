import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  LayoutDashboard,
  FileText,
  Upload,
  Users,
  CheckCircle,
  Award,
  Calendar,
  HelpCircle,
  Shield,
  GraduationCap,
  ClipboardCheck,
  Eye,
  PenLine,
  BookOpen,
  CalendarDays,
  Mail,
  Gavel,
  Archive,
  UserCog,
  Scale,
  Building2,
  Activity,
  BarChart3,
} from 'lucide-react';

type Role = 'doctorant' | 'directeur' | 'departement' | 'jury' | 'scolarite' | 'admin';

interface NavItem {
  label: string;
  icon: ReactNode;
  to: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigationByRole: Record<Role, { roleLabel: string; sections: NavSection[] }> = {
  doctorant: {
    roleLabel: 'DOCTORANT',
    sections: [
      {
        title: '',
        items: [
          { label: 'Tableau de bord', icon: <LayoutDashboard size={20} />, to: '/doctorant' },
          { label: 'Ma thèse', icon: <FileText size={20} />, to: '/doctorant/these' },
          { label: 'Dépôt du manuscrit', icon: <Upload size={20} />, to: '/doctorant/manuscrit' },
          { label: 'Jury et convocation', icon: <Users size={20} />, to: '/doctorant/jury' },
          { label: 'Décision et corrections', icon: <CheckCircle size={20} />, to: '/doctorant/decision' },
          { label: 'Attestation', icon: <Award size={20} />, to: '/doctorant/attestation' },
        ],
      },
    ],
  },
  directeur: {
    roleLabel: 'DIRECTEUR DE THÈSE',
    sections: [
      {
        title: '',
        items: [
          { label: 'Mes doctorants', icon: <GraduationCap size={20} />, to: '/directeur/doctorants' },
        ],
      },
    ],
  },
  departement: {
    roleLabel: 'RESPONSABLE DÉPARTEMENT',
    sections: [
      {
        title: '',
        items: [
          { label: 'Validations', icon: <ClipboardCheck size={20} />, to: '/departement/validations' },
        ],
      },
    ],
  },
  jury: {
    roleLabel: 'MEMBRE DE JURY',
    sections: [
      {
        title: '',
        items: [
          { label: 'Mes thèses', icon: <BookOpen size={20} />, to: '/jury/theses' },
        ],
      },
    ],
  },
  scolarite: {
    roleLabel: 'SCOLARITÉ',
    sections: [
      {
        title: '',
        items: [
          { label: 'Tableau de bord', icon: <LayoutDashboard size={20} />, to: '/scolarite' },
          { label: 'Planification', icon: <CalendarDays size={20} />, to: '/scolarite/planification' },
          { label: 'Convocations', icon: <Mail size={20} />, to: '/scolarite/convocations' },
          { label: 'Décisions', icon: <Gavel size={20} />, to: '/scolarite/decisions' },
          { label: 'Archives', icon: <Archive size={20} />, to: '/scolarite/archives' },
        ],
      },
    ],
  },
  admin: {
    roleLabel: 'ADMINISTRATEUR',
    sections: [
      {
        title: '',
        items: [
          { label: 'Utilisateurs', icon: <UserCog size={20} />, to: '/admin/utilisateurs' },
          { label: 'Règles du jury', icon: <Scale size={20} />, to: '/admin/regles-jury' },
          { label: 'Salles', icon: <Building2 size={20} />, to: '/admin/salles' },
          { label: 'Supervision', icon: <Activity size={20} />, to: '/admin/supervision' },
          { label: 'Statistiques', icon: <BarChart3 size={20} />, to: '/admin/statistiques' },
        ],
      },
    ],
  },
};

const secondaryItems: NavItem[] = [
  { label: 'Agenda public', icon: <Calendar size={20} />, to: '/agenda' },
  { label: 'Aide et documentation', icon: <HelpCircle size={20} />, to: '#' },
];

interface SidebarProps {
  role: Role;
}

export function Sidebar({ role }: SidebarProps) {
  const location = useLocation();
  const nav = navigationByRole[role];

  return (
    <aside className="flex flex-col w-60 min-h-screen shrink-0 gap-8 px-4 py-8 bg-app-surface border-r border-app-border">
      {/* Logo */}
      <header className="flex items-center gap-3">
        <div className="w-7 h-7 flex items-center justify-center">
          <GraduationCap size={24} className="text-app-text" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-serif text-h3 text-app-text leading-tight">Soutenances</span>
          <span className="text-caption text-app-text-secondary">Université de Démonstration</span>
        </div>
      </header>

      {/* Role label */}
      <span className="text-caption text-app-text-secondary tracking-wide">{nav.roleLabel}</span>

      {/* Primary nav */}
      {nav.sections.map((section) => (
        <nav key={section.title || 'main'} className="flex flex-col gap-1" aria-label={`Navigation ${nav.roleLabel.toLowerCase()}`}>
          {section.items.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-11 items-center gap-3 px-3 py-2.5 rounded-field text-body-sm transition-colors ${
                  isActive
                    ? 'bg-app-nested text-app-text font-medium'
                    : 'text-app-text hover:bg-app-nested'
                }`}
              >
                <span className="w-5 h-5 shrink-0">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      ))}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Secondary nav */}
      <div className="border-t border-app-border pt-4 flex flex-col gap-3">
        {secondaryItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="flex items-center gap-3 text-label text-app-text hover:text-app-link transition-colors"
          >
            <span className="flex w-10 h-10 items-center justify-center bg-app-nested rounded-field">
              <span className="w-5 h-5">{item.icon}</span>
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-2">
        <span className="text-caption text-app-text-secondary">Année universitaire 2026–2027</span>
        <Link
          to="#"
          className="flex items-center gap-3"
        >
          <span className="flex w-10 h-10 items-center justify-center bg-app-nested rounded-field">
            <Shield size={20} className="text-app-text" />
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="text-label text-app-text">Espace sécurisé</span>
            <span className="text-caption text-app-text-secondary">Accès institutionnel</span>
          </span>
        </Link>
      </div>
    </aside>
  );
}

