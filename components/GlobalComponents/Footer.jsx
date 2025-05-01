import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-transparent sm:bg-black z-20 text-white">
      <div className="lg:mt-8 flex flex-row items-center justify-center gap-5 m:mt-24 sm:flex-row sm:justify-center md:flex-row">
        <Link href={"/logins"}>
          <h2 className="text-center text-base duration-100 sm:hidden hover:text-[#d3d3d3fb] sm:text-base md:text-2xl">
            Accueil
          </h2>
        </Link>
        <Link href={"/Presentation"}>
          <h2 className="text-center text-base duration-100 hover:text-[#d3d3d3fb] sm:text-center sm:text-base md:text-2xl">
            Présentation
          </h2>
        </Link>
        <Link href={"/Technique"}>
          <h2 className="text-center text-base duration-100 sm:mx-3 hover:text-[#d3d3d3fb] sm:text-center sm:text-base md:text-2xl">
            Technique
          </h2>
        </Link>
        <Link href={"Conclusion"}>
          <h2 className="text-center text-base duration-100 hover:text-[#d3d3d3fb] sm:text-base md:text-2xl">
            Conclusion
          </h2>
        </Link>
        <Link href={"/Annexes"}>
          <h2 className="text-center text-base duration-100 sm:hidden hover:text-[#d3d3d3b6] sm:text-center sm:text-base md:text-2xl">
            Annexes
          </h2>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="py-3 text-center text-sm font-semibold sm:text-center sm:text-xs md:text-xl">
          2024-2025 - Portfolio Lohan - ORAL STAGE - 
        </p>
        <Link className="text-center text-sm font-semibold sm:text-center sm:text-xs md:text-xl hover:text-[#d3d3d3fb] duration-200" target="blank" href={"https://lypso-saint-omer.62.ac-lille.fr/"}> LYPSO</Link>
      </div>
      <div className="my-6 flex w-auto items-center justify-center duration-200 sm:mb-9">
        <Link href={"/"}>
          <button className="h-10 w-10 rounded-full border-2 bg-black text-lg text-[#5793fa] duration-200 ease-out hover:-translate-y-2 hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.8)] sm:h-14 sm:w-14 md:mb-12 md:h-20 md:w-20"></button>
        </Link>
      </div>
    </footer>
  );
}
