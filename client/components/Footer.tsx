export const Footer = () => {
  return (
    <footer className="bg-coral-primary relative min-h-[428px] md:min-h-[428px] lg:min-h-[466px]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[48px] py-6 sm:py-8 md:py-12 lg:py-16">

        {/* Mobile & Tablet: Column Layout | Desktop: Row Layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 gap-4 sm:gap-6 md:gap-3 lg:gap-0">

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-start md:items-center gap-2 sm:gap-4 px-1.5 py-1.5 rounded-full">
            <a
              href="/cartelera"
              className="text-dark-green font-fraktion text-base md:text-base lg:text-[22px] hover:text-neutral-800 hover:scale-105 transition-all duration-200 leading-[24px] lg:leading-[30px] px-2 py-1 rounded uppercase"
            >
              CARTELERA
            </a>
            <a
              href="/como-publicar"
              className="text-dark-green font-fraktion text-base md:text-base lg:text-[22px] hover:text-neutral-800 hover:scale-105 transition-all duration-200 leading-[24px] lg:leading-[30px] px-2 py-1 rounded uppercase"
            >
              CÓMO PUBLICAR
            </a>
          </div>

          {/* Divider - Tablet and Desktop */}
          <div className="hidden md:block w-full lg:w-[333px] h-px bg-coral-secondary"></div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-start md:items-center gap-2 sm:gap-4 px-1.5 py-1.5 rounded-full flex-wrap">
            <a
              href="mailto:contacto@lacuraduria.net"
              className="text-dark-green font-fraktion text-base md:text-base lg:text-[22px] hover:text-neutral-800 hover:scale-105 transition-all duration-200 leading-[24px] lg:leading-[30px] px-2 py-1 rounded text-left uppercase"
            >
              CONTACTO@LACURADURIA.NET
            </a>

            {/* WhatsApp */}
            <a
              href="tel:+573044138497"
              className="flex items-center gap-1.5 hover:scale-105 transition-all duration-200 px-2 py-1 rounded"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path d="M9.12661 7.8901C9.29857 7.89706 9.48906 7.90521 9.67008 8.30733C9.79339 8.5817 10.0007 9.0926 10.1663 9.50066C10.2889 9.803 10.3887 10.0489 10.4144 10.1003C10.4749 10.221 10.5149 10.3623 10.4345 10.5233C10.4222 10.548 10.4108 10.5713 10.3999 10.5936C10.34 10.7161 10.2957 10.8066 10.1933 10.9259C10.1524 10.9736 10.1101 11.025 10.0679 11.0764C9.98517 11.1769 9.90262 11.2773 9.83088 11.3489C9.70976 11.4693 9.58364 11.6001 9.72473 11.8417C9.86583 12.0833 10.3504 12.8739 11.0684 13.514C11.8411 14.203 12.5121 14.494 12.8518 14.6413C12.9178 14.6699 12.9713 14.693 13.0106 14.7127C13.2523 14.8334 13.393 14.8132 13.5339 14.652C13.6749 14.4908 14.1372 13.947 14.2984 13.7053C14.4596 13.4636 14.6205 13.5037 14.8418 13.5843C15.0632 13.665 16.2504 14.2492 16.4921 14.37C16.5397 14.3938 16.5841 14.4152 16.6252 14.4351C16.7933 14.5161 16.9068 14.5708 16.9552 14.652C17.0155 14.753 17.0154 15.2362 16.8142 15.8001C16.6131 16.3641 15.6272 16.9081 15.1842 16.9483C15.1416 16.9522 15.0992 16.9572 15.0556 16.9623C14.6462 17.0104 14.1297 17.0711 12.286 16.344C10.0152 15.4485 8.51853 13.2284 8.2114 12.7729C8.18651 12.7359 8.16943 12.7106 8.16038 12.6985L8.15752 12.6947C8.02674 12.5198 7.17432 11.38 7.17432 10.2008C7.17432 9.0891 7.72061 8.50613 7.97217 8.23767C7.9895 8.21918 8.00543 8.20218 8.01969 8.1866C8.24091 7.94488 8.5026 7.88445 8.66366 7.88445L9.12661 7.8901Z" fill="#171C14"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.33887 22.1846L3.71024 17.1775C2.86302 15.7087 2.41801 14.0425 2.42005 12.3468C2.42229 7.01898 6.75801 2.68457 12.086 2.68457C14.6715 2.68588 17.0983 3.69204 18.9234 5.51848C20.7485 7.34491 21.7527 9.77262 21.7518 12.3546C21.7494 17.682 17.413 22.0172 12.0858 22.0172H12.0816C10.4641 22.0165 8.87464 21.6107 7.46281 20.8409L2.33887 22.1846ZM12.0889 4.31684C7.65737 4.31684 4.0535 7.91939 4.05193 12.3475C4.04974 13.8595 4.47554 15.3413 5.2801 16.6216L5.47125 16.9254L4.65951 19.8889L7.7002 19.0916L7.99381 19.2655C9.22697 19.9974 10.6409 20.3844 12.0828 20.3852H12.0858C16.5139 20.3852 20.1178 16.7822 20.1195 12.3539C20.1228 11.2984 19.9168 10.2528 19.5133 9.27747C19.1097 8.30217 18.5167 7.4166 17.7686 6.67203C17.0247 5.92339 16.1396 5.32976 15.1647 4.92548C14.1897 4.52121 13.1443 4.31434 12.0889 4.31684Z" fill="#171C14"/>
              </svg>
              <span className="text-black font-fraktion text-base md:text-base lg:text-[22px] whitespace-nowrap leading-[24px] lg:leading-[30px] uppercase">
                (+57) 304 413 8497
              </span>
            </a>

            <a
              href="https://instagram.com"
              className="text-dark-green font-fraktion text-base md:text-base lg:text-[22px] hover:text-neutral-800 hover:scale-105 transition-all duration-200 leading-[24px] lg:leading-[30px] px-2 py-1 rounded uppercase"
            >
              INSTAGRAM
            </a>
            <a
              href="https://linkedin.com"
              className="text-dark-green font-fraktion text-base md:text-base lg:text-[22px] hover:text-neutral-800 hover:scale-105 transition-all duration-200 leading-[24px] lg:leading-[30px] px-2 py-1 rounded uppercase"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* Middle: Large Responsive Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="w-full flex justify-center">
            <svg
              width="1414"
              height="193"
              viewBox="0 0 1414 193"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path d="M166.103 55.2592H66.9107C60.5271 55.2592 55.3632 60.4264 55.3632 66.7851V110.518H99.8017C105.848 110.518 110.739 115.414 110.739 121.436V165.791H55.3762C24.7817 165.791 0 141.055 0 110.531V55.2722C0 24.7352 24.7947 0 55.3632 0H166.103C196.671 0 221.466 24.7482 221.466 55.2592H166.09H166.103ZM221.232 55.3887H221.479V110.648C190.91 110.648 166.116 135.396 166.116 165.907H110.623C110.623 104.872 160.095 55.4924 221.245 55.3758L221.232 55.3887Z" fill="#171C14"/>
              <path d="M217.807 192.21C234.353 192.21 247.766 178.822 247.766 162.307C247.766 145.793 234.353 132.405 217.807 132.405C201.261 132.405 187.848 145.793 187.848 162.307C187.848 178.822 201.261 192.21 217.807 192.21Z" fill="#171C14"/>
              <path d="M336.448 91.3132H276.167V1.07495H306.308V61.2424H396.728C396.728 77.8577 383.235 91.3261 366.588 91.3261H336.448V91.3132Z" fill="#171C14"/>
              <path d="M494.312 1.07501H524.452V91.3262H494.312V61.2424C494.312 77.8578 480.818 91.3262 464.171 91.3262H403.891V61.2424C403.891 27.9341 430.943 1.01025 464.236 1.01025H494.376L494.312 1.08796V1.07501ZM494.389 61.2424V31.1587H464.249C447.602 31.1587 434.109 44.6271 434.109 61.2424H494.389Z" fill="#171C14"/>
              <path d="M336.487 161.051H396.728V191.122H336.487C303.194 191.122 276.167 164.159 276.167 130.915C276.167 114.274 289.674 100.845 306.295 100.845H396.664C396.664 117.486 383.157 130.915 366.536 130.915H306.295L306.359 130.98C306.359 147.621 319.866 161.051 336.487 161.051Z" fill="#171C14"/>
              <path d="M403.904 130.954V100.871H434.044V130.954C434.044 147.57 447.538 161.038 464.184 161.038H494.325V100.871H524.465V191.122H464.184L464.262 191.199C430.969 191.199 403.917 164.276 403.917 130.967L403.904 130.954Z" fill="#171C14"/>
              <path d="M561.884 100.922H622.125C638.798 100.922 652.253 114.404 652.253 130.993C652.253 147.583 638.746 161.064 622.125 161.064H591.998C575.326 161.064 561.871 174.545 561.871 191.135H531.743C531.743 157.904 558.757 130.928 592.063 130.928H531.821V100.858L531.756 100.922H561.884ZM652.305 191.187H622.177V161.116C638.85 161.116 652.305 174.597 652.305 191.187Z" fill="#171C14"/>
              <path d="M749.901 100.871H780.041V191.122H749.901V161.038C749.901 177.653 736.407 191.122 719.761 191.122H659.48V161.038C659.48 127.73 686.532 100.806 719.825 100.806H749.966L749.901 100.884V100.871ZM749.966 161.038V130.954H719.825C703.179 130.954 689.685 144.423 689.685 161.038H749.966Z" fill="#171C14"/>
              <path d="M817.356 100.858H847.484C880.79 100.858 907.803 127.807 907.803 161.064C907.803 177.718 894.297 191.135 877.676 191.135H787.294V100.922L787.229 100.858H817.356ZM817.408 130.928V160.999H877.65C877.65 144.345 864.156 130.928 847.523 130.928H817.395H817.408Z" fill="#171C14"/>
              <path d="M910.139 130.954V100.871H940.279V130.954C940.279 147.57 953.773 161.038 970.42 161.038H1000.56V100.871H1030.7V191.122H970.42L970.497 191.199C937.204 191.199 910.152 164.276 910.152 130.967L910.139 130.954Z" fill="#171C14"/>
              <path d="M1067.99 100.922H1128.23C1144.9 100.922 1158.36 114.404 1158.36 130.993C1158.36 147.583 1144.85 161.064 1128.23 161.064H1098.1C1081.43 161.064 1067.98 174.545 1067.98 191.135H1037.85C1037.85 157.904 1064.86 130.928 1098.17 130.928H1037.93V100.858L1037.86 100.922H1067.99ZM1158.42 191.187H1128.3V161.116C1144.97 161.116 1158.42 174.597 1158.42 191.187Z" fill="#171C14"/>
              <path d="M1195.84 191.122H1165.72V161.051H1225.96V130.98H1195.83C1179.21 130.98 1165.7 117.564 1165.7 100.909H1256.14V161.038H1286.26V191.109H1195.83L1195.84 191.122Z" fill="#171C14"/>
              <path d="M1383.86 100.871H1414V191.122H1383.86V161.038C1383.86 177.653 1370.37 191.122 1353.72 191.122H1293.44V161.038C1293.44 127.73 1320.49 100.806 1353.78 100.806H1383.92L1383.86 100.884V100.871ZM1383.94 161.038V130.954H1353.8C1337.15 130.954 1323.66 144.423 1323.66 161.038H1383.94Z" fill="#171C14"/>
            </svg>
          </div>
        </div>

        {/* Bottom: Copyright and Tagline */}
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-dark-green font-fraktion uppercase text-xs sm:text-sm md:text-base lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[24px]">
            © 2025 LA CURADURÍA. TODOS LOS DERECHOS RESERVADOS
          </p>
          <p className="text-dark-green font-fraktion uppercase text-xs sm:text-sm md:text-base lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[24px]">
            CREAMOS UN LENTE PARA FILTRAR LO ESENCIAL JUNTO A MEDIOS, ARTISTAS Y GESTORES.
          </p>
        </div>
      </div>
    </footer>
  );
};
