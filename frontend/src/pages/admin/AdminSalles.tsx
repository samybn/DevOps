import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Building2, Plus, Video, Users, CheckCircle2 } from 'lucide-react';

interface SalleRecord {
  id: string;
  nom: string;
  localisation: string;
  capacite: number;
  visioconference: boolean;
  actif: boolean;
}

const sallesList: SalleRecord[] = [
  {
    id: '1',
    nom: 'Salle des thèses',
    localisation: 'Bâtiment Informatique · 1er étage',
    capacite: 60,
    visioconference: true,
    actif: true,
  },
  {
    id: '2',
    nom: 'Amphithéâtre A',
    localisation: 'Bâtiment Central · Rez-de-chaussée',
    capacite: 200,
    visioconference: true,
    actif: true,
  },
  {
    id: '3',
    nom: 'Salle 204',
    localisation: 'Bâtiment Recherche · 2e étage',
    capacite: 35,
    visioconference: false,
    actif: true,
  },
  {
    id: '4',
    nom: 'Salle des Actes',
    localisation: 'Rectorat · 3e étage',
    capacite: 80,
    visioconference: true,
    actif: false,
  },
];

export function AdminSalles() {
  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Infrastructures & Logistique
          </span>
          <h1 className="font-serif text-h1 text-app-text">Salles de soutenance</h1>
          <p className="text-body text-app-text-secondary">
            Gestion du parc de salles dédiées aux soutenances de doctorat et équipements audiovisuels.
          </p>
        </div>

        <Button variant="primary" icon={<Plus size={16} />}>
          Ajouter une salle
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {sallesList.map((s) => (
          <Card key={s.id} className="gap-4">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-0.5">
                <span className="text-title text-app-text font-medium">{s.nom}</span>
                <span className="text-caption text-app-text-secondary">{s.localisation}</span>
              </div>
              <span
                className={`text-tiny px-2.5 py-1 rounded-pill font-medium ${
                  s.actif
                    ? 'bg-status-soutenu-bg text-status-soutenu-text'
                    : 'bg-app-nested text-app-text-secondary'
                }`}
              >
                {s.actif ? 'Disponible' : 'En maintenance'}
              </span>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            <div className="flex items-center justify-between text-caption text-app-text-secondary w-full">
              <span className="inline-flex items-center gap-1.5">
                <Users size={16} className="text-app-action" />
                Capacité : <strong className="text-app-text font-medium">{s.capacite} places</strong>
              </span>

              {s.visioconference && (
                <span className="inline-flex items-center gap-1.5 text-status-valide-text font-medium">
                  <Video size={16} />
                  Visio HD
                </span>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 w-full pt-2">
              <Button variant="outline" size="sm">
                Configurer
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

