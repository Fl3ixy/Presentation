import Link from "next/link";

export default function Footer(){
    return(
        <footer className="text-white relative z-20 sm:mx-8 md:mx-16">
        <div className="mt-8 flex flex-row justify-center gap-5 sm:mt-24 sm:flex-row md:flex-row">
          <Link href={"/logins"}>
            <h2 className="text-center text-base duration-100 hover:text-[#d3d3d3fb] sm:text-base md:text-2xl">
              Accueil
            </h2>
          </Link>
          <Link href={"/Presentation"}>
            <h2 className="text-center text-base duration-100 hover:text-[#d3d3d3fb] sm:text-base md:text-2xl">
             Présentation
            </h2>
          </Link>
          <Link href={"/Technique"}>
            <h2 className="text-center text-base duration-100 hover:text-[#d3d3d3fb] sm:text-base md:text-2xl">
            Technique
            </h2>
          </Link>
          <Link href={"Conclusion"}>
            <h2 className="text-center text-base duration-100 hover:text-[#d3d3d3fb] sm:text-base md:text-2xl">
            Conclusion
            </h2>
          </Link>
          <Link href={"/Annexes"}>
            <h2 className="text-center text-base duration-100 hover:text-[#d3d3d3b6] sm:text-base md:text-2xl">
            Annexes
            </h2>
          </Link>
        </div>
        <div className="flex w-full justify-center">
          <p className="py-3 text-center text-sm font-semibold sm:text-xs md:text-xl">
            © 2024 - Portfolio Lohan. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="my-6 w-auto text-center duration-200 sm:mb-9">
          <Link href={"/"}>
            <button className="h-10 w-10 rounded-full bg-black text-lg text-[#5793fa] hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.8)] border-2 duration-200 ease-out hover:-translate-y-2 sm:h-14 sm:w-14 md:mb-12 md:h-20 md:w-20"></button>
          </Link>
        </div>
      </footer>
    )
}