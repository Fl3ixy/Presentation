'use client';
import Image from "next/image";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import { WebsiteCard } from "@/components/website/WebsiteCard";

export default function Home() {
  return (
    <main className="relative min-w-[20vw]">
      {/* Header */}
      <div className="flex flex-col items-center justify-center p-6 text-center animate-fadeInUp">
        <p className="text-lg pt-6 font-semibold text-sky-500">
          Présentation de mon site web
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-white">
          Comment j&apos;ai créé ce site?
        </h2>
        <h2 className="mt-1 text-3xl font-semibold text-white">
          Voici mon processus de création
        </h2>
        <div className="w-[60%] sm:w-full">
          <p className="mx-[30%] mt-6 font-sans text-sm text-white sm:mx-0">
            J&apos;ai créé ce site en utilisant des technologies modernes comme
            Next.js, React et TailwindCSS. Le design a été pensé et réalisé sur
            Figma pour offrir une interface claire et une navigation fluide.
            Chaque page a été développée en React, tandis que TailwindCSS m&apos;a
            permis de rendre le site esthétique et réactif. J&apos;ai aussi optimisé
            la performance pour garantir une bonne expérience, même sur mobile.
            Ce projet m&apos;a permis de mettre en pratique mes compétences en
            développement web et d&apos;aller plus loin avec des outils comme Next.js
            et React.
          </p>
        </div>
        <div className="flex w-full flex-col items-center">
          <button className="border-red mt-8 flex h-14 w-44 items-center justify-center rounded-full border-2 border-white bg-black text-lg text-white duration-200 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.8)] active:scale-100 active:duration-75">
            Technique
          </button>
        </div>
      </div>

      {/* Section principale */}
      <section className="flex w-full justify-center py-12 bg-black animate-fadeInUp">
        <article className="container flex flex-col items-start text-start text-white sm:items-center">
          <div className="border-l-2 text-start sm:border-hidden md:border-hidden">
            <p className="whitespace-nowrap pl-4 text-start text-2xl font-semibold text-sky-500 sm:pt-3 sm:text-center sm:text-2xl sm:font-bold md:text-center md:text-2xl md:font-bold">
              Les languages
            </p>
            <p className="text-start pl-4 font-sans text-xl text-white w-[80vw] sm:py-8 sm:text-center sm:text-xl sm:font-semibold md:text-center md:text-xl md:font-semibold">
              Le site web utilise plusieurs langages et outils modernes pour
              offrir une expérience fluide et interactive, tout en gérant
              efficacement le code et la structure du site, en accord avec mon
              niveau actuel
            </p>
          </div>
        </article>
      </section>

      {/* Section des cartes */}
      <section className="flex w-full justify-center animate-fadeInUp">
        <article className="container mx-auto grid w-full grid-cols-4 grid-rows-2 gap-4 bg-black text-center sm:flex sm:grid-cols-1 sm:grid-rows-8 sm:flex-col sm:items-center sm:justify-center sm:gap-6 sm:px-4 md:flex md:grid-cols-2 md:grid-rows-4 md:flex-col md:items-center md:justify-center md:gap-8 md:px-6">
          <WebsiteCard
            imageSource="/img/CardIconNextJS.svg"
            title="NextJS"
            description="Framework React avec rendu serveur et génération statique"
          />
          <WebsiteCard
            imageSource="/img/CardIconTailwindCSS.svg"
            title="TailwindCSS"
            description="Framework CSS utilitaire pour des designs personnalisés rapidement"
          />
          <WebsiteCard
            imageSource="/img/CardIconReact.svg"
            title="React"
            description="Bibliothèque JavaScript pour créer des interfaces utilisateur interactives"
          />
          <WebsiteCard
            imageSource="/img/CardIconJS.svg"
            title="JS"
            description="Langage de programmation pour rendre les pages web interactives"
          />
          <WebsiteCard
            imageSource="/img/CardIconHTML.svg"
            title="HTML5"
            description="Langage de balisage pour structurer le contenu des pages web"
          />
          <WebsiteCard
            imageSource="/img/CardIconCSS.svg"
            title="CSS3"
            description="Langage de style pour définir l'apparence des pages web"
          />
          <WebsiteCard
            imageSource="/img/CardIconFigma.svg"
            title="Figma"
            description="Outil de design pour créer des interfaces et prototypes"
          />
          <WebsiteCard
            imageSource="/img/CardIconPhotopea.svg"
            title="Photopea"
            description="Outil en ligne puissant pour éditer des images, similaire à Photoshop"
          />
        </article>
      </section>

      {/* Particules d'arrière-plan */}
      <ParticlesBackground />

      {/* Définition de l'animation CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px); /* Déplacement vers le bas */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* Position finale */
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.75s ease-out;
        }
      `}</style>
    </main>
  );
}
