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
    <div className="flex w-full max-w-[1271px] p-6 items-end gap-11 rounded-lg bg-neutral-75 flex-shrink-0">
      {/* Event Poster */}
      <img
        src={image}
        alt={`${title} Event Poster`}
        className="w-[469px] h-[587px] flex-shrink-0 rounded-lg object-cover"
      />
      
      {/* Event Info */}
      <div className="flex flex-col items-start gap-4 flex-1">
        {/* Event Type & Title */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex px-1 py-1 justify-center items-center gap-2.5 rounded bg-blue-accent">
            <span className="text-dark-green font-fraktion text-base font-normal leading-6 uppercase">
              {eventType}
            </span>
          </div>
          <h2 className="text-dark-green font-avant-garde text-5xl font-bold leading-[60px] tracking-[-0.96px]">
            {title}
          </h2>
        </div>

        {/* Divider */}
        <div className="w-[710px] h-px bg-neutral-200"></div>

        {/* Event Details */}
        <div className="flex flex-col items-start gap-2 self-stretch">
          {/* Location & Organizer */}
          <div className="flex items-center gap-8 self-stretch rounded-lg">
            <div className="w-[300px] text-neutral-800 font-fraktion text-[22px] font-normal leading-[30px]">
              {location}
            </div>
            <div className="flex items-end gap-2">
              <span className="text-neutral-600 font-fraktion text-lg font-normal">
                Organiza
              </span>
              <span className="text-neutral-800 font-fraktion text-[22px] font-normal leading-[30px]">
                {organizer}
              </span>
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex items-center gap-8 self-stretch rounded-lg">
            <div className="w-[300px] text-neutral-800 font-fraktion text-[22px] font-normal leading-[30px]">
              {date}
            </div>
            <div className="flex items-end gap-2">
              <span className="text-neutral-600 font-fraktion text-lg font-normal">
                Desde
              </span>
              <span className="text-neutral-800 font-fraktion text-[22px] font-normal leading-[30px]">
                {time}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-end gap-2">
            <span className="text-neutral-600 font-fraktion text-lg font-normal">
              Desde
            </span>
            <span className="text-neutral-800 font-fraktion text-[22px] font-normal leading-[30px]">
              {price}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[710px] h-px bg-neutral-200"></div>

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
