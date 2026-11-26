interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8 text-caption',
  md: 'w-9 h-9 text-badge',
  lg: 'w-10 h-10 text-label',
};

export function Avatar({ initials, size = 'md' }: AvatarProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-app-nested font-medium text-app-text ${sizeClasses[size]}`}
    >
      {initials}
    </div>
  );
}

