import { Badge } from "./Badge";

interface EventCardProps {
  image: string;
  title: string;
  eventType: string;
  location: string;
  date: string;
  time: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const EventCard = ({
  image,
  title,
  eventType,
  location,
  date,
  time,
  size = 'lg',
  onClick
}: EventCardProps) => {
  // Responsive sizing based on design specs
  const sizeClasses = {
    sm: {
      container: 'w-[276px]',
      image: 'w-[276px] h-[345px]',
      title: 'text-[28px] leading-[34px] tracking-[-0.56px] line-clamp-1',
      location: 'text-[18px]'
    },
    md: {
      container: 'w-[320px]',
      image: 'w-[320px] h-[400px]',
      title: 'text-[28px] leading-[34px] tracking-[-0.56px]',
      location: 'text-[22px] leading-[30px]'
    },
    lg: {
      container: 'w-[355px]',
      image: 'w-[355px] h-[444px]',
      title: 'text-[30px] leading-[38px] tracking-[-0.6px]',
      location: 'text-[22px] leading-[30px]'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      className={`flex flex-col ${currentSize.container} cursor-pointer`}
      onClick={onClick}
    >
      {/* Event Poster */}
      <img
        src={image}
        alt={`${title} Event Poster`}
        className={`${currentSize.image} aspect-[4/5] rounded-xs object-cover flex-shrink-0`}
      />

      {/* Event Info */}
      <div className={`flex flex-col items-start gap-2 ${size === 'lg' ? 'p-3 pb-2' : 'p-3 pb-2'}`}>
        {/* Badge */}
        <Badge>
          {eventType}
        </Badge>

        {/* Event Title */}
        <h3 className={`
          ${currentSize.title}
          font-avant-garde font-bold text-dark-green
          ${size === 'sm' ? 'max-h-[68px] overflow-hidden' : 'max-h-[76px]'}
          self-stretch
        `}>
          {title}
        </h3>

        {/* Location */}
        <div className={`
          ${currentSize.location}
          font-fraktion font-normal text-neutral-800 w-[230px]
        `}>
          {location}
        </div>

        {/* Date */}
        <div className="text-[18px] font-fraktion font-normal text-neutral-800 w-[230px]">
          {date}
        </div>

        {/* Time */}
        <div className="text-[18px] font-fraktion font-normal text-neutral-800">
          {time}
        </div>
      </div>
    </div>
  );
};
