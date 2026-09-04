import React from 'react';

export interface NavigateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: 'back' | 'forward' | number;
  fallbackHref?: string;
  onFallbackNavigate?: (href: string) => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'unstyled';
  children?: React.ReactNode;
}

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  to = 'back',
  fallbackHref,
  onFallbackNavigate,
  variant = 'unstyled',
  children,
  className = '',
  onClick,
  ...props
}) => {
  // Обчислення кількості кроків для window.history.go()
  const getDelta = (): number => {
    if (to === 'back') return -1;
    if (to === 'forward') return 1;
    return to;
  };

  const handleNavigate = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Якщо передано кастомний onClick, викликаємо його першим
    if (onClick) onClick(event);

    if (event.defaultPrevented) return;

    const delta = getDelta();
    const hasHistory = typeof window !== 'undefined' && window.history.length > 1;

    // Перевіряємо, чи є куди повертатися в історії
    if (hasHistory) {
      window.history.go(delta);
    } else if (fallbackHref) {
      // Якщо історії немає (користувач зайшов напряму за посиланням), переходимо на fallback
      if (onFallbackNavigate) {
        onFallbackNavigate(fallbackHref);
      } else {
        window.location.href = fallbackHref;
      }
    }
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    unstyled: '',
  };

  const combinedClasses = `inline-flex items-center
    cursor-pointer transition-all duration-300
  ${variantStyles[variant]} ${className}`.trim();

  return (
    <button
      type="button"
      onClick={handleNavigate}
      className={combinedClasses}
      {...props}
    >
      {children || (to === 'forward' ? 'Next →' : '← Back')}
    </button>
  );
};