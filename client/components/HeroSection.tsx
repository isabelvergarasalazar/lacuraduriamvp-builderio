export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-end items-start gap-8 w-full h-[734px] px-4 sm:px-8 lg:px-12 relative">
      {/* Hero Background */}
      <div className="absolute inset-0 w-full h-full -mx-4 sm:-mx-8 lg:-mx-12">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a484871b74618d95268be70f8b1c7c96e03d4040?width=3024"
          alt="Hero Background"
          className="w-full h-[716px] object-cover absolute top-[18px] left-0"
        />
        
        {/* Gradient Overlay */}
        <div 
          className="w-full h-full absolute top-0 left-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 246, 0.00) 35.28%, #FFFFF6 80%)'
          }}
        />
      </div>

      {/* Tagline Section */}
      <div className="flex justify-between items-center w-full py-5 relative z-10">
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
    </section>
  );
};
