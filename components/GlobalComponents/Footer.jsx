import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 px-4 relative text-white">
      <div className="max-w-6xl mx-auto">
        {/* Navigation links - avec style technique */}
        <div className="flex flex-wrap justify-center gap-5 mb-6">
          <Link href={"/"}>
            <h2 className="text-center text-base font-mono transition-colors sm:hidden hover:text-gray-400">
              {"[Accueil]"}
            </h2>
          </Link>
          <Link href={"/Presentation"}>
            <h2 className="text-center text-base font-mono transition-colors hover:text-gray-400">
              {"[Présentation]"}
            </h2>
          </Link>
          <Link href={"/Activites"}>
            <h2 className="text-center text-base font-mono sm:mx-3 transition-colors hover:text-gray-400">
              {"[Activites]"}
            </h2>
          </Link>
          <Link href={"Conclusion"}>
            <h2 className="text-center text-base font-mono sm:hidden transition-colors hover:text-gray-400">
              {"[Conclusion]"}
            </h2>
          </Link>
          <Link href={"/Annexes"}>
            <h2 className="text-center text-base font-mono transition-colors hover:text-gray-400">
              {"[Annexes]"}
            </h2>
          </Link>
        </div>

        {/* Copyright section - style technique */}
        <div className="flex w-full items-center justify-center border-t border-white border-opacity-10 pt-4">
          <p className="py-3 text-center text-sm font-mono text-gray-400">
            {"// 2024-2025 - Portfolio Lohan - ORAL STAGE - "}
          </p>
          <Link 
            className="text-center text-sm font-mono hover:text-white transition-colors text-gray-400" 
            target="blank" 
            href={"https://lypso-saint-omer.62.ac-lille.fr/"}
          > 
            {"LYPSO"}
          </Link>
        </div>

        {/* Button section */}
        <div className="my-6 flex w-auto items-center justify-center">
          <Link href={"/"}>
            <button className="h-10 w-10 rounded-none border border-white bg-black text-lg duration-200 ease-out hover:-translate-y-2 hover:shadow-[0_0_6px_3px_rgba(255,255,255,0.3)] sm:h-14 sm:w-14 md:mb-12 md:h-20 md:w-20 relative">
              {/* Éléments graphiques techniques */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-40"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-40"></div>
            </button>
          </Link>
        </div>
      </div>
      
      {/* Éléments graphiques de type diagramme technique */}
      <div className="absolute left-4 top-4 w-6 h-1 bg-white opacity-30 hidden sm:block"></div>
      <div className="absolute right-4 bottom-4 w-6 h-1 bg-white opacity-30 hidden sm:block"></div>
      <div className="absolute left-4 bottom-4 w-1 h-6 bg-white opacity-30 hidden sm:block"></div>
      <div className="absolute right-4 top-4 w-1 h-6 bg-white opacity-30 hidden sm:block"></div>
    </footer>
  );
}