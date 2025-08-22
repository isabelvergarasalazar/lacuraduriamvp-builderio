import { ReactNode, useState, useEffect } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  fullWidth?: boolean;
  href?: string;
}

export const Button = ({
  children,
  icon: Icon,
  onClick,
  className = "",
  variant = 'primary',
  size = 'lg',
  type = 'button',
  disabled = false,
  ariaLabel,
  fullWidth = false,
  href
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    // Trigger the futuristic effect
    setIsClicked(true);

    // Call the original onClick handler
    onClick?.();

    // Reset the effect after animation completes
    setTimeout(() => setIsClicked(false), 600);
  };
  const baseClasses = `
    relative overflow-hidden transition-all duration-200 flex items-center justify-between gap-2 group
    focus:outline-none focus:ring-2 focus:ring-coral-primary focus:ring-offset-2 focus:ring-offset-dark-green
    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
    ${fullWidth ? 'w-full' : 'w-auto'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${isClicked ? 'futuristic-effect' : ''}
  `;

  const variantClasses = {
    primary: 'bg-coral-primary hover:bg-coral-secondary focus:bg-coral-secondary',
    secondary: 'bg-coral-secondary hover:bg-coral-dark focus:bg-coral-dark'
  };

  const sizeClasses = {
    sm: 'rounded-lg px-3 py-1 text-sm',
    md: 'rounded-lg px-4 py-2 text-base',
    lg: 'rounded-xl md:rounded-lg px-2 sm:px-4 md:px-2 lg:px-5 py-1 sm:py-2 md:py-1 lg:py-1.5'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg sm:text-sm md:text-lg lg:text-lg'
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-6 lg:h-6'
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  const content = (
    <>
      <span className={`text-cream font-fraktion font-medium uppercase tracking-wide ${textSizeClasses[size]}`}>
        {children}
      </span>
      {Icon && (
        <div className="bg-coral-secondary group-hover:bg-coral-dark group-focus:bg-coral-dark transition-colors duration-200 rounded-full p-2 sm:p-2">
          <Icon className={`${iconSizeClasses[size]} text-cream`} aria-hidden="true" />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
