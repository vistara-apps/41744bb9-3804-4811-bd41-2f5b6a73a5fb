import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface rounded-lg shadow-card p-6',
        hover && 'hover:shadow-modal transition-shadow duration-200 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
