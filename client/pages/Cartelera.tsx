import { NavBar } from "@/components/NavBar";
import { EventCard } from "@/components/EventCard";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

// Sample event data from the Figma design
const sampleEvents = [
  {
    id: 1,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/21e474626c450344e6f334c399518b37714123d2?width=640",
    title: "Nombre de evento a dos líneas de texto",
    eventType: "[TIPO EVENTO]",
    location: "Video Club",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 2,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/728a061671c65baf8bd4b7daed622a758b6374ba?width=640",
    title: "EXXOTIKA CLUB presenta DISCOQUETTE Vol. 2",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 3,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/00d075fecf595690a69b785815d479ff077912f0?width=640",
    title: "Contrafrecuencias",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 4,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8b2d97ec2f6e9c9232696f7f5b7d332d58a20a00?width=640",
    title: "Curado x Valesuchi + Julianna + DJ+1",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 5,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/21e474626c450344e6f334c399518b37714123d2?width=640",
    title: "Nombre de evento a dos líneas de texto",
    eventType: "[TIPO EVENTO]",
    location: "Video Club",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 6,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/00d075fecf595690a69b785815d479ff077912f0?width=640",
    title: "Contrafrecuencias",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 7,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8b2d97ec2f6e9c9232696f7f5b7d332d58a20a00?width=640",
    title: "Curado x Valesuchi + Julianna + DJ+1",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 8,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/728a061671c65baf8bd4b7daed622a758b6374ba?width=640",
    title: "EXXOTIKA CLUB presenta DISCOQUETTE Vol. 2",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 9,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/21e474626c450344e6f334c399518b37714123d2?width=640",
    title: "Nombre de evento a dos líneas de texto",
    eventType: "[TIPO EVENTO]",
    location: "Video Club",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 10,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/728a061671c65baf8bd4b7daed622a758b6374ba?width=640",
    title: "EXXOTIKA CLUB presenta DISCOQUETTE Vol. 2",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 11,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/00d075fecf595690a69b785815d479ff077912f0?width=640",
    title: "Contrafrecuencias",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
  {
    id: 12,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8b2d97ec2f6e9c9232696f7f5b7d332d58a20a00?width=640",
    title: "Curado x Valesuchi + Julianna + DJ+1",
    eventType: "[TIPO EVENTO]",
    location: "[Nombre del lugar]",
    date: "[Día, 00 Mes, Año]",
    time: "[00:00 P.M]",
  },
];

const Cartelera = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <NavBar activePage="cartelera" />

      {/* Main Content */}
      <main className="w-full">
        {/* Header Section */}
        <section className="px-4 md:px-8 xl:px-[48px] pt-12 pb-16 md:pt-12 md:pb-20 lg:pt-[48px] lg:pb-[80px]">
          <div className="flex flex-col items-start gap-2 md:gap-2 lg:gap-2">
            <h1 className="font-display font-bold text-dark-green self-stretch text-[48px] leading-[54px] tracking-[-0.96px] md:text-[60px] md:leading-[72px] md:tracking-[-1.2px] lg:text-[80px] lg:leading-[90px] lg:tracking-[-1.6px]">
              CARTELERA DE EVENTOS
            </h1>
            <p className="font-body font-normal text-dark-green self-stretch text-[22px] leading-[28px] tracking-[-0.44px] md:text-[24px] md:leading-[30px] md:tracking-[-0.48px] lg:text-[28px] lg:leading-[32px] lg:tracking-[-0.56px]">
              Somos una una guía amplia, diversa y selecta de eventos.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="px-4 md:px-8 xl:px-[48px] pb-16 md:pb-20 lg:pb-[80px]">
          <div className="grid gap-10 md:gap-12 lg:gap-10 xl:gap-10 justify-items-center" style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(276px, 1fr))',
            '@media (min-width: 768px)': {
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
            },
            '@media (min-width: 1024px)': {
              gridTemplateColumns: 'repeat(auto-fit, minmax(355px, 1fr))'
            }
          }}>
            {sampleEvents.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                eventType={event.eventType}
                location={event.location}
                date={event.date}
                time={event.time}
                onClick={() => {
                  // Handle event click
                  console.log("Event clicked:", event.title);
                }}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cartelera;
