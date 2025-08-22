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
  onBadgeClick
}: FeaturedEventCardProps) => {
  return (
    <div className="flex flex-col items-start gap-0 self-stretch flex-shrink-0">
      {/* Event Poster */}
      <img
        src={image}
        alt={title}
        className="w-[355px] h-[444px] object-cover rounded-xs"
        style={{ aspectRatio: "355/444" }}
      />

      {/* Event Info */}
      <div className="flex w-[355px] px-2 pt-3 pb-2 flex-col items-start gap-2">
        {/* Badge */}
        <Badge onClick={onBadgeClick}>
          {eventType}
        </Badge>

        {/* Event Title */}
        <h3 className="max-h-[76px] self-stretch text-neutral-900 font-display text-[30px] font-bold leading-[38px] tracking-[-0.6px] overflow-hidden">
          {title}
        </h3>

        {/* Location/Organizer */}
        <div className="flex items-center gap-8 rounded-md">
          <div className="w-[230px] text-neutral-800 font-body text-[22px] font-normal leading-[30px]">
            {location}
          </div>
        </div>

        {/* Date */}
        <div className="w-[230px] text-neutral-800 font-body text-lg font-normal">
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
