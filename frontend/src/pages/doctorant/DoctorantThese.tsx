import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { BookOpen, User, Building, Calendar, ShieldCheck } from 'lucide-react';

export function DoctorantThese() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-app-text-secondary tracking-wide uppercase">
          Dossier académique
        </span>
        <h1 className="font-serif text-h1 text-app-text">Ma thèse</h1>
        <p className="text-body text-app-text-secondary">
          Informations administratives, affiliation, encadrement et avancement officiel.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Main Details */}
        <Card className="col-span-2 max-lg:col-span-1 gap-6">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-1">
              <span className="text-caption text-app-text-secondary">Sujet de recherche</span>
              <h2 className="font-serif text-h2 text-app-text">
                Optimisation des réseaux de capteurs pour la surveillance environnementale
              </h2>
            </div>
            <StatusBadge status="valide" label="Validé" />
          </div>

          <hr className="w-full border-0 h-px bg-app-border" />

          <div className="grid grid-cols-2 gap-6 w-full max-sm:grid-cols-1">
            <div className="flex gap-3">
              <User size={20} className="text-app-action shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-caption text-app-text-secondary">Directeur de thèse</span>
                <span className="text-label text-app-text">Pr. Karim Haddad</span>
                <span className="text-tiny text-app-text-secondary">Professeur de l'enseignement supérieur</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Building size={20} className="text-app-action shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-caption text-app-text-secondary">Laboratoire de rattachement</span>
                <span className="text-label text-app-text">LRSI</span>
                <span className="text-tiny text-app-text-secondary">Laboratoire de Recherche en Systèmes Intelligents</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Calendar size={20} className="text-app-action shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-caption text-app-text-secondary">Date de première inscription</span>
                <span className="text-label text-app-text">15 octobre 2023</span>
                <span className="text-tiny text-app-text-secondary">Année 3 en cours</span>
              </div>
            </div>

            <div className="flex gap-3">
              <ShieldCheck size={20} className="text-app-action shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-caption text-app-text-secondary">Option / Spécialité</span>
                <span className="text-label text-app-text">Informatique & Réseaux</span>
                <span className="text-tiny text-app-text-secondary">Département Informatique</span>
              </div>
            </div>
          </div>

          <hr className="w-full border-0 h-px bg-app-border" />

          <div className="flex flex-col gap-2 w-full">
            <span className="text-label text-app-text">Résumé du projet de recherche</span>
            <p className="text-body-sm text-app-text-secondary leading-relaxed">
              Ce travail de recherche porte sur la modélisation et le déploiement d'architectures optimisées de réseaux de capteurs autonomes pour la collecte de paramètres écologiques en environnements contraignants. Il intègre des mécanismes d'apprentissage embarqué pour réduire l'énergie dissipée tout en maintenant une fidélité d'observation maximale.
            </p>
          </div>
        </Card>

        {/* Sidebar Info Card */}
        <div className="flex flex-col gap-6">
          <Card className="gap-4">
            <h3 className="text-title text-app-text">Cadre réglementaire</h3>
            <div className="flex flex-col gap-3 text-body-sm">
              <div className="flex justify-between py-2 border-b border-app-border">
                <span className="text-app-text-secondary">Régime</span>
                <span className="font-medium text-app-text">Doctorat LMD</span>
              </div>
              <div className="flex justify-between py-2 border-b border-app-border">
                <span className="text-app-text-secondary">Publications requises</span>
                <span className="font-medium text-status-soutenu-text">1 Article Q1/Q2 (Validé)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-app-border">
                <span className="text-app-text-secondary">Communications</span>
                <span className="font-medium text-status-soutenu-text">2 Internationales (Validées)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-app-text-secondary">Crédits de formation</span>
                <span className="font-medium text-status-soutenu-text">180 / 180 ECTS</span>
              </div>
            </div>
          </Card>

          <Card peach className="gap-3">
            <span className="text-caption font-semibold tracking-wide uppercase text-peach-text">
              Prochaine échéance
            </span>
            <h4 className="font-serif text-h3 text-peach-text">
              Transmission des rapports d'expertise
            </h4>
            <p className="text-body-sm text-peach-text">
              Les rapporteurs doivent déposer leurs avis circonstanciés avant la convocation officielle de la commission de soutenance.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

