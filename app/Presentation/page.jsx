"use client";
import { useState, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";

const services = [
  {
    image: "/img/Student.svg",
    title: "Le Stagiaire",
    description: "Expérience enrichissante et confiance acquise",
    fullText:
      "Je m’appelle Lohan Derepper, j’ai 17 ans et je suis étudiant en Systèmes Numériques option RISC au LYPSO, site de l’Aa. j’ai toujours été curieux de comprendre le fonctionnement des réseaux et des systèmes en milieu professionnel. Stagiaire pour la 5ème fois au service DSIO du CHRSO, un hôpital public, cette expérience m’a permis de renforcer ma relation avec l’équipe informatique, de comprendre les enjeux spécifiques d’un environnement hospitalier et d’acquérir des compétences essentielles en maintenance des systèmes informatique et réseaux.",
  },
  {
    image: "/img/Computer.svg",
    title: "Formation",
    description: "Formation et projet du stagiaire",
    fullText:
      "Actuellement en Terminale Bac Pro SN, option RISC (Réseaux Informatiques et Systèmes Communicants), au lycée LYPSO sur le site de l'Aa, je développe des compétences dans le domaine des réseaux informatiques. Cette formation m'a permis de découvrir ma passion pour le web et le développement. Mon objectif est de me spécialiser dans ce domaine afin de devenir développeur web. Pour y parvenir, je souhaite poursuivre mes études avec un BTS SIO. Cette orientation me permettra d’approfondir mes connaissances et d’acquérir les compétences nécessaires pour réussir dans ce métier.",
  },
  {
    image: "/img/Team.svg",
    title: "Le service",
    description: "Organisation et gestion du DSIO",
    fullText:
      "Le service DSIO est composé de 10 membres spécialisés en informatique, dont 3 techniciens réseaux, 1 administrateur réseaux, 1 administrateur systèmes, 3 techniciens applicatifs, 1 responsable de stock et téléphonie, ainsi que le responsable du service. Le service est organisé pour gérer efficacement les tâches et les pannes. Les techniciens réseaux, qui reçoivent les appels via un système de téléphonie, s’occupent de résoudre les problèmes à distance ou en présentiel. Un système de gestion des tickets, GLPI, permet de suivre les demandes et les incidents. Lorsque cela est nécessaire, les techniciens redirigent les appels vers les autres membres de l’équipe, comme les techniciens applicatifs, en fonction de la nature du problème.",
  },
  {
    image: "/img/Work.svg",
    title: "Activités du service",
    description: "Collaboration du service pour le déploiement réseau Wi-Fi",
    fullText:
      "Cela nécessite un travail considérable de la part de chaque membre du service. Les techniciens informatiques ont dû nous assister pour résoudre les éventuels problèmes techniques et pannes qui pouvaient survenir pendant le processus. Les administrateurs systèmes ont assuré la configuration des équipements et leur intégration dans le réseau global de l’hôpital. Les techniciens applicatifs ont vérifié que les bornes Wi-Fi fonctionnaient bien avec les logiciels et applications utilisés dans l’établissement. Quant au responsable de stock et téléphonie, il a supervisé la gestion des matériaux nécessaires et la bonne distribution des équipements sur le site.",
  },
  {
    image: "/img/Computer.svg",
    title: "Historique de activités",
    description: "Stage en dépannage informatique et gestion réseau",
    fullText:
      "Pendant mon stage au centre hospitalier, j'ai participé à plusieurs dépannages informatiques et réseaux. J'ai effectué le brassage des prises réseau dans les baies pour garantir une bonne connexion. J'ai aussi installé des logiciels sur les ordinateurs et résolu divers problèmes, comme des soucis de connexion ou de matériel défectueux. De plus, j'ai aidé le personnel par téléphone pour résoudre des problèmes informatiques à distance. Ces missions m'ont permis d'améliorer mes compétences en dépannage et en gestion du matériel informatique.",
  },
  {
    image: "/img/Loupe.svg",
    title: "Informations pratiques",
    description:
      "Migration vers le cloud et gestion de vos environnements virtuels.",
    fullText: `Présentation de l'établissement et du service :

J'ai effectué mon stage au sein du service de l'hôpital public CHRSO, situé à Route de Blendecques, 60357 Helfaut. L'hôpital est dirigé par Christian BURGI. Durant mon stage, j'ai été encadré par Gerald FIERRARD, qui exerçait les fonctions de tuteur ainsi que de responsable du service.

Coordonnées de l'établissement :

- Adresse : Route de Blendecques, 60357 Helfaut
- Téléphone : 03 21 88 70 00`,
  },
];

// Composant mémorisé pour la carte de service
const ServiceCard = memo(
  ({ service, isActive, onToggle, index, onClickCard }) => (
    <div
      className="relative transform cursor-pointer overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-4 shadow-lg transition-transform hover:scale-105 hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.5)] sm:p-6"
      onClick={onClickCard} // Ouvre la modale uniquement sur SM et MD
    >
      {service.image && (
        <div className="mx-auto mb-2 h-12 w-12 sm:mb-4 sm:h-16 sm:w-16">
          <Image
            src={service.image}
            alt={service.title}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      )}

      <h3 className="text-center text-lg font-semibold sm:text-xl">
        {service.title}
      </h3>
      <p className="mt-1 text-center font-sans text-base leading-relaxed text-gray-300 sm:mt-2 sm:text-sm">
        {service.description}
      </p>

      {/* Affichage uniquement sur SM/MD */}
      <div
        className={`overflow-hidden text-xs leading-relaxed text-gray-300 transition-all duration-500 sm:text-sm ${
          isActive ? "mt-3 max-h-48 opacity-100 sm:mt-4" : "max-h-0 opacity-0"
        }`}
        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
      >
        <div className="whitespace-pre-line rounded-b-xl border-t border-gray-700 bg-sky-700 p-3 font-sans text-sm sm:p-4">
          {service.fullText}
        </div>
      </div>
    </div>
  ),
);

ServiceCard.displayName = "ServiceCard";

// Composant mémorisé pour le Hero
const Hero = memo(() => (
  <div className="animate-fadeInUp relative z-10 flex flex-col items-center justify-center p-4 text-center sm:p-8">
    <div className="max-w-4xl">
      <p className="mb-2 text-sm font-medium tracking-wider text-sky-400 sm:mb-4 sm:text-lg">
        Centre Hospitalier de la Région de Sait-Omer
      </p>
      <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:mb-6 sm:text-6xl">
        DSIO <span className="text-sky-500">Informatique</span>
      </h1>
      <p className="mx-[15%] mb-6 max-w-2xl text-sm leading-relaxed text-white sm:mb-8 sm:text-xl">
        Le service informatique du CHRSO compte 10 membres compétents et
        réactifs, assurant la gestion et la maintenance des systèmes du Centre
        Hospitalier. Ils sont toujours prêts à répondre aux besoins techniques
        du personnel.
      </p>
      <div className="flex flex-row items-center justify-center gap-4">
        <Link
          href="/Technique"
          className="border-red mt-2 flex h-14 w-44 items-center justify-center rounded-full border-2 border-white bg-black text-lg text-white duration-200 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.8)] active:scale-100 active:duration-75"
        >
          Technique
        </Link>
        <Link
          href="/Conclusion"
          className="border-red mt-2 flex h-14 w-44 items-center justify-center rounded-full border-2 border-white bg-black text-lg text-white duration-200 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.8)] active:scale-100 active:duration-75"
        >
          Conclusion
        </Link>
      </div>
    </div>
  </div>
));

Hero.displayName = "Hero";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false); // Nouvelle gestion de l'état pour la modale

  const toggleDetail = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  const toggleModal = (index) => {
    setActiveIndex(index);
    setShowModal(true); // Afficher la modale quand on clique sur une carte
  };

  const closeModal = () => {
    setShowModal(false); // Fermer la modale
    setActiveIndex(null);
  };

  return (
    <main className="relative min-h-screen min-w-[20vw] text-white">
      <Hero />

      <section className="px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
            Présentation du service DSIO
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-xs text-gray-400 sm:text-sm">
          Présentation du service DSIO gère l&apos;informatique au sein de l&apos;hopital
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isActive={activeIndex === index}
                onToggle={toggleDetail}
                onClickCard={() => toggleModal(index)} // Ajoutez cette fonction pour ouvrir la modale
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modale sur tous les formats d'écran */}
      {showModal && (
        <div className=" fixed inset-0 z-50 hidden items-center justify-center bg-black bg-opacity-60 sm:flex">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6 sm:w-2/3 lg:w-[60%]">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-500"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold">
              {services[activeIndex].title}
            </h3>
            <p className="mt-2 text-sm text-gray-700 sm:text-base lg:text-lg">
              {services[activeIndex].fullText}
            </p>
          </div>
        </div>
      )}

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
