import { Bell, Search, Settings } from 'lucide-react';
import { Avatar } from '../ui/Avatar';

interface HeaderProps {
  breadcrumb: string;
}

export function Header({ breadcrumb }: HeaderProps) {
  return (
    <header className="flex min-h-20 items-center gap-5 px-8 py-4 bg-app-surface border-b border-app-border">
      <div className="flex-1 text-caption text-app-text-secondary">{breadcrumb}</div>

      {/* Search */}
      <label className="flex w-[220px] h-10 items-center gap-2 px-3 bg-app-nested rounded-field">
        <Search size={16} className="text-app-text-secondary shrink-0" />
        <input
          type="search"
          placeholder="Rechercher…"
          aria-label="Rechercher"
          className="flex-1 min-w-0 bg-transparent outline-none text-caption text-app-text placeholder:text-app-text-secondary"
        />
        <span className="text-caption text-app-text-secondary whitespace-nowrap">⌘ K</span>
      </label>

      {/* Notification bell */}
      <button
        type="button"
        aria-label="Notifications"
        className="relative flex w-10 h-10 items-center justify-center"
      >
        <Bell size={20} className="text-app-text" />
        <span className="absolute top-0 right-1 flex w-4 h-4 items-center justify-center bg-app-text rounded-full">
          <span className="text-[10px] font-medium text-white">2</span>
        </span>
      </button>

      {/* Language */}
      <button type="button" aria-label="Langue" className="text-caption text-app-text font-medium">
        FR
      </button>

      {/* Settings */}
      <button type="button" aria-label="Paramètres">
        <Settings size={20} className="text-app-text" />
      </button>

      {/* Avatar */}
      <Avatar initials="AB" />
    </header>
  );
}

