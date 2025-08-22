import { Calendar } from "lucide-react";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className = "" }: NavBarProps) => {
  return (
    <header className={`bg-dark-green ${className}`}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-8 xl:px-12 py-3 sm:py-6 md:py-4 lg:py-4">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            <a href="/" className="block">
              <svg
                width="680"
                height="93"
                viewBox="0 0 680 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 sm:w-64 md:w-[680px] lg:w-80 xl:w-96 h-auto"
                aria-label="La Curaduría Logo"
              >
                <path d="M79.8796 26.5745H32.1777C29.1078 26.5745 26.6245 29.0594 26.6245 32.1173V53.1489H47.9952C50.9028 53.1489 53.2552 55.5031 53.2552 58.399V79.7296H26.6307C11.9177 79.7296 0 67.8343 0 53.1552V26.5807C0 11.8953 11.9239 0 26.6245 0H79.8796C94.5802 0 106.504 11.9015 106.504 26.5745H79.8734H79.8796ZM106.392 26.6367H106.51V53.2112C91.8098 53.2112 79.8858 65.1127 79.8858 79.7857H53.199C53.199 50.4336 76.9907 26.6866 106.398 26.6305L106.392 26.6367Z" fill="#FF736C"/>
                <path d="M104.745 92.4345C112.702 92.4345 119.152 85.9963 119.152 78.0543C119.152 70.1123 112.702 63.6741 104.745 63.6741C96.7878 63.6741 90.3374 70.1123 90.3374 78.0543C90.3374 85.9963 96.7878 92.4345 104.745 92.4345Z" fill="#FF736C"/>
                <path d="M161.8 43.913H132.81V0.516968H147.305V29.4518H190.789C190.789 37.4422 184.3 43.9192 176.294 43.9192H161.8V43.913Z" fill="#FFFFF6"/>
                <path d="M237.717 0.516857H252.212V43.9191H237.717V29.4517C237.717 37.4421 231.228 43.9191 223.222 43.9191H194.233V29.4517C194.233 13.4335 207.243 0.485718 223.254 0.485718H237.748L237.717 0.523085V0.516857ZM237.754 29.4517V14.9843H223.26C215.254 14.9843 208.765 21.4613 208.765 29.4517H237.754Z" fill="#FFFFF6"/>
                <path d="M161.818 77.4501H190.789V91.9113H161.818C145.807 91.9113 132.81 78.9448 132.81 62.9578C132.81 54.9549 139.306 48.4966 147.299 48.4966H190.758C190.758 56.4994 184.262 62.9578 176.269 62.9578H147.299L147.33 62.9889C147.33 70.9918 153.825 77.4501 161.818 77.4501Z" fill="#FFFFF6"/>
                <path d="M194.24 62.9766V48.5092H208.734V62.9766C208.734 70.967 215.223 77.444 223.229 77.444H237.723V48.5092H252.218V91.9114H223.229L223.266 91.9488C207.255 91.9488 194.246 79.001 194.246 62.9828L194.24 62.9766Z" fill="#FFFFF6"/>
                <path d="M270.213 48.5341H299.183C307.201 48.5341 313.672 55.0173 313.672 62.9953C313.672 70.9732 307.176 77.4565 299.183 77.4565H284.695C276.677 77.4565 270.207 83.9397 270.207 91.9176H255.718C255.718 75.9368 268.709 62.9641 284.726 62.9641H255.756V48.5029L255.725 48.5341H270.213ZM313.697 91.9426H299.208V77.4814C307.226 77.4814 313.697 83.9646 313.697 91.9426Z" fill="#FFFFF6"/>
                <path d="M360.631 48.509H375.126V91.9113H360.631V77.4439C360.631 85.4343 354.142 91.9113 346.137 91.9113H317.147V77.4439C317.147 61.4257 330.157 48.4779 346.168 48.4779H360.663L360.631 48.5153V48.509ZM360.663 77.4439V62.9765H346.168C338.162 62.9765 331.673 69.4535 331.673 77.4439H360.663Z" fill="#FFFFF6"/>
                <path d="M393.071 48.5029H407.559C423.576 48.5029 436.567 61.4632 436.567 77.4565C436.567 85.4655 430.072 91.9176 422.079 91.9176H378.614V48.5341L378.583 48.5029H393.071ZM393.096 62.9641V77.4253H422.066C422.066 69.4162 415.577 62.9641 407.578 62.9641H393.09H393.096Z" fill="#FFFFF6"/>
                <path d="M437.691 62.9766V48.5092H452.185V62.9766C452.185 70.967 458.675 77.444 466.68 77.444H481.175V48.5092H495.669V91.9114H466.68L466.717 91.9488C450.707 91.9488 437.697 79.001 437.697 62.9828L437.691 62.9766Z" fill="#FFFFF6"/>
                <path d="M513.602 48.5341H542.572C550.59 48.5341 557.061 55.0173 557.061 62.9953C557.061 70.9732 550.565 77.4565 542.572 77.4565H528.084C520.066 77.4565 513.596 83.9397 513.596 91.9176H499.107C499.107 75.9368 512.098 62.9641 528.115 62.9641H499.145V48.5029L499.113 48.5341H513.602ZM557.092 91.9426H542.604V77.4814C550.621 77.4814 557.092 83.9646 557.092 91.9426Z" fill="#FFFFF6"/>
                <path d="M575.087 91.9114H560.599V77.4502H589.569V62.989H575.081C567.088 62.989 560.592 56.5369 560.592 48.5278H604.082V77.444H618.571V91.9052H575.081L575.087 91.9114Z" fill="#FFFFF6"/>
                <path d="M665.505 48.509H680V91.9113H665.505V77.4439C665.505 85.4343 659.016 91.9113 651.011 91.9113H622.021V77.4439C622.021 61.4257 635.031 48.4779 651.042 48.4779H665.537L665.505 48.5153V48.509ZM665.543 77.4439V62.9765H651.048C643.043 62.9765 636.554 69.4535 636.554 77.4439H665.543Z" fill="#FFFFF6"/>
              </svg>
            </a>
          </div>

          {/* Navigation & CTA */}
          <div className="flex flex-col sm:flex-row md:flex-row items-center gap-4 sm:gap-6 md:gap-4 lg:gap-8 w-full lg:w-auto">
            {/* Navigation Links */}
            <nav className="flex items-center gap-4 sm:gap-6 md:gap-4 lg:gap-8 md:flex-1 md:justify-center" role="navigation" aria-label="Main navigation">
              <a
                href="/cartelera"
                className="text-cream text-sm sm:text-base md:text-lg lg:text-lg font-fraktion uppercase tracking-wide hover:text-coral-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coral-primary focus:ring-offset-2 focus:ring-offset-dark-green rounded-sm px-2 py-1 md:flex-1 md:text-center"
                aria-label="Ver cartelera de eventos"
              >
                CARTELERA
              </a>
              <a
                href="/como-publicar"
                className="text-cream text-sm sm:text-base md:text-lg lg:text-lg font-fraktion uppercase tracking-wide hover:text-coral-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coral-primary focus:ring-offset-2 focus:ring-offset-dark-green rounded-sm px-2 py-1 md:flex-1 md:text-center"
                aria-label="Aprende cómo publicar eventos"
              >
                CÓMO PUBLICAR
              </a>
            </nav>

            {/* CTA Button */}
            <button
              className="bg-coral-primary hover:bg-coral-secondary focus:bg-coral-secondary transition-all duration-200 rounded-xl md:rounded-lg px-3 sm:px-4 md:px-2 lg:px-5 py-1.5 sm:py-2 md:py-1 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-coral-primary focus:ring-offset-2 focus:ring-offset-dark-green shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label="Publicar un nuevo evento"
            >
              <span className="text-cream text-xs sm:text-sm md:text-lg lg:text-lg font-fraktion font-medium uppercase tracking-wide">
                PUBLICAR EVENTO
              </span>
              <div className="bg-coral-secondary group-hover:bg-coral-dark group-focus:bg-coral-dark transition-colors duration-200 rounded-full p-1.5 sm:p-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 text-cream" aria-hidden="true" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
