import { useParams, useNavigate } from "react-router-dom";
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
];

// Custom icons to match the Figma design
const TicketIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.25 7.75V8.25M15.25 11.75V12.25M15.25 15.75V16.25M2.75 4.75H21.25V9.25C18.5 10 18.5 14 21.25 14.75V19.25H2.75V14.75C5.5 14 5.5 10 2.75 9.25V4.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarAddIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.75 4.75V2.75M16.25 4.75V2.75M11.9991 9.75V15.25M14.75 12.5H9.25M3.75 4.75H20.25V20.25H3.75V4.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EventDetails = () => {
  const { eventSlug } = useParams();
  const navigate = useNavigate();

  // Extract event data based on slug (in a real app, this would fetch from API)
  const getEventData = () => {
    // Determine if this is an online event based on slug or other criteria
    const isOnlineEvent = eventSlug?.includes('online') || eventSlug?.includes('virtual');

    // Default event data - in real app would fetch based on slug
    const baseEventData = {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0d510f77d19485139462e5fe56249c37225aef2d?width=1288",
      title: "NOMBRE DEL EVENTO COMPLETO",
      eventType: "[TIPO EVENTO]",
      date: "21, Septiembre 2025",
      time: "08:00 PM",
      price: "50.000 COP",
      ageLimit: "18 años",
      description:
        "[Descripción del evento] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo est, pretium in eros vel, mattis porta eros. Integer porttitor a erat non auctor. Donec a turpis at orci fringilla varius. Etiam vehicula in purus non tincidunt. Phasellus sed nisi pharetra, sollicitudin mauris id, faucibus eros. Maecenas tempus ligula ex. Vestibulum aliquet porta blandit. Phasellus nec metus ullamcorper, luctus purus sed, aliquam nibh. Quisque iaculis tortor quis posuere sagittis. Mauris fringilla finibus accumsan. Ut nibh augue, condimentum a ipsum id, fermentum gravida ex. Phasellus pulvinar tincidunt viverra. Praesent augue turpis, sodales non luctus ac, suscipit at neque. Nullam id massa dignissim, ornare est eu, laoreet ex. Duis id lacus quis elit faucibus tristique ut finibus ante.",
      isOnline: isOnlineEvent,
    };

    if (isOnlineEvent) {
      return {
        ...baseEventData,
        onlineLink: "[LINK]",
      };
    } else {
      return {
        ...baseEventData,
        location: "CLUB VIDEO",
        address: "CALLE 64 # 4 - 55",
        city: "Bogotá",
      };
    }
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
      <NavBar />

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Dark Hero Section */}
        <section className="bg-dark-green px-4 sm:px-8 lg:px-12 pb-12 pt-8 lg:pt-12">
          <div className="flex flex-col gap-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2">
              <button
                onClick={() => navigate("/cartelera")}
                className="text-cream font-body text-sm font-normal leading-[18px] uppercase hover:text-cream/80 transition-colors"
              >
                CARTELERA
              </button>
              <span className="text-cream font-body text-sm font-normal leading-[18px]">
                /
              </span>
              <span className="text-cream font-body text-sm font-semibold leading-[18px] uppercase">
                NOMBRE EVENTO
              </span>
            </nav>

            {/* Event Hero Content */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 xl:gap-16 w-full">
              {/* Event Poster */}
              <div className="w-full max-w-[644px] lg:w-auto lg:flex-shrink-0">
                <img
                  src={eventData.image}
                  alt={`${eventData.title} Event Poster`}
                  className="w-full aspect-[4/5] rounded-lg object-cover"
                />
              </div>

              {/* Event Title and CTA Section */}
              <div className="flex flex-col items-start gap-3 w-full lg:flex-1 lg:min-w-0 bg-dark-green">
                <Badge color="azul">{eventData.eventType}</Badge>

                <h1 className="text-cream font-display font-bold text-[36px] leading-[44px] tracking-[-0.72px] md:text-[48px] md:leading-[58px] md:tracking-[-0.96px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px] w-full">
                  {eventData.title}
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
                  <Button
                    icon={TicketIcon}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    COMPRAR TICKETS
                  </Button>

                  <Button
                    icon={CalendarAddIcon}
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto bg-cream border-red-primary text-red-primary hover:bg-cream/90"
                  >
                    AÑADIR A CALENDARIO
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Information Section */}
        <section className="px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="max-w-[732px]">
            {/* Event Information Grid */}
            {eventData.isOnline ? (
              // Online Event Grid - 3 rows, 2 columns
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-4 md:gap-y-8 mb-10">
                {/* Row 1: Date */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    FECHA
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.date}
                  </span>
                </div>

                {/* Row 1: Time */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    HORA INICIO
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.time}
                  </span>
                </div>

                {/* Row 2: Price */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    PRECIO
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.price}
                  </span>
                </div>

                {/* Row 2: Age Limit */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    MAYORÍA DE EDAD?
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.ageLimit}
                  </span>
                </div>

                {/* Row 3: Online Event Link */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    EVENTO ONLINE
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.onlineLink}
                  </span>
                </div>
              </div>
            ) : (
              // Presencial Event Grid - Original layout
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-4 md:gap-y-8 mb-10">
                {/* Date */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    FECHA
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.date}
                  </span>
                </div>

                {/* Time */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    HORA INICIO
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.time}
                  </span>
                </div>

                {/* Price */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    PRECIO
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.price}
                  </span>
                </div>

                {/* Age Limit */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    MAYORÍA DE EDAD?
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.ageLimit}
                  </span>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    DÓNDE?
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.location}
                  </span>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    DIRECCIÓN
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.address}
                  </span>
                </div>

                {/* City */}
                <div className="flex flex-col gap-0">
                  <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                    CIUDAD
                  </span>
                  <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                    {eventData.city}
                  </span>
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-neutral-200 mb-4"></div>

            {/* Description */}
            <div className="mb-10">
              <p className="text-dark-green font-body text-lg font-normal leading-normal">
                {eventData.description}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-200 mb-8"></div>

            {/* Artists, Promoters, and Organizer Section */}
            <div className="flex flex-col gap-8">
              {/* Artists Tags */}
              <div className="flex flex-col gap-2">
                <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                  ARTISTAS
                </span>
                <div className="flex flex-wrap gap-4">
                  {[...Array(8)].map((_, index) => (
                    <Tag key={index} variant="artist">
                      [Artist]
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Promoters Tags */}
              <div className="flex flex-col gap-2">
                <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                  PROMOTORES / COLECTIVO
                </span>
                <div className="flex flex-wrap gap-4">
                  {[...Array(8)].map((_, index) => (
                    <Tag key={index} variant="promoter">
                      [Promotor]
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Organizer Link */}
              <div className="flex flex-col gap-0">
                <span className="text-neutral-700 font-body text-base font-normal leading-6 uppercase">
                  CONOCE MÁS SOBRE EL ORGANIZADOR
                </span>
                <span className="text-dark-green font-body text-[22px] font-normal leading-[30px] uppercase">
                  [LINK]
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="px-4 sm:px-8 lg:px-12 pb-12 lg:pb-16">
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
