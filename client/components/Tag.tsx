import { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  variant: "artist" | "promoter";
  className?: string;
  onClick?: () => void;
}

const MicrophoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99997 12.6667C10.0503 12.6667 11.8124 11.4326 12.5839 9.66671M7.99997 12.6667C5.94965 12.6667 4.18757 11.4326 3.41602 9.66671M7.99997 12.6667V14.1667M7.99997 10.5C6.43516 10.5 5.16664 9.23151 5.16664 7.66671V4.66671C5.16664 3.1019 6.43516 1.83337 7.99997 1.83337C9.56478 1.83337 10.8333 3.1019 10.8333 4.66671V7.66671C10.8333 9.23151 9.56478 10.5 7.99997 10.5Z"
      stroke="#171C14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AvatarSparkleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 2.49996H2.5V13.5H4.83764M13.5 8.49996V13.5H11.1624M4.83764 13.5C4.92431 11.8285 6.307 10.5 8 10.5C9.693 10.5 11.0757 11.8285 11.1624 13.5M4.83764 13.5H11.1624M12.6667 1.16663L13.3889 2.61107L14.8333 3.33329L13.3889 4.05551L12.6667 5.49996L11.9444 4.05551L10.5 3.33329L11.9444 2.61107L12.6667 1.16663ZM9.83333 6.99996C9.83333 8.01248 9.01252 8.83329 8 8.83329C6.98748 8.83329 6.16667 8.01248 6.16667 6.99996C6.16667 5.98744 6.98748 5.16663 8 5.16663C9.01252 5.16663 9.83333 5.98744 9.83333 6.99996Z"
      stroke="#171C14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tagVariants = {
  artist: {
    iconBg: "bg-[#FF7C98]",
    icon: MicrophoneIcon,
  },
  promoter: {
    iconBg: "bg-[#FFC335]",
    icon: AvatarSparkleIcon,
  },
} as const;

export const Tag = ({ children, variant, className = "", onClick }: TagProps) => {
  const variantConfig = tagVariants[variant];
  const IconComponent = variantConfig.icon;

  const baseClasses = `
    flex items-center gap-1 px-1.5 py-1 rounded-sm bg-neutral-100 hover:bg-neutral-200
    transition-colors duration-200 ease-in-out
    ${onClick ? 'cursor-pointer' : 'cursor-default'}
    ${className}
  `.trim();

  const content = (
    <>
      <div className={`flex p-1 items-center rounded-sm ${variantConfig.iconBg}`}>
        <IconComponent />
      </div>
      <span className="text-dark-green font-body text-lg font-medium leading-7">
        {children}
      </span>
    </>
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
