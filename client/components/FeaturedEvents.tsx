import { useRef, useState, useEffect } from "react";
import { EventCard } from "./EventCard";
import { LinkButton } from "./LinkButton";

interface Event {
  image: string;
  title: string;
  eventType: string;
  location: string;
  date: string;
  time: string;
}

interface FeaturedEventsProps {
  events: Event[];
  onViewComplete?: () => void;
  onEventClick?: (event: Event) => void;
}

export const FeaturedEvents = ({
  events,
  onViewComplete,
  onEventClick,
}: FeaturedEventsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const updateScrollInfo = () => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        setMaxScroll(maxScrollLeft);
      };

      updateScrollInfo();
      window.addEventListener('resize', updateScrollInfo);
      return () => window.removeEventListener('resize', updateScrollInfo);
    }
  }, [events]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setScrollPosition(container.scrollLeft);
    }
  };

  // Calculate scroll indicator width based on current position
  const scrollIndicatorWidth = maxScroll > 0
    ? Math.max(162, Math.min(500, 162 + (scrollPosition / maxScroll) * (500 - 162)))
    : 162;

  return (
    <section className="flex flex-col items-start gap-6 w-full">
      {/* Header Container - Responsive layout */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0 w-full">
        {/* Header Title - Responsive typography */}
        <h2 className="text-dark-green font-avant-garde text-[30px] md:text-[30px] lg:text-[48px] font-bold leading-[38px] md:leading-[38px] lg:leading-[60px] tracking-[-0.6px] md:tracking-[-0.6px] lg:tracking-[-0.96px]">
          EVENTOS DESTACADOS
        </h2>
        
        {/* View Complete Button */}
        <LinkButton onClick={onViewComplete}>
          VER CARTELERA COMPLETA
        </LinkButton>
      </div>

      {/* Events Container - Horizontal scroll with proper overflow */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex items-center gap-5 md:gap-8 lg:gap-12 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: 'calc(100vw - 2rem)', // Account for page padding
            maxWidth: '100%',
          }}
        >
          {events.map((event, index) => (
            <div key={`featured-event-${index}`} className="flex-shrink-0">
              <EventCard
                image={event.image}
                title={event.title}
                eventType={event.eventType}
                location={event.location}
                date={event.date}
                time={event.time}
                onClick={() => onEventClick?.(event)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex flex-col items-center gap-2.5 w-full">
        <div className="flex w-[500px] max-w-full flex-col items-center gap-2.5 rounded-[24px] bg-neutral-100 p-0">
          <div 
            className="h-2 rounded-lg bg-[#098CB1] transition-all duration-300 ease-out"
            style={{ width: `${scrollIndicatorWidth}px` }}
          />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
