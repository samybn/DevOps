import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  endIcon?: ReactNode;
}

export function Input({ label, icon, endIcon, id, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-label text-app-text">
          {label}
        </label>
      )}
      <div className="flex min-h-12 items-center gap-3 p-3 w-full bg-app-surface rounded-field border border-app-border">
        {icon && <span className="w-5 h-5 shrink-0 text-app-text-secondary">{icon}</span>}
        <input
          id={id}
          className={`flex-1 min-w-0 bg-transparent outline-none text-body-sm text-app-text placeholder:text-app-text-secondary ${className}`}
          {...props}
        />
        {endIcon && <span className="w-5 h-5 shrink-0 text-app-text-secondary">{endIcon}</span>}
      </div>
    </div>
  );
}

