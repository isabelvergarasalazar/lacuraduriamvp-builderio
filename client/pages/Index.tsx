import { Calendar, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { EventCard } from "@/components/EventCard";
import { FeaturedEventCard } from "@/components/FeaturedEventCard";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { LinkButton } from "@/components/LinkButton";

const HeroSection = () => {
  // Sample event data - in a real app this would come from an API
  const events = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/06af181c852a9b694df83cbf3e045b4d8f43172d?width=938",
      title: "Decibelio: Mariposa",
      eventType: "[TIPO EVENTO]",
      location: "Carrera 13A # 22-54",
      organizer: "Mariposa",
      date: "Vie, 15 Ago 2025",
      time: "08:00 PM",
      price: "40.000 COP",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/56fad6f7408648d64c7bf2bf9968b75dc6cc59de?width=938",
      title: "Concierto Acústico",
      eventType: "[MÚSICA]",
      location: "Calle 85 # 15-20",
      organizer: "Colectivo Musical",
      date: "Sáb, 16 Ago 2025",
      time: "07:30 PM",
      price: "35.000 COP",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e62a63b66db832fb69da990ccc9fbabc15e16c64?width=938",
      title: "Exposición de Arte",
      eventType: "[ARTE]",
      location: "Avenida 19 # 104-62",
      organizer: "Galería Moderna",
      date: "Dom, 17 Ago 2025",
      time: "02:00 PM",
      price: "25.000 COP",
    },
  ];

  // Create extended array for infinite scrolling
  const extendedEvents = [...events, ...events, ...events];
  const [currentIndex, setCurrentIndex] = useState(events.length); // Start at first set of cloned items
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-rotate carousel every 3 seconds for continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop transition
  useEffect(() => {
    if (currentIndex >= events.length * 2) {
      // If we're at the end of the extended array, jump back to the beginning
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(events.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000); // Wait for transition to complete
    } else if (currentIndex < events.length) {
      // If we're before the main content, jump to the end
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(events.length * 2 - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);
    }
  }, [currentIndex, events.length]);

  return (
    <div className="relative flex flex-col items-start gap-8 self-stretch">
      {/* Hero Background */}
      <div className="relative w-full h-[734px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a484871b74618d95268be70f8b1c7c96e03d4040?width=3024"
          alt="Hero background"
          className="w-full h-[716px] absolute left-0 top-[18px] object-cover"
        />
        <div
          className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-transparent via-transparent to-cream"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 246, 0.00) 35.28%, #FFFFF6 80%)",
          }}
        ></div>
      </div>

      {/* Event Cards Carousel - Positioned over background */}
      <div className="relative -mt-[100px] sm:-mt-[120px] lg:-mt-[150px] flex justify-center items-center self-stretch z-10">
        <div className="relative w-full overflow-hidden">
          <div className="flex justify-center">
            <div
              className={`flex gap-5 ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {extendedEvents.map((event, index) => (
                <div
                  key={`${event.title}-${index}`}
                  className="flex-shrink-0 flex justify-center"
                >
                  <EventCard
                    image={event.image}
                    title={event.title}
                    eventType={event.eventType}
                    location={event.location}
                    organizer={event.organizer}
                    date={event.date}
                    time={event.time}
                    price={event.price}
                    onViewEvent={() =>
                      console.log(`View event: ${event.title}`)
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(events.length + index);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  (currentIndex - events.length) % events.length === index
                    ? "bg-coral-primary"
                    : "bg-neutral-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="flex flex-col sm:flex-row justify-between items-center self-stretch py-5 gap-4 sm:gap-0">
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 bg-dark-green rounded-full"></div>
          <span className="text-dark-green font-fraktion text-lg">
            UN LENTE PARA EL ARTE
          </span>
          <div className="w-1 h-1 bg-dark-green rounded-full"></div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 bg-dark-green rounded-full"></div>
          <span className="text-dark-green font-fraktion text-lg">
            EXPLORA LA CARTELERA DE EVENTOS
          </span>
          <div className="w-1 h-1 bg-dark-green rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const FeaturedEventsSection = () => {
  const events = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/69e0617227523aeb762b59ab8c7455d8ba08c103?width=710",
      title: "Nombre de evento a dos líneas de texto",
      eventType: "[TIPO EVENTO]",
      location: "Video Club",
      date: "[Día, 00 Mes, Año]",
      time: "[00:00 P.M]",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d1e42315b34e9dcde2fd9f3e2554d35ace942a1c?width=710",
      title: "EXXOTIKA CLUB presenta DISCOQUETTE Vol. 2",
      eventType: "[TIPO EVENTO]",
      location: "[Nombre del lugar]",
      date: "[Día, 00 Mes, Año]",
      time: "[00:00 P.M]",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2f4a4172abba2c915490e76ada44f4d977421f94?width=710",
      title: "Contrafrecuencias",
      eventType: "[TIPO EVENTO]",
      location: "[Nombre del lugar]",
      date: "[Día, 00 Mes, Año]",
      time: "[00:00 P.M]",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9bba6c09601ca4ffc49a67280a9ff89f2e201888?width=710",
      title: "Curado x Valesuchi + Julianna + DJ+1",
      eventType: "[TIPO EVENTO]",
      location: "[Nombre del lugar]",
      date: "[Día, 00 Mes, Año]",
      time: "[00:00 P.M]",
    },
  ];

  return (
    <FeaturedEvents
      events={events}
      onViewComplete={() => console.log("Navigate to cartelera")}
      onEventClick={(event) => console.log("Event clicked:", event)}
    />
  );
};

const MissionSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-dark-green font-display font-bold text-[30px] leading-[38px] tracking-[-0.6px] lg:text-5xl lg:leading-[60px] lg:tracking-[-0.96px]">
        RENOVAMOS LA EXPLORACIÓN DEL ARTE Y LA CULTURA A TRAVÉS DE UNA GUÍA
        COLABORATIVA.
      </h2>
    </div>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <NavBar />
      <main className="px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12 lg:pb-16 pt-8 space-y-32">
        <HeroSection />
        <FeaturedEvents />
        <MissionSection />
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
