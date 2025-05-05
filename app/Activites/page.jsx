"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Calendar,
  ChevronDown,
  Code2,
  FileCode2,
  BookOpen,
  Target,
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
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.2);
}

.hover-translate {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-translate:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 40px rgba(255, 255, 255, 0.3);
}

.glow-effect {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.3s ease;
}

.glow-effect:hover {
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
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
    subtitle: "Activité réaliser durant ma période de stage",
  },
  entreprise: {
    nom: "",
    description:
      "",
    image: "",
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
        " HPE Aruba AP-635 RW Campus AP",
        "cisco aironet 11402",
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
        <Image
          src="/icones/electricite.png"
          alt=""
          width={6}
          height={6}
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
        <Image
          src="/icones/wifi.png"
          alt=""
          width={6}
          height={6}
          className="h-6 w-6 text-white"
        />
      ),
      name: "Contrôleur Wi-Fi ARUBA",
      description:
        "Le Contrôleur Wi-Fi est un appareil qui permet de centraliser la gestion des bornes Wi-Fi, en configurant, surveillant et optimisant leur performance à partir d'un seul point.",
      level: 100,
    },
    {
      icon: (
        <Image
          src="/icones/CSV.png"
          width={6}
          height={6}
          alt=""
          className="h-6 w-6 text-white"
        />
      ),
      name: " Fichier .CSV",
      description:
        "Un fichier CSV est un fichier qui permet de stocker des données sous forme de tableau, ce qui facilite l'importation en masse d'informations, comme les adresses MAC, dans des systèmes comme un contrôleur Wi-Fi.",
      level: 100,
    },
  ],
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
      title: "Déploiement de bornes Wi-Fi",
      date: "PFMP 2 (2025)",
      description:
        "Le déploiement de bornes Wi-Fi comprend leur installation physique, leur configuration sur le contrôleur, et leur enrôlement dans le réseau. L'utilisation d'un fichier .csv permet d'autoriser rapidement les appareils via leur adresse MAC. L'enrôlement assure que chaque borne est reconnue, configurée et gérée centralement. Grâce au PoE, le remplacement des bornes se fait facilement en rebranchant un seul câble Ethernet. Lors de cette étape, nous reconnectons le câble existant sur un switch Aruba pour intégrer la nouvelle borne au réseau.",
    },
    {
      title: "Organisation et câblage d'une baie de brassage",
      date: "PFMP 1 (2025)",
      description:
        "L'organisation de la baie de brassage commence par un fichier Excel répertoriant tous les ports, switch par switch, avec un code couleur selon le VLAN et le type d'équipement connecté (VoIP, DATA, etc.). La configuration des switchs est ensuite réalisée via un logiciel comme PuTTY ou MRemote. Le câblage suit une logique précise, avec des câbles de couleur différenciée selon le VLAN, pour une meilleure lisibilité. Les connexions entre les switchs et les prises murales (noyaux) sont faites proprement, en respectant la qualité du câble et une organisation claire, assurant performance et maintenance facile.",
    },
    {
      title: "Support Informatique",
      date: "PFMP 1 (2025)",
      description:
        "J'ai assuré le support informatique en répondant aux appels des utilisateurs pour traiter leurs demandes ou résoudre des problèmes. Cela concernait l'installation de logiciels ou de matériel (lorsque la demande était justifiée), ainsi que des pannes, fréquentes (environ 3 appels sur 5). Pour aider efficacement, j'utilisais un outil de prise en main à distance, accessible via l'adresse IP ou le nom de l'ordinateur. J'avais également accès à un serveur contenant les logiciels et copies nécessaires pour l'installation ou la maintenance des postes, notamment ceux utilisés dans les services de soins. La plupart des pannes étaient courantes et j'ai pu les résoudre grâce à mes compétences actuelles en informatique.",
    },
  ],
  conclusion: {
    paragraphe1:
      "Le stage effectué au sein du service informatique DSIO m'a permis d'acquérir une expérience très enrichissante, aussi bien sur le plan technique que personnel. J'ai notamment participé au déploiement de bornes Wi-Fi dans l'hôpital, une mission complète allant de la configuration à l'intégration des équipements sur le réseau, en passant par la création de fichiers .csv et l'installation physique.",
    paragraphe2:
      "L'équipe du DSIO a su faire preuve de pédagogie et de bienveillance, m'accompagnant à chaque étape du projet et prenant le temps de m'expliquer les différents outils et concepts liés au réseau. Cela m'a permis de renforcer mes compétences tout en évoluant dans un environnement professionnel motivant.",
    paragraphe3:
      "Je remercie chaleureusement l'ensemble de l'équipe pour leur accueil, leur patience et leur soutien. Nous restons en contact, ce qui me permet de continuer à bénéficier de leurs conseils pour mes projets futurs et ma progression professionnelle.",
  },
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="min-h-screen text-white bg-black/70">
      <ParticlesBackground />
      <div className="gradient-overlay" />
      {/* Hero Section */}
      <header className="relative flex h-screen items-center justify-center overflow-hidden py-24">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-white">
          {/* Éléments graphiques techniques */}
          <div className="absolute -left-16 top-12 w-12 h-1 bg-white opacity-30"></div>
          <div className="absolute -right-16 bottom-12 w-12 h-1 bg-white opacity-30"></div>
          <div className="absolute left-4 -top-8 w-1 h-8 bg-white opacity-30"></div>
          <div className="absolute right-4 -bottom-8 w-1 h-8 bg-white opacity-30"></div>
          <div className="absolute left-10 top-10 w-3 h-3 border border-white rounded-full opacity-20"></div>
          <div className="absolute right-10 bottom-20 w-3 h-3 border border-white rounded-full opacity-20"></div>

          <div className="mb-2 flex items-center gap-2 border border-white bg-black px-4 py-2">
            <CheckCircle2 className="h-4 w-4 text-white" />
            <span className="font-mono">{"//Rapport de Stage"}</span>
          </div>
          <h1 className="mb-8 text-center text-6xl font-bold leading-tight text-white font-mono md:text-7xl">
            {DATA.hero.title}
          </h1>
          <p className="mb-4 max-w-2xl text-center text-xl leading-relaxed text-gray-300 font-mono md:text-2xl">
            {"< " + DATA.hero.subtitle + " />"}
          </p>
          <ChevronDown className="mx-auto mt-12 h-8 w-8 text-white animate-bounce" />
        </div>
      </header>

      {/* Entreprise Section */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <FileCode2 className="h-8 w-8 text-white" />
            <h2 className="text-3xl font-bold font-mono">{"// Activité Réalisé"}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {DATA.projets.map((projet, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-white bg-black p-8 shadow-lg"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                
                <Image
                  src={projet.image}
                  alt={projet.title}
                  width={1500}
                  height={0}
                  className="mb-6 h-48 w-full object-cover border border-white"
                />
                <h3 className="mb-3 text-xl font-semibold text-white font-mono">
                  {"[" + projet.title + "]"}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-300 font-mono">
                  {projet.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 border border-white bg-black px-4 py-2 backdrop-blur-sm duration-200 hover:scale-105 font-mono"
                    >
                      <span className="text-white">{"[" + tech + "]"}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <Code2 className="h-8 w-8 text-white" />
            <h2 className="text-3xl font-bold font-mono">{"// Technologies Utilisées"}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {DATA.technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-white bg-black p-6 shadow-lg"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
                
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-white bg-black">
                  {tech.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white font-mono">
                  {"[" + tech.name + "]"}
                </h3>
                <p className="text-gray-300 font-mono">{tech.description}</p>
                <div className="mt-4 h-2 bg-black border border-white">
                  <div
                    className="h-1.5 bg-white"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etapes Clés */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <BookOpen className="h-8 w-8 text-white" />
            <h2 className="text-3xl font-bold font-mono">{"// Etapes Clés"}</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {DATA.apprentissages.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 border border-white bg-black p-6 transition-all duration-300"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 transition-transform duration-300 group-hover:scale-110 text-white" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white font-mono">
                    {"[" + item.title + "]"}
                  </h3>
                  <p className="text-gray-300 font-mono">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

              {/* Activités 1-2-3 */}
              <section className="px-4 py-20 md:px-8">
                <div className="mx-auto max-w-6xl">
                  <div className="mb-12 flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-white" />
                    <h2 className="text-3xl font-bold font-mono">{"// Déroulement du Stage"}</h2>
                  </div>
                  <div className="relative">
                    <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-white opacity-20" />
                    <div className="relative mb-12 flex">
                      <div className="flex-1">
                        <div className="mr-8 border border-white bg-black p-6 group relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
                          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
                          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
                          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
                          
                          <h3 className="mb-2 text-xl font-semibold text-white font-mono">
                            {"[" + DATA.timeline[0].title + "]"}
                          </h3>
                          <p className="mb-2 text-white font-mono">{DATA.timeline[0].date}</p>
                          <p className="text-gray-300 font-mono">
                            {DATA.timeline[0].description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full border border-white bg-black" />
                      <div className="flex-1" />
                    </div>
                    <div className="relative mb-12 flex">
                      <div className="flex-1" />
                      <div className="absolute left-1/2 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full border border-white bg-black" />
                      <div className="flex-1">
                        <div className="ml-8 border border-white bg-black p-6 group relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
                          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
                          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
                          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
                          
                          <h3 className="mb-2 text-xl font-semibold text-white font-mono">
                            {"[" + DATA.timeline[1].title + "]"}
                          </h3>
                          <p className="mb-2 text-white font-mono">{DATA.timeline[1].date}</p>
                          <p className="text-gray-300 font-mono">
                            {DATA.timeline[1].description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative mb-12 flex">
                      <div className="flex-1">
                        <div className="mr-8 border border-white bg-black p-6 group relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
                          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
                          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
                          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>
                          
                          <h3 className="mb-2 text-xl font-semibold text-white font-mono">
                            {"[" + DATA.timeline[2].title + "]"}
                          </h3>
                          <p className="mb-2 text-white font-mono">{DATA.timeline[2].date}</p>
                          <p className="text-gray-300 font-mono">
                            {DATA.timeline[2].description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full border border-white bg-black" />
                      <div className="flex-1" />
                    </div>
                  </div>
                </div>
              </section>
{/* Conclusion*/}
<section className="px-4 py-20 md:px-8">
  <div className="mx-auto max-w-6xl">
    <div className="mb-8 flex items-center gap-4">
      <Target className="h-8 w-8 text-white" />
      <h2 className="text-3xl font-bold font-mono">{"// Conclusion"}</h2>
    </div>
    <div className="relative border border-white bg-black p-8">
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-40"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-40"></div>

      <div className="space-y-6 font-mono">
        <p className="text-gray-300">{DATA.conclusion.paragraphe1}</p>
        <p className="text-gray-300">{DATA.conclusion.paragraphe2}</p>
        <p className="text-gray-300">{DATA.conclusion.paragraphe3}</p>
      </div>
    </div>
  </div>
</section>
</div>
);
}