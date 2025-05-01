"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import {
  ChevronDown,
  Award,
  Clock,
  MessageSquare,
  Heart,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simuler un petit délai pour permettre aux animations de se mettre en place
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Animations pour les sections
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
    <div className="min-h-screen bg-gradient-to-br from-black to-black p-4 text-white md:p-8">
      {/* Particules d'arrière-plan avec opacité réduite */}
      <div className="opacity-60">
        <ParticlesBackground />
      </div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 mx-auto max-w-5xl space-y-16"
          >
            {/* Header avec révélation par caractère */}
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
                <div className="bg-primary/20 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                  <Award size={42} className="text-primary" />
                </div>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-transparent text-white md:text-5xl">
                {"Conclusion du Stage".split("").map((char, index) => (
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
                className="mx-auto mt-6 h-1 w-32 bg-white"
              />
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
              <ChevronDown className="text-primary" size={32} />
            </motion.div>

            {/* Main Content as a staggered container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-16"
            >
              {/* Main Text Section */}
              <motion.section
                variants={itemVariants}
                className="border-primary/20 hover:border-primary/40 rounded-xl border bg-black/50 p-8 shadow-xl backdrop-blur-sm transition-all duration-300"
              >
                <h2 className="text-primary mb-6 flex items-center text-2xl font-bold md:text-3xl">
                  <span className="mr-3">Bilan du Stage</span>
                  <div className="from-primary/80 ml-4 h-px flex-grow bg-gradient-to-r to-transparent"></div>
                </h2>
                <motion.div className="space-y-6 text-lg text-gray-300">
                  <p className="leading-relaxed">
                    Ce stage a été une{" "}
                    <span className="text-primary font-semibold">
                      expérience enrichissante
                    </span>{" "}
                    qui m&apos;a permis de développer mes compétences
                    professionnelles et de mieux comprendre les enjeux du monde
                    du travail. J&apos;ai pu mettre en pratique mes connaissances
                    théoriques appris au lycée et acquérir de nouvelles
                    compétences techniques grace a ce stage.
                  </p>
                  <p className="leading-relaxed">
                    Cette expérience m&apos;a également permis de{" "}
                    <span className="text-primary font-semibold">
                      confirmer mon projet professionnel
                    </span>{" "}
                    et de me projeter dans mon futur métier avec plus de
                    confiance et de motivation.
                  </p>
                </motion.div>
              </motion.section>

              {/* Pros and Cons Table */}
              <motion.div
                variants={itemVariants}
                className="grid gap-8 md:grid-cols-2"
              >
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-xl border-2 border-green-500/20 bg-black/50 p-8 shadow-xl backdrop-blur-sm"
                >
                  <h3 className="mb-6 flex items-center text-2xl font-bold text-green-400">
                    <CheckCircle size={24} className="mr-3 text-green-400" />
                    <span>Points Positifs</span>
                  </h3>
                  <motion.ul
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Acquisition de nouvelles compétences techniques",
                      "Intégration dans une équipe professionnelle",
                      "Participation à des projets et tâches concrets",
                      "Développement de l'autonomie et de la confiance",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={listItemVariants}
                        custom={index}
                        className="flex items-center space-x-3 border-l-2 border-green-400/30 py-2 pl-2 transition-all duration-300 hover:border-green-400"
                      >
                        <span className="h-3 w-3 flex-shrink-0 rounded-full bg-green-400"></span>
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-xl border-2 border-red-500/20 bg-black/50 p-8 shadow-xl backdrop-blur-sm"
                >
                  <h3 className="mb-6 flex items-center text-2xl font-bold text-red-400">
                    <XCircle size={24} className="mr-3 text-red-400" />
                    <span>Points à Améliorer</span>
                  </h3>
                  <motion.ul
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Prise d'initiative dans certaines situations",
                      "Approfondissement de certaines connaissances techniques",
                      "Approfondissement d'expériences professionnelles hors du secteur de la santé",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={listItemVariants}
                        custom={index}
                        className="flex items-center space-x-3 border-l-2 border-red-400/30 py-2 pl-2 transition-all duration-300 hover:border-red-400"
                      >
                        <span className="h-3 w-3 flex-shrink-0 rounded-full bg-red-400"></span>
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>

              {/* Thank You Letter */}
              <motion.section
                variants={itemVariants}
                className="border-primary/20 relative overflow-hidden rounded-xl border bg-black/50 p-8 shadow-xl backdrop-blur-sm md:p-10"
              >
                <motion.div
                  className="bg-primary/10 absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <h2 className="text-primary mb-8 flex items-center text-2xl font-bold md:text-3xl">
                  <Heart size={28} className="mr-3 text-pink-400" />
                  <span>Lettre de Remerciements</span>
                  <div className="from-primary/80 ml-4 h-px flex-grow bg-gradient-to-r to-transparent"></div>
                </h2>
                <div className="prose prose-lg relative z-10 max-w-none text-gray-300">
                  <p className="mb-5 leading-relaxed">
                    Je tiens à exprimer ma{" "}
                    <span className="text-primary font-semibold">
                      sincère gratitude
                    </span>{" "}
                    envers toute l&apos;équipe du DSIO du CHRSO pour son accueil
                    chaleureux et son accompagnement tout au long de mes stages.
                  </p>
                  <p className="mb-5 leading-relaxed">
                    Un remerciement particulier à mes maîtres de stage, M.
                    Coopman, M. Defly, M. Maillard et M. Fierrard, pour leur
                    disponibilité, leurs conseils avisés et la confiance qu&apos;ils
                    m&apos;ont accordée. Leur soutien m&apos;a permis de progresser et de
                    m&apos;épanouir pleinement dans mes missions et au cours de mon
                    stage.
                  </p>
                  <p className="mb-5 leading-relaxed">
                    Cette expérience restera gravée dans ma mémoire comme une
                    étape importante de mon parcours professionnel, et je suis
                    profondément reconnaissant d&apos;avoir eu l&apos;opportunité de
                    travailler aux côtés d&apos;une équipe aussi talentueuse que
                    bienveillante.
                  </p>

                  <motion.div
                    className="border-primary/20 mt-10 border-t pt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  >
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div className="flex items-center">
                        <div className="bg-primary/20 mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                          <MessageSquare size={22} className="text-primary" />
                        </div>
                        <div>
                          <p className="mb-0 font-semibold text-white">
                            Derepper Lohan
                          </p>
                          <p className="text-sm text-gray-400">
                            Stagiaire au DSIO
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="mr-2 text-gray-400" />
                        <p className="text-sm text-gray-400">23/04/2025</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}