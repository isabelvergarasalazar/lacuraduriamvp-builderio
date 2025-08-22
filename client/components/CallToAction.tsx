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
      className={`bg-neutral-100 px-4 py-8 md:p-8 xl:px-[48px] xl:py-[64px] xl:pt-[84px] relative overflow-hidden ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col items-start gap-3 md:gap-3 xl:gap-4 self-stretch relative z-10">
        <h2
          id="cta-heading"
          className="font-display text-neutral-900 font-bold self-stretch
                     text-[30px] leading-[38px] tracking-[-0.6px]
                     xl:text-5xl xl:leading-[60px] xl:tracking-[-0.96px] xl:whitespace-nowrap"
        >
          {title}
        </h2>
        <p className="font-body text-neutral-900 font-normal self-stretch
                      text-[24px] leading-[32px]
                      xl:max-w-[456px]">
          {subtitle}
        </p>
        <div className="w-full md:w-auto mt-0 md:mt-0 xl:pt-2">
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
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c406c88f3601ccc226f6ee02dbd7d565615185f6?width=279"
          alt="Q Glass - Decorative element"
          className="absolute pointer-events-none
                     w-[139.525px] h-[111.995px]
                     md:w-[139.525px] md:h-[111.995px]
                     xl:w-[320.741px] xl:h-[257.453px]"
          style={{
            transform: "rotate(-4.356deg)",
            transformOrigin: "center center",
            right: "3.372px",
            top: "-59.421px",
          }}
          loading="lazy"
        />
      )}
    </section>
  );
};
