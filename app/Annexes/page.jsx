'use client';
import Image from "next/image";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import { WebsiteCard } from "@/components/Website/WebsiteCard";
import { Link } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-w-[20vw] text-white bg-black/70 overflow-hidden">
      {/* Header  */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        {/* Éléments Technique */}
        <div className="absolute -left-16 top-12 w-12 h-1 bg-white opacity-30"></div>
        <div className="absolute -right-16 bottom-12 w-12 h-1 bg-white opacity-30"></div>
        <div className="absolute left-4 -top-8 w-1 h-8 bg-white opacity-30"></div>
        <div className="absolute right-4 -bottom-8 w-1 h-8 bg-white opacity-30"></div>
        <div className="absolute left-10 top-10 w-3 h-3 border border-white rounded-full opacity-20"></div>
        <div className="absolute right-10 bottom-20 w-3 h-3 border border-white rounded-full opacity-20"></div>
        
        <p className="text-lg pt-6 font-mono text-white opacity-70">
          {"//Présentation de mon site web"}
        </p>
        <h2 className="mt-2 text-4xl font-mono font-bold text-white">
          Comment j&apos;ai créé ce site?
        </h2>
        <h2 className="mt-1 text-3xl font-mono font-bold text-white opacity-70">
          Voici mon processus de création
        </h2>
        <div className="w-[60%] sm:w-full">
          <p className="mx-[30%] mt-6 font-mono text-sm text-gray-300 leading-relaxed sm:mx-0">
            {"< J'ai créé ce site en utilisant des technologies modernes comme " +
            "Next.js, React et TailwindCSS. Le design a été pensé et réalisé sur " +
            "Figma pour offrir une interface claire et une navigation fluide. " +
            "Chaque page a été développée en React, tandis que TailwindCSS m'a " +
            "permis de rendre le site esthétique et réactif. J'ai aussi optimisé " +
            "la performance pour garantir une bonne expérience, même sur mobile. " +
            "Ce projet m'a permis de mettre en pratique mes compétences en " +
            "développement web et d'aller plus loin avec des outils comme Next.js " +
            "et React. />"}
          </p>
        </div>
      </div>

      {/* Section principale */}
      <section className="flex w-full justify-center py-12">
        <article className="container flex flex-col items-start text-start text-white sm:items-center">
          <div className="border-l-2 border-white text-start sm:border-hidden md:border-hidden">
            <p className="whitespace-nowrap pl-4 text-start text-2xl font-mono font-semibold text-white sm:pt-3 sm:text-center sm:text-2xl sm:font-bold md:text-center md:text-2xl md:font-bold">
              {"// Les languages"}
            </p>
            <p className="text-start pl-4 font-mono text-xl text-gray-300 w-[80vw] sm:py-8 sm:text-center sm:text-xl sm:font-semibold md:text-center md:text-xl md:font-semibold">
              {"< Le site web utilise plusieurs langages et outils modernes pour " +
              "offrir une expérience fluide et interactive, tout en gérant " +
              "efficacement le code et la structure du site, en accord avec mon " +
              "niveau actuel />"}
            </p>
          </div>
        </article>
      </section>

      {/* Section Cartes */}
      <section className="flex w-full justify-center px-4 p-4">
        <article className="container mx-auto grid w-full grid-cols-4 grid-rows-2 gap-4 bg-black text-center sm:flex sm:grid-cols-1 sm:grid-rows-8 sm:flex-col sm:items-center sm:justify-center sm:gap-6 sm:px-4 md:flex md:grid-cols-2 md:grid-rows-4 md:flex-col md:items-center md:justify-center md:gap-8 md:px-6">
          {/* Modification Composant SiteWeb */}
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

      {/* Éléments de design technique */}
      <div className="fixed top-6 left-6 w-6 h-6 border-t border-l border-white opacity-20"></div>
      <div className="fixed top-6 right-6 w-6 h-6 border-t border-r border-white opacity-20"></div>
      <div className="fixed bottom-6 left-6 w-6 h-6 border-b border-l border-white opacity-20"></div>
      <div className="fixed bottom-6 right-6 w-6 h-6 border-b border-r border-white opacity-20"></div>

      {/* Particules Background */}
      <ParticlesBackground />
    </main>
  );
}