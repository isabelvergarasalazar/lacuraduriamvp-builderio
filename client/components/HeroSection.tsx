import { Badge } from "./Badge";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[683px] md:h-[521px] lg:h-[734px] overflow-hidden">
      {/* Hero Background - Full size absolute positioned */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a484871b74618d95268be70f8b1c7c96e03d4040?width=3024"
          alt="Hero Background"
          className="w-full h-[716px] object-cover absolute left-0 top-[-33px] md:top-[-195px] lg:top-0"
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
      <div className="relative z-10 h-full flex flex-col justify-end items-center px-4 sm:px-8 lg:px-12 pb-6 lg:pb-8 gap-8">
        {/* Event Banner Section */}
        <div className="flex h-[635px] justify-center items-center w-full">
          <div className="flex w-full max-w-[1271px] p-6 items-end gap-11 rounded-lg bg-[#F4F5EC]">
            {/* Event Poster */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/56fad6f7408648d64c7bf2bf9968b75dc6cc59de?width=938"
              alt="Event Poster"
              className="w-[469px] h-[587px] flex-shrink-0 rounded-lg object-cover"
            />

            {/* Event Info */}
            <div className="flex flex-col items-start gap-4 flex-1">
              {/* Event Type and Title */}
              <div className="flex flex-col items-start gap-4">
                <Badge>[TIPO EVENTO]</Badge>
                <h1 className="text-dark-green font-display text-5xl font-bold leading-[60px] tracking-[-0.96px]">
                  Decibelio: Mariposa
                </h1>
              </div>

              {/* Divider */}
              <div className="w-[710px] h-0 bg-[#CBCDC4] border-t"></div>

              {/* Event Details */}
              <div className="flex flex-col items-start gap-2 w-full">
                {/* Location and Organizer */}
                <div className="flex items-center gap-8 w-full">
                  <span className="w-[300px] text-neutral-800 font-body text-[22px] font-normal leading-[30px]">
                    Carrera 13A # 22-54
                  </span>
                  <div className="flex items-end gap-2">
                    <span className="text-[#64685F] font-body text-lg font-normal">Organiza</span>
                    <span className="text-neutral-800 font-body text-[22px] font-normal leading-[30px]">Mariposa</span>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="flex items-center gap-8 w-full">
                  <span className="w-[300px] text-neutral-800 font-body text-[22px] font-normal leading-[30px]">
                    Vie, 15 Ago 2025
                  </span>
                  <div className="flex items-end gap-2">
                    <span className="text-[#64685F] font-body text-lg font-normal">Desde</span>
                    <span className="text-neutral-800 font-body text-[22px] font-normal leading-[30px]">08:00 PM</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end gap-2">
                  <span className="text-[#64685F] font-body text-lg font-normal">Desde</span>
                  <span className="text-neutral-800 font-body text-[22px] font-normal leading-[30px]">40.000 COP</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[710px] h-0 bg-[#CBCDC4] border-t"></div>

              {/* CTA Button */}
              <div className="flex items-center">
                <div className="flex items-center bg-coral-primary hover:bg-coral-secondary rounded-xl pl-5 pr-2 py-1.5 gap-2 transition-colors duration-200">
                  <span className="text-cream font-body text-lg font-medium uppercase">
                    VER EVENTO
                  </span>
                  <div className="flex p-2 items-center gap-2.5 rounded-full bg-[#BC4945]">
                    <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 2.75V4.5M17.4069 5.09326L16.0962 6.40392M6.90381 15.5962L5.59315 16.9069M5 11H3.25M6.90381 6.40381L5.59315 5.09315M15 21.25L10.75 10.25L21.75 14.5L17.5 17L15 21.25Z" stroke="#FFFFF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
