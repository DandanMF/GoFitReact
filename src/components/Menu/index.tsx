import { useState } from "react";
import levantador_de_peso from "../../assets/images/levantamento-de-peso.png";
import { Link } from "react-router-dom";

export function Menu() {
  const [isHovered, setIsHovered] = useState(false);
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:fixed top-0 w-full shadow z-50 scrool-smooth">
      <nav className="flex flex-col md:flex-row justify-evenly items-center p-4 gap-2 bg-roxo_padrao rounded-md relative z-50">
        <div className="flex justify-center items-center gap-2">
          <img
            src={levantador_de_peso}
            alt="Homem levantando peso"
            className="w-10 h-10"
          />
          <Link to="/home">
            <h1 className="text-gray-50 font-roboto text-4xl">GoFit</h1>
          </Link>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row relative">
          <Link to="/gym">
            <button className="rounded-full p-2 px-4 text-gray-50 font-roboto text-xl hover:bg-violet-700 transition-colors duration-300 ease-in-out">
              Academia
            </button>
          </Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/nutrition">
              <button className="rounded-full p-2 px-4 text-gray-50 font-roboto text-xl hover:bg-violet-700 transition-colors duration-300 ease-in-out">
                Nutrição
              </button>
            </Link>

            {isHovered && (
              <ul
                className="absolute top-full left-0 w-28 bg-violet-600 rounded-3xl text-white shadow-lg p-2 z-50 space-y-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={"/nutrition"}>
                  <li className="hover:bg-violet-700 px-3 py-3 rounded-2xl cursor-pointer">
                    <a href="#macro-micro" className="block w-full h-full" onClick={() => scrollToSection("macro-micro")}>
                      Macro x Micro
                    </a>
                  </li>
                  <li className="hover:bg-violet-700 px-3 py-3 rounded-2xl cursor-pointer">
                    <a href="#caloria" className="block w-full h-full" onClick={() => scrollToSection("caloria")}>
                      Caloria
                    </a>
                  </li>
                  <li className="hover:bg-violet-700 px-3 py-3 rounded-2xl cursor-pointer">
                    <a
                      href="#info-nutricional"
                      className="block w-full h-full"
                      onClick={() => scrollToSection("info-nutricional")}
                    >
                      Info Nutricional
                    </a>
                  </li>
                  <li className="hover:bg-violet-700 px-3 py-3 rounded-2xl cursor-pointer">
                    <a href="#dieta" className="block w-full h-full" onClick={() => scrollToSection("dieta")}>
                      Dieta
                    </a>
                  </li>
                  <li className="hover:bg-violet-700 px-3 py-3 rounded-2xl cursor-pointer" onClick={() => scrollToSection("saude-mental")}>
                    <a href="#saude-mental" className="block w-full h-full">
                      Saude Mental
                    </a>
                  </li>
                  <li className="hover:bg-violet-700 px-3 py-3 rounded-2xl cursor-pointer">
                    <a href="#fato-mito" className="block w-full h-full" onClick={() => scrollToSection("fato-mito")}>
                      Fato x Mito
                    </a>
                  </li>
                </Link>
              </ul>
            )}
          </div>

          <Link to="/calculators">
            <button className="rounded-full p-2 px-4 text-gray-50 font-roboto text-xl hover:bg-violet-700 transition-colors duration-300 ease-in-out">
              Calculadoras
            </button>
          </Link>

          <Link to="/about">
            <button className="rounded-full p-2 px-4 text-gray-50 font-roboto text-xl hover:bg-violet-700 transition-colors duration-300 ease-in-out">
              Quem Somos
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
