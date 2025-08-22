import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Badge = ({ children, className = "", onClick }: BadgeProps) => {
  const baseClasses = `
    flex px-2 py-1.5 justify-center items-center gap-2.5 rounded
    bg-[#75E6F9] hover:bg-[#23CCED]
    transition-colors duration-200 ease-in-out
    cursor-pointer
    ${className}
  `.trim();

  const content = (
    <span className="text-neutral-900 font-body text-lg font-normal leading-7 uppercase">
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
