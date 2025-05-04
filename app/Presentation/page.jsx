"use client";
import { useState, useCallback, memo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import { motion } from "framer-motion";

const services = [
  {
    image: "/img/Student.svg",
    title: "Le Stagiaire",
    description: "Expérience enrichissante et confiance acquise",
    fullText:
      "Je m'appelle Lohan Derepper, j'ai 17 ans et je suis étudiant en Systèmes Numériques option RISC au LYPSO, site de l'Aa. j'ai toujours été curieux de comprendre le fonctionnement des réseaux et des systèmes en milieu professionnel. Stagiaire pour la 5ème fois au service DSIO du CHRSO, un hôpital public, cette expérience m'a permis de renforcer ma relation avec l'équipe informatique, de comprendre les enjeux spécifiques d'un environnement hospitalier et d'acquérir des compétences essentielles en maintenance des systèmes informatique et réseaux.",
    photos: [
      "/ImgRapport/CV.jpg",
    ]
  },
  {
    image: "/logo/Lypso.svg",
    title: "Formation",
    description: "Formation et projet du stagiaire",
    fullText:
      "Actuellement en Terminale Bac Pro SN, option RISC (Réseaux Informatiques et Systèmes Communicants), au lycée LYPSO sur le site de l'Aa, je me spécialise dans les réseaux informatiques. Avant cela, j'étais en seconde TNE2 à Jacques-Durand, un parcours lié aux métiers de l'électricité, mais ma passion pour l'informatique m'a poussé à m'orienter vers ce domaine. Depuis, je suis de plus en plus attiré par le web et le développement. Mon projet professionnel est de devenir développeur web, et pour atteindre cet objectif, je souhaite poursuivre mes études avec un BTS SIO. Cette formation me permettra de renforcer mes compétences et d'approfondir mes connaissances pour réussir dans ce métier.",
    photos: [
      "/ImgRapport/JacquesDurand.png",
      "/ImgRapport/Aa.png",
      "/ImgRapport/bai2.jpg",
      "/ImgRapport/bai5.jpg",
      "/ImgRapport/DevoirLypso.png",
      "/ImgRapport/DevWeb.png",
    ]
  },
  {
    image: "/logo/CHRSO.svg",
    title: "Le service",
    description: "Organisation et gestion du DSIO",
    fullText:
      "Le service DSIO est composé de 10 membres spécialisés en informatique, dont 3 techniciens réseaux, 1 administrateur réseaux, 1 administrateur systèmes, 3 techniciens applicatifs, 1 responsable de stock et téléphonie, ainsi que le responsable du service. Le service est organisé pour gérer efficacement les tâches et les pannes. Les techniciens réseaux, qui reçoivent les appels via un système de téléphonie, s'occupent de résoudre les problèmes à distance ou en présentiel. Un système de gestion des tickets, GLPI, permet de suivre les demandes et les incidents. Lorsque cela est nécessaire, les techniciens redirigent les appels vers les autres membres de l'équipe, comme les techniciens applicatifs, en fonction de la nature du problème.",
    photos: [
      "/ImgRapport/CHRSO_Building.png",
      "/img/CHRSO_Building.png",
      "/ImgRapport/CHRSO2.png",
      "/ImgRapport/TenueIsolement.jpg",
      "/ImgRapport/PCName.png",
    ]
  },
  {
    image: "/img/Loupe.svg",
    title: "Informations pratiques",
    description:
      "Informations sur le service DSIO",
    fullText: `Présentation de l'établissement et du service :

J'ai effectué mon stage au sein du service de l'hôpital public CHRSO, situé à Route de Blendecques, 60357 Helfaut. L'hôpital est dirigé par Christian BURGI. Durant mon stage, j'ai été encadré par Gerald FIERRARD, qui exerçait les fonctions de tuteur ainsi que de responsable du service.

Coordonnées de l'établissement :

- Adresse : Route de Blendecques, 60357 Helfaut
- Téléphone : 03 21 88 70 00`,
    photos: [
      "/ImgRapport/CHRSO3.png",
      "/ImgRapport/CHRSO6.png",
    ]
  },
];

// Statistiques
const stats = [
  { value: "10 Postes", label: "Membres dans l'équipe" },
  { value: "3 Postes", label: "Techniciens informatiques" },
  { value: "3 Postes", label: "Techniciens applications" },
  { value: "1 Poste", label: "Administrateur réseau (maître d'activité)" },
  { value: "1 Poste", label: "Administrateur systèmes" },
  { value: "1 Poste", label: "Responsable téléphonie" },
  { value: "1 Poste", label: "Responsable du service DSIO (tuteur de stage)" }
];

// Composant mémorisé pour la carte de service - design minimaliste tech
const ServiceCard = memo(
  ({ service, index, openModal }) => {
    // Animation pour les cartes
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1
        }
      },
      hover: { 
        scale: 1.03,
        boxShadow: "0 0 10px 2px rgba(255,255,255,0.2)",
        transition: { duration: 0.3 }
      }
    };

    return (
      <motion.div
        className="relative overflow-hidden rounded-none border border-white bg-black p-4 shadow-lg cursor-pointer sm:p-6"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={cardVariants}
        onClick={() => openModal(index)}
      >
        {service.image && (
          <motion.div 
            className="mx-auto mb-2 h-12 w-12 sm:mb-4 sm:h-16 sm:w-16 opacity-80"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={64}
              height={64}
              className="object-contain"
            />
          </motion.div>
        )}

        <h3 className="text-center text-lg font-mono font-semibold sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-1 text-center font-mono text-base text-opacity-70 leading-relaxed text-gray-300 sm:mt-2 sm:text-sm">
          {service.description}
        </p>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
      </motion.div>
    )
  },
);

ServiceCard.displayName = "ServiceCard";

// Animation pour les statistiques
const StatItem = ({ stat, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div 
      className="text-center px-4 py-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-3xl font-mono font-bold text-white mb-1"
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {stat.value}
      </motion.div>
      <div className="text-sm font-mono text-gray-400">{stat.label}</div>
    </motion.div>
  );
};

// Composant mémorisé pour le Hero avec style technique minimaliste
const Hero = memo(() => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div 
      className="relative z-10 flex flex-col items-center justify-center p-4 text-center sm:p-8"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="max-w-4xl relative">
        {/* Éléments graphiques de type diagramme technique */}
        <div className="absolute -left-16 top-12 w-12 h-1 bg-white opacity-30"></div>
        <div className="absolute -right-16 bottom-12 w-12 h-1 bg-white opacity-30"></div>
        <div className="absolute left-4 -top-8 w-1 h-8 bg-white opacity-30"></div>
        <div className="absolute right-4 -bottom-8 w-1 h-8 bg-white opacity-30"></div>
        <div className="absolute left-10 top-10 w-3 h-3 border border-white rounded-full opacity-20"></div>
        <div className="absolute right-10 bottom-20 w-3 h-3 border border-white rounded-full opacity-20"></div>

        <motion.p 
          className="mb-2 text-sm font-mono tracking-wider text-white sm:mb-4 sm:text-lg"
          variants={itemVariants}
        >
          {"//CHRSO:DSIO"}
        </motion.p>
        <motion.h1 
          className="mb-4 text-4xl font-mono font-bold leading-tight text-white sm:mb-6 sm:text-6xl"
          variants={itemVariants}
        >
          DSIO <span className="text-white opacity-70">Informatique</span>
        </motion.h1>
        <motion.p 
          className="mx-[15%] mb-6 max-w-2xl text-sm font-mono leading-relaxed text-gray-300 sm:mb-8 sm:text-base"
          variants={itemVariants}
        >
          {"< Le service informatique du CHRSO compte 10 membres compétents et " +
          "réactifs, assurant la gestion et la maintenance des systèmes du Centre " +
          "Hospitalier. Ils sont toujours prêts à répondre aux besoins techniques " +
          "du personnel. />"}
        </motion.p>
        <motion.div 
          className="flex flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="/Activites"
            className="border-red mt-2 flex h-14 w-44 items-center justify-center border-2 border-white bg-black text-lg text-white duration-200 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_6px_3px_rgba(255,255,255,0.3)] active:scale-100 active:duration-75 font-mono"
          >
            {"[Activités]"}
          </Link>
          <Link
            href="/Conclusion"
            className="border-red mt-2 flex h-14 w-44 items-center justify-center border-2 border-white bg-black text-lg text-white duration-200 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_6px_3px_rgba(255,255,255,0.3)] active:scale-100 active:duration-75 font-mono"
          >
            {"[Conclusion]"}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
});

Hero.displayName = "Hero";

// Composant d'image zoomable
const ZoomableImage = ({ src, alt, closeZoom }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeZoom}
    >
      <motion.div 
        className="relative max-w-3xl max-h-[90vh]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
      >
        <div className="absolute top-0 left-0 w-full h-full border border-white opacity-30"></div>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="object-contain"
        />
        <button
          className="absolute -top-10 right-0 text-white text-xl hover:text-gray-400 font-mono"
          onClick={closeZoom}
        >
          {"/close x"}
        </button>
      </motion.div>
    </motion.div>
  );
};

// Composant principal avec design minimaliste tech
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [zoomImageSrc, setZoomImageSrc] = useState(null);

  const openModal = (index) => {
    setCurrentServiceIndex(index);
    setShowModal(true);
    // Empêcher le défilement du corps lors de l'ouverture de la modale
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    // Réactiver le défilement du corps lors de la fermeture de la modale
    document.body.style.overflow = 'auto';
  };

  const openZoomImage = (src, e) => {
    e.stopPropagation();
    setZoomImageSrc(src);
  };

  const closeZoomImage = () => {
    setZoomImageSrc(null);
  };

  return (
    <main className="relative min-h-screen min-w-[20vw] text-white bg-black/70">
      <Hero />

      {/* Section des statistiques */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-black border border-white rounded-none overflow-hidden">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-mono font-extrabold sm:text-3xl">
            {"// Présentation"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-xs font-mono text-gray-400 sm:text-sm">
            {"<service-info> Etudes en SN - DSIO - Informatique Hospitalière </service-info>"}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                openModal={() => openModal(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modale avec galerie d'images - style technique minimaliste - RENDUE RESPONSIVE */}
      {showModal && (
        <motion.div 
          className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-95 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative w-full max-w-4xl bg-black border border-white p-4 sm:p-6 text-white max-h-[90vh] overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Éléments graphiques techniques */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
            
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 text-gray-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 pt-2 sm:pt-0">
              <div className="bg-black border border-white p-2 sm:p-3 rounded-none mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0">
                <Image
                  src={services[currentServiceIndex].image}
                  alt={services[currentServiceIndex].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-mono font-semibold text-center sm:text-left">
                {services[currentServiceIndex].title}
              </h3>
            </div>
            
            <div className="border-l-2 border-white pl-2 sm:pl-4 mb-4">
              <p className="text-gray-300 italic font-mono text-sm sm:text-base">{"//" + services[currentServiceIndex].description}</p>
            </div>
            
            <div className="mt-4 text-sm text-gray-200 font-mono space-y-4">
              {services[currentServiceIndex].fullText.split('\n\n').map((paragraph, i) => (
                <p key={i} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            {/* Galerie d'images - rendue responsive */}
            <div className="mt-6">
              <h4 className="text-lg font-mono font-semibold text-white mb-4">{"// Galerie photos"}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {services[currentServiceIndex].photos.map((photo, idx) => (
                  <div 
                    key={idx} 
                    className="relative overflow-hidden border border-white cursor-pointer hover:scale-105 transition-transform"
                    onClick={(e) => openZoomImage(photo, e)}
                  >
                    <Image
                      src={photo}
                      alt={`${services[currentServiceIndex].title} - Photo ${idx + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-36 sm:h-48 object-cover grayscale hover:grayscale-0 transition-all"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-center sm:justify-end">
              <button 
                onClick={closeModal}
                className="bg-black border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors font-mono"
              >
                {"[FERMER]"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Zoom image - rendu responsive */}
      {zoomImageSrc && (
        <ZoomableImage 
          src={zoomImageSrc} 
          alt="Image agrandie" 
          closeZoom={closeZoomImage} 
        />
      )}

      {/* Éléments de design technique */}
      <div className="fixed top-6 left-6 w-6 h-6 border-t border-l border-white opacity-20"></div>
      <div className="fixed top-6 right-6 w-6 h-6 border-t border-r border-white opacity-20"></div>
      <div className="fixed bottom-6 left-6 w-6 h-6 border-b border-l border-white opacity-20"></div>
      <div className="fixed bottom-6 right-6 w-6 h-6 border-b border-r border-white opacity-20"></div>

      {/* Particules d'arrière-plan avec style technique */}
      <ParticlesBackground />
    </main>
  );
}