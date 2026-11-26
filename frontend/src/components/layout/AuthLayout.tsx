import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-app-bg">
      {/* Header */}
      <header className="flex items-center gap-4 p-8">
        <GraduationCap size={28} className="text-app-text" />
        <div className="flex flex-1 flex-col gap-0.5">
          <span className="font-serif text-h3 text-app-text leading-tight">Soutenances</span>
          <span className="text-caption text-app-text-secondary">Université de Démonstration</span>
        </div>
        <span className="text-caption text-app-text font-medium">FR</span>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-start gap-16 px-16 pb-16 max-lg:flex-col max-lg:px-6">
        {/* Left side */}
        <section className="flex flex-1 flex-col items-start gap-10 pt-16 pr-10 max-lg:pt-8 max-lg:pr-0">
          <p className="text-caption text-app-text-secondary tracking-wide">
            RECHERCHE · EXIGENCE · TRANSMISSION
          </p>
          <h1 className="font-serif text-h1 text-app-text">
            L&apos;exigence académique, un parcours plus clair.
          </h1>
          <p className="text-body text-app-text-secondary">
            Un espace commun pour accompagner chaque doctorat, de la proposition du jury à la diplomation.
          </p>
          <hr className="w-full border-0 h-px bg-app-border" />
          <ol className="flex flex-col gap-5 w-full list-none m-0 p-0">
            {[
              { number: '01', label: 'Préparer et déposer' },
              { number: '02', label: 'Évaluer et soutenir' },
              { number: '03', label: 'Attester et transmettre' },
            ].map((step) => (
              <li key={step.number} className="flex items-baseline gap-5">
                <span className="font-serif text-h2 text-app-text">{step.number}</span>
                <span className="text-body text-app-text">{step.label}</span>
              </li>
            ))}
          </ol>
          <p className="text-caption text-app-text-secondary">
            Portail institutionnel · Année universitaire 2026–2027
          </p>
        </section>

        {/* Right side (form card) */}
        <section className="w-full max-w-[480px] flex flex-col items-start gap-6 p-10 bg-app-surface rounded-3xl border border-app-border overflow-hidden max-sm:p-6">
          {children}
        </section>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-6">
        <p className="text-caption text-app-text-secondary">
          Accès sécurisé · Données confidentielles
        </p>
        <Link to="/agenda" className="text-caption text-app-text-secondary hover:text-app-link">
          Agenda public →
        </Link>
      </footer>
    </div>
  );
}

