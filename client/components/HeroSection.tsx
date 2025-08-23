import { useNavigate } from "react-router-dom";
import { EventBanner } from "./EventBanner";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleViewEvent = () => {
    // Generate a slug from the event title and navigate to event details
    const slug = "decibelio-mariposa";
    navigate(`/cartelera/${slug}-1`);
  };

  return (
    <section className="relative w-full h-auto md:h-auto lg:h-[734px] overflow-hidden">
      {/* Hero Background - Full size absolute positioned */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a484871b74618d95268be70f8b1c7c96e03d4040?width=3024"
          alt="Hero Background"
          className="w-full h-full min-h-[500px] md:min-h-[600px] lg:h-[734px] object-cover absolute left-0 top-0"
        />

        {/* Gradient Overlay */}
        <div
          className="w-full h-full absolute top-0 left-0"
          style={{
            background:
              "linear-gradient(180deg, #FFFFF6 35.28%, rgba(255, 255, 246, 0.00) 80%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center px-4 sm:px-8 lg:px-12 pt-8 pb-0 gap-8">
        {/* Event Banner Section */}
        <div className="flex justify-center items-center w-full">
          <EventBanner
            image="https://api.builder.io/api/v1/image/assets/TEMP/56fad6f7408648d64c7bf2bf9968b75dc6cc59de?width=938"
            eventType="[TIPO EVENTO]"
            title="Decibelio: Mariposa"
            location="Carrera 13A # 22-54"
            organizer="Mariposa"
            date="Vie, 15 Ago 2025"
            time="08:00 PM"
            price="40.000 COP"
            onViewEvent={handleViewEvent}
          />
        </div>

        {/* Tagline Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full py-3 md:py-5 gap-1.5 md:gap-0 justify-center items-center">
          {/* Left Tagline */}
          <div className="flex items-center gap-[5px]">
            <div className="w-[3px] h-[3px] bg-dark-green rounded-full" />
            <span className="text-dark-green font-body text-lg font-normal">
              UN LENTE PARA EL ARTE
            </span>
            <div className="w-[3px] h-[3px] bg-dark-green rounded-full" />
          </div>

          {/* Right Tagline */}
          <div className="flex items-center gap-[5px]">
            <div className="w-[3px] h-[3px] bg-dark-green rounded-full" />
            <span className="text-dark-green font-body text-lg font-normal">
              EXPLORA LA CARTELERA DE EVENTOS
            </span>
            <div className="w-[3px] h-[3px] bg-dark-green rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
