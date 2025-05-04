"use client";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import {
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  Server,
  Briefcase,
  GraduationCap,
  Star,
  Book,
  Monitor,
  FileText,
  Building,
  MessageSquare,
  HardDrive,
  Network,
  Shield,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 0 10px 2px rgba(255,255,255,0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <main className="min-h-screen text-white bg-black/70">
      <ParticlesBackground />
      <section className="relative flex h-auto w-full items-center justify-center overflow-hidden py-24">
        <motion.div 
          className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-white"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* Éléments graphiques techniques */}
          <div className="absolute -left-16 top-12 w-12 h-1 bg-white opacity-30"></div>
          <div className="absolute -right-16 bottom-12 w-12 h-1 bg-white opacity-30"></div>
          <div className="absolute left-4 -top-8 w-1 h-8 bg-white opacity-30"></div>
          <div className="absolute right-4 -bottom-8 w-1 h-8 bg-white opacity-30"></div>
          <div className="absolute left-10 top-10 w-3 h-3 border border-white rounded-full opacity-20"></div>
          <div className="absolute right-10 bottom-20 w-3 h-3 border border-white rounded-full opacity-20"></div>

          <motion.div 
            className="mb-2 flex items-center gap-2 border border-white bg-black px-4 py-2"
            variants={itemVariants}
          >
            <Star className="h-4 w-4 text-white" />
            <span className="font-mono">{"//Oral de Bac - Stage"}</span>
          </motion.div>
          <motion.div 
            className="mb-8 mt-2 flex items-center gap-2 border border-white bg-black px-4 py-2"
            variants={itemVariants}
          >
            <Book className="h-4 w-4 text-white" />
            <span className="font-mono">{"//Lohan Derepper - TSN"}</span>
          </motion.div>
          <motion.h1 
            className="mb-8 text-center text-6xl font-bold leading-tight text-white font-mono md:text-8xl"
            variants={itemVariants}
          >
            Stage en Milieu Hospitalier
          </motion.h1>
          <motion.p 
            className="mb-4 max-w-2xl text-center text-xl leading-relaxed text-gray-300 font-mono md:text-2xl"
            variants={itemVariants}
          >
            {"< Service Informatique et Réseaux - Mon expérience professionnelle dans un Centre Hospitalier />"}
          </motion.p>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-32">
        {/* Introduction */}
        <section className="grid items-center gap-20 md:grid-cols-2">
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-sm font-mono">
              <div className="flex items-center gap-2 border border-white bg-black px-4 py-2 duration-200 hover:scale-105">
                <Calendar className="h-4 w-4 text-white" />
                <span className="text-white">2023 - 2025</span>
              </div>
              <div className="h-1 w-1 bg-white opacity-50 rounded-full" />
              <div className="flex items-center gap-2 border border-white bg-black px-4 py-2 duration-200 hover:scale-105">
                <Briefcase className="h-4 w-4 text-white" />
                <span className="text-white">BAC Système Numérique RISC</span>
              </div>
            </div>
            <h2 className="text-4xl text-white font-bold leading-tight md:text-5xl font-mono">
              {"// Bienvenue sur mon portfolio"}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 font-mono">
              Découvrez mon expérience de stage au sein du service informatique
              du centre hospitalier de Saint-Omer. Cette immersion
              professionnelle m&apos;a permis de mettre en pratique mes connaissances
              en réseau et systèmes informatiques dans un environnement
              professionnel où la fiabilité est essentielle. Ce site présente
              l&apos;ensemble de mon parcours réalisé en stage pour mon oral de bac.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-mono">
              <div className="flex items-center gap-2 border border-white bg-black px-4 py-2 backdrop-blur-sm duration-200 hover:scale-105">
                <Users className="h-4 w-4 text-white" />
                <span className="text-white">{"[Service informatique]"}</span>
              </div>
              <div className="flex items-center gap-2 border border-white bg-black px-4 py-2 backdrop-blur-sm duration-200 hover:scale-105">
                <Server className="h-4 w-4 text-white" />
                <span className="text-white">{"[Infrastructure réseau]"}</span>
              </div>
              <div className="flex items-center gap-2 border border-white bg-black px-4 py-2 backdrop-blur-sm duration-200 hover:scale-105">
                <GraduationCap className="h-4 w-4 text-white" />
                <span className="text-white">{"[Formation TSN]"}</span>
              </div>
            </div>
          </div>
          {/* IFrame Google Maps */}
          <div className="relative h-[650px] overflow-hidden border border-white shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1746115005943!6m8!1m7!1sBxcRWjQF-9eIAzOh8lWjYw!2m2!1d50.70382527256702!2d2.254077909171113!3f155.05589063449605!4f-0.3006561487309085!5f1.773892411727013"
              className="h-full w-full border-0"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
          </div>
        </section>

        {/* Sections Frames */}
        <section className="space-y-20">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-4xl text-white font-bold md:text-5xl font-mono">
              {"// Explorez Mon Portfolio"}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 font-mono">
              {"< Naviguez à travers les différentes sections pour découvrir mon " +
              "parcours, les tâches accomplies et mon évolution tout au long de " +
              "cette expérience en milieu hospitalier />"}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Présentation",
                icon: <FileText className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Avant de me présenter, je vous propose un aperçu du lieu où j'effectue mon stage dans le secteur de la santé. Ensuite, je reviendrai sur mon parcours académique, mes objectifs et mes motivations.",
                link: "/Presentation",
              },
              {
                title: "Activités",
                icon: <Network className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Détail technique des tâches réalisées : maintenance réseaux, assistance aux utilisateurs, gestion du parc informatique et sécurité.",
                link: "/Activites",
              },
              {
                title: "Annexes",
                icon: <Building className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Présentation du site web réalisé en NextJS et TailwindCSS. Objectif : créer un site web moderne, rapide et responsive. Projet développé dans le cadre de ma formation en bac pro SN pour mettre en pratique mes compétences en développement web pour l'oral.",
                link: "/Annexes",
              },
            ].map((section, index) => (
              <Link href={section.link} key={index}>
                <motion.div
                  className="group relative overflow-hidden border border-white bg-black p-8 h-full cursor-pointer shadow-lg"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  
                  <div className="relative z-10">
                    {section.icon}
                    <h3 className="mb-4 text-2xl font-semibold text-white font-mono">
                      {"[" + section.title + "]"}
                    </h3>
                    <p className="mb-8 leading-relaxed text-gray-300 font-mono">
                      {section.description}
                    </p>
                    <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 transform opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 text-white">
            {[
              {
                title: "Conclusion",
                icon: <MessageSquare className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Bilan de mon stage avec points positifs, axes d'amélioration et lettre de remerciement envers l'équipe du service informatique.",
                link: "/Conclusion",
              },
              {
                title: "Annexes",
                icon: <Monitor className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Présentation technique de ce portfolio : conception, développement et choix des technologies pour documenter mon expérience.",
                link: "/Annexes",
              },
            ].map((section, index) => (
              <Link href={section.link} key={index}>
                <motion.div
                  className="group relative h-full cursor-pointer border border-white bg-black p-8 shadow-lg"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  
                  <div className="relative z-10">
                    {section.icon}
                    <h3 className="mb-4 text-2xl font-semibold font-mono">
                      {"[" + section.title + "]"}
                    </h3>
                    <p className="mb-8 leading-relaxed text-gray-300 font-mono">
                      {section.description}
                    </p>
                    <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 transform opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tâches accomplies */}
        <section className="grid items-center gap-20 md:grid-cols-2">
          <div className="space-y-10">
            <h2 className="text-4xl font-bold md:text-5xl text-white font-mono">
              {"// Tâches Accomplies"}
            </h2>
            <div className="space-y-6 text-white">
              {[
                "Maintenance et dépannage des postes informatiques du personnel soignant",
                "Configuration des équipements réseau et téléphonie IP",
                "Support technique aux utilisateurs (médecins, infirmiers, administration)",
                "Gestion des droits d'accès et sécurisation des données sensibles",
                "Installation et mise à jour des logiciels métiers hospitaliers",
                "Participation aux projets liés à l'infrastructure informatique",
              ].map((task, index) => (
                <motion.div
                  key={index}
                  className="group flex items-start gap-4 border border-white bg-black p-6 transition-all duration-300"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 transition-transform duration-300 group-hover:scale-110 text-white" />
                  <p className="text-lg font-mono">{"-> " + task}</p>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="relative mx-auto max-w-4xl space-y-10 px-4 text-center border border-white p-8">
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
          
          <h2 className="text-4xl font-bold md:text-5xl font-mono">{"[Mon Oral de Bac]"}</h2>
          <p className="text-lg text-gray-300 leading-relaxed font-mono">
            {"/* Ce portfolio rassemble tous les éléments de mon stage en milieu " +
            "hospitalier pour mon oral de bac. Il témoigne de mon implication, " +
            "des compétences acquises et de ma compréhension des enjeux " +
            "informatiques dans un environnement médical. Découvrez mon parcours, " +
            "les défis relevés et les enseignements tirés de cette expérience " + 
            "professionnelle enrichissante. */"}
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <Link href="/Presentation">
              <div className="border-2 border-white bg-black text-lg text-white h-14 w-44 flex items-center justify-center duration-200 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_6px_3px_rgba(255,255,255,0.3)] active:scale-100 active:duration-75 font-mono">
                {"[Commencer la visite]"}
              </div>
            </Link>
          </div>
        </section>
      </div>
      
      {/* Éléments Techniques */}
      <div className="fixed top-6 left-6 w-6 h-6 border-t border-l border-white opacity-20"></div>
      <div className="fixed top-6 right-6 w-6 h-6 border-t border-r border-white opacity-20"></div>
      <div className="fixed bottom-6 left-6 w-6 h-6 border-b border-l border-white opacity-20"></div>
      <div className="fixed bottom-6 right-6 w-6 h-6 border-b border-r border-white opacity-20"></div>
    </main>
  );
}