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
      className="flex flex-col cursor-pointer w-full max-w-[355px] group transition-all duration-200 ease-in-out"
      onClick={onClick}
    >
      {/* Event Poster - Responsive dimensions */}
      <img
        src={image}
        alt={`${title} Event Poster`}
        className="w-full aspect-[355/444] rounded-xs object-cover flex-shrink-0"
      />

      {/* Event Info - Responsive padding with hover state */}
      <div className="flex flex-col items-start gap-2 px-2 pt-3 pb-2 transition-colors duration-200 ease-in-out group-hover:bg-[#E5E6DD] rounded-b-xs">
        {/* Badge */}
        <Badge>{eventType}</Badge>

        {/* Event Title - Responsive typography */}
        <h3
          className="
          text-[30px] leading-[38px] tracking-[-0.6px]
          font-display font-bold text-dark-green
          max-h-[76px] overflow-hidden
          self-stretch
          transition-colors duration-200 ease-in-out
        "
        >
          {title}
        </h3>

        {/* Location - Responsive typography */}
        <div
          className="
          text-[22px] leading-[30px]
          font-body font-normal text-neutral-800 w-[230px]
          transition-colors duration-200 ease-in-out
        "
        >
          {location}
        </div>

        {/* Date */}
        <div className="text-[18px] font-body font-normal text-neutral-800 w-[230px] transition-colors duration-200 ease-in-out">
          {date}
        </div>

        {/* Time */}
        <div className="text-[18px] font-body font-normal text-neutral-800 transition-colors duration-200 ease-in-out">
          {time}
        </div>
      </div>
    </div>
  );
};
