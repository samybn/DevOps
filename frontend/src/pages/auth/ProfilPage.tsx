import { User, Bell, Globe, Palette } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';

export function ProfilPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-app-text-secondary tracking-wide">MON COMPTE</span>
        <h1 className="font-serif text-h1 text-app-text">Profil</h1>
        <p className="text-body text-app-text-secondary">
          Gérez vos informations personnelles et vos préférences.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        <Card>
          <div className="flex items-center gap-4 w-full">
            <Avatar initials="AB" size="lg" />
            <div className="flex flex-col gap-0.5">
              <span className="text-label text-app-text">Amira Benali</span>
              <span className="text-caption text-app-text-secondary">amira.benali@univ-demo.dz</span>
            </div>
          </div>
          <hr className="w-full border-0 h-px bg-app-border" />
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-1">
              <span className="text-caption text-app-text-secondary">Rôle</span>
              <span className="text-body-sm text-app-text">Doctorant</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-caption text-app-text-secondary">Matricule</span>
              <span className="text-body-sm text-app-text">D2024-0042</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-caption text-app-text-secondary">Laboratoire</span>
              <span className="text-body-sm text-app-text">LRSI</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-caption text-app-text-secondary">Établissement</span>
              <span className="text-body-sm text-app-text">Université de Démonstration</span>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <div className="flex items-center gap-3 w-full">
              <div className="flex w-10 h-10 items-center justify-center bg-app-nested rounded-field">
                <Bell size={20} className="text-app-text" />
              </div>
              <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-label text-app-text">Notifications</span>
                <span className="text-caption text-app-text-secondary">E-mail et application</span>
              </div>
              <span className="text-caption text-status-soutenu-text bg-status-soutenu-bg px-2 py-0.5 rounded-pill">Activées</span>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 w-full">
              <div className="flex w-10 h-10 items-center justify-center bg-app-nested rounded-field">
                <Globe size={20} className="text-app-text" />
              </div>
              <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-label text-app-text">Langue</span>
                <span className="text-caption text-app-text-secondary">Interface en français</span>
              </div>
              <span className="text-badge text-app-text">FR</span>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 w-full">
              <div className="flex w-10 h-10 items-center justify-center bg-app-nested rounded-field">
                <Palette size={20} className="text-app-text" />
              </div>
              <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-label text-app-text">Thème</span>
                <span className="text-caption text-app-text-secondary">Apparence de l'interface</span>
              </div>
              <span className="text-badge text-app-text">Clair</span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

