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
    setTimeout(() => setIsClicked(false), 800);
  };

  const baseClasses = `
    flex items-center gap-1 rounded-xl group cursor-pointer
    transition-all duration-200 ease-in-out
    focus:outline-none
    ${className}
  `.trim();

  const content = (
    <>
      <span
        className={`
          font-body text-lg font-medium leading-[28px] uppercase tracking-wide
          transition-all duration-500 ease-in-out
          ${isClicked
            ? ''
            : 'text-coral-primary'
          }
        `}
        style={isClicked ? {
          background: 'linear-gradient(270deg, #75E6F9 0%, #FF736C 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textFillColor: 'transparent'
        } : {}}
      >
        {children}
      </span>
      <div
        className={`
          rounded-full transition-all duration-500 ease-in-out
          ${isClicked
            ? 'p-[3.2px]'
            : 'p-2 bg-coral-primary group-hover:bg-[#BC4945]'
          }
        `}
        style={isClicked ? {
          background: 'linear-gradient(270deg, #75E6F9 0%, #FF736C 100%)'
        } : {}}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M6.2002 2.66675L11.5335 8.00007L6.2002 13.3334"
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
