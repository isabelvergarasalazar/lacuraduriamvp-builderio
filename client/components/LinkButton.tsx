import { ReactNode, useState } from "react";

interface LinkButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const LinkButton = ({
  children,
  href,
  onClick,
  className = "",
}: LinkButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick?.();

    // Reset clicked state after animation
    setTimeout(() => setIsClicked(false), 300);
  };

  const baseClasses = `
    flex items-center gap-1 rounded-xl group cursor-pointer
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-coral-primary focus:ring-offset-2
    ${isClicked ? 'animate-pulse' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      <span className="text-coral-primary font-body text-lg font-medium leading-[28px] uppercase tracking-wide transition-colors duration-200 group-hover:text-coral-secondary group-focus:text-coral-secondary group-active:text-coral-dark">
        {children}
      </span>
      <div className={`
        rounded-full p-2 transition-all duration-300 ease-out
        ${isClicked
          ? 'bg-gradient-to-r from-coral-primary via-coral-secondary to-coral-dark'
          : 'bg-coral-primary group-hover:bg-coral-secondary group-focus:bg-coral-secondary group-active:bg-coral-dark'
        }
      `}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M6 2.66675L11.3333 8.00007L6 13.3334"
            stroke="#FFFFF6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={handleClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={handleClick}>
      {content}
    </button>
  );
};
