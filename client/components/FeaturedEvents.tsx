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
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const updateScrollInfo = () => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        setMaxScroll(maxScrollLeft);
        setScrollPosition(container.scrollLeft);
      };

      updateScrollInfo();
      container.addEventListener("scroll", updateScrollInfo);
      window.addEventListener("resize", updateScrollInfo);

      return () => {
        container.removeEventListener("scroll", updateScrollInfo);
        window.removeEventListener("resize", updateScrollInfo);
      };
    }
  }, [events]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setScrollPosition(container.scrollLeft);
    }
  };

  // Calculate scroll indicator position and width
  const scrollPercent = maxScroll > 0 ? scrollPosition / maxScroll : 0;
  const indicatorPosition = scrollPercent * (500 - 162); // 500px track width - 162px indicator width
  const scrollIndicatorWidth = 162;

  // Handle scroll indicator interaction
  const handleScrollTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    const track = scrollTrackRef.current;
    if (container && track) {
      const rect = track.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const trackWidth = rect.width;
      const scrollPercent = Math.max(
        0,
        Math.min(1, (clickX - 81) / (trackWidth - 162)),
      ); // Center indicator
      container.scrollLeft = scrollPercent * maxScroll;
    }
  };

  const handleIndicatorMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const container = scrollContainerRef.current;
      const track = scrollTrackRef.current;
      if (container && track) {
        const rect = track.getBoundingClientRect();
        const moveX = moveEvent.clientX - rect.left;
        const trackWidth = rect.width;
        const scrollPercent = Math.max(
          0,
          Math.min(1, (moveX - 81) / (trackWidth - 162)),
        );
        container.scrollLeft = scrollPercent * maxScroll;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleIndicatorTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const container = scrollContainerRef.current;
      const track = scrollTrackRef.current;
      if (container && track && moveEvent.touches[0]) {
        const rect = track.getBoundingClientRect();
        const moveX = moveEvent.touches[0].clientX - rect.left;
        const trackWidth = rect.width;
        const scrollPercent = Math.max(
          0,
          Math.min(1, (moveX - 81) / (trackWidth - 162)),
        );
        container.scrollLeft = scrollPercent * maxScroll;
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <section className="flex flex-col items-start gap-6 w-full">
      {/* Header Container - With padding */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0 w-full px-4 md:px-8 lg:px-12">
        {/* Header Title - Responsive typography */}
        <h2 className="text-dark-green font-display text-[30px] md:text-[30px] lg:text-[48px] font-bold leading-[38px] md:leading-[38px] lg:leading-[60px] tracking-[-0.6px] md:tracking-[-0.6px] lg:tracking-[-0.96px]">
          EVENTOS DESTACADOS
        </h2>

        {/* View Complete Button */}
        <LinkButton onClick={onViewComplete}>VER CARTELERA COMPLETA</LinkButton>
      </div>

      {/* Events Container - Full width overflow */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex items-start gap-5 md:gap-8 lg:gap-12 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pl-4 md:pl-8 lg:pl-12"
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
          {/* Add extra space at the end to prevent cutting */}
          <div className="flex-shrink-0 w-4 sm:w-8 lg:w-12"></div>
        </div>
      </div>

      {/* Interactive Scroll Indicator - With padding */}
      <div className="flex flex-col items-center gap-2.5 w-full px-4 md:px-8 lg:px-12">
        <div
          ref={scrollTrackRef}
          className="flex w-[500px] max-w-full flex-col items-center gap-2.5 rounded-[24px] bg-neutral-100 p-0 cursor-pointer relative h-2"
          onClick={handleScrollTrackClick}
        >
          <div
            className={`absolute h-2 rounded-lg bg-[#098CB1] transition-all duration-150 ease-out cursor-grab ${isDragging ? "cursor-grabbing" : "hover:bg-[#0A7A99]"}`}
            style={{
              width: `${scrollIndicatorWidth}px`,
              left: `${indicatorPosition}px`,
              transform: "translateY(0)",
            }}
            onMouseDown={handleIndicatorMouseDown}
            onTouchStart={handleIndicatorTouchStart}
          />
        </div>
      </div>
    </section>
  );
};
