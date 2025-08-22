export const Footer = () => {
  return (
    <footer className="bg-coral-primary relative min-h-[591px] md:min-h-[428px] lg:min-h-[466px]">
      <div className="w-full px-4 md:px-8 xl:px-[48px] py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Mobile & Tablet: Column Layout | Desktop: Row Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 gap-3 md:gap-3 lg:gap-6">
          {/* Navigation Links */}
          <div className="flex justify-between items-center md:justify-start md:gap-4 px-1.5 py-1.5 rounded-full w-full lg:w-auto lg:flex-shrink-0">
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

          {/* Divider - Responsive width */}
          <div className="w-full lg:flex-1 lg:max-w-[333px] h-px bg-coral-secondary"></div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-4 px-1.5 py-1.5 rounded-full w-full lg:w-auto lg:flex-shrink-0 md:flex-wrap lg:justify-end">
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
                <path
                  d="M9.12661 8.08053C9.29857 8.08749 9.48906 8.09564 9.67008 8.49776C9.79339 8.77213 10.0007 9.28303 10.1663 9.69109C10.2889 9.99343 10.3887 10.2393 10.4144 10.2907C10.4749 10.4114 10.5149 10.5528 10.4345 10.7137C10.4222 10.7384 10.4108 10.7618 10.3999 10.784C10.34 10.9066 10.2957 10.9971 10.1933 11.1164C10.1524 11.164 10.1101 11.2154 10.0679 11.2668C9.98517 11.3674 9.90262 11.4677 9.83088 11.5394C9.70976 11.6597 9.58364 11.7905 9.72473 12.0321C9.86583 12.2737 10.3504 13.0643 11.0684 13.7045C11.8411 14.3935 12.5121 14.6844 12.8518 14.8317C12.9178 14.8603 12.9713 14.8835 13.0106 14.9031C13.2523 15.0238 13.393 15.0036 13.5339 14.8424C13.6749 14.6812 14.1372 14.1375 14.2984 13.8957C14.4596 13.654 14.6205 13.6941 14.8418 13.7748C15.0632 13.8554 16.2504 14.4396 16.4921 14.5605C16.5397 14.5842 16.5841 14.6057 16.6252 14.6255C16.7933 14.7065 16.9068 14.7612 16.9552 14.8424C17.0155 14.9434 17.0154 15.4266 16.8142 15.9906C16.6131 16.5545 15.6272 17.0985 15.1842 17.1387C15.1416 17.1426 15.0992 17.1476 15.0556 17.1527C14.6462 17.2008 14.1297 17.2615 12.286 16.5344C10.0152 15.639 8.51853 13.4189 8.2114 12.9633C8.18651 12.9264 8.16943 12.901 8.16038 12.8889L8.15752 12.8851C8.02674 12.7102 7.17432 11.5704 7.17432 10.3912C7.17432 9.27953 7.72061 8.69656 7.97217 8.4281C7.9895 8.40961 8.00543 8.39261 8.01969 8.37703C8.24091 8.13531 8.5026 8.07488 8.66366 8.07488L9.12661 8.08053Z"
                  fill="#171C14"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.33887 22.375L3.71024 17.368C2.86302 15.8991 2.41801 14.2329 2.42005 12.5372C2.42229 7.20941 6.75801 2.875 12.086 2.875C14.6715 2.87631 17.0983 3.88247 18.9234 5.70891C20.7485 7.53534 21.7527 9.96305 21.7518 12.545C21.7494 17.8724 17.413 22.2076 12.0858 22.2076H12.0816C10.4641 22.207 8.87464 21.8012 7.46281 21.0313L2.33887 22.375ZM12.0889 4.50727C7.65737 4.50727 4.0535 8.10982 4.05193 12.5379C4.04974 14.05 4.47554 15.5318 5.2801 16.812L5.47125 17.1159L4.65951 20.0793L7.7002 19.282L7.99381 19.456C9.22697 20.1878 10.6409 20.5748 12.0828 20.5756H12.0858C16.5139 20.5756 20.1178 16.9727 20.1195 12.5443C20.1228 11.4889 19.9168 10.4432 19.5133 9.4679C19.1097 8.4926 18.5167 7.60703 17.7686 6.86246C17.0247 6.11382 16.1396 5.52019 15.1647 5.11591C14.1897 4.71164 13.1443 4.50477 12.0889 4.50727Z"
                  fill="#171C14"
                />
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

        {/* Middle: Logo */}
        <div className="flex flex-col items-center gap-1.5 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="w-full flex justify-center">
            <svg
              width="1414"
              height="193"
              viewBox="0 0 1414 193"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M166.103 55.2592H66.9107C60.5271 55.2592 55.3632 60.4264 55.3632 66.7851V110.518H99.8017C105.848 110.518 110.739 115.414 110.739 121.436V165.791H55.3762C24.7817 165.791 0 141.055 0 110.531V55.2722C0 24.7352 24.7947 0 55.3632 0H166.103C196.671 0 221.466 24.7482 221.466 55.2592H166.09H166.103ZM221.232 55.3887H221.479V110.648C190.91 110.648 166.116 135.396 166.116 165.907H110.623C110.623 104.872 160.095 55.4924 221.245 55.3758L221.232 55.3887Z"
                fill="#171C14"
              />
              <path
                d="M217.807 192.21C234.353 192.21 247.766 178.822 247.766 162.307C247.766 145.793 234.353 132.405 217.807 132.405C201.261 132.405 187.848 145.793 187.848 162.307C187.848 178.822 201.261 192.21 217.807 192.21Z"
                fill="#171C14"
              />
              <path
                d="M336.448 91.3132H276.167V1.07495H306.308V61.2424H396.728C396.728 77.8577 383.235 91.3261 366.588 91.3261H336.448V91.3132Z"
                fill="#171C14"
              />
              <path
                d="M494.312 1.07501H524.452V91.3262H494.312V61.2424C494.312 77.8578 480.818 91.3262 464.171 91.3262H403.891V61.2424C403.891 27.9341 430.943 1.01025 464.236 1.01025H494.376L494.312 1.08796V1.07501ZM494.389 61.2424V31.1587H464.249C447.602 31.1587 434.109 44.6271 434.109 61.2424H494.389Z"
                fill="#171C14"
              />
              <path
                d="M336.487 161.051H396.728V191.122H336.487C303.194 191.122 276.167 164.159 276.167 130.915C276.167 114.274 289.674 100.845 306.295 100.845H396.664C396.664 117.486 383.157 130.915 366.536 130.915H306.295L306.359 130.98C306.359 147.621 319.866 161.051 336.487 161.051Z"
                fill="#171C14"
              />
              <path
                d="M403.904 130.954V100.871H434.044V130.954C434.044 147.57 447.538 161.038 464.184 161.038H494.325V100.871H524.465V191.122H464.184L464.262 191.199C430.969 191.199 403.917 164.276 403.917 130.967L403.904 130.954Z"
                fill="#171C14"
              />
              <path
                d="M561.884 100.922H622.125C638.798 100.922 652.253 114.404 652.253 130.993C652.253 147.583 638.746 161.064 622.125 161.064H591.998C575.326 161.064 561.871 174.545 561.871 191.135H531.743C531.743 157.904 558.757 130.928 592.063 130.928H531.821V100.858L531.756 100.922H561.884ZM652.305 191.187H622.177V161.116C638.85 161.116 652.305 174.597 652.305 191.187Z"
                fill="#171C14"
              />
              <path
                d="M749.901 100.871H780.041V191.122H749.901V161.038C749.901 177.653 736.407 191.122 719.761 191.122H659.48V161.038C659.48 127.73 686.532 100.806 719.825 100.806H749.966L749.901 100.884V100.871ZM749.966 161.038V130.954H719.825C703.179 130.954 689.685 144.423 689.685 161.038H749.966Z"
                fill="#171C14"
              />
              <path
                d="M817.356 100.858H847.484C880.79 100.858 907.803 127.807 907.803 161.064C907.803 177.718 894.297 191.135 877.676 191.135H787.294V100.922L787.229 100.858H817.356ZM817.408 130.928V160.999H877.65C877.65 144.345 864.156 130.928 847.523 130.928H817.395H817.408Z"
                fill="#171C14"
              />
              <path
                d="M910.139 130.954V100.871H940.279V130.954C940.279 147.57 953.773 161.038 970.42 161.038H1000.56V100.871H1030.7V191.122H970.42L970.497 191.199C937.204 191.199 910.152 164.276 910.152 130.967L910.139 130.954Z"
                fill="#171C14"
              />
              <path
                d="M1067.99 100.922H1128.23C1144.9 100.922 1158.36 114.404 1158.36 130.993C1158.36 147.583 1144.85 161.064 1128.23 161.064H1098.1C1081.43 161.064 1067.98 174.545 1067.98 191.135H1037.85C1037.85 157.904 1064.86 130.928 1098.17 130.928H1037.93V100.858L1037.86 100.922H1067.99ZM1158.42 191.187H1128.3V161.116C1144.97 161.116 1158.42 174.597 1158.42 191.187Z"
                fill="#171C14"
              />
              <path
                d="M1195.84 191.122H1165.72V161.051H1225.96V130.98H1195.83C1179.21 130.98 1165.7 117.564 1165.7 100.909H1256.14V161.038H1286.26V191.109H1195.83L1195.84 191.122Z"
                fill="#171C14"
              />
              <path
                d="M1383.86 100.871H1414V191.122H1383.86V161.038C1383.86 177.653 1370.37 191.122 1353.72 191.122H1293.44V161.038C1293.44 127.73 1320.49 100.806 1353.78 100.806H1383.92L1383.86 100.884V100.871ZM1383.94 161.038V130.954H1353.8C1337.15 130.954 1323.66 144.423 1323.66 161.038H1383.94Z"
                fill="#171C14"
              />
            </svg>
          </div>
        </div>

        {/* Bottom: Copyright and Tagline */}
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-dark-green font-fraktion uppercase text-base md:text-base lg:text-[18px] leading-[24px] lg:leading-[24px]">
            © 2025 LA CURADURÍA. TODOS LOS DERECHOS RESERVADOS
          </p>
          <p className="text-dark-green font-fraktion uppercase text-base md:text-base lg:text-[18px] leading-[24px] lg:leading-[24px]">
            CREAMOS UN LENTE PARA FILTRAR LO ESENCIAL JUNTO A MEDIOS, ARTISTAS Y
            GESTORES.
          </p>
        </div>
      </div>
    </footer>
  );
};
