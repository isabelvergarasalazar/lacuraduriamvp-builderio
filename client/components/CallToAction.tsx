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
      className={`bg-neutral-100 px-4 md:px-8 xl:px-[48px] py-8 md:py-8 xl:py-[64px] pt-16 md:pt-20 xl:pt-[84px] relative ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col gap-4 md:gap-3 xl:gap-4 max-w-2xl relative z-10">
        <h2
          id="cta-heading"
          className="font-display text-neutral-900 font-bold whitespace-nowrap
                     text-3xl leading-9 tracking-tight
                     md:text-[30px] md:leading-[38px] md:tracking-[-0.6px]
                     xl:text-5xl xl:leading-[60px] xl:tracking-[-0.96px]"
        >
          {title}
        </h2>
        <p className="font-body text-neutral-900 font-normal max-w-[456px]
                      text-lg leading-7
                      md:text-[24px] md:leading-[32px]
                      xl:text-2xl xl:leading-8">
          {subtitle}
        </p>
        <div className="pt-2 md:pt-1">
          <Button
            icon={Calendar}
            size="lg"
            href={buttonHref}
            aria-label={`${buttonText} - Abre en nueva ventana`}
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Q Glass Image - Responsive positioning for tablet vs desktop */}
      {showImage && (
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3b68cf450df4a94e56dd749b4b5e44ed6ec83b27?width=641"
          alt="Q Glass - Decorative element"
          className="absolute pointer-events-none
            md:w-[139.525px] md:h-[111.995px] md:top-4 md:right-4
            xl:w-[320.741px] xl:h-[257.453px]"
          style={{
            transform: "rotate(-4.356deg)",
            transformOrigin: "center center",
            right: "28.631px",
            top: "-58px",
          }}
          loading="lazy"
        />
      )}
    </section>
  );
};
