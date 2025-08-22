interface FeaturedEventCardProps {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
}

export const FeaturedEventCard = ({ 
  image, 
  title, 
  location, 
  date, 
  time 
}: FeaturedEventCardProps) => {
  return (
    <div className="flex flex-col flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="w-64 sm:w-80 lg:w-[355px] h-80 sm:h-96 lg:h-[444px] object-cover rounded aspect-[355/444]"
      />
      <div className="p-3 space-y-2">
        <div className="bg-blue-accent rounded px-2 py-1 inline-block">
          <span className="text-dark-green text-xs sm:text-sm font-fraktion uppercase">[TIPO EVENTO]</span>
        </div>
        <h3 className="text-dark-green font-avant-garde text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-tight max-h-[76px] overflow-hidden">
          {title}
        </h3>
        <div className="space-y-1">
          <p className="text-neutral-800 font-fraktion text-sm sm:text-lg max-w-[230px]">{location}</p>
          <p className="text-neutral-800 font-fraktion text-sm sm:text-base">{date}</p>
          <p className="text-neutral-800 font-fraktion text-sm sm:text-base">{time}</p>
        </div>
      </div>
    </div>
  );
};
