import { Badge } from "./Badge";

interface EventCardProps {
  image: string;
  title: string;
  eventType: string;
  location: string;
  date: string;
  time: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export const EventCard = ({
  image,
  title,
  eventType,
  location,
  date,
  time,
  size = "lg",
  onClick,
}: EventCardProps) => {
  return (
    <div
      className="flex flex-col cursor-pointer flex-shrink-0 w-[276px] md:w-[320px] lg:w-[355px]"
      onClick={onClick}
    >
      {/* Event Poster - Responsive dimensions */}
      <img
        src={image}
        alt={`${title} Event Poster`}
        className="w-[276px] h-[345px] md:w-[320px] md:h-[400px] lg:w-[355px] lg:h-[444px] aspect-[4/5] rounded-xs object-cover flex-shrink-0"
      />

      {/* Event Info - Responsive padding */}
      <div className="flex flex-col items-start gap-2 p-3 pb-2 lg:px-2 lg:pt-3 lg:pb-2">
        {/* Badge */}
        <Badge>{eventType}</Badge>

        {/* Event Title - Responsive typography */}
        <h3
          className="
          text-[28px] leading-[34px] tracking-[-0.56px] md:text-[28px] md:leading-[34px] md:tracking-[-0.56px] lg:text-[30px] lg:leading-[38px] lg:tracking-[-0.6px]
          font-display font-bold text-dark-green
          max-h-[68px] lg:max-h-[76px] overflow-hidden
          self-stretch
        "
        >
          {title}
        </h3>

        {/* Location - Responsive typography */}
        <div
          className="
          text-[18px] md:text-[22px] md:leading-[30px] lg:text-[22px] lg:leading-[30px]
          font-body font-normal text-neutral-800 w-[230px]
        "
        >
          {location}
        </div>

        {/* Date */}
        <div className="text-[18px] font-body font-normal text-neutral-800 w-[230px]">
          {date}
        </div>

        {/* Time */}
        <div className="text-[18px] font-body font-normal text-neutral-800">
          {time}
        </div>
      </div>
    </div>
  );
};
