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
  // Define sizes based on the size prop
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return {
          container: "w-[254px] md:w-[320px] lg:w-[320px]",
          image:
            "w-[254px] h-[318px] md:w-[320px] md:h-[400px] lg:w-[320px] lg:h-[400px]",
        };
      case "md":
        return {
          container: "w-[280px] md:w-[320px] lg:w-[320px]",
          image:
            "w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[320px] lg:h-[400px]",
        };
      case "lg":
      default:
        return {
          container: "w-full md:w-[320px] lg:w-[320px]",
          image:
            "w-full md:w-[320px] md:h-[400px] lg:w-[320px] lg:h-[400px] aspect-[4/5]",
        };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div
      className={`flex flex-col cursor-pointer ${sizeClasses.container} group transition-all duration-200 ease-in-out`}
      onClick={onClick}
    >
      {/* Event Poster - Responsive dimensions */}
      <img
        src={image}
        alt={`${title} Event Poster`}
        className={`${sizeClasses.image} rounded-xs object-cover flex-shrink-0`}
      />

      {/* Event Info - Responsive padding with hover state */}
      <div className="flex flex-col items-start gap-2 p-3 md:p-3 lg:p-3 transition-colors duration-200 ease-in-out group-hover:bg-[#E5E6DD] rounded-b-xs">
        {/* Badge */}
        <Badge>{eventType}</Badge>

        {/* Event Title - Responsive typography */}
        <h3
          className="
          text-[28px] leading-[34px] tracking-[-0.56px] md:text-[28px] md:leading-[34px] md:tracking-[-0.56px] lg:text-[28px] lg:leading-[34px] lg:tracking-[-0.56px]
          font-display font-bold text-dark-green
          max-h-[68px] overflow-hidden
          self-stretch
          transition-colors duration-200 ease-in-out
        "
        >
          {title}
        </h3>

        {/* Location - Responsive typography */}
        <div
          className="
          text-[18px] md:text-[18px] lg:text-[18px]
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
