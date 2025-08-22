import { ChevronRight } from "lucide-react";
import { Button } from "./Button";

interface EventCardProps {
  image: string;
  title: string;
  eventType: string;
  location: string;
  organizer: string;
  date: string;
  time: string;
  price: string;
  onViewEvent?: () => void;
}

export const EventCard = ({
  image,
  title,
  eventType,
  location,
  organizer,
  date,
  time,
  price,
  onViewEvent
}: EventCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1271px] p-4 sm:p-6 items-start lg:items-end gap-6 lg:gap-11 rounded-lg bg-neutral-75 flex-shrink-0">
      {/* Event Poster */}
      <img
        src={image}
        alt={`${title} Event Poster`}
        className="w-full sm:w-80 lg:w-[469px] h-64 sm:h-80 lg:h-[587px] flex-shrink-0 rounded-lg object-cover"
      />

      {/* Event Info */}
      <div className="flex flex-col items-start gap-4 flex-1 w-full">
        {/* Event Type & Title */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex px-1 py-1 justify-center items-center gap-2.5 rounded bg-blue-accent">
            <span className="text-dark-green font-fraktion text-sm sm:text-base font-normal leading-6 uppercase">
              {eventType}
            </span>
          </div>
          <h2 className="text-dark-green font-avant-garde text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight lg:leading-[60px] tracking-tight lg:tracking-[-0.96px]">
            {title}
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full lg:w-[710px] h-px bg-neutral-200"></div>

        {/* Event Details */}
        <div className="flex flex-col items-start gap-2 self-stretch">
          {/* Location & Organizer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 self-stretch rounded-lg">
            <div className="sm:w-[300px] text-neutral-800 font-fraktion text-lg sm:text-[22px] font-normal leading-[30px]">
              {location}
            </div>
            <div className="flex items-end gap-2">
              <span className="text-neutral-600 font-fraktion text-base sm:text-lg font-normal">
                Organiza
              </span>
              <span className="text-neutral-800 font-fraktion text-lg sm:text-[22px] font-normal leading-[30px]">
                {organizer}
              </span>
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 self-stretch rounded-lg">
            <div className="sm:w-[300px] text-neutral-800 font-fraktion text-lg sm:text-[22px] font-normal leading-[30px]">
              {date}
            </div>
            <div className="flex items-end gap-2">
              <span className="text-neutral-600 font-fraktion text-base sm:text-lg font-normal">
                Desde
              </span>
              <span className="text-neutral-800 font-fraktion text-lg sm:text-[22px] font-normal leading-[30px]">
                {time}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-end gap-2">
            <span className="text-neutral-600 font-fraktion text-base sm:text-lg font-normal">
              Desde
            </span>
            <span className="text-neutral-800 font-fraktion text-lg sm:text-[22px] font-normal leading-[30px]">
              {price}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full lg:w-[710px] h-px bg-neutral-200"></div>

        {/* View Event Button */}
        <Button
          icon={ChevronRight}
          onClick={onViewEvent}
          ariaLabel={`Ver evento ${title}`}
        >
          VER EVENTO
        </Button>
      </div>
    </div>
  );
};
