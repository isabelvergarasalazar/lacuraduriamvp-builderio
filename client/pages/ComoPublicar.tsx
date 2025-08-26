import { NavBar } from "@/components/NavBar";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";

const ComoPublicar = () => {
  // Event type badges that will float across the screen
  const eventTypes = [
    "CONCIERTO", "FIESTA", "FESTIVAL", "SESIÓN DE ESCUCHA", "JAM SESSION", 
    "ACÚSTICO", "EVENTO HÍBRIDO", "FERIA", "SHOWCASE", "CONCIERTO", 
    "FIESTA", "FESTIVAL", "SESIÓN DE ESCUCHA", "JAM SESSION", "ACÚSTICO",
    "EVENTO HÍBRIDO", "FERIA", "SHOWCASE", "CONCIERTO", "FIESTA", 
    "FESTIVAL", "SESIÓN DE ESCUCHA", "JAM SESSION", "ACÚSTICO"
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <NavBar activePage="como-publicar" />

      {/* Hero Section */}
      <section className="relative h-[900px] bg-dark-green overflow-hidden">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e27f1251a01a3ff95d783233be63183ca32e7a6e?width=4952"
          alt="Background"
          className="absolute w-[2476px] h-[1393px] object-cover -left-[481px] -top-[246px] z-0"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-x-0 bottom-0 h-[476px] bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute inset-x-0 top-0 h-[236px] bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-between h-full px-8 py-4">
          {/* Top Section - Floating Badges */}
          <div className="w-full h-7 flex items-center overflow-hidden relative">
            {/* Animated Badge Strip */}
            <div className="flex items-center gap-1.5 animate-scroll-left whitespace-nowrap">
              {/* First set of badges */}
              {eventTypes.map((type, index) => (
                <Badge 
                  key={`first-${index}`}
                  color="neutral"
                  className="bg-dark-green bg-opacity-50 text-white flex-shrink-0"
                >
                  {type}
                </Badge>
              ))}
              {/* Duplicate set for seamless loop */}
              {eventTypes.map((type, index) => (
                <Badge 
                  key={`second-${index}`}
                  color="neutral"
                  className="bg-dark-green bg-opacity-50 text-white flex-shrink-0"
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bottom Section - Logo and Tagline */}
          <div className="flex flex-col items-center gap-10">
            {/* La Curaduria Logo */}
            <div className="flex justify-center items-center w-full max-w-[1443px]">
              <svg
                width="1443"
                height="197"
                viewBox="0 0 1443 197"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-[90vw] md:max-w-[80vw] lg:max-w-[1200px]"
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
            <div className="flex items-center gap-5">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <h1 className="text-white font-body text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-8 tracking-[-0.56px] text-center">
                UN LENTE PARA EL ARTE
              </h1>
              <div className="w-1 h-1 bg-white rounded-full"></div>
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
