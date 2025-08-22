import { Badge } from "./Badge";
import { Button } from "./Button";

// Custom Click Icon component for the CTA button
const ClickIcon = ({ className = "", ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M11.5 2.75V4.5M17.4069 5.09326L16.0962 6.40392M6.90381 15.5962L5.59315 16.9069M5 11H3.25M6.90381 6.40381L5.59315 5.09315M15 21.25L10.75 10.25L21.75 14.5L17.5 17L15 21.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface EventBannerProps {
  image: string;
  eventType: string;
  title: string;
  location: string;
  organizer: string;
  date: string;
  time: string;
  price: string;
  onViewEvent?: () => void;
}

export const EventBanner = ({
  image,
  eventType,
  title,
  location,
  organizer,
  date,
  time,
  price,
  onViewEvent,
}: EventBannerProps) => {
  return (
    <div className="flex w-full max-w-[680px] md:max-w-[680px] lg:max-w-[1271px] p-4 md:p-4 lg:p-6 items-end gap-6 md:gap-3 lg:gap-11 rounded-lg bg-[#F4F5EC] hover:bg-[#E5E6DD] transition-colors duration-200 ease-in-out cursor-pointer group">
      {/* Event Poster */}
      <img
        src={image}
        alt="Event Poster"
        className="w-[300px] h-[375px] md:w-[312px] md:h-[390px] lg:w-[469px] lg:h-[587px] flex-shrink-0 rounded-lg object-cover"
      />

      {/* Event Info */}
      <div className="flex flex-col items-start gap-4 flex-1">
        {/* Event Type and Title */}
        <div className="flex flex-col items-start gap-4">
          <Badge>{eventType}</Badge>
          <h1 className="text-dark-green font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-[50px] lg:leading-[60px] tracking-[-0.48px] md:tracking-[-0.8px] lg:tracking-[-0.96px]">
            {title}
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[710px] h-0 bg-[#CBCDC4] border-t"></div>

        {/* Event Details */}
        <div className="flex flex-col items-start gap-2 w-full">
          {/* Location and Organizer */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full">
            <span className="text-neutral-800 font-body text-lg md:text-[22px] font-normal leading-[24px] md:leading-[30px] md:w-[300px]">
              {location}
            </span>
            <div className="flex items-end gap-2">
              <span className="text-[#64685F] font-body text-base md:text-lg font-normal">Organiza</span>
              <span className="text-neutral-800 font-body text-lg md:text-[22px] font-normal leading-[24px] md:leading-[30px]">{organizer}</span>
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full">
            <span className="text-neutral-800 font-body text-lg md:text-[22px] font-normal leading-[24px] md:leading-[30px] md:w-[300px]">
              {date}
            </span>
            <div className="flex items-end gap-2">
              <span className="text-[#64685F] font-body text-base md:text-lg font-normal">Desde</span>
              <span className="text-neutral-800 font-body text-lg md:text-[22px] font-normal leading-[24px] md:leading-[30px]">{time}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-end gap-2">
            <span className="text-[#64685F] font-body text-base md:text-lg font-normal">Desde</span>
            <span className="text-neutral-800 font-body text-lg md:text-[22px] font-normal leading-[24px] md:leading-[30px]">{price}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[710px] h-0 bg-[#CBCDC4] border-t"></div>

        {/* CTA Button */}
        <Button
          icon={ClickIcon}
          onClick={onViewEvent}
          variant="primary"
          size="lg"
        >
          VER EVENTO
        </Button>
      </div>
    </div>
  );
};
