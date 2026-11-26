import { Link } from 'react-router-dom';
import { CheckCircle, RotateCcw } from 'lucide-react';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '@/components/ui/Button';

export function ConfirmationResetPage() {
  return (
    <AuthLayout>
      <span className="text-caption text-app-text-secondary tracking-wide">ESPACE UNIVERSITAIRE</span>
      <h2 className="font-serif text-h1 text-app-text">Consultez votre messagerie.</h2>
      <p className="text-body text-app-text-secondary">
        Si cette adresse est associée à un compte, un lien de réinitialisation vient de vous être envoyé.
      </p>

      {/* Success banner */}
      <div
        role="status"
        aria-live="polite"
        className="flex w-full gap-3 p-4 rounded-field bg-decision-admis-bg"
      >
        <CheckCircle size={20} className="text-decision-admis-text shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="text-label text-decision-admis-text">Demande prise en compte</span>
          <span className="text-caption text-app-text">
            Le lien reste valable 30 minutes. Pensez à vérifier les courriers indésirables.
          </span>
        </div>
      </div>

      <Link to="/connexion">
        <Button variant="outline">
          Revenir à la connexion
        </Button>
      </Link>

      <Button variant="link" icon={<RotateCcw size={16} />}>
        Renvoyer le lien →
      </Button>

      <hr className="w-full border-0 h-px bg-app-border" />
      <p className="text-caption text-app-text-secondary">
        Besoin d&apos;aide ? support@univ-demo.dz
      </p>
    </AuthLayout>
  );
}

