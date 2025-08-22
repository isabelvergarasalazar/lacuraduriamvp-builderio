import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Badge = ({ children, className = "", onClick }: BadgeProps) => {
  const baseClasses = `
    flex px-1 py-1 justify-center items-center gap-2.5 rounded-xs
    bg-[#75E6F9] hover:bg-[#23CCED]
    transition-colors duration-200 ease-in-out
    cursor-pointer
    ${className}
  `.trim();

  const content = (
    <span className="text-neutral-900 font-body text-sm font-normal leading-[18px] uppercase">
      {children}
    </span>
  );

  if (onClick) {
    return (
      <button className={baseClasses} onClick={onClick} type="button">
        {content}
      </button>
    );
  }

  return <div className={baseClasses}>{content}</div>;
};
