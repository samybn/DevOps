import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function MotDePasseOubliePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AuthLayout>
      <span className="text-caption text-app-text-secondary tracking-wide">ESPACE UNIVERSITAIRE</span>
      <h2 className="font-serif text-h1 text-app-text">Un nouvel accès.</h2>
      <p className="text-body text-app-text-secondary">
        Indiquez votre adresse institutionnelle pour recevoir un lien de réinitialisation.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <Input
          id="email"
          label="Adresse e-mail"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
            setSubmitted(false);
          }}
          icon={<Mail size={20} />}
        />

        <Button type="submit" icon={<Send size={20} />}>
          Envoyer le lien
        </Button>

        {submitted && (
          <p role="status" className="text-caption text-app-action">
            Le lien de réinitialisation a été envoyé.
          </p>
        )}
      </form>

      <Link to="/connexion" className="text-label text-app-link">
        Retour à la connexion →
      </Link>

      <hr className="w-full border-0 h-px bg-app-border" />
      <p className="text-caption text-app-text-secondary">
        Besoin d&apos;aide ? support@univ-demo.dz
      </p>
    </AuthLayout>
  );
}

