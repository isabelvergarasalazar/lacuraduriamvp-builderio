import { useNavigate } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";

const FeaturedEventsSection = () => {
  const navigate = useNavigate();

  const events = [
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

  const handleEventClick = (event: any) => {
    // Generate a slug from the event title and add an ID
    const slug = event.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
    navigate(`/cartelera/${slug}-1`);
  };

  const handleViewComplete = () => {
    navigate("/cartelera");
  };

  return (
    <FeaturedEvents
      events={events}
      onViewComplete={handleViewComplete}
      onEventClick={handleEventClick}
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
    <div className="min-h-screen bg-cream">
      <NavBar />
      <main className="pb-8 sm:pb-12 lg:pb-16 space-y-32">
        <HeroSection />
        <FeaturedEventsSection />
        <div className="px-4 sm:px-8 lg:px-12">
          <MissionSection />
        </div>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
