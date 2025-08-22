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
      className={`bg-neutral-100 p-8 md:p-8 relative overflow-hidden ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col items-start gap-3 relative z-10">
        <h2
          id="cta-heading"
          className="font-display text-neutral-900 font-bold text-[30px] leading-[38px] tracking-[-0.6px] self-stretch"
        >
          {title}
        </h2>
        <p className="font-body text-neutral-900 font-normal text-[24px] leading-[32px] self-stretch">
          {subtitle}
        </p>
        <div className="mt-1">
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

      {/* Q Glass Image - Positioned according to tablet design */}
      {showImage && (
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/78a928d4fd744c7d1f54e348000924b857d5507c?width=279"
          alt="Q Glass - Decorative element"
          className="absolute w-[139.525px] h-[111.995px] pointer-events-none top-4 right-4"
          style={{
            transform: "rotate(-4.356deg)",
            transformOrigin: "center center",
          }}
          loading="lazy"
        />
      )}
    </section>
  );
};
