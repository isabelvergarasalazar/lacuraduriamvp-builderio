import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  color?: "azul" | "neutral";
}

export const Badge = ({
  children,
  className = "",
  onClick,
  color = "azul",
}: BadgeProps) => {
  // Color variants
  const colorClasses = {
    azul: "bg-[#75E6F9] hover:bg-[#23CCED] text-neutral-900",
    neutral: "bg-dark-green bg-opacity-80 text-white hover:bg-opacity-90",
  };

  const baseClasses = `
    flex px-2 py-1.5 justify-center items-center gap-2.5 rounded
    transition-colors duration-200 ease-in-out
    ${colorClasses[color]}
    ${onClick ? "cursor-pointer" : ""}
    ${className}
  `.trim();

  const content = (
    <span className="font-body text-lg font-normal leading-7 uppercase">
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
