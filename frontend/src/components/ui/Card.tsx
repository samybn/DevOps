import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  peach?: boolean;
}

export function Card({ children, className = '', peach = false }: CardProps) {
  return (
    <div
      className={`flex flex-col items-start gap-5 p-6 rounded-card overflow-hidden border border-solid ${
        peach
          ? 'bg-peach-bg border-peach-bg'
          : 'bg-app-surface border-app-border'
      } ${className}`}
    >
      {children}
    </div>
  );
}

