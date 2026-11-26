import { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-app-action text-white hover:bg-app-action-hover',
  outline: 'border border-app-border bg-app-surface text-app-link hover:bg-app-nested',
  ghost: 'text-app-link hover:bg-app-nested',
  link: 'text-app-link',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-8 px-3 py-1.5 text-caption',
  md: 'min-h-10 px-5 py-3 text-label',
  lg: 'min-h-12 px-6 py-3 text-body-sm',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-pill overflow-hidden transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="w-5 h-5 shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

