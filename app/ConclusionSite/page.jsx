"use client";

import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  ChevronDown,
  Clock,
  Heart,
  MessageSquare,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simuler un petit délai pour permettre aux animations de se mettre en place
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-black/70 p-4 text-white md:p-8">
      {/* Particules Background */}
      <ParticlesBackground />

      {/* Éléments Techniques */}
      <div className="fixed left-6 top-6 h-6 w-6 border-l border-t border-white opacity-20"></div>
      <div className="fixed right-6 top-6 h-6 w-6 border-r border-t border-white opacity-20"></div>
      <div className="fixed bottom-6 left-6 h-6 w-6 border-b border-l border-white opacity-20"></div>
      <div className="fixed bottom-6 right-6 h-6 w-6 border-b border-r border-white opacity-20"></div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 mx-auto max-w-5xl space-y-16"
          >
            {/* Header */}
            <motion.div
              className="py-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-6 inline-block"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center border border-white">
                  <Award size={42} className="text-primary" />
                </div>
              </motion.div>

              <h1 className="font-mono text-4xl font-bold tracking-tight text-white md:text-5xl">
                {"Conclusion du projet".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mx-auto mt-6 h-1 w-32 bg-white opacity-50"
              />

              <motion.p
                className="mt-4 font-mono text-sm tracking-wider text-white opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.5 }}
              >
                {"//LYPSO - ORAL"}
              </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ChevronDown className="text-white opacity-70" size={32} />
            </motion.div>

            {/* Main Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-16"
            >
              {/* Main Text Section */}
              <motion.section
                variants={itemVariants}
                className="rounded-none border border-white bg-black p-8 shadow-lg transition-all duration-300"
              >
                <h2 className="mb-6 flex items-center font-mono text-2xl font-bold md:text-3xl">
                  <span className="mr-3">{"// Bilan du Projet"}</span>
                  <div className="ml-4 h-px flex-grow bg-white opacity-30"></div>
                </h2>
                <motion.div className="space-y-6 font-mono text-lg text-gray-300">
                  <p className="leading-relaxed">
                    Ce Projet a été une{" "}
                    <span className="font-semibold text-white">
                      expérience enrichissante pour mon projet professionel
                    </span>{" "}
                    qui m&apos;a permis de développer mes compétences en
                    développement web et de mieux comprendre les outils de
                    développement qui me serviront en entreprise. J&apos;ai pu
                    mettre en pratique mes connaissances personelle apprises
                    chez moi depuis ma 4eme et acquérir de nouvelles compétences
                    techniques grâce à ce projet.
                  </p>
                  <p className="leading-relaxed">
                    Cette expérience m&apos;a également permis de{" "}
                    <span className="font-semibold text-white">
                      confirmer mon projet professionnel
                    </span>{" "}
                    et de me projeter dans mon futur métier avec plus de
                    confiance et de motivation pour partir en BTS SIO Optis SLAM
                  </p>
                </motion.div>
                <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-white opacity-50"></div>
              </motion.section>

              {/* Pros and Cons Table */}
              <motion.div
                variants={itemVariants}
                className="grid gap-8 md:grid-cols-2"
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 10px 2px rgba(255,255,255,0.2)",
                    transition: { duration: 0.3 },
                  }}
                  className="relative rounded-none border-2 border-green-500/20 bg-black p-8 shadow-lg"
                >
                  <h3 className="mb-6 flex items-center font-mono text-2xl font-bold text-green-400">
                    <CheckCircle size={24} className="mr-3 text-green-400" />
                    <span>{"[Points Positifs]"}</span>
                  </h3>
                  <motion.ul
                    className="space-y-4 border-green-500/20 font-mono"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Acquisition de nouveaux langages professionnels",
                      "Travailler de façon optimisée et organisé",
                      "Participation à des projets qui me serviront en BTS et en entreprise plus tard",
                      "Développement de l'autonomie et de la confiance en soi",
                      "Participation complète dans un domaine que je connais réellement et qui me passionne",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={listItemVariants}
                        custom={index}
                        className="flex items-center space-x-3 border-l-2 border-green-400/30  py-2 pl-2 transition-all duration-300 hover:border-green-400"
                      >
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-white opacity-50"></div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 10px 2px rgba(255,255,255,0.2)",
                    transition: { duration: 0.3 },
                  }}
                  className="relative rounded-none border-2 border-red-500/20 bg-black p-8 shadow-lg"
                >
                  <h3 className="mb-6 flex items-center font-mono text-2xl font-bold text-red-400">
                    <XCircle size={24} className="mr-3 text-red-400" />
                    <span>{"[Points à Améliorer]"}</span>
                  </h3>
                  <motion.ul
                    className="space-y-4 font-mono"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Ajout de Back-End pour plus de fonctionnalités",
                      "Approfondissement de certaines connaissances techniques en JavaScript (JS)",
                      "Etre plus a l'aise avec les importations de components",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={listItemVariants}
                        custom={index}
                        className="flex items-center space-x-3 border-l-2 border-red-400/30 py-2 pl-2 transition-all duration-300 hover:border-red-400"
                      >
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-white opacity-50"></div>
                </motion.div>
              </motion.div>

              {/* Thank You Letter */}
              <motion.section
                variants={itemVariants}
                className="relative overflow-hidden rounded-none border border-white bg-black p-8 shadow-lg md:p-10"
              >
                {/* Éléments Techniques */}
                <div className="absolute -left-16 top-12 h-1 w-12 bg-white opacity-30"></div>
                <div className="absolute -right-16 bottom-12 h-1 w-12 bg-white opacity-30"></div>
                <div className="absolute -top-8 left-4 h-8 w-1 bg-white opacity-30"></div>
                <div className="absolute -bottom-8 right-4 h-8 w-1 bg-white opacity-30"></div>
                <div className="absolute left-10 top-10 h-3 w-3 rounded-full border border-white opacity-20"></div>
                <div className="absolute bottom-20 right-10 h-3 w-3 rounded-full border border-white opacity-20"></div>

                <h2 className="mb-8 flex items-center font-mono text-2xl font-bold md:text-3xl">
                  <Heart size={28} className="mr-3 text-pink-400" />
                  <span>{"// Lettre de Remerciements"}</span>
                  <div className="ml-4 h-px flex-grow bg-white opacity-30"></div>
                </h2>
                <div className="prose prose-lg relative z-10 max-w-none font-mono text-gray-300">
                  <p className="mb-5 leading-relaxed">
                    Je tiens à exprimer ma{" "}
                    <span className="font-semibold text-white">
                      sincère gratitude
                    </span>{" "}
                    envers tous les professeurs pour leur enseignement donné
                    durant les 3 ans d&apos;enseignement professionnel.
                  </p>
                  <p className="mb-5 leading-relaxed">
                    Un remerciement particulier à mes professeurs
                    d&apos;enseignement professionnel, M. POLLET et M. MERESSE,
                    ainsi qu&apos;aux professeurs d&apos;enseignement général,
                    Mme DECARSIN, M. COLLIER, pour leur bienveillance et leur
                    patience durant ces trois années. Leurs conseils avisés et
                    l&apos;enseignement qu&apos;ils m&apos;ont apporté
                    m&apos;ont énormément enrichi. Leur soutien m&apos;a permis
                    de progresser et de m&apos;épanouir pleinement dans les
                    différents projets réalisés. Grâce à eux, je me sens prêt à
                    intégrer un BTS SIO option SLAM, pour poursuivre mes études
                    dans le développement web.
                  </p>
                  <p className="mb-5 leading-relaxed">
                    Cette expérience représente une étape importante de mon
                    parcours professionnel, et je suis reconnaissant &apos;avoir eu
                    l&apos;opportunité de travailler aux côtés d&apos;enseignants aussi
                    investis à nos côtés.
                  </p>

                  <motion.div
                    className="mt-10 border-t border-white pt-8 opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  >
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div className="flex items-center">
                        <div className="mr-4 flex h-12 w-12 items-center justify-center border border-white">
                          <MessageSquare size={22} className="text-white" />
                        </div>
                        <div>
                          <p className="mb-0 font-mono font-semibold text-white">
                            Derepper Lohan
                          </p>
                          <p className="font-mono text-sm text-gray-400">
                            {"[Etudiant au LYPSO en TSN]"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="mr-2 text-gray-400" />
                        <p className="font-mono text-sm text-gray-400">
                          19/06/2025
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-white opacity-50"></div>
              </motion.section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
