import { NavBar } from "@/components/NavBar";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";

const ComoPublicar = () => {
  // Event type badges that will float across the screen
  const eventTypes = [
    "CONCIERTO",
    "FIESTA",
    "FESTIVAL",
    "SESIÓN DE ESCUCHA",
    "JAM SESSION",
    "ACÚSTICO",
    "EVENTO HÍBRIDO",
    "FERIA",
    "SHOWCASE",
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <NavBar activePage="como-publicar" />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] bg-dark-green overflow-hidden w-full">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e27f1251a01a3ff95d783233be63183ca32e7a6e?width=4952"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover scale-150 z-0"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-x-0 bottom-0 h-[476px] bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute inset-x-0 top-0 h-[236px] bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-between h-full py-4">
          {/* Top Section - Floating Badges */}
          <div className="w-full h-10 flex items-center overflow-hidden relative z-30 px-4 md:px-8 lg:px-12">
            {/* Animated Badge Strip */}
            <div className="flex items-center gap-1.5 whitespace-nowrap animate-scroll-left">
              {/* Create a seamless loop by duplicating the array */}
              {[...eventTypes, ...eventTypes].map((type, index) => (
                <Badge key={index} color="neutral" className="flex-shrink-0">
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bottom Section - Logo and Tagline */}
          <div className="flex flex-col items-center gap-10 w-full">
            {/* La Curaduria Logo - Container Margins */}
            <div className="w-full px-[26px] md:px-8 lg:px-12">
              <svg
                viewBox="0 0 1443 197"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M169.509 56.3926H68.283C61.7685 56.3926 56.4987 61.6657 56.4987 68.1548V112.785H101.849C108.019 112.785 113.011 117.781 113.011 123.926V169.191H56.5119C25.29 169.191 0 143.948 0 112.798V56.4058C0 25.2425 25.3032 0 56.4987 0H169.509C200.705 0 226.008 25.2557 226.008 56.3926H169.496H169.509ZM225.77 56.5247H226.021V112.917C194.826 112.917 169.522 138.173 169.522 169.31H112.891C112.891 107.023 163.379 56.6305 225.783 56.5115L225.77 56.5247Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M222.274 196.152C239.159 196.152 252.847 182.489 252.847 165.636C252.847 148.782 239.159 135.12 222.274 135.12C205.389 135.12 191.701 148.782 191.701 165.636C191.701 182.489 205.389 196.152 222.274 196.152Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M343.348 93.1858H281.831V1.09692H312.59V62.4983H404.865C404.865 79.4544 391.094 93.1991 374.106 93.1991H343.348V93.1858Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M504.449 1.09684H535.208V93.199H504.449V62.4983C504.449 79.4544 490.679 93.199 473.691 93.199H412.174V62.4983C412.174 28.5068 439.781 1.03076 473.757 1.03076H504.515L504.449 1.11006V1.09684ZM504.529 62.4983V31.7976H473.77C456.782 31.7976 443.012 45.5422 443.012 62.4983H504.529Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M343.388 164.354H404.865V195.041H343.388C309.412 195.041 281.831 167.526 281.831 133.6C281.831 116.618 295.615 102.913 312.576 102.913H404.799C404.799 119.895 391.015 133.6 374.053 133.6H312.576L312.642 133.666C312.642 150.649 326.426 164.354 343.388 164.354Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M412.188 133.64V102.939H442.946V133.64C442.946 150.596 456.716 164.341 473.704 164.341H504.463V102.939H535.221V195.041H473.704L473.784 195.121C439.808 195.121 412.201 167.645 412.201 133.653L412.188 133.64Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M573.408 102.992H634.885C651.9 102.992 665.63 116.75 665.63 133.68C665.63 150.609 651.847 164.367 634.885 164.367H604.14C587.125 164.367 573.395 178.125 573.395 195.055H542.649C542.649 161.142 570.217 133.614 604.206 133.614H542.729V102.926L542.663 102.992H573.408ZM665.683 195.107H634.938V164.42C651.953 164.42 665.683 178.178 665.683 195.107Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M765.281 102.939H796.04V195.041H765.281V164.341C765.281 181.297 751.511 195.041 734.523 195.041H673.006V164.341C673.006 130.349 700.613 102.873 734.589 102.873H765.347L765.281 102.952V102.939ZM765.347 164.341V133.64H734.589C717.601 133.64 703.831 147.384 703.831 164.341H765.347Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M834.12 102.926H864.865C898.855 102.926 926.422 130.428 926.422 164.367C926.422 181.363 912.638 195.055 895.677 195.055H803.441V102.992L803.375 102.926H834.12ZM834.173 133.614V164.301H895.65C895.65 147.305 881.88 133.614 864.905 133.614H834.16H834.173Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M928.805 133.64V102.939H959.563V133.64C959.563 150.596 973.334 164.341 990.322 164.341H1021.08V102.939H1051.84V195.041H990.322L990.401 195.121C956.425 195.121 928.818 167.645 928.818 133.653L928.805 133.64Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M1089.89 102.992H1151.37C1168.38 102.992 1182.12 116.75 1182.12 133.68C1182.12 150.609 1168.33 164.367 1151.37 164.367H1120.63C1103.61 164.367 1089.88 178.125 1089.88 195.055H1059.13C1059.13 161.142 1086.7 133.614 1120.69 133.614H1059.21V102.926L1059.15 102.992H1089.89ZM1182.18 195.107H1151.44V164.42C1168.45 164.42 1182.18 178.178 1182.18 195.107Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M1220.37 195.041H1189.62V164.354H1251.1V133.666H1220.35C1203.39 133.666 1189.61 119.975 1189.61 102.979H1281.9V164.341H1312.64V195.028H1220.35L1220.37 195.041Z"
                  fill="#FFFFF6"
                />
                <path
                  d="M1412.24 102.939H1443V195.041H1412.24V164.341C1412.24 181.297 1398.47 195.041 1381.48 195.041H1319.97V164.341C1319.97 130.349 1347.57 102.873 1381.55 102.873H1412.31L1412.24 102.952V102.939ZM1412.32 164.341V133.64H1381.56C1364.57 133.64 1350.8 147.384 1350.8 164.341H1412.32Z"
                  fill="#FFFFF6"
                />
              </svg>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-5 px-4 md:px-8 lg:px-12">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <h1 className="text-white font-body text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-8 tracking-[-0.56px] text-center">
                UN LENTE PARA EL ARTE
              </h1>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="bg-[#FFFFF6] py-12 px-4 md:px-[32px] lg:px-[48px]">
        <div className="space-y-10 md:space-y-16 lg:space-y-24">
          {/* Intro Section - PARTICIPA EN LA CARTELERA */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 md:gap-8 lg:gap-12">
            <div className="flex flex-col max-w-2xl gap-3">
              <h2 className="text-neutral-800 font-display text-[54px] leading-normal tracking-[-1.08px] md:text-[54px] md:leading-normal md:tracking-[-1.08px] lg:text-[80px] lg:leading-[90px] lg:tracking-[-1.6px] font-bold">
                PARTICIPA EN LA CARTELERA
              </h2>
              <p className="text-neutral-900 font-body text-[22px] leading-[30px] md:text-[22px] md:leading-[30px] lg:text-[22px] lg:leading-[30px] font-normal max-w-[520px]">
                Publica tus eventos en una cartelera variada, donde cada
                propuesta pasa por criterios editoriales que garantizan calidad
                y relevancia.
              </p>
            </div>
            <div className="lg:w-[545px] lg:h-[350px] flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/32810712a3b8f3d0e49253eeade67a95ed7022e3?width=748"
                alt="Comparte tu Evento Cultural"
                className="w-full h-auto lg:w-[566px] lg:h-[430px] object-cover"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-700 opacity-[0.08]"></div>

          {/* QUÉ BUSCAMOS Section and Badge Group Container */}
          <div className="w-full flex flex-col gap-4">
            {/* QU�� BUSCAMOS Section */}
            <div className="relative rounded-2xl bg-neutral-900 py-10 px-4 md:py-20 md:px-8 lg:py-20 lg:px-8 overflow-hidden flex flex-col justify-end items-start gap-10">
              {/* Background Image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/452f09c4c88a88d6749fd9c0ff2525416357dda5?width=2310"
                alt="Background"
                className="absolute right-0 top-0 w-[1155px] h-[1155px] object-cover -translate-x-[406px] md:right-0 md:-bottom-[100px] md:w-[708px] md:h-[708px] md:translate-x-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 from-50% to-transparent rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10 w-full space-y-10">
                <h3 className="text-white font-display text-[30px] leading-[38px] tracking-[-0.6px] md:text-[30px] md:leading-[38px] md:tracking-[-0.6px] lg:text-[48px] lg:leading-[60px] lg:tracking-[-0.96px] font-bold">
                  ¿QUÉ BUSCAMOS?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-[23px]">
                  {/* Música Card */}
                  <div className="bg-neutral-800 rounded-xl py-6 px-5 flex flex-col justify-end gap-4 h-auto min-h-[200px] md:h-[282px]">
                    <svg
                      className="w-12 h-12 text-cream"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M19.5 37.5C19.5 40.2614 16.8137 42.5 13.5 42.5C10.1863 42.5 7.5 40.2614 7.5 37.5C7.5 34.7386 10.1863 32.5 13.5 32.5C16.8137 32.5 19.5 34.7386 19.5 37.5ZM19.5 37.5V11.5L40.5044 5.5V31.5M40.5044 31.5C40.5044 34.2614 37.8181 36.5 34.5044 36.5C31.1907 36.5 28.5044 34.2614 28.5044 31.5C28.5044 28.7386 31.1907 26.5 34.5044 26.5C37.8181 26.5 40.5044 28.7386 40.5044 31.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4 className="text-cream font-body text-[24px] leading-[32px] md:text-[24px] md:leading-[32px] lg:text-[22px] lg:leading-[30px] font-bold">
                      Música
                    </h4>
                    <p className="text-white font-body text-lg font-normal">
                      Propuestas con alta participación musical, desde fiestas y
                      conciertos íntimos hasta grandes festivales.
                    </p>
                  </div>

                  {/* Historias Card */}
                  <div className="bg-neutral-800 rounded-xl py-6 px-5 flex flex-col justify-end gap-4 h-auto min-h-[200px] md:h-[282px]">
                    <svg
                      className="w-8 h-8 text-cream"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M11.0837 4.37037H7.75033C7.01395 4.37037 6.41699 4.96732 6.41699 5.7037V26.3333C6.41699 27.0697 7.01395 27.6667 7.75033 27.6667H25.7503C26.4867 27.6667 27.0837 27.0697 27.0837 26.3333V5.7037C27.0837 4.96732 26.4867 4.37037 25.7503 4.37037H22.417M11.0837 4.37037H16.7503M11.0837 4.37037V5.66667M11.0837 4.37037V3M16.7503 4.37037H22.417M16.7503 4.37037V5.66667M16.7503 4.37037V3M22.417 4.37037V5.66667M22.417 4.37037V3M12.417 13H21.0837M12.417 18.3333H18.417"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4 className="text-cream font-body text-[24px] leading-[32px] md:text-[24px] md:leading-[32px] lg:text-[22px] lg:leading-[30px] font-bold">
                      Historias
                    </h4>
                    <p className="text-white font-body text-lg font-normal">
                      Actividades que tengan historias que contar y que generen
                      nuevas narrativas.
                    </p>
                  </div>

                  {/* Comunidades Card */}
                  <div className="bg-neutral-800 rounded-xl py-6 px-5 flex flex-col justify-end gap-4 h-auto min-h-[200px] md:h-[282px]">
                    <svg
                      className="w-8 h-8 text-cream"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M18.1667 17.7933C17.63 17.71 17.0738 17.6667 16.5 17.6667C10.9131 17.6667 6.99192 21.7673 6.5 27.0001H16.8471M24.5 28.3705C24.8611 28.3705 28.8333 26.3242 28.8333 23.5556C28.8333 21.6297 27.6296 20.6667 26.4259 20.6667C25.2222 20.6667 24.5 21.389 24.5 21.389C24.5 21.389 23.7778 20.6667 22.5741 20.6667C21.3704 20.6667 20.1667 21.6297 20.1667 23.5556C20.1667 26.3242 24.1389 28.3705 24.5 28.3705ZM21.5 8.66675C21.5 11.4282 19.2614 13.6667 16.5 13.6667C13.7386 13.6667 11.5 11.4282 11.5 8.66675C11.5 5.90532 13.7386 3.66675 16.5 3.66675C19.2614 3.66675 21.5 5.90532 21.5 8.66675Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4 className="text-cream font-body text-[24px] leading-[32px] md:text-[24px] md:leading-[32px] lg:text-[22px] lg:leading-[30px] font-bold">
                      Comunidades
                    </h4>
                    <p className="text-white font-body text-lg font-normal">
                      Encuentros que fortalezcan lazos y construyan comunidad en
                      torno a la música.
                    </p>
                  </div>

                  {/* Cubrimientos Card */}
                  <div className="bg-neutral-800 rounded-xl py-6 px-5 flex flex-col justify-end gap-4 h-auto min-h-[200px] md:h-[282px]">
                    <svg
                      className="w-8 h-8 text-cream"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.0406 15.9998C7.13442 21.8835 11.7696 24.6664 16.2503 24.6665C20.7311 24.6665 25.3662 21.8836 28.4601 15.9999C25.3662 10.1163 20.7311 7.33329 16.2503 7.33325C11.7695 7.33322 7.13442 10.1161 4.0406 15.9998ZM16.2503 5.33325C21.7726 5.33329 27.1328 8.85403 30.4783 15.5532C30.6188 15.8345 30.6188 16.1654 30.4783 16.4467C27.1328 23.1459 21.7726 26.6665 16.2503 26.6665C10.728 26.6664 5.36786 23.1457 2.02235 16.4466C1.88187 16.1653 1.88187 15.8343 2.02235 15.553C5.36786 8.85387 10.728 5.33321 16.2503 5.33325Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.5719 14.0234L15.654 11.8592C15.8997 11.3678 16.6009 11.3678 16.8466 11.8592L17.9287 14.0234C17.9932 14.1524 18.0978 14.257 18.2269 14.3215L20.3911 15.4036C20.8825 15.6493 20.8825 16.3505 20.3911 16.5962L18.2269 17.6783C18.0978 17.7428 17.9932 17.8474 17.9287 17.9765L16.8466 20.1407C16.6009 20.632 15.8997 20.632 15.654 20.1407L14.5719 17.9765C14.5074 17.8474 14.4028 17.7428 14.2738 17.6783L12.1096 16.5962C11.6182 16.3505 11.6182 15.6493 12.1096 15.4036L14.2738 14.3215C14.4028 14.257 14.5074 14.1524 14.5719 14.0234Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h4 className="text-cream font-body text-[24px] leading-[32px] md:text-[24px] md:leading-[32px] lg:text-[22px] lg:leading-[30px] font-bold">
                      Cubrimientos
                    </h4>
                    <p className="text-white font-body text-lg font-normal">
                      Propuestas que podamos documentar y compartir en la
                      plataforma, ampliando su alcance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Group */}
            <div className="flex flex-col gap-6 md:flex-col md:gap-6 lg:flex-row lg:gap-6">
              <div className="flex items-center gap-4 bg-neutral-100 rounded-lg p-2 flex-1">
                <svg
                  className="w-8 h-8 text-neutral-900 flex-shrink-0"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M3.3192 13.494L5.24863 24.4363L13.486 22.9839M3.3192 13.494L2.35449 8.02288L20.081 4.89722L20.9447 9.79541M3.3192 13.494L17.667 10.9641M21.3337 15.6668V18.6668L24.0003 21.3335M29.667 18.6668C29.667 23.2692 25.936 27.0001 21.3337 27.0001C16.7313 27.0001 13.0003 23.2692 13.0003 18.6668C13.0003 14.0644 16.7313 10.3335 21.3337 10.3335C25.936 10.3335 29.667 14.0644 29.667 18.6668Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-neutral-800 font-body text-sm font-normal leading-[18px] uppercase tracking-wide">
                  Eventos en Colombia desde el 24 de agosto.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-neutral-100 rounded-lg p-2 flex-1">
                <svg
                  className="w-8 h-8 text-neutral-900 flex-shrink-0"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M20.0003 12.6667L14.0003 20.0001L11.3337 17.3334M28.3337 16.0001C28.3337 22.8116 22.8118 28.3334 16.0003 28.3334C9.18881 28.3334 3.66699 22.8116 3.66699 16.0001C3.66699 9.18857 9.18881 3.66675 16.0003 3.66675C22.8118 3.66675 28.3337 9.18857 28.3337 16.0001Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-neutral-800 font-body text-sm font-normal leading-[18px] uppercase tracking-wide">
                  Dejamos por fuera las actividades que no estén alineadas con
                  nuestro enfoque
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-700 opacity-[0.08]"></div>

          {/* CÓMO FUNCIONA Section */}
          <div className="space-y-8">
            <h3 className="text-neutral-900 font-display text-[30px] leading-[38px] tracking-[-0.6px] md:text-[30px] md:leading-[38px] md:tracking-[-0.6px] lg:text-[48px] lg:leading-[60px] lg:tracking-[-0.96px] font-bold">
              ��CÓMO FUNCIONA?
            </h3>

            <div className="flex flex-col gap-0 md:grid md:grid-cols-1 md:gap-0 lg:grid-cols-2 lg:gap-0">
              {/* Card 1 - Verde */}
              <div className="bg-verde-200 rounded-2xl py-20 px-4 md:pt-20 md:px-4 md:pb-4 lg:p-5 h-auto min-h-[320px] md:h-[264px] flex flex-col justify-end md:flex-col md:items-start md:justify-end lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-2 md:flex-col md:items-start md:gap-2 lg:flex-row lg:items-end lg:justify-between w-full">
                  <div className="text-neutral-900 font-display text-[40px] leading-[40px] tracking-[-0.8px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px] font-semibold">
                    01
                  </div>
                  <div className="flex flex-col gap-3 max-w-none w-full md:max-w-none md:w-full lg:max-w-[282px]">
                    <h4 className="text-neutral-900 font-body text-[24px] leading-[30px] md:text-[24px] md:leading-[30px] lg:text-[22px] lg:leading-[30px] font-bold">
                      Completa el formulario
                    </h4>
                    <p className="text-neutral-900 font-body text-lg leading-6 font-normal">
                      Recibe inscripciones, interacciones y construye una
                      comunidad alrededor de tu trabajo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Coral */}
              <div className="bg-rojo-200 rounded-2xl py-20 px-4 md:pt-20 md:px-4 md:pb-4 lg:p-5 h-auto min-h-[320px] md:h-[264px] flex flex-col justify-end md:flex-col md:items-start md:justify-end lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-2 md:flex-col md:items-start md:gap-2 lg:flex-row lg:items-end lg:justify-between w-full">
                  <div className="text-neutral-900 font-display text-[40px] leading-[40px] tracking-[-0.8px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px] font-semibold">
                    02
                  </div>
                  <div className="flex flex-col gap-3 max-w-none w-full md:max-w-none md:w-full lg:max-w-[282px]">
                    <h4 className="text-neutral-900 font-body text-[24px] leading-[30px] md:text-[24px] md:leading-[30px] lg:text-[22px] lg:leading-[30px] font-bold">
                      Revisión editorial
                    </h4>
                    <p className="text-neutral-900 font-body text-lg leading-6 font-normal">
                      Recibe inscripciones, interacciones y construye una
                      comunidad alrededor de tu trabajo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Azul */}
              <div className="bg-azul-200 rounded-2xl py-20 px-4 md:pt-20 md:px-4 md:pb-4 lg:p-5 h-auto min-h-[320px] md:h-[264px] flex flex-col justify-end md:flex-col md:items-start md:justify-end lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-2 md:flex-col md:items-start md:gap-2 lg:flex-row lg:items-end lg:justify-between w-full">
                  <div className="text-neutral-900 font-display text-[40px] leading-[40px] tracking-[-0.8px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px] font-semibold">
                    03
                  </div>
                  <div className="flex flex-col gap-3 max-w-none w-full md:max-w-none md:w-full lg:max-w-[282px]">
                    <h4 className="text-neutral-900 font-body text-[22px] leading-[30px] md:text-[22px] md:leading-[30px] lg:text-[22px] lg:leading-[30px] font-bold">
                      Publicación y Promoción
                    </h4>
                    <p className="text-neutral-900 font-body text-lg leading-6 font-normal">
                      Si es aprobada, la actividad se suma a la cartelera y
                      queda visible en el explorador de La Curaduría:
                      lacuraduria.net
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Amarillo */}
              <div className="bg-amarillo-200 rounded-2xl py-20 px-4 md:pt-20 md:px-4 md:pb-4 lg:p-5 h-auto min-h-[320px] md:h-[264px] flex flex-col justify-end md:flex-col md:items-start md:justify-end lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-2 md:flex-col md:items-start md:gap-2 lg:flex-row lg:items-end lg:justify-between w-full">
                  <div className="text-neutral-900 font-display text-[40px] leading-[40px] tracking-[-0.8px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px] font-semibold">
                    04
                  </div>
                  <div className="flex flex-col gap-3 max-w-none w-full md:max-w-none md:w-full lg:max-w-[282px]">
                    <h4 className="text-neutral-900 font-body text-[22px] leading-[30px] md:text-[24px] md:leading-[30px] lg:text-[22px] lg:leading-[30px] font-bold">
                      Difusión y cubrimiento
                    </h4>
                    <p className="text-neutral-900 font-body text-lg leading-6 font-normal">
                      Amplificamos el evento en nuestros canales y conectamos
                      públicos que asistan y medios que cubran.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-700 opacity-[0.08]"></div>

          {/* POR QUÉ PUBLICAR Section */}
          <div className="flex flex-col gap-4 md:gap-8 lg:flex-row lg:justify-between lg:items-start w-full">
            <h3 className="w-full lg:w-[438px] text-neutral-900 font-display text-[30px] leading-[38px] tracking-[-0.6px] md:text-[30px] md:leading-[38px] md:tracking-[-0.6px] lg:text-[48px] lg:leading-[60px] lg:tracking-[-0.96px] font-bold">
              ¿POR QUÉ PUBLICAR?
            </h3>

            <div className="flex flex-col items-start gap-8 flex-1 lg:flex-auto">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <svg
                  className="w-6 h-6 text-neutral-900"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.7783 4.22184L4.22197 19.7782M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM18.5163 18.516C17.3167 19.7156 13.427 17.7707 9.82826 14.172C6.22955 10.5733 4.28467 6.68352 5.48424 5.48395C6.68381 4.28438 10.5736 6.22927 14.1723 9.82798C17.771 13.4267 19.7159 17.3165 18.5163 18.516Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className="text-neutral-900 font-body text-[22px] leading-[30px] font-bold">
                  Conecta con audiencias, medios y patrocinadores.
                </h4>
              </div>

              <div className="w-full h-px bg-neutral-900 opacity-10"></div>

              <div className="flex flex-col items-start gap-2.5">
                <svg
                  className="w-6 h-6 text-neutral-900"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2.48916 10.1205L3.93623 18.3272L10.1143 17.2378M2.48916 10.1205L1.76562 6.0171L15.0605 3.67285L15.7083 7.3465M2.48916 10.1205L13.25 8.22304M16 11.75V14L18 16M22.25 14C22.25 17.4518 19.4518 20.25 16 20.25C12.5482 20.25 9.75 17.4518 9.75 14C9.75 10.5482 12.5482 7.75003 16 7.75003C19.4518 7.75003 22.25 10.5482 22.25 14Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className="text-neutral-900 font-body text-[22px] leading-[30px] font-bold">
                  Haz parte de un calendario tecnológico y exclusivo.
                </h4>
              </div>

              <div className="w-full h-px bg-neutral-900 opacity-10"></div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <svg
                  className="w-6 h-6 text-neutral-900"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.25 6.75V2.75H2.75V17.25H6.75M9.32626 21.25C9.78713 18.9642 11.7046 17.25 14 17.25C16.2954 17.25 18.2129 18.9642 18.6737 21.25M9.32626 21.25H6.75V6.75H21.25V21.25H18.6737M9.32626 21.25H18.6737M16.25 12.5C16.25 13.7426 15.2426 14.75 14 14.75C12.7574 14.75 11.75 13.7426 11.75 12.5C11.75 11.2574 12.7574 10.25 14 10.25C15.2426 10.25 16.25 11.2574 16.25 12.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className="text-neutral-900 font-body text-[22px] leading-[30px] font-bold">
                  Construye comunidad para hacer sostenible el proyecto.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComoPublicar;
