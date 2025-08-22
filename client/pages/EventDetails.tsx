import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Ticket } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { Tag } from "@/components/Tag";

// Featured events data - consistent with Index page
const featuredEvents = [
  {
    id: 1,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/69e0617227523aeb762b59ab8c7455d8ba08c103?width=710",
    title: "Nombre de evento a dos líneas de texto",
    eventType: "[TIPO EVENTO]",
    location: "Video Club",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 2,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/d1e42315b34e9dcde2fd9f3e2554d35ace942a1c?width=710",
    title: "EXXOTIKA CLUB presenta DISCOQUETTE Vol. 2",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 3,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2f4a4172abba2c915490e76ada44f4d977421f94?width=710",
    title: "Contrafrecuencias",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 4,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/9bba6c09601ca4ffc49a67280a9ff89f2e201888?width=710",
    title: "Curado x Valesuchi + Julianna + DJ+1",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 5,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/21e474626c450344e6f334c399518b37714123d2?width=710",
    title: "Festival de Música Electrónica",
    eventType: "[TIPO EVENTO]",
    location: "Club Nocturno",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 6,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/728a061671c65baf8bd4b7daed622a758b6374ba?width=710",
    title: "Arte y Cultura Contemporánea",
    eventType: "[TIPO EVENTO]",
    location: "Galería Central",
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
      <main className="pb-8 sm:pb-12 lg:pb-16 pt-8 space-y-32">
        {/* Content Section */}
        <section className="px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col items-start gap-4 md:gap-16 lg:gap-4 w-full">
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
              <div className="flex flex-col lg:flex-row justify-start items-start gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full">
                {/* Left Column - Event Image */}
                <div className="w-full lg:w-auto lg:flex-shrink-0 lg:sticky lg:top-8 lg:self-start">
                  <img
                    src={eventData.image}
                    alt={`${eventData.title} Event Poster`}
                    className="w-full md:h-[850px] lg:max-w-[500px] xl:max-w-[580px] aspect-[4/5] rounded-md object-cover"
                  />
                </div>

                {/* Right Column - Event Info */}
                <div className="flex flex-col items-start gap-10 w-full lg:flex-1 lg:min-w-0">
                  {/* Event Title and CTA */}
                  <div className="flex flex-col items-start gap-3 w-full">
                    <Badge>{eventData.eventType}</Badge>

                    <h1 className="font-display font-bold text-dark-green w-full text-[32px] leading-[40px] tracking-[-0.64px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
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

                  {/* Event Information Container */}
                  <div className="flex flex-col items-start gap-4 w-full">
                    {/* Info Grid - Mobile: single column, Tablet+: 2 columns */}
                    <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-4 w-full">
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
                      <div className="flex flex-col items-start gap-0">
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
                    <div className="w-full">
                      <p className="text-dark-green font-body text-[22px] font-normal leading-[30px] w-full">
                        {eventData.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-neutral-200"></div>

                    {/* Container for Artists, Promoters, and Organizer */}
                    <div className="flex flex-col items-start gap-8 w-full">
                      {/* Artists Tags */}
                      <div className="flex flex-col items-start gap-2 w-full">
                        <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                          ARTISTAS
                        </span>
                        <div className="flex flex-wrap items-start gap-4 w-full">
                          {[...Array(8)].map((_, index) => (
                            <Tag key={index} variant="artist">
                              [Artist]
                            </Tag>
                          ))}
                        </div>
                      </div>

                      {/* Promoters Tags */}
                      <div className="flex flex-col items-start gap-2 w-full">
                        <span className="text-neutral-600 font-body text-base font-normal leading-6 uppercase">
                          PROMOTORES / COLECTIVO
                        </span>
                        <div className="flex flex-wrap items-start gap-4 w-full">
                          {[...Array(8)].map((_, index) => (
                            <Tag key={index} variant="promoter">
                              [Promotor]
                            </Tag>
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
            </div>
        </section>

        {/* Featured Events Section */}
        <FeaturedEvents
          events={featuredEvents}
          onViewComplete={handleViewCompleteSchedule}
          onEventClick={handleEventClick}
        />
      </main>

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventDetails;
