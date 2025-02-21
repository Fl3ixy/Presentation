import Image from "next/image";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import { PresentationCard } from "@/components/Presentation/PresentationCard";

export default function Home() {
  return (
    <main className="relative min-w-[20vw]">
      {/* Header */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <p className="text-base font-semibold text-sky-500">
          Bienvenue sur ma page de présentation
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-white">
          Je suis DEREPPER Lohan
        </h2>
        <h2 className="mt-1 text-3xl font-semibold text-white">
          Étudiant en informatique
        </h2>
        <div className="w-[60%] sm:w-full">
          <p className="mx-[30%] mt-3 font-sans text-sm text-white sm:mx-0">
            Actuellement en Terminale Bac Pro SN option RISC au lycée LYPSO, je
            me passionne pour le développement. Pour atteindre mon objectif de
            devenir développeur, je souhaite poursuivre un BTS SIO afin
            d’approfondir mes compétences en programmation et en gestion des
            systèmes informatiques.
          </p>
        </div>
        <div className="flex w-full flex-col items-center">
          <button className="border-red mt-8 flex h-14 w-44 items-center justify-center rounded-full border-2 border-white bg-black text-lg text-white duration-200 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.8)] active:scale-100 active:duration-75">
            Technique
          </button>
        </div>
      </div>

      {/* Section principale */}
      <section className="w-full flex justify-center bg-black py-12">
        <article className="container flex flex-col items-start sm:items-center text-start text-white">
          <div className="text-start border-l-2 py-2 pl-4 sm:pl-4">
            <p className="text-2xl text-start sm:text-lg sm:font-semibold font-semibold pr-10 text-sky-500">
              Mes compétences
            </p>
            <p className="mt-2 sm:text-base sm:font-semibold font-sans text-start text-xl text-white">
              Quelles compétences ai-je dû utiliser pendant mon stage ?
            </p>
          </div>
        </article>
      </section>
    
      {/* Section des cartes */}
      <section className="flex w-full justify-center">
        <article
          className="container mx-auto grid w-full grid-cols-4 grid-rows-2 gap-4 bg-black text-center 
    sm:flex sm:grid-cols-1 sm:grid-rows-8 sm:flex-col 
    sm:items-center sm:justify-center sm:gap-6 sm:px-4 
    md:flex md:grid-cols-2 md:grid-rows-4 md:flex-col 
    md:items-center md:justify-center md:gap-8 md:px-6"
        >
          <PresentationCard
            imageSource="/img/CardIconServeur.svg"
            title="Réseaux informatique"
            description="Le réseau informatique m'a beaucoup servi pour résoudre les problèmes liés aux PC dans le parc. Ces connaissances m'ont permis d'élargir mes solutions potentielles en matière de dépannage."
          />
          <PresentationCard
            imageSource="/img/CardIconWindows.svg"
            title="TitleCarde"
            description="DescriptionCard"
          />
          <PresentationCard
            imageSource="/img/CardIconPhone.svg"
            title="TitleCarde"
            description="DescriptionCard"
          />
          <PresentationCard
            imageSource="/"
            title="TitleCarde"
            description="DescriptionCard"
          />
          <PresentationCard
            imageSource="/"
            title="TitleCarde"
            description="DescriptionCard"
          />
          <PresentationCard
            imageSource="/"
            title="TitleCarde"
            description="DescriptionCard"
          />
          <PresentationCard
            imageSource="/"
            title="TitleCarde"
            description="DescriptionCard"
          />
          <PresentationCard
            imageSource="/"
            title="TitleCarde"
            description="DescriptionCard"
          />
        </article>
      </section>

      {/* Particules d'arrière-plan */}
      <ParticlesBackground />
    </main>
  );
}
