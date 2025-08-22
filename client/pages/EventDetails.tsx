import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Ticket } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { FeaturedEvents } from "@/components/FeaturedEvents";

// Sample featured events data - same as used in Index page
const featuredEvents = [
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/21e474626c450344e6f334c399518b37714123d2?width=640",
    title: "Nombre de evento a dos líneas de texto",
    eventType: "[TIPO EVENTO]",
    location: "Video Club",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/728a061671c65baf8bd4b7daed622a758b6374ba?width=640",
    title: "EXXOTIKA CLUB presenta DISCOQUETTE Vol. 2",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/00d075fecf595690a69b785815d479ff077912f0?width=640",
    title: "Contrafrecuencias",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8b2d97ec2f6e9c9232696f7f5b7d332d58a20a00?width=640",
    title: "Curado x Valesuchi + Julianna + DJ+1",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
];

const EventDetails = () => {
  const { eventSlug } = useParams();
  const navigate = useNavigate();

  // Extract event data based on slug (in a real app, this would fetch from API)
  const getEventData = () => {
    // Default event data - in real app would fetch based on slug
    return {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0d510f77d19485139462e5fe56249c37225aef2d?width=1288",
      title: "NOMBRE DEL EVENTO COMPLETO",
      eventType: "[TIPO EVENTO]",
      date: "21, Septiembre 2025",
      time: "08:00 pm",
      price: "50.000 cop",
      ageLimit: "18 años",
      location: "CLUB VIDEO",
      address: "CALLE 64 # 4 - 55",
      city: "Bogotá",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo est, pretium in eros vel, mattis porta eros. Integer porttitor a erat non auctor. Donec a turpis at orci fringilla varius. Etiam vehicula in purus non tincidunt. Phasellus sed nisi pharetra, sollicitudin mauris id, faucibus eros. Maecenas tempus ligula ex. Vestibulum aliquet porta blandit. Phasellus nec metus ullamcorper, luctus purus sed, aliquam nibh. Quisque iaculis tortor quis posuere sagittis. Mauris fringilla finibus accumsan. Ut nibh augue, condimentum a ipsum id, fermentum gravida ex. Phasellus pulvinar tincidunt viverra. Praesent augue turpis, sodales non luctus ac, suscipit at neque. Nullam id massa dignissim, ornare est eu, laoreet ex. Duis id lacus quis elit faucibus tristique ut finibus ante.",
    };
  };

  const eventData = getEventData();

  const handleViewCompleteSchedule = () => {
    navigate("/cartelera");
  };

  const handleEventClick = (event: any) => {
    // Navigate to event details page
    const slug = event.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
    navigate(`/cartelera/${slug}-1`);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <NavBar activePage="cartelera" />

      {/* Main Content */}
      <main className="w-full">
        {/* Content Section */}
        <section className="px-4 md:px-8 xl:px-[48px] pt-12 pb-32 md:pt-12 md:pb-24 lg:pt-[48px] lg:pb-[96px]">
          <div className="flex flex-col items-start gap-4 lg:gap-4 w-full">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2">
              <button
                onClick={() => navigate("/cartelera")}
                className="text-neutral-600 font-body text-sm font-normal leading-[18px] uppercase hover:text-dark-green transition-colors"
              >
                CARTELERA
              </button>
              <span className="text-neutral-600 font-body text-sm font-normal leading-[18px]">
                /
              </span>
              <span className="text-dark-green font-body text-sm font-medium leading-[18px] uppercase">
                NOMBRE EVENTO
              </span>
            </nav>

            {/* Event Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[100px] w-full">
              {/* Left Column - Event Image */}
              <div className="w-full lg:w-auto lg:flex-shrink-0">
                <img
                  src={eventData.image}
                  alt={`${eventData.title} Event Poster`}
                  className="w-full lg:w-[644px] lg:h-[805px] aspect-[4/5] rounded-md object-cover"
                />
              </div>

              {/* Right Column - Event Info */}
              <div className="flex flex-col items-start gap-10 w-full lg:w-[732px] lg:flex-shrink-0">
                {/* Event Title and CTA */}
                <div className="flex flex-col items-start gap-3 w-full">
                  <Badge>{eventData.eventType}</Badge>

                  <h1 className="font-display font-bold text-dark-green w-full text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[58px] md:tracking-[-0.96px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
                    {eventData.title}
                  </h1>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                    <Button
                      icon={Ticket}
                      variant="primary"
                      className="w-full sm:w-auto"
                      ariaLabel="Comprar tickets para el evento"
                    >
                      COMPRAR TICKETS
                    </Button>

                    <Button
                      icon={Calendar}
                      variant="secondary"
                      className="w-full sm:w-auto"
                      ariaLabel="Añadir evento al calendario"
                    >
                      AÑADIR A CALENDARIO
                    </Button>
                  </div>
                </div>

                {/* Event Information Grid */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {/* Date */}
                    <div className="flex flex-col items-start gap-0">
                      <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                        FECHA
                      </span>
                      <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                        {eventData.date}
                      </span>
                    </div>

                    {/* Time */}
                    <div className="flex flex-col items-start gap-0">
                      <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                        HORA INICIO
                      </span>
                      <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                        {eventData.time}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-start gap-0">
                      <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                        PRECIO
                      </span>
                      <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                        {eventData.price}
                      </span>
                    </div>

                    {/* Age Limit */}
                    <div className="flex flex-col items-start gap-0">
                      <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                        MAYORÍA DE EDAD?
                      </span>
                      <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                        {eventData.ageLimit}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-start gap-0">
                      <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                        DÓNDE?
                      </span>
                      <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                        {eventData.location}
                      </span>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col items-start gap-0">
                      <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                        DIRECCIÓN
                      </span>
                      <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                        {eventData.address}
                      </span>
                    </div>

                    {/* City */}
                    <div className="flex flex-col items-start gap-0 col-span-2">
                      <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                        CIUDAD
                      </span>
                      <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                        {eventData.city}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-neutral-200"></div>

                  {/* Description */}
                  <p className="text-dark-green font-body text-lg font-normal leading-8 w-full">
                    {eventData.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-neutral-200"></div>

                  {/* Artists Tags */}
                  <div className="flex flex-col items-start gap-0 w-full">
                    <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                      ARTISTAS
                    </span>
                    <div className="flex flex-wrap items-start gap-3 w-full">
                      {[...Array(8)].map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 px-1.5 py-1 rounded-sm bg-neutral-100"
                        >
                          <div className="flex p-1 items-center rounded-sm bg-[#FF7C98]">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.99997 12.6667C10.0503 12.6667 11.8124 11.4326 12.5839 9.66671M7.99997 12.6667C5.94965 12.6667 4.18757 11.4326 3.41602 9.66671M7.99997 12.6667V14.1667M7.99997 10.5C6.43516 10.5 5.16664 9.23151 5.16664 7.66671V4.66671C5.16664 3.1019 6.43516 1.83337 7.99997 1.83337C9.56478 1.83337 10.8333 3.1019 10.8333 4.66671V7.66671C10.8333 9.23151 9.56478 10.5 7.99997 10.5Z"
                                stroke="#171C14"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-dark-green font-body text-lg font-medium leading-7">
                            [Artist]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Promoters Tags */}
                  <div className="flex flex-col items-start gap-0 w-full">
                    <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                      PROMOTORES / COLECTIVO
                    </span>
                    <div className="flex flex-wrap items-start gap-3 w-full">
                      {[...Array(8)].map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 px-1.5 py-1 rounded-sm bg-neutral-100"
                        >
                          <div className="flex p-1 items-center rounded-sm bg-[#FFC335]">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.5 2.49996H2.5V13.5H4.83764M13.5 8.49996V13.5H11.1624M4.83764 13.5C4.92431 11.8285 6.307 10.5 8 10.5C9.693 10.5 11.0757 11.8285 11.1624 13.5M4.83764 13.5H11.1624M12.6667 1.16663L13.3889 2.61107L14.8333 3.33329L13.3889 4.05551L12.6667 5.49996L11.9444 4.05551L10.5 3.33329L11.9444 2.61107L12.6667 1.16663ZM9.83333 6.99996C9.83333 8.01248 9.01252 8.83329 8 8.83329C6.98748 8.83329 6.16667 8.01248 6.16667 6.99996C6.16667 5.98744 6.98748 5.16663 8 5.16663C9.01252 5.16663 9.83333 5.98744 9.83333 6.99996Z"
                                stroke="#171C14"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-dark-green font-body text-lg font-medium leading-7">
                            [Artist]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Organizer Link */}
                  <div className="flex flex-col items-start gap-0 w-full">
                    <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                      CONOCE MÁS SOBRE EL ORGANIZADOR
                    </span>
                    <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                      [LINK]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="px-4 md:px-8 xl:px-[48px] pb-16 md:pb-20 lg:pb-[80px]">
          <FeaturedEvents
            events={featuredEvents}
            onViewComplete={handleViewCompleteSchedule}
            onEventClick={handleEventClick}
          />
        </section>
      </main>

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventDetails;
