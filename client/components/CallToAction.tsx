import { Calendar } from "lucide-react";
import { Button } from "./Button";

interface CallToActionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  showImage?: boolean;
}

export const CallToAction = ({
  className = "",
  title = "SÚMATE A LA CARTELERA DE EVENTOS",
  subtitle = "Publica tu evento y sé parte de una guía amplia, diversa y selecta.",
  buttonText = "PUBLICAR EVENTO",
  buttonHref,
  showImage = true,
}: CallToActionProps) => {
  return (
    <section
      className={`bg-neutral-100 px-4 py-8 pt-20 md:p-8 md:pt-20 lg:px-[48px] lg:py-[64px] lg:pt-[84px] relative ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col items-start gap-3 md:gap-3 lg:gap-4 self-stretch relative z-10">
        <h2
          id="cta-heading"
          className="font-display text-neutral-900 font-bold self-stretch
                     text-[30px] leading-[38px] tracking-[-0.6px]
                     lg:text-5xl lg:leading-[60px] lg:tracking-[-0.96px] lg:whitespace-nowrap"
        >
          {title}
        </h2>
        <p
          className="font-body text-neutral-900 font-normal self-stretch
                      text-[24px] leading-[32px]"
        >
          {subtitle}
        </p>
        <div className="w-full md:w-auto mt-0 md:mt-0 lg:pt-2">
          <Button
            icon={Calendar}
            size="md"
            className="w-full md:w-auto"
            href={buttonHref}
            aria-label={`${buttonText} - Abre en nueva ventana`}
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Q Glass Image - Responsive positioning for mobile, tablet, desktop */}
      {showImage && (
        <>
          {/* Mobile Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c406c88f3601ccc226f6ee02dbd7d565615185f6?width=279"
            alt="Q Glass - Decorative element"
            className="absolute pointer-events-none w-[139.525px] h-[111.995px] md:hidden"
            style={{
              transform: "rotate(-4.356deg)",
              transformOrigin: "center center",
              right: "3.372px",
              top: "-59.421px",
            }}
            loading="lazy"
          />
          {/* Tablet/Desktop Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/78a928d4fd744c7d1f54e348000924b857d5507c?width=279"
            alt="Q Glass - Decorative element"
            className="absolute pointer-events-none hidden md:block
                       md:w-[139.525px] md:h-[111.995px]
                       lg:w-[320.741px] lg:h-[257.453px]"
            style={{
              transform: "rotate(-4.356deg)",
              transformOrigin: "center center",
              right: "-2.034px",
              top: "-59.421px",
            }}
            loading="lazy"
          />
        </>
      )}
    </section>
  );
};
