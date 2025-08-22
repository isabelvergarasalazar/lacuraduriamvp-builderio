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
      className={`bg-neutral-100 px-4 md:px-8 xl:px-[48px] py-8 md:py-12 xl:py-[64px] pt-16 md:pt-20 xl:pt-[84px] relative ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col gap-4 max-w-2xl relative z-10">
        <h2 
          id="cta-heading"
          className="text-display-lg-bold whitespace-nowrap"
        >
          {title}
        </h2>
        <p className="text-display-xs-regular max-w-[456px]">
          {subtitle}
        </p>
        <div className="pt-2">
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

      {/* Q Glass Image - Floating effect with exact Figma positioning */}
      {showImage && (
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3b68cf450df4a94e56dd749b4b5e44ed6ec83b27?width=641"
          alt="Q Glass - Decorative element"
          className="absolute w-[320.741px] h-[257.453px] pointer-events-none"
          style={{
            position: 'absolute',
            right: '28.631px',
            top: '-58px',
            transform: 'rotate(-4.356deg)',
            transformOrigin: 'center center'
          }}
          loading="lazy"
        />
      )}
    </section>
  );
};
