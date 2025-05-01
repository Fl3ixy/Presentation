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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black/0 via-black/50 to-black/80">
      <ParticlesBackground />
      {/* Hero Section avec animation et design moderne */}
      <section className="relative flex h-auto w-full items-center justify-center overflow-hidden py-24">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-white">
          <div className="bg-primary/10 border-primary/20 mb-2 flex items-center gap-2 rounded-full border px-4 py-2  backdrop-blur-sm duration-200 hover:scale-105">
            <Star className="text-primary h-4 w-4" />
            <span className="text-primary">Oral de Bac - Stage</span>
          </div>
          <div className="bg-primary/10 border-primary/20 mb-8 mt-2 flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm duration-200 hover:scale-105">
            <Book className="text-primary h-4 w-4" />
            <span className="text-primary">Lohan Derepper - TSN</span>
          </div>
          <h1 className="mb-8 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-center text-6xl font-bold leading-tight text-transparent md:text-8xl">
            Stage en Milieu Hospitalier
          </h1>
          <p className="mb-4 max-w-2xl text-center text-xl leading-relaxed text-white/80 md:text-2xl">
            Service Informatique et Réseaux - Mon expérience professionnelle
            dans un Centre Hospitalier
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-32">
        {/* Introduction avec design premium */}
        <section className="grid items-center gap-20 md:grid-cols-2">
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 text-primary flex items-center gap-2 rounded-full border px-4 py-2 duration-200 hover:scale-105">
                <Calendar className="h-4 w-4" />
                <span>2023 - 2025</span>
              </div>
              <div className="bg-primary/50 h-1 w-1 rounded-full" />
              <div className="bg-primary/10 text-primary flex items-center gap-2 rounded-full border px-4 py-2 duration-200 hover:scale-105">
                <Briefcase className="h-4 w-4" />
                <span>BAC Système Numérique RISC</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Bienvenue sur mon portfolio
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Découvrez mon expérience de stage au sein du service informatique
              du centre hospitalier de Saint-Omer. Cette immersion
              professionnelle m'a permis de mettre en pratique mes connaissances
              en réseau et systèmes informatiques dans un environnement
              professionnelle où la fiabilité est essentielle. Ce site présente
              l'ensemble de mon parcours réalisé en stage pour mon oral de bac.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="bg-card/50 border-border/50 flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm duration-200 hover:scale-105">
                <Users className="h-4 w-4" />
                <span>Service informatique</span>
              </div>
              <div className="bg-card/50 border-border/50 flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm duration-200 hover:scale-105">
                <Server className="h-4 w-4" />
                <span>Infrastructure réseau</span>
              </div>
              <div className="bg-card/50 border-border/50 flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm duration-200 hover:scale-105">
                <GraduationCap className="h-4 w-4" />
                <span>Formation TSN</span>
              </div>
            </div>
          </div>
          <div className="relative h-[650px] overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1746115005943!6m8!1m7!1sBxcRWjQF-9eIAzOh8lWjYw!2m2!1d50.70382527256702!2d2.254077909171113!3f155.05589063449605!4f-0.3006561487309085!5f1.773892411727013"
              className="h-full w-full border-0"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Sections du site avec design élégant */}
        <section className="space-y-20">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Explorez Mon Portfolio
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Naviguez à travers les différentes sections pour découvrir mon
              parcours, les tâches accomplies et mon évolution tout au long de
              cette expérience en milieu hospitalier
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Présentation",
                icon: <FileText className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Qui suis-je ? Mon parcours académique, mes objectifs et mes motivations pour ce stage dans le secteur de la santé.",
                link: "/Presentation",
              },
              {
                title: "Activités",
                icon: <Network className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Détail technique des tâches réalisées : maintenance réseau, assistance aux utilisateurs, gestion du parc informatique et sécurité.",
                link: "/Activites",
              },
              {
                title: "Annexes",
                icon: <Building className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Présentation de l'établissement hospitalier, organigramme du service informatique et ressources complémentaires.",
                link: "/Annexes",
              },
            ].map((section, index) => (
              <Link href={section.link} key={index}>
                <div
                  className={`group relative rounded-3xl bg-gradient-to-br p-8 ${section.gradient} border-border/50 hover:border-primary/50 hover:shadow-primary/5 h-full cursor-pointer border backdrop-blur-sm transition-all duration-500 hover:shadow-lg`}
                >
                  <div className="from-primary/5 absolute inset-0 rounded-3xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    {section.icon}
                    <h3 className="mb-4 text-2xl font-semibold">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {section.description}
                    </p>
                    <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 transform opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Conclusion",
                icon: <MessageSquare className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Bilan de mon stage avec points positifs, axes d'amélioration et lettre de remerciement envers l'équipe du service informatique.",
                link: "/Conclusion",
              },
              {
                title: "Mon Site Web",
                icon: <Monitor className="mb-4 h-8 w-8 text-white" />,
                description:
                  "Présentation technique de ce portfolio : conception, développement et choix des technologies pour documenter mon expérience.",
                link: "/website",
              },
            ].map((section, index) => (
              <Link href={section.link} key={index}>
                <div
                  className={`border-border/50 hover:border-primary/50 hover:shadow-primary/5 group relative h-full cursor-pointer rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-lg`}
                >
                  <div className="from-primary/5 absolute inset-0 rounded-3xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    {section.icon}
                    <h3 className="mb-4 text-2xl font-semibold">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {section.description}
                    </p>
                    <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 transform opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tâches accomplies avec design moderne */}
        <section className="grid items-center gap-20 md:grid-cols-2">
          <div className="space-y-10">
            <h2 className="text-4xl font-bold md:text-5xl">
              Tâches Accomplies
            </h2>
            <div className="space-y-6">
              {[
                "Maintenance et dépannage des postes informatiques du personnel soignant",
                "Configuration des équipements réseau et téléphonie IP",
                "Support technique aux utilisateurs (médecins, infirmiers, administration)",
                "Gestion des droits d'accès et sécurisation des données sensibles",
                "Installation et mise à jour des logiciels métiers hospitaliers",
                "Participation aux projets liés à l'infrastructure informatique",
              ].map((task, index) => (
                <div
                  key={index}
                  className="bg-card/50 border-border/50 hover:border-primary/50 group flex items-start gap-4 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300"
                >
                  <CheckCircle2 className="text-primary mt-1 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-lg">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion avec design premium */}
        <section className="relative mx-auto max-w-4xl space-y-10 px-4 text-center">
          <div className="from-primary/5 via-primary/2 absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b to-transparent" />
          <h2 className="text-4xl font-bold md:text-5xl">Mon Oral de Bac</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ce portfolio rassemble tous les éléments de mon stage en milieu
            hospitalier pour mon oral de bac. Il témoigne de mon implication,
            des compétences acquises et de ma compréhension des enjeux
            informatiques dans un environnement médical. Découvrez mon parcours,
            les défis relevés et les enseignements tirés de cette expérience
            professionnelle enrichissante.
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <Link href="/Presentation">
              <div className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 inline-flex items-center gap-2 rounded-full border hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.8)] active:scale-100 active:duration-75 px-6 py-3 backdrop-blur-sm transition-all duration-300">
                <ArrowRight className="h-5 w-5" />
                <span className="font-medium ">Commencer la visite</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
