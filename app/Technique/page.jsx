"use client";
import React, { useState } from "react";
import {
  Building2,
  Calendar,
  ChevronDown,
  Code2,
  FileCode2,
  GraduationCap,
  LineChart,
  Laptop,
  Users,
  Target,
  BookOpen,
  Brain,
  CheckCircle2,
} from "lucide-react";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import HomePageSection from "@/components/HomePage/HomePageSection";
import HomePageArticle from "@/components/HomePage/HomePageArticle";

const styles = `
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.animate-pulse-slow {
  animation: pulse 3s infinite;
}

.custom-shadow {
  box-shadow: 0 4px 30px rgba(0, 100, 150, 0.5);
}

.hover-translate {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-translate:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 40px rgba(0, 100, 150, 0.6);
}

.glow-effect {
  box-shadow: 0 0 15px rgba(0, 100, 150, 0.4);
  transition: box-shadow 0.3s ease;
}

.glow-effect:hover {
  box-shadow: 0 0 25px rgba(0, 100, 150, 0.6);
}

.gradient-overlay {
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 1) 100%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  width: 100%;
  z-index: 1;
  pointer-events: none;
}
`;

const DATA = {
  hero: {
    title: "Rapport de Stage",
    subtitle: "Activité réaliser durant ma période de stage au CHRSO",
  },
  entreprise: {
    nom: "Direction des Systèmes d'Information aux Organisations",
    description:
      "Le service DSIO est responsable de la gestion de l'ensemble du parc informatique de l'hôpital. Au cours de mes semaines de stage au sein de ce service, j'ai acquis de nombreuses compétences et découvert différents aspects de son fonctionnement. À travers ce site web, je vais vous présenter une activité qui m'a particulièrement marqué.",
    image: "/ImgRapport/CHRSO_Building.png",
    stats: {
      employes: "10 Employés",
      ca: "1 accompagnateur d'activités",
    },
  },
  projets: [
    {
      title: "Déploiement de bornes Wi-Fi",
      description:
        "Le déploiement de bornes Wi-Fi correspond à l'installation de nouvelles bornes dans un établissement, incluant toutes les étapes nécessaires : la configuration des nouveaux équipements sur le contrôleur, leur enrôlement dans le réseau, leur mise en service, ainsi que l'installation physique des bornes et leur connexion au système existant.",
      image: "/ImgRapport/BannerWifiPC.png",
      technologies: [
        "Création d'un fichier .csv",
        "Enrôlement des bornes avec leurs MAC",
        "Mise en service",
        "Intégration au réseaux",
      ],
    },
    {
      title: "Création d'un fichier .csv",
      description:
        "La création d'un fichier .csv permet d'importer rapidement les autorisations d'accès au contrôleur, en associant chaque adresse MAC à son autorisation (Accepted,Yes), ce qui permet de gagner du temps et d'éviter la saisie manuelle pour chaque appareil.",
      image: "/ImgRapport/BannerCSV.png",
      technologies: ["Excel", "Aruba Panel Controler"],
    },
    {
      title: "Enrôlement des bornes ",
      description:
        "L'enrôlement d'une borne Wi-Fi permet de l'intégrer au réseau en l'authentifiant, en lui attribuant les configurations nécessaires et en la synchronisant avec le contrôleur pour garantir une gestion centralisée et une performance complète.",
      image: "/ImgRapport/BannerArubaCSV.png",
      technologies: [
        "Aruba Panel Controler",
        "Branchement des bornes au réseaux",
        "Utilisation d'un fichier .csv",
        "Utilisation du PoE",
      ],
    },
    {
      title: "Mise en service",
      description:
        "Grâce à la technologie PoE, les électriciens peuvent facilement remplacer les anciennes bornes par les nouvelles en débranchant et rebranchant simplement un seul câble Ethernet, qui transmet à la fois l'alimentation et les données.",
      image: "/ImgRapport/BannerService.png",
      technologies: ["Branchage des bornes en PoE par les electriciens"],
    },
    {
      title: "Intégration au réseaux",
      description:
        "Lors du remplacement des bornes, l'administrateur réseau et moi déconnectons le câble du port du switch où l'ancienne borne était branchée, puis nous le reconnectons sur le même port d'un switch Aruba pour intégrer les nouvelles bornes au réseau.",
      image: "/ImgRapport/BannerArubaCisco.png",
      technologies: [
        "Brassage d'un switch vers un autre",
        "Chaque switch dans la bai a son organisation",
      ],
    },
  ],
  technologies: [
    {
      icon: (
        <image
          src="/icones/electricite.png"
          alt=""
          className="h-6 w-6 text-white"
        />
      ),
      name: "Power over Ethernet",
      description:
        "Le PoE (Power over Ethernet) permet de transmettre à la fois l'alimentation électrique et les données via un seul câble Ethernet, ce qui simplifie l'installation des appareils réseau, comme les bornes Wi-Fi.",
      level: 100,
    },
    {
      icon: (
        <image src="/icones/wifi.png" alt="" className="h-6 w-6 text-white" />
      ),
      name: "Contrôleur Wi-Fi ARUBA",
      description:
        "Le Contrôleur Wi-Fi est un appareil qui permet de centraliser la gestion des bornes Wi-Fi, en configurant, surveillant et optimisant leur performance à partir d'un seul point.",
      level: 100,
    },
    {
      icon: <image src="/icones/CSV.png" alt="" className="h-6 w-6 text-white" />,
      name: " Fichier .CSV",
      description:
        "Un fichier CSV est un fichier qui permet de stocker des données sous forme de tableau, ce qui facilite l'importation en masse d'informations, comme les adresses MAC, dans des systèmes comme un contrôleur Wi-Fi.",
      level: 100,
    },
  ],
  activitesQuotidiennes: {
    categories: [
      {
        icon: (
          <image src="/icones/phone.png" alt="" className="h-6 w-6 text-white" />
        ),
        title: "Activités Semaine1",
        activites: [
          "20 janvier 2025",
          "21 janvier 2025",
          "22 janvier 2025",
          "23 janvier 2025",
          "24 janvier 2025",
        ],
      },
      {
        icon: (
          <image
            src="/icones/tournevis.png"
            alt=""
            className="h-6 w-6 text-white"
          />
        ),
        title: "Activités Semaine2",
        activites: [
          "27 janvier 2025",
          "28 janvier 2025",
          "29 janvier 2025",
          "30 janvier 2025",
          "31 janvier 2025",
        ],
      },
      {
        icon: (
          <image src="/icones/wifi.png" alt="" className="h-6 w-6 text-white" />
        ),
        title: "Activités Semaine3",
        activites: [
          "03 Février 2025",
          "04 Février 2025",
          "05 Février 2025",
          "06 Février 2025",
          "07 Février 2025",
        ],
      },
    ],
    planning: [
      {
        horaire: "09:00 - 17:00",
        icon: <Calendar className="mx-auto h-6 w-6 text-white" />,
        description: "Lundi",
      },
      {
        horaire: "09:00 - 17:00",
        icon: <Calendar className="mx-auto h-6 w-6 text-white" />,
        description: "Mardi",
      },
      {
        horaire: "09:00 - 17:00",
        icon: <Calendar className="mx-auto h-6 w-6 text-white" />,
        description: "Mercredi",
      },
      {
        horaire: "09:00 - 17:00",
        icon: <Calendar className="mx-auto h-6 w-6 text-white" />,
        description: "Jeudi",
      },
      {
        horaire: "09:00 - 17:00",
        icon: <Calendar className="mx-auto h-6 w-6 text-white" />,
        description: "Vendredi",
      },
    ],
    statistiques: [
      { valeur: "35", label: "Heures par semaine" },
      { valeur: "7", label: "Heures par Jour" },
    ],
  },
  apprentissages: [
    {
      title: "Préparation",
      description:
        "Nous créons un fichier .CSV contenant les adresses MAC de toutes les bornes et en leurs donnant les autorisations pour, puis nous l'importons dans le contrôleur pour faciliter leur enrôlement et leur configuration automatique.",
    },
    {
      title: "Enrôlement",
      description:
        "L'enrôlement consiste à intégrer les nouvelles bornes au réseau en les associant au contrôleur Wi-Fi, qui leur applique les configurations prédéfinies. Une fois connectées, nous vérifions que chaque borne diffuse bien la fréquence 5 GHz pour assurer une couverture optimale.",
    },
    {
      title: "Mise en service",
      description:
        "Les électriciens installent physiquement les nouvelles bornes et les connectent au réseau, tandis que l'administrateur réseau et moi nous occupons du brassage des câbles RJ45 dans les nouveaux switches Aruba",
    },
    {
      title: "Test des bornes",
      description:
        "Nous testons les bornes avec un téléphone DECT (téléphone IP) pour vérifier la qualité de la connexion et effectuer des ajustements si nécessaire, en corrigeant d'éventuels bugs ou problèmes de configuration ou brassage",
    },
  ],
  timeline: [
    {
      title: "Onboarding",
      date: "Semaine 1-2",
      description: "Intégration, formation aux outils et processus internes.",
    },
    {
      title: "Montée en compétences",
      date: "Semaines 3-8",
      description:
        "Participation aux projets et apprentissage du framework interne.",
    },
    {
      title: "Autonomie",
      date: "Semaines 9-16",
      description:
        "Prise en charge de user stories complètes et participation aux décisions techniques.",
    },
    {
      title: "Expertise",
      date: "Semaines 17-24",
      description: "Lead technique sur certaines fonctionnalités et mentorat.",
    },
  ],
  conclusion: {
    paragraphe1:
      "Les stages réalisés au CHRSO au sein du service informatique DSIO m'ont apporté une expérience très enrichissante, tant sur le plan technique que personnel. J'ai eu l'opportunité de participer à des projets variés, tels que des déploiements, la création de plans et le brassage dans deux baies, ainsi que d'autres tâches très intéressantes.",
    paragraphe2:
      "L'équipe du DSIO a été d'une grande bienveillance, toujours prête à apporter son aide et à expliquer les concepts lorsqu'il était nécessaire. Cela a été extrêmement valorisant, car j'ai pu apprendre beaucoup dans le domaine informatique, tout en développant des relations professionnelles de confiance avec les techniciens du service.",
      paragraphe3:
      "Je tiens à remercier chaleureusement toute l'équipe du DSIO pour leur accueil, leur patience et leur soutien tout au long de ce stage. Nous restons actuellement en contact, ce qui me permet de continuer à bénéficier de leurs conseils, notamment pour la préparation d'entretiens et d'autres aspects liés à ma carrière professionnelle.",
    },
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="min-h-screen text-white">
      <ParticlesBackground />
      <div className="gradient-overlay" />
      {/* Hero Section */}
      <header className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${DATA.hero.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3) contrast(1.2)",
          }}
        />
        <div className="relative z-10 px-4 text-center">
          <h1 className="animate-pulse-slow mb-6 text-5xl font-bold text-sky-500 md:text-7xl">
            {DATA.hero.title}
          </h1>
          <p className="mb-8 text-xl text-white md:text-2xl">
            {DATA.hero.subtitle}
          </p>
          <ChevronDown className="mx-auto mt-12 h-8 w-8 animate-bounce text-sky-500" />
        </div>
      </header>

      {/* Entreprise Section */}
      <section className="bg-gradient-to-b from-black/0 via-black/50 to-black/80 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-4">
            <Building2 className="h-8 w-8 text-sky-500" />
            <h2 className="text-3xl font-bold">Le DSIO</h2>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <image
                src={DATA.entreprise.image}
                alt="Entreprise"
                className="glow-effect rounded-lg shadow-xl duration-200 hover:shadow-[0_10px_30px_-5px_rgba(66,166,232,0.6),0_10px_30px_-5px_rgba(66,166,232,0.4)]"
                style={{
                  filter: "contrast(1.2) brightness(0.8)",
                  animation: "bounce 2.5s infinite ease-in-out",
                }}
              />
              <style jsx>{`
                @keyframes bounce {
                  0%,
                  100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(
                      -15px
                    ); /* Moins de mouvement vers le haut */
                  }
                }
              `}</style>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-sky-500">
                {DATA.entreprise.nom}
              </h3>
              <p className="mb-6 text-white/80">
                {DATA.entreprise.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="custom-shadow hover-translate rounded-lg border border-sky-500/20 bg-black/50 p-4">
                  <Users className="mb-2 h-6 w-6 text-sky-500" />
                  <p className="font-semibold text-white">
                    {DATA.entreprise.stats.employes}
                  </p>
                </div>
                <div className="custom-shadow hover-translate rounded-lg border border-sky-500/20 bg-black/50 p-4">
                  <LineChart className="mb-2 h-6 w-6 text-sky-500" />
                  <p className="font-semibold text-white">
                    {DATA.entreprise.stats.ca}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="bg-black/80 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <FileCode2 className="h-8 w-8 text-sky-500" />
            <h2 className="text-3xl font-bold">Activité Réalisé</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {DATA.projets.map((projet, index) => (
              <div
                key={index}
                className="custom-shadow hover-translate rounded-xl border border-sky-500/20 bg-black/50 p-8"
              >
                <image
                  src={projet.image}
                  alt={projet.title}
                  className="glow-effect mb-6 h-48 w-full rounded-lg object-cover"
                  style={{ filter: "contrast(1.2) brightness(0.8)" }}
                />
                <h3 className="mb-3 text-xl font-semibold text-sky-500">
                  {projet.title}
                </h3>
                <p className="mb-4 text-white/80">{projet.description}</p>
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="hover-translate rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm text-sky-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-black/80 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <Code2 className="h-8 w-8 text-sky-500" />
            <h2 className="text-3xl font-bold">Technologies Utilisées</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {DATA.technologies.map((tech, index) => (
              <div
                key={index}
                className="custom-shadow hover-translate rounded-xl border border-sky-500/20 bg-black/50 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10">
                  {tech.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-sky-500">
                  {tech.name}
                </h3>
                <p className="text-white/80">{tech.description}</p>
                <div className="mt-4 h-2 rounded-full bg-black/50">
                  <div
                    className="h-2 rounded-full bg-sky-500"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARAGRAPHE 3 */}
      <HomePageSection>
        <HomePageArticle
          type="info"
          label="Mon avis sur le déploiment"
          description="Lors du déploiement de toutes les bornes ainsi que des étapes cruciales qui ont suivi, 
          'ai adoré réaliser cette mission en me sentant utile à sa réussite. Cette expérience m'a permis d'apprendre 
          énormément de choses, comme le fonctionnement d'un contrôleur Wi-Fi, l'utilisation d'un fichier CSV pour 
          l'enrôlement, etc.Tout ce que j'ai vécu au cours de cette mission me sera très utile, et je me considère 
          chanceux d'avoir eu l'opportunité de travailler dans un hôpital, entouré d'une équipe bienveillante. 
          Être bien accompagné m'a permis de poser toutes mes questions et d'apprendre encore plus."
          linkinfos={[
            {
              label: "Accueil",
              href: "/",
              className:
                "hover:-rotate-3 hover:shadow-[-4px_0_8px_5px_rgba(0,114,255,0.8)]",
            },
            {
              label: "Conclusion",
              href: "/Conclusion",
              className:
                "hover:-rotate-3 hover:shadow-[4px_0px_8px_5px_rgba(0,114,255,0.8)]",
            },
          ]}
        />
      </HomePageSection>

      {/* Apprentissages Section */}
      <section className="bg-black/80 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <BookOpen className="h-8 w-8 text-sky-500" />
            <h2 className="text-3xl font-bold">Etapes Clés</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {DATA.apprentissages.map((item, index) => (
              <div
                key={index}
                className="hover-translate flex items-start gap-4 rounded-xl p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/10">
                  <CheckCircle2 className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-sky-500">
                    {item.title}
                  </h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités Quotidiennes Section - NOUVELLE SECTION */}
      <section className="bg-black/80 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <Laptop className="h-8 w-8 text-sky-500" />
            <h2 className="text-3xl font-bold">Activités Hebdomadaires</h2>
          </div>

          {/* Grille d'activités */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {DATA.activitesQuotidiennes.categories.map((categorie, index) => (
              <div
                key={index}
                className="custom-shadow hover-translate rounded-xl border border-sky-500/20 bg-black/50 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10">
                  {categorie.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-sky-500">
                  {categorie.title}
                </h3>
                <ul className="space-y-2 text-white/80">
                  {categorie.activites.map((activite, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>{activite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Planning type */}
          <div className="custom-shadow mb-12 rounded-xl border border-sky-500/20 bg-black/50 p-6">
            <h3 className="mb-6 text-center text-2xl font-semibold text-sky-500">
              Planning Type d'une Journée
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {DATA.activitesQuotidiennes.planning.map((plage, index) => (
                <div
                  key={index}
                  className="hover-translate rounded-lg border border-sky-500/20 bg-sky-500/10 p-4"
                >
                  <div className="mb-2 text-center">
                    <span className="text-lg font-semibold text-sky-500">
                      {plage.horaire}
                    </span>
                  </div>
                  <div className="mb-2 text-center">{plage.icon}</div>
                  <p className="text-center text-white/80">
                    {plage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid gap-6 md:grid-cols-4">
            {DATA.activitesQuotidiennes.statistiques.map((stat, index) => (
              <div
                key={index}
                className="custom-shadow hover-translate rounded-xl border border-sky-500/20 bg-black/50 p-6 text-center"
              >
                <div className="mb-2 text-3xl font-bold text-sky-500">
                  {stat.valeur}
                </div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-black/80 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <Calendar className="h-8 w-8 text-sky-500" />
            <h2 className="text-3xl font-bold">Déroulement du Stage</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-sky-500/20" />

            <div className="relative mb-12 flex">
              <div className="flex-1">
                <div className="custom-shadow hover-translate mr-8 rounded-xl border border-sky-500/20 bg-black/50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-sky-500">
                    {DATA.timeline[0].title}
                  </h3>
                  <p className="mb-2 text-white">{DATA.timeline[0].date}</p>
                  <p className="text-white/80">
                    {DATA.timeline[0].description}
                  </p>
                </div>
              </div>
              <div className="glow-effect absolute left-1/2 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full bg-sky-500" />
              <div className="flex-1" />
            </div>
            <div className="relative mb-12 flex">
              <div className="flex-1" />
              <div className="glow-effect absolute left-1/2 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full bg-sky-500" />
              <div className="flex-1">
                <div className="custom-shadow hover-translate ml-8 rounded-xl border border-sky-500/20 bg-black/50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-sky-500">
                    {DATA.timeline[1].title}
                  </h3>
                  <p className="mb-2 text-white">{DATA.timeline[1].date}</p>
                  <p className="text-white/80">
                    {DATA.timeline[1].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mb-12 flex">
              <div className="flex-1">
                <div className="custom-shadow hover-translate mr-8 rounded-xl border border-sky-500/20 bg-black/50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-sky-500">
                    {DATA.timeline[2].title}
                  </h3>
                  <p className="mb-2 text-white">{DATA.timeline[2].date}</p>
                  <p className="text-white/80">
                    {DATA.timeline[2].description}
                  </p>
                </div>
              </div>
              <div className="glow-effect absolute left-1/2 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full bg-sky-500" />
              <div className="flex-1" />
            </div>
            <div className="relative mb-12 flex">
              <div className="flex-1" />
              <div className="glow-effect absolute left-1/2 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full bg-sky-500" />
              <div className="flex-1">
                <div className="custom-shadow hover-translate ml-8 rounded-xl border border-sky-500/20 bg-black/50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-sky-500">
                    {DATA.timeline[3].title}
                  </h3>
                  <p className="mb-2 text-white">{DATA.timeline[3].date}</p>
                  <p className="text-white/80">
                    {DATA.timeline[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-gradient-to-b from-black/80 via-black/50 to-black/0 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-4">
            <Target className="h-8 w-8 text-sky-500" />
            <h2 className="text-3xl font-bold">Conclusion</h2>
          </div>
          <div className="custom-shadow hover-translate rounded-xl border border-sky-500/20 bg-black/50 p-8">
            <p className="mb-6 text-white/80">{DATA.conclusion.paragraphe1}</p>
            <p className="text-white/80 mb-6">{DATA.conclusion.paragraphe2}</p>            
            <p className="text-white/80">{DATA.conclusion.paragraphe3}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
