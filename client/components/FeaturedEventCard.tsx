import { Badge } from "./Badge";

interface FeaturedEventCardProps {
  image: string;
  title: string;
  eventType?: string;
  location: string;
  date: string;
  time: string;
  onBadgeClick?: () => void;
}

export const FeaturedEventCard = ({
  image,
  title,
  eventType = "[TIPO EVENTO]",
  location,
  date,
  time,
  onBadgeClick,
}: FeaturedEventCardProps) => {
  return (
    <div className="flex flex-col items-start gap-0 self-stretch flex-shrink-0 group cursor-pointer transition-all duration-200 ease-in-out">
      {/* Event Poster - Responsive sizing */}
      <img
        src={image}
        alt={title}
        className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[355px] lg:h-[444px] object-cover rounded-xs"
      />

      {/* Event Info - Responsive sizing */}
      <div className="flex w-[280px] md:w-[320px] lg:w-[355px] px-2 md:px-3 lg:px-2 pt-3 pb-2 flex-col items-start gap-2 transition-colors duration-200 ease-in-out group-hover:bg-[#E5E6DD] self-stretch">
        {/* Badge */}
        <Badge onClick={onBadgeClick}>{eventType}</Badge>

        {/* Event Title - Responsive typography */}
        <h3 className="max-h-[60px] md:max-h-[68px] lg:max-h-[76px] self-stretch text-neutral-900 font-display text-[26px] md:text-[28px] lg:text-[30px] font-bold leading-[32px] md:leading-[34px] lg:leading-[38px] tracking-[-0.52px] md:tracking-[-0.56px] lg:tracking-[-0.6px] overflow-hidden">
          {title}
        </h3>

        {/* Location/Organizer - Responsive width */}
        <div className="flex items-center gap-8 rounded-md">
          <div className="w-[200px] md:w-[230px] lg:w-[230px] text-neutral-800 font-body text-lg md:text-lg lg:text-[22px] font-normal leading-[26px] md:leading-[26px] lg:leading-[30px]">
            {location}
          </div>
        </div>

        {/* Date - Responsive width */}
        <div className="w-[200px] md:w-[230px] lg:w-[230px] text-neutral-800 font-body text-lg font-normal">
          {date}
        </div>

        {/* Time */}
        <div className="text-neutral-800 font-body text-lg font-normal">
          {time}
        </div>
      </div>
    </div>
  );
};
