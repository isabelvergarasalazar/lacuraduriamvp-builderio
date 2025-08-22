import { Calendar } from "lucide-react";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className = "" }: NavBarProps) => {
  return (
    <header className={`bg-dark-green ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            <a href="/" className="block">
              <svg 
                width="383" 
                height="52" 
                viewBox="0 0 383 52" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto"
                aria-label="La Curaduría Logo"
              >
                <path d="M44.9371 14.9497H18.1019C16.3749 14.9497 14.9779 16.3477 14.9779 18.0679V29.8995H27.0002C28.6359 29.8995 29.9592 31.2238 29.9592 32.853V44.8527H14.9814C6.70441 44.8527 0 38.1609 0 29.903V14.9532C0 6.69182 6.70792 0 14.9779 0H44.9371C53.207 0 59.915 6.69532 59.915 14.9497H44.9336H44.9371ZM59.8518 14.9848H59.9185V29.9345C51.6485 29.9345 44.9406 36.6298 44.9406 44.8842H29.9276C29.9276 28.3719 43.3119 15.0128 59.8553 14.9813L59.8518 14.9848Z" fill="#FF736C"/>
                <path d="M58.9253 52C63.4015 52 67.0302 48.3781 67.0302 43.9103C67.0302 39.4425 63.4015 35.8206 58.9253 35.8206C54.449 35.8206 50.8203 39.4425 50.8203 43.9103C50.8203 48.3781 54.449 52 58.9253 52Z" fill="#FF736C"/>
                <path d="M91.0221 24.7038H74.7139V0.290894H82.868V16.5685H107.33C107.33 21.0636 103.68 24.7073 99.1762 24.7073H91.0221V24.7038Z" fill="#FFFFF6"/>
                <path d="M133.73 0.290833H141.884V24.7072H133.73V16.5684C133.73 21.0635 130.079 24.7072 125.576 24.7072H109.268V16.5684C109.268 7.55724 116.586 0.273315 125.593 0.273315H133.747L133.73 0.294337V0.290833ZM133.751 16.5684V8.42963H125.597C121.093 8.42963 117.443 12.0733 117.443 16.5684H133.751Z" fill="#FFFFF6"/>
                <path d="M91.0326 43.5704H107.33V51.7057H91.0326C82.0255 51.7057 74.7139 44.4113 74.7139 35.4176C74.7139 30.9156 78.3679 27.2823 82.8645 27.2823H107.313C107.313 31.7844 103.659 35.4176 99.1621 35.4176H82.8645L82.882 35.4352C82.882 39.9372 86.5361 43.5704 91.0326 43.5704Z" fill="#FFFFF6"/>
                <path d="M109.271 35.4282V27.2894H117.426V35.4282C117.426 39.9233 121.076 43.567 125.58 43.567H133.734V27.2894H141.888V51.7058H125.58L125.601 51.7268C116.594 51.7268 109.275 44.4429 109.275 35.4317L109.271 35.4282Z" fill="#FFFFF6"/>
                <path d="M152.011 27.3034H168.309C172.819 27.3034 176.459 30.9506 176.459 35.4387C176.459 39.9268 172.805 43.574 168.309 43.574H160.158C155.648 43.574 152.008 47.2212 152.008 51.7093H143.857C143.857 42.7191 151.165 35.4212 160.176 35.4212H143.878V27.2859L143.86 27.3034H152.011ZM176.473 51.7233H168.323V43.588C172.833 43.588 176.473 47.2352 176.473 51.7233Z" fill="#FFFFF6"/>
                <path d="M202.877 27.2894H211.031V51.7058H202.877V43.567C202.877 48.062 199.226 51.7058 194.723 51.7058H178.415V43.567C178.415 34.5558 185.733 27.2719 194.74 27.2719H202.894L202.877 27.2929V27.2894ZM202.894 43.567V35.4282H194.74C190.237 35.4282 186.586 39.0719 186.586 43.567H202.894Z" fill="#FFFFF6"/>
                <path d="M221.126 27.2859H229.277C238.287 27.2859 245.596 34.5768 245.596 43.574C245.596 48.0796 241.941 51.7093 237.445 51.7093H212.993V27.3034L212.976 27.2859H221.126ZM221.14 35.4212V43.5565H237.438C237.438 39.0509 233.787 35.4212 229.287 35.4212H221.137H221.14Z" fill="#FFFFF6"/>
                <path d="M246.227 35.4282V27.2894H254.381V35.4282C254.381 39.9233 258.032 43.567 262.536 43.567H270.69V27.2894H278.844V51.7058H262.536L262.557 51.7268C253.549 51.7268 246.231 44.4429 246.231 35.4317L246.227 35.4282Z" fill="#FFFFF6"/>
                <path d="M288.932 27.3034H305.23C309.74 27.3034 313.38 30.9506 313.38 35.4387C313.38 39.9268 309.726 43.574 305.23 43.574H297.079C292.568 43.574 288.928 47.2212 288.928 51.7093H280.778C280.778 42.7191 288.086 35.4212 297.097 35.4212H280.799V27.2859L280.781 27.3034H288.932ZM313.398 51.7233H305.247V43.588C309.758 43.588 313.398 47.2352 313.398 51.7233Z" fill="#FFFFF6"/>
                <path d="M323.521 51.7058H315.37V43.5705H331.668V35.4352H323.518C319.021 35.4352 315.367 31.8055 315.367 27.2999H339.833V43.567H347.983V51.7023H323.518L323.521 51.7058Z" fill="#FFFFF6"/>
                <path d="M374.387 27.2894H382.541V51.7058H374.387V43.567C374.387 48.062 370.736 51.7058 366.233 51.7058H349.925V43.567C349.925 34.5558 357.243 27.2719 366.25 27.2719H374.404L374.387 27.2929V27.2894ZM374.408 43.567V35.4282H366.254C361.75 35.4282 358.1 39.0719 358.1 43.567H374.408Z" fill="#FFFFF6"/>
              </svg>
            </a>
          </div>

          {/* Navigation & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
            {/* Navigation Links */}
            <nav className="flex items-center gap-4 sm:gap-6 lg:gap-8" role="navigation" aria-label="Main navigation">
              <a 
                href="/cartelera" 
                className="text-cream text-sm sm:text-base lg:text-lg font-fraktion uppercase tracking-wide hover:text-coral-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coral-primary focus:ring-offset-2 focus:ring-offset-dark-green rounded-sm px-2 py-1"
                aria-label="Ver cartelera de eventos"
              >
                CARTELERA
              </a>
              <a 
                href="/como-publicar" 
                className="text-cream text-sm sm:text-base lg:text-lg font-fraktion uppercase tracking-wide hover:text-coral-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coral-primary focus:ring-offset-2 focus:ring-offset-dark-green rounded-sm px-2 py-1"
                aria-label="Aprende cómo publicar eventos"
              >
                CÓMO PUBLICAR
              </a>
            </nav>

            {/* CTA Button */}
            <button 
              className="bg-coral-primary hover:bg-coral-secondary focus:bg-coral-secondary transition-all duration-200 rounded-xl px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-coral-primary focus:ring-offset-2 focus:ring-offset-dark-green shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label="Publicar un nuevo evento"
            >
              <span className="text-cream text-xs sm:text-sm lg:text-lg font-fraktion font-medium uppercase tracking-wide">
                PUBLICAR EVENTO
              </span>
              <div className="bg-coral-secondary group-hover:bg-coral-dark group-focus:bg-coral-dark transition-colors duration-200 rounded-full p-1.5 sm:p-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-cream" aria-hidden="true" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
