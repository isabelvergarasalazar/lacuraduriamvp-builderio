import { Calendar, ChevronRight } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { EventCard } from "@/components/EventCard";
import { FeaturedEventCard } from "@/components/FeaturedEventCard";

const HeroSection = () => {
  // Sample event data - in a real app this would come from an API
  const events = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/06af181c852a9b694df83cbf3e045b4d8f43172d?width=938",
      title: "Decibelio: Mariposa",
      eventType: "[TIPO EVENTO]",
      location: "Carrera 13A # 22-54",
      organizer: "Mariposa",
      date: "Vie, 15 Ago 2025",
      time: "08:00 PM",
      price: "40.000 COP"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/56fad6f7408648d64c7bf2bf9968b75dc6cc59de?width=938",
      title: "Concierto Acústico",
      eventType: "[MÚSICA]",
      location: "Calle 85 # 15-20",
      organizer: "Colectivo Musical",
      date: "Sáb, 16 Ago 2025",
      time: "07:30 PM",
      price: "35.000 COP"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e62a63b66db832fb69da990ccc9fbabc15e16c64?width=938",
      title: "Exposición de Arte",
      eventType: "[ARTE]",
      location: "Avenida 19 # 104-62",
      organizer: "Galería Moderna",
      date: "Dom, 17 Ago 2025",
      time: "02:00 PM",
      price: "25.000 COP"
    }
  ];

  return (
    <div className="flex flex-col items-start gap-8 self-stretch">
      {/* Hero Background */}
      <div className="relative w-[calc(100vw)] h-[734px] -ml-12">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a484871b74618d95268be70f8b1c7c96e03d4040?width=3024"
          alt="Hero background"
          className="w-full h-[716px] absolute left-0 top-[18px] object-cover"
        />
        <div className="w-full h-[734px] absolute left-0 top-0 bg-gradient-to-b from-transparent via-transparent to-cream opacity-80"></div>
      </div>

      {/* Event Cards Carousel */}
      <div className="flex justify-center items-center gap-5 self-stretch overflow-x-auto">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            eventType={event.eventType}
            location={event.location}
            organizer={event.organizer}
            date={event.date}
            time={event.time}
            price={event.price}
            onViewEvent={() => console.log(`View event: ${event.title}`)}
          />
        ))}
      </div>

      {/* Tagline */}
      <div className="flex justify-between items-center self-stretch py-5">
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 bg-dark-green rounded-full"></div>
          <span className="text-dark-green font-fraktion text-lg">UN LENTE PARA EL ARTE</span>
          <div className="w-1 h-1 bg-dark-green rounded-full"></div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 bg-dark-green rounded-full"></div>
          <span className="text-dark-green font-fraktion text-lg">EXPLORA LA CARTELERA DE EVENTOS</span>
          <div className="w-1 h-1 bg-dark-green rounded-full"></div>
        </div>
      </div>
    </div>
  );
};


const FeaturedEvents = () => {
  const events = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/69e0617227523aeb762b59ab8c7455d8ba08c103?width=710",
      title: "Nombre de evento a dos líneas de texto",
      location: "Video Club",
      date: "[Día, 00 Mes, Año]",
      time: "[00:00 P.M]"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d1e42315b34e9dcde2fd9f3e2554d35ace942a1c?width=710",
      title: "EXXOTIKA CLUB presenta DISCOQUETTE Vol. 2",
      location: "[Nombre del lugar]",
      date: "[Día, 00 Mes, Año]",
      time: "[00:00 P.M]"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2f4a4172abba2c915490e76ada44f4d977421f94?width=710",
      title: "Contrafrecuencias",
      location: "[Nombre del lugar]",
      date: "[Día, 00 Mes, Año]",
      time: "[00:00 P.M]"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9bba6c09601ca4ffc49a67280a9ff89f2e201888?width=710",
      title: "Curado x Valesuchi + Julianna + DJ+1",
      location: "[Nombre del lugar]",
      date: "[Día, 00 Mes, Año]",
      time: "[00:00 P.M]"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <h2 className="text-dark-green font-avant-garde text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
          EVENTOS DESTACADOS
        </h2>
        <button className="flex items-center gap-1 group">
          <span className="text-coral-primary font-fraktion text-sm sm:text-lg font-medium">VER CARTELERA COMPLETA</span>
          <div className="bg-coral-primary rounded-full p-1.5 sm:p-2">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-cream" />
          </div>
        </button>
      </div>

      <div className="flex gap-6 lg:gap-12 overflow-x-auto pb-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

const MissionSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-dark-green font-avant-garde text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
        RENOVAMOS LA EXPLORACIÓN DEL ARTE Y LA CULTURA A TRAVÉS DE UNA GUÍA COLABORATIVA.
      </h2>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-neutral-100 px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="space-y-4 max-w-2xl relative z-10">
        <h2 className="text-dark-green font-avant-garde text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
          SÚMATE A LA CARTELERA DE EVENTOS
        </h2>
        <p className="text-dark-green font-fraktion text-lg sm:text-2xl lg:text-3xl leading-relaxed tracking-tight max-w-[456px]">
          Publica tu evento y sé parte de una guía amplia, diversa y selecta.
        </p>
        <button className="bg-coral-primary hover:bg-coral-secondary transition-colors rounded-xl px-3 sm:px-5 py-1.5 flex items-center gap-2">
          <span className="text-cream text-sm sm:text-lg font-fraktion font-medium uppercase">PUBLICAR EVENTO</span>
          <div className="bg-coral-secondary rounded-full p-1.5 sm:p-2">
            <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-cream" />
          </div>
        </button>
      </div>

      {/* Q Glass Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3b68cf450df4a94e56dd749b4b5e44ed6ec83b27?width=641"
        alt="Q Glass"
        className="absolute bottom-0 right-2 sm:right-8 w-48 h-32 sm:w-64 sm:h-48 lg:w-80 lg:h-64 -rotate-1 transform opacity-80"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-coral-primary relative min-h-[300px] sm:min-h-[400px] lg:min-h-[466px]">
      <div className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
        {/* Logo */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <svg width="1414" height="193" viewBox="0 0 1414 193" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs sm:max-w-md lg:max-w-2xl h-auto">
            <path d="M166.103 55.2592H66.9107C60.5271 55.2592 55.3632 60.4264 55.3632 66.7851V110.518H99.8017C105.848 110.518 110.739 115.414 110.739 121.436V165.791H55.3762C24.7817 165.791 0 141.055 0 110.531V55.2722C0 24.7352 24.7947 0 55.3632 0H166.103C196.671 0 221.466 24.7482 221.466 55.2592H166.09H166.103ZM221.232 55.3887H221.479V110.648C190.91 110.648 166.116 135.396 166.116 165.907H110.623C110.623 104.872 160.095 55.4924 221.245 55.3758L221.232 55.3887Z" fill="#171C14"/>
            <path d="M217.807 192.21C234.353 192.21 247.766 178.822 247.766 162.307C247.766 145.793 234.353 132.405 217.807 132.405C201.261 132.405 187.848 145.793 187.848 162.307C187.848 178.822 201.261 192.21 217.807 192.21Z" fill="#171C14"/>
            <path d="M336.448 91.3132H276.167V1.07495H306.308V61.2424H396.728C396.728 77.8577 383.235 91.3261 366.588 91.3261H336.448V91.3132Z" fill="#171C14"/>
            <path d="M494.312 1.07501H524.452V91.3262H494.312V61.2424C494.312 77.8578 480.818 91.3262 464.171 91.3262H403.891V61.2424C403.891 27.9341 430.943 1.01025 464.236 1.01025H494.376L494.312 1.08796V1.07501ZM494.389 61.2424V31.1587H464.249C447.602 31.1587 434.109 44.6271 434.109 61.2424H494.389Z" fill="#171C14"/>
            <path d="M336.487 161.051H396.728V191.122H336.487C303.194 191.122 276.167 164.159 276.167 130.915C276.167 114.274 289.674 100.845 306.295 100.845H396.664C396.664 117.486 383.157 130.915 366.536 130.915H306.295L306.359 130.98C306.359 147.621 319.866 161.051 336.487 161.051Z" fill="#171C14"/>
            <path d="M403.904 130.954V100.871H434.044V130.954C434.044 147.57 447.538 161.038 464.184 161.038H494.325V100.871H524.465V191.122H464.184L464.262 191.199C430.969 191.199 403.917 164.276 403.917 130.967L403.904 130.954Z" fill="#171C14"/>
            <path d="M561.884 100.922H622.125C638.798 100.922 652.253 114.404 652.253 130.993C652.253 147.583 638.746 161.064 622.125 161.064H591.998C575.326 161.064 561.871 174.545 561.871 191.135H531.743C531.743 157.904 558.757 130.928 592.063 130.928H531.821V100.858L531.756 100.922H561.884ZM652.305 191.187H622.177V161.116C638.85 161.116 652.305 174.597 652.305 191.187Z" fill="#171C14"/>
            <path d="M749.901 100.871H780.041V191.122H749.901V161.038C749.901 177.653 736.407 191.122 719.761 191.122H659.48V161.038C659.48 127.73 686.532 100.806 719.825 100.806H749.966L749.901 100.884V100.871ZM749.966 161.038V130.954H719.825C703.179 130.954 689.685 144.423 689.685 161.038H749.966Z" fill="#171C14"/>
            <path d="M817.356 100.858H847.484C880.79 100.858 907.803 127.807 907.803 161.064C907.803 177.718 894.297 191.135 877.676 191.135H787.294V100.922L787.229 100.858H817.356ZM817.408 130.928V160.999H877.65C877.65 144.345 864.156 130.928 847.523 130.928H817.395H817.408Z" fill="#171C14"/>
            <path d="M910.139 130.954V100.871H940.279V130.954C940.279 147.57 953.773 161.038 970.42 161.038H1000.56V100.871H1030.7V191.122H970.42L970.497 191.199C937.204 191.199 910.152 164.276 910.152 130.967L910.139 130.954Z" fill="#171C14"/>
            <path d="M1067.99 100.922H1128.23C1144.9 100.922 1158.36 114.404 1158.36 130.993C1158.36 147.583 1144.85 161.064 1128.23 161.064H1098.1C1081.43 161.064 1067.98 174.545 1067.98 191.135H1037.85C1037.85 157.904 1064.86 130.928 1098.17 130.928H1037.93V100.858L1037.86 100.922H1067.99ZM1158.42 191.187H1128.3V161.116C1144.97 161.116 1158.42 174.597 1158.42 191.187Z" fill="#171C14"/>
            <path d="M1195.84 191.122H1165.72V161.051H1225.96V130.98H1195.83C1179.21 130.98 1165.7 117.564 1165.7 100.909H1256.14V161.038H1286.26V191.109H1195.83L1195.84 191.122Z" fill="#171C14"/>
            <path d="M1383.86 100.871H1414V191.122H1383.86V161.038C1383.86 177.653 1370.37 191.122 1353.72 191.122H1293.44V161.038C1293.44 127.73 1320.49 100.806 1353.78 100.806H1383.92L1383.86 100.884V100.871ZM1383.94 161.038V130.954H1353.8C1337.15 130.954 1323.66 144.423 1323.66 161.038H1383.94Z" fill="#171C14"/>
          </svg>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 gap-6 lg:gap-0">
          {/* Left Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <a href="/cartelera" className="text-dark-green font-fraktion text-lg sm:text-xl hover:text-neutral-800 transition-colors">CARTELERA</a>
            <a href="/como-publicar" className="text-dark-green font-fraktion text-lg sm:text-xl hover:text-neutral-800 transition-colors">CÓMO PUBLICAR</a>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden lg:block w-60 xl:w-80 h-px bg-coral-dark"></div>

          {/* Right Contact Info */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
            <a href="mailto:contacto@lacuraduria.net" className="text-dark-green font-fraktion text-lg sm:text-xl hover:text-neutral-800 transition-colors">
              CONTACTO@LACURADURIA.NET
            </a>
            <div className="flex items-center gap-1.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M9.12661 7.45553C9.29857 7.46249 9.48906 7.47064 9.67008 7.87276C9.79339 8.14713 10.0007 8.65803 10.1663 9.06609C10.2889 9.36843 10.3887 9.61431 10.4144 9.6657C10.4749 9.78642 10.5149 9.92778 10.4345 10.0887C10.4222 10.1134 10.4108 10.1368 10.3999 10.159C10.34 10.2816 10.2957 10.3721 10.1933 10.4914C10.1524 10.539 10.1101 10.5904 10.0679 10.6418C9.98517 10.7424 9.90262 10.8427 9.83088 10.9144C9.70976 11.0347 9.58364 11.1655 9.72473 11.4071C9.86583 11.6487 10.3504 12.4393 11.0684 13.0795C11.8411 13.7685 12.5121 14.0594 12.8518 14.2067C12.9178 14.2353 12.9713 14.2585 13.0106 14.2781C13.2523 14.3988 13.393 14.3786 13.5339 14.2174C13.6749 14.0562 14.1372 13.5125 14.2984 13.2707C14.4596 13.029 14.6205 13.0691 14.8418 13.1498C15.0632 13.2304 16.2504 13.8146 16.4921 13.9355C16.5397 13.9592 16.5841 13.9807 16.6252 14.0005C16.7933 14.0815 16.9068 14.1362 16.9552 14.2174C17.0155 14.3184 17.0154 14.8016 16.8142 15.3656C16.6131 15.9295 15.6272 16.4735 15.1842 16.5137C15.1416 16.5176 15.0992 16.5226 15.0556 16.5277C14.6462 16.5758 14.1297 16.6365 12.286 15.9094C10.0152 15.014 8.51853 12.7939 8.2114 12.3383C8.18651 12.3014 8.16943 12.276 8.16038 12.2639L8.15752 12.2601C8.02674 12.0852 7.17432 10.9454 7.17432 9.76619C7.17432 8.65453 7.72061 8.07156 7.97217 7.8031C7.9895 7.78461 8.00543 7.76761 8.01969 7.75203C8.24091 7.51031 8.5026 7.44988 8.66366 7.44988L9.12661 7.45553Z" fill="#171C14"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.33887 21.75L3.71024 16.743C2.86302 15.2741 2.41801 13.6079 2.42005 11.9122C2.42229 6.58441 6.75801 2.25 12.086 2.25C14.6715 2.25131 17.0983 3.25747 18.9234 5.08391C20.7485 6.91034 21.7527 9.33805 21.7518 11.92C21.7494 17.2474 17.413 21.5826 12.0858 21.5826H12.0816C10.4641 21.582 8.87464 21.1762 7.46281 20.4063L2.33887 21.75ZM12.0889 3.88227C7.65737 3.88227 4.0535 7.48482 4.05193 11.9129C4.04974 13.425 4.47554 14.9068 5.2801 16.187L5.47125 16.4909L4.65951 19.4543L7.7002 18.657L7.99381 18.831C9.22697 19.5628 10.6409 19.9498 12.0828 19.9506H12.0858C16.5139 19.9506 20.1178 16.3477 20.1195 11.9193C20.1228 10.8639 19.9168 9.8182 19.5133 8.8429C19.1097 7.8676 18.5167 6.98203 17.7686 6.23746C17.0247 5.48882 16.1396 4.89519 15.1647 4.49091C14.1897 4.08664 13.1443 3.87977 12.0889 3.88227Z" fill="#171C14"/>
              </svg>
              <a href="tel:+573044138497" className="text-black font-fraktion text-lg sm:text-xl whitespace-nowrap">(+57) 304 413 8497</a>
            </div>
            <a href="https://instagram.com" className="text-dark-green font-fraktion text-lg sm:text-xl hover:text-neutral-800 transition-colors">INSTAGRAM</a>
            <a href="https://linkedin.com" className="text-dark-green font-fraktion text-lg sm:text-xl hover:text-neutral-800 transition-colors">LINKEDIN</a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0">
          <p className="text-dark-green font-fraktion uppercase text-sm sm:text-base">
            © 2025 La Curaduría. Todos los derechos reservados.
          </p>
          <p className="text-dark-green font-fraktion uppercase text-right text-sm sm:text-base max-w-md">
            CREAMOS UN LENTE PARA FILTRAR LO ESENCIAL JUNTO A MEDIOS, ARTISTAS Y GESTORES.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <NavBar />
      <main className="px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12 lg:pb-16 space-y-16 sm:space-y-24 lg:space-y-32">
        <HeroSection />
        <FeaturedEvents />
        <MissionSection />
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
