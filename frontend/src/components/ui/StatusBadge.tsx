type StatusType = 'propose' | 'valide' | 'convoque' | 'soutenu' | 'clos';
type DecisionType = 'admis' | 'corrections' | 'ajourne';

interface StatusBadgeProps {
  status: StatusType | DecisionType;
  label: string;
}

const statusStyles: Record<string, string> = {
  propose: 'bg-status-propose-bg text-status-propose-text',
  valide: 'bg-status-valide-bg text-status-valide-text',
  convoque: 'bg-status-convoque-bg text-status-convoque-text',
  soutenu: 'bg-status-soutenu-bg text-status-soutenu-text',
  clos: 'bg-status-clos-bg text-status-clos-text',
  admis: 'bg-decision-admis-bg text-decision-admis-text',
  corrections: 'bg-decision-corrections-bg text-decision-corrections-text',
  ajourne: 'bg-decision-ajourne-bg text-decision-ajourne-text',
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-pill text-badge ${statusStyles[status] ?? 'bg-app-nested text-app-text-secondary'}`}
    >
      {label}
    </span>
  );
}

