import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/Button";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { ChevronDown, MapPin, Banknote, Calendar, Clock, MousePointer } from "lucide-react";

const PublicarEvento = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    eventType: "",
    format: "presencial",
    location: "",
    city: "Bogotá D.C",
    venueName: "",
    price: "",
    isFreeCb: false,
    ticketLink: "",
    date: "",
    time: "",
    ageLimit: "",
    artists: [],
    promoters: [],
    organizerLink: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const NewspaperIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1663 3.16663H1.83301V12.8333H14.1663V3.16663Z" stroke="#171C14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.16699 10.1667H11.8337M8.50033 8.00004H11.8337M8.50033 5.83337H11.8337" stroke="#171C14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.16699 5.83337V8.00004L4.16699 5.83337V8.00004" stroke="#171C14" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CloudUploadIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 19.0615C21.1627 18.4544 22.75 16.4502 22.75 14.0714C22.75 11.2114 20.4555 8.89286 17.625 8.89286C17.0661 8.89286 16.5281 8.98326 16.0245 9.15037C14.9289 6.56294 12.3865 4.75 9.425 4.75C5.46236 4.75 2.25 7.99594 2.25 12C2.25 14.7508 3.76609 17.1437 6 18.3722M15 16.25L12.5 13.75L10 16.25M12.5 20V14.25" stroke="#64685F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main className="flex flex-col">
        <div className="flex flex-col items-center px-4 md:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start w-full max-w-7xl gap-24">
            
            {/* Left Column - Form */}
            <div className="w-full lg:w-[700px] lg:max-w-[700px] flex flex-col gap-16">
              
              {/* Header */}
              <div className="flex flex-col gap-3">
                <h1 className="text-dark-green font-display font-bold text-[48px] md:text-[64px] lg:text-[80px] leading-[54px] md:leading-[72px] lg:leading-[90px] tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px]">
                  PUBLICA TU EVENTO EN LA CURADURÍA
                </h1>
                <p className="text-dark-green font-body text-lg md:text-xl lg:text-2xl font-normal leading-[22px] md:leading-[24px] lg:leading-[30px]">
                  Súmate a nuestra cartelera y conecta con audiencias, medios y patrocinadores. Completa este formulario para que tu propuesta pase por nuestro proceso editorial y se integre a la guía.
                </p>
              </div>

              {/* Event Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-20">
                
                {/* General Information Section */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center justify-center p-1 rounded-full bg-neutral-100">
                      <NewspaperIcon />
                    </div>
                    <h2 className="text-neutral-700 font-body text-lg font-normal leading-6 uppercase">
                      INFORMACIÓN GENERAL
                    </h2>
                  </div>

                  {/* Event Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                      Nombre Evento
                    </label>
                    <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                      <input
                        type="text"
                        value={formData.eventName}
                        onChange={(e) => handleInputChange("eventName", e.target.value)}
                        placeholder="Digita el nombre, la serie o el artista"
                        className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                      />
                    </div>
                  </div>

                  {/* Event Description */}
                  <div className="flex flex-col gap-2">
                    <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                      Descripción del Evento
                    </label>
                    <div className="flex items-start gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200 min-h-[120px]">
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Describe tu evento..."
                        className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700 resize-none h-[80px]"
                      />
                    </div>
                    <p className="text-neutral-700 font-body text-sm font-normal leading-[18px]">
                      Incluye detalles sobre qué pueden esperar los asistentes, el ambiente, artistas, y cualquier información relevante.
                    </p>
                  </div>

                  {/* Image Upload */}
                  <div className="flex flex-col gap-2">
                    <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                      Imagen del Evento
                    </label>
                    <div className="flex flex-col items-center justify-center gap-2.5 py-4 px-4 border-[1.5px] border-neutral-200 rounded-none min-h-[120px]">
                      <CloudUploadIcon />
                      <p className="text-center">
                        <span className="text-neutral-600 font-body text-lg font-medium">Arrastra tu archivo. </span>
                        <span className="text-red-primary font-body text-lg font-medium underline cursor-pointer">
                          O selecciona desde tu dispositivo
                        </span>
                      </p>
                    </div>
                    <p className="text-neutral-700 font-body text-sm font-normal leading-[18px]">
                      Tamaño recomendado: 1080*1350px.
                    </p>
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                      TIPO DE EVENTO
                    </label>
                    <div className="flex items-center justify-between gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200 cursor-pointer">
                      <span className="text-neutral-700 font-body text-lg font-medium">
                        Selecciona un tipo de evento
                      </span>
                      <ChevronDown className="w-6 h-6 text-neutral-600" />
                    </div>
                    <p className="text-neutral-700 font-body text-sm font-normal leading-[18px]">
                      Selecciona la categoría que mejor describe tu evento
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-100"></div>

                {/* Details Section */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center justify-center p-1 rounded-full bg-neutral-100">
                      <NewspaperIcon />
                    </div>
                    <h2 className="text-neutral-700 font-body text-lg font-normal leading-6 uppercase">
                      DETALLES
                    </h2>
                  </div>

                  <div className="flex flex-col gap-5">
                    {/* Event Format */}
                    <div className="flex flex-col gap-2">
                      <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                        Formato del evento
                      </label>
                      <div className="flex items-center justify-between gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200 cursor-pointer">
                        <span className="text-neutral-700 font-body text-lg font-medium">
                          Presencial (Requiere dirección y ciudad)
                        </span>
                        <ChevronDown className="w-6 h-6 text-neutral-600" />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-2">
                      <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                        Ubicación (Nombre del Lugar y dirección Completa)
                      </label>
                      <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                        <MapPin className="w-6 h-6 text-neutral-600" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="Escribe la dirección"
                          className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                        />
                      </div>
                      <p className="text-neutral-700 font-body text-sm font-normal leading-[18px]">
                        Noche de House en el Club Felinas
                      </p>
                    </div>

                    {/* City */}
                    <div className="flex flex-col gap-2">
                      <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                        Ciudad
                      </label>
                      <div className="flex items-center justify-between gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200 cursor-pointer">
                        <span className="text-neutral-700 font-body text-lg font-medium">
                          Bogotá D.C
                        </span>
                        <ChevronDown className="w-6 h-6 text-neutral-600" />
                      </div>
                    </div>

                    {/* Venue Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                        NOMBRE DEL LUGAR
                      </label>
                      <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                        <input
                          type="text"
                          value={formData.venueName}
                          onChange={(e) => handleInputChange("venueName", e.target.value)}
                          placeholder='Digita el nombre del lugar, "Club Noche"'
                          className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Price and Ticket Link Row */}
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row items-start gap-7">
                      {/* Price */}
                      <div className="flex flex-col gap-2 flex-1">
                        <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                          Precio
                        </label>
                        <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                          <Banknote className="w-6 h-6 text-neutral-600" />
                          <input
                            type="text"
                            value={formData.price}
                            onChange={(e) => handleInputChange("price", e.target.value)}
                            placeholder="40.000"
                            className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                          />
                        </div>
                      </div>

                      {/* Ticket Link */}
                      <div className="flex flex-col gap-2 flex-1">
                        <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                          Link Compra de Entradas
                        </label>
                        <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                          <input
                            type="text"
                            value={formData.ticketLink}
                            onChange={(e) => handleInputChange("ticketLink", e.target.value)}
                            placeholder="https://www.tuboleta.com/eventos/"
                            className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Free Event Checkbox */}
                    <div className="flex items-center gap-1.5">
                      <div
                        className="flex items-center justify-center w-4 h-4 p-1 rounded bg-neutral-100 cursor-pointer"
                        onClick={() => handleInputChange("isFreeCb", !formData.isFreeCb)}
                      >
                        {formData.isFreeCb && (
                          <div className="w-2 h-2 bg-dark-green rounded"></div>
                        )}
                      </div>
                      <span className="text-dark-green font-body text-lg font-normal leading-6">
                        Este evento es gratuito.
                      </span>
                    </div>
                  </div>

                  {/* Date and Time Row */}
                  <div className="flex flex-col md:flex-row items-start gap-7">
                    {/* Date */}
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                        FECHA
                      </label>
                      <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                        <Calendar className="w-6 h-6 text-neutral-600" />
                        <input
                          type="text"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          placeholder="08 Agosto, 2025"
                          className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                        HORA DE INICIO
                      </label>
                      <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                        <Clock className="w-6 h-6 text-neutral-600" />
                        <input
                          type="text"
                          value={formData.time}
                          onChange={(e) => handleInputChange("time", e.target.value)}
                          placeholder="08:00 P.M"
                          className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Age Limit */}
                  <div className="flex flex-col gap-2">
                    <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                      HAY EDAD MÍNIMA PARA ASITIR A ESTE EVENTO?
                    </label>
                    <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                      <input
                        type="text"
                        value={formData.ageLimit}
                        onChange={(e) => handleInputChange("ageLimit", e.target.value)}
                        placeholder="18 Años"
                        className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                      />
                    </div>
                    <p className="text-neutral-700 font-body text-sm font-normal leading-[18px]">
                      Si tu evento es para todo público, deja este campo vacío. Si no, indica la edad mínima requerida.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-100"></div>

                {/* Artists and Organizers Section */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center justify-center p-1 rounded-full bg-neutral-100">
                      <NewspaperIcon />
                    </div>
                    <h2 className="text-neutral-700 font-body text-lg font-normal leading-6 uppercase">
                      ARTISTAS Y ORGANIZADORES
                    </h2>
                  </div>

                  {/* Artists */}
                  <div className="flex flex-col gap-2">
                    <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                      artistas participantes
                    </label>
                    <div className="flex items-center justify-between gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200 cursor-pointer">
                      <span className="text-neutral-700 font-body text-[22px] font-medium leading-[30px]">
                        Escribe el nombre del artista, selecciona o crea uno nuevo
                      </span>
                      <ChevronDown className="w-6 h-6 text-neutral-600" />
                    </div>
                    <p className="text-neutral-700 font-body text-sm font-normal leading-[18px]">
                      Selecciona artistas existentes o agrega nuevos escribiendo y presionando Enter
                    </p>
                  </div>

                  {/* Promoters */}
                  <div className="flex flex-col gap-2">
                    <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                      Nombre del Promotor / Colectivo
                    </label>
                    <div className="flex items-center justify-between gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200 cursor-pointer">
                      <span className="text-neutral-700 font-body text-[22px] font-medium leading-[30px]">
                        Escribe el nombre del promotor o colectivo, selecciona o crea uno nuevo
                      </span>
                      <ChevronDown className="w-6 h-6 text-neutral-600" />
                    </div>
                    <p className="text-neutral-700 font-body text-sm font-normal leading-[18px]">
                      El primer Promotor/Colectivo que añadas es el organizador principal del evento.
                    </p>
                  </div>

                  {/* Organizer Link */}
                  <div className="flex flex-col gap-2">
                    <label className="text-neutral-700 font-body text-sm font-normal leading-[18px] uppercase">
                      lINK DE PROMOTOR PRINCIPAL (WEBSITE, REDES SOCIALES, WHATSAPP)
                    </label>
                    <div className="flex items-center gap-2.5 py-2 px-1 border-b-[1.5px] border-neutral-200">
                      <input
                        type="text"
                        value={formData.organizerLink}
                        onChange={(e) => handleInputChange("organizerLink", e.target.value)}
                        placeholder="https://www.clubfelinas.com"
                        className="flex-1 text-neutral-700 font-body text-[22px] font-normal leading-[30px] bg-transparent border-none outline-none placeholder:text-neutral-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  icon={MousePointer}
                  className="w-full"
                  size="lg"
                >
                  ENVIAR EVENTO
                </Button>
              </form>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-[480px] lg:max-w-[480px] flex flex-col items-start gap-4 p-4 lg:p-10 rounded-xl bg-neutral-100 relative">
              {/* Decorative Image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/731555aeb53ec57c3795dbcc96e4a6315d906edb?width=320"
                alt="Decorative element"
                className="w-40 h-40 aspect-square absolute -top-6 -right-6"
              />
              
              <h3 className="text-dark-green font-display font-bold text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] md:leading-[34px] lg:leading-[38px] tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.6px] w-full">
                EVENTOS QUE BUSCAMOS
              </h3>

              <div className="flex flex-col gap-4 w-full">
                {/* Music Section */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-dark-green font-body text-lg font-bold">
                    Música
                  </h4>
                  <p className="text-neutral-800 font-body text-sm font-normal leading-[18px] uppercase">
                    Propuestas con alta participación musical, desde fiestas y conciertos íntimos hasta grandes festivales.
                  </p>
                </div>

                <div className="w-full h-px bg-dark-green opacity-10"></div>

                {/* Stories Section */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-dark-green font-body text-lg font-bold">
                    Historias
                  </h4>
                  <p className="text-neutral-800 font-body text-sm font-normal leading-[18px] uppercase">
                    Actividades que tengan historias que contar y que generen nuevas narrativas.
                  </p>
                </div>

                <div className="w-full h-px bg-dark-green opacity-10"></div>

                {/* Communities Section */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-dark-green font-body text-lg font-bold">
                    Comunidades
                  </h4>
                  <p className="text-neutral-800 font-body text-sm font-normal leading-[18px] uppercase">
                    Encuentros que fortalezcan lazos y construyan comunidad en torno a la música.
                  </p>
                </div>

                <div className="w-full h-px bg-dark-green opacity-10"></div>

                {/* Coverage Section */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-dark-green font-body text-lg font-bold">
                    Cubrimientos
                  </h4>
                  <p className="text-neutral-800 font-body text-sm font-normal leading-[18px] uppercase">
                    Propuestas que podamos documentar y compartir en la plataforma, ampliando su alcance.
                  </p>
                </div>

                <div className="w-full h-px bg-dark-green opacity-10"></div>

                {/* Info Badges */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center p-2 rounded-lg bg-neutral-75">
                    <p className="text-neutral-800 font-body text-sm font-normal leading-[18px] uppercase text-center flex-1">
                      Eventos en Colombia desde el 24 de agosto.
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-2 rounded-lg bg-neutral-75">
                    <p className="text-neutral-800 font-body text-sm font-normal leading-[18px] uppercase text-center flex-1">
                      Dejamos por fuera las actividades que no estén alineadas con nuestro enfoque
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PublicarEvento;
