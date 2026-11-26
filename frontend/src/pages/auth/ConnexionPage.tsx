import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Eye, EyeOff, LogIn } from 'lucide-react';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const roles = [
  { label: 'Doctorant', path: '/doctorant' },
  { label: 'Directeur de thèse', path: '/directeur/doctorants' },
  { label: 'Responsable de département', path: '/departement/validations' },
  { label: 'Membre de jury', path: '/jury/theses' },
  { label: 'Scolarité', path: '/scolarite' },
  { label: 'Administrateur', path: '/admin/utilisateurs' },
];

export function ConnexionPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('amira.benali@univ-demo.dz');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Doctorant');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const role = roles.find((r) => r.label === selectedRole);
    if (role) navigate(role.path);
  };

  return (
    <AuthLayout>
      <span className="text-caption text-app-text-secondary tracking-wide">ESPACE UNIVERSITAIRE</span>
      <h2 className="font-serif text-h1 text-app-text">Bienvenue.</h2>
      <p className="text-body text-app-text-secondary">
        Connectez-vous à votre espace de soutenance.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <Input
          id="email"
          label="Adresse e-mail"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          icon={<Mail size={20} />}
        />

        <Input
          id="password"
          label="Mot de passe"
          type={showPassword ? 'text' : 'password'}
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Votre mot de passe"
          endIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              className="text-app-text-secondary hover:text-app-text"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          }
        />

        <Link to="/mot-de-passe-oublie" className="text-label text-app-link">
          Mot de passe oublié →
        </Link>

        {/* Role selector */}
        <fieldset className="flex flex-col gap-2 border-0 p-0 m-0">
          <legend className="text-label text-app-text">Se connecter en tant que</legend>
          <div className="flex flex-col gap-2 p-3 bg-app-nested rounded-field mt-2">
            {roles.map((role) => (
              <label
                key={role.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-field cursor-pointer transition-colors ${
                  selectedRole === role.label ? 'bg-app-surface' : 'hover:bg-app-surface/50'
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value={role.label}
                  checked={selectedRole === role.label}
                  onChange={() => setSelectedRole(role.label)}
                  className="sr-only"
                />
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedRole === role.label
                      ? 'border-app-action'
                      : 'border-app-border'
                  }`}
                >
                  {selectedRole === role.label && (
                    <span className="w-2 h-2 rounded-full bg-app-action" />
                  )}
                </span>
                <span className="text-caption text-app-text">{role.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <Button type="submit" icon={<LogIn size={20} />}>
          Se connecter
        </Button>
      </form>

      <hr className="w-full border-0 h-px bg-app-border" />
      <p className="text-caption text-app-text-secondary">
        Besoin d&apos;aide ? support@univ-demo.dz · Vos identifiants sont fournis par votre établissement.
      </p>
    </AuthLayout>
  );
}

