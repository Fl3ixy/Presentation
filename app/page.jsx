import Image from "next/image";
import HomePageSection from "@/components/HomePage/HomePageSection";
import HomePageArticle from "@/components/HomePage/HomePageArticle";
import HomePageTable from "@/components/HomePage/HomePageTable";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative w-auto sm:overflow-hidden">
      <ParticlesBackground />
      <div className="relative flex w-auto flex-col justify-center">
        <HomePageSection isFlexCol={true}>
          <HomePageArticle
            type="intro"
            label="Portfolio de Lohan"
            description="Bonjour,
            Je m'appelle Lohan Derepper, étudiant au lycée professionnel LYPSO en formation Systèmes Numériques, 
            option RISC (Réseaux Informatiques et Systèmes Communicants). Cette formation me permet d'explorer les 
            vastes domaines de l'informatique afin de découvrir ma spécialité, que ce soit dans les réseaux ou le 
            développement web, en vue de poursuivre un BTS ou une autre formation à venir."
            linkinfos={[
              {
                label: "Présentation",
                href: "/Presentation",
                className:
                  "hover:rotate-3 hover:shadow-[-4px_0_8px_5px_rgba(0,114,255,0.8)]",
              },
              {
                label: "Technique",
                href: "/Technique",
                className: "hover:shadow-[4px_0px_8px_5px_rgba(0,114,255,0.8)]",
              }
            ]}
          />
          <HomePageArticle
            type="paragraphe"
            label="Cadre du site"
            description="La création de ce site web s'inscrit dans le cadre d'une épreuve orale du baccalauréat professionnel. 
            Le projet a été réalisé en plusieurs étapes : conception du design, développement technique et recherche d'informations 
            fiables à présenter. Différents langages de programmation, comme [NextJS, TailwindCSS, REACT et JavaScript], ont été utilisés pour rendre
             le site esthétique, fluide et fonctionnel. L'objectif principal était d'améliorer l'organisation du contenu et de renforcer 
             l'impact visuel pour une présentation claire et efficace. Ce projet m'a également permis de mettre en pratique et
              d'approfondir mes compétences en développement web. Vous pouvez découvrir davantage de détails 
             sur le développement du site web dans l'onglet dédié DEVELOPPEMENT."
          />
          <HomePageArticle
            type="paragraphe"
            label="Le Stage"
            description="J'ai réalisé plusieurs stages (4 à 5) au sein du CHRSO (Centre Hospitalier de la Région de Saint-Omer), 
            qui m'ont permis de développer mes compétences en systèmes informatiques et réseaux. Ces expériences m'ont appris des
             notions essentielles pour ma formation, telles que le dépannage varié, l'installation de matériel réseau, la 
             configuration informatique, ainsi que d'autres tâches enrichissantes. Vous pouvez découvrir davantage de détails 
             sur ces stages dans l'onglet dédié STAGE."
          />
          
        </HomePageSection>

        {/* TABLE RIGHT */}
        <HomePageSection>
          <>
            <HomePageTable
              label="Service de dépannage"
              subLabel="CHRSO"
              subject="3 Techniciens Réseaux"
              subjectDescription="PRÉSENTATION DU SERVICE"
              description="En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV
               -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV
                -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV
                 -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV"
            />
            <Image
              className="z-20 -rotate-6 transform rounded-3xl shadow-lg transition-all duration-500 ease-in-out hover:translate-x-5 hover:translate-y-2 hover:rotate-6 hover:scale-110 hover:opacity-90 hover:shadow-2xl hover:shadow-blue-500/40 sm:mx-auto sm:w-auto md:flex md:w-auto md:items-center md:justify-center lg:mx-auto lg:mt-4 lg:w-[500px] lg:translate-x-14 lg:rotate-3 lg:transition lg:duration-200 lg:ease-in-out lg:hover:rotate-12"
              src={"/img/CHlogo.png"}
              alt="hotelimg"
              width={"250"}
              height={"250"}
            />
          </>
        </HomePageSection>

        <HomePageSection isFlexCol={true}>
          <HomePageArticle
            type="paragraphe"
            label="Le Centre Hospitalier"
            description="Le Centre Hospitalier de la Région de Saint-Omer (CHRSO) est une institution regroupant 1 504 agents, dont 130 médecins et 975 soignants environ. Réparti en plusieurs pavillons spécialisés, 
              il propose une large gamme de services médicaux. Mon stage s'est déroulé au sein du service informatique, un élément clé du bon fonctionnement de l'hôpital. Ce service est responsable de la gestion des systèmes d'information, 
              de la maintenance du matériel informatique et de la sécurité des données. 
              Il joue un rôle central dans la coordination entre les différents services et garantit la continuité des soins grâce à des outils numériques performants et sécurisés."
          />

          <HomePageArticle
            type="paragraphe"
            label="Le Service Informatique"
            description="Le service informatique du Centre Hospitalier de la Région de Saint-Omer (CHRSO) est composé de 10 employés aux rôles spécifiques : 3 sont spécialisés en gestion et résolution des problèmes applicatifs liés aux logiciels médicaux et administratifs, 
              3 se consacrent à la maintenance et à la configuration du matériel informatique, 1 administrateur système assure la stabilité des serveurs et la sécurité des données, 1 administrateur réseaux veille à la connectivité et à la sécurisation des échanges, 
              tandis que le responsable informatique coordonne l'ensemble des activités et garantit l'alignement des ressources sur les objectifs stratégiques de l'établissement."
          />
        </HomePageSection>

        {/* PARAGRAPHE 2 */}
        <HomePageSection>
          <>
            <HomePageArticle
              type="card"
              imageSource="/img/boy.png"
              label="Le stagiaire"
              description="Actuellement, je suis activement impliqué dans le
                    développement web, maîtrisant les langages de code HTML 5,
                    CSS 3, REACT, NextJS, ainsi que la librairie TailwindCSS
                    pour une mise en page efficace. En parallèle, je poursuis
                    mon apprentissage en JavaScript pour enrichir mes
                    compétences pour essayer de rester à la pointe des dernières
                    technologies du domaine."
            />
            <HomePageArticle
              type="card"
              imageSource="/img/books.png"
              label="Études détaillées"
              description="Au cours de ma formation en terminale Système Numérique,
                j'ai principalement été immergé dans le domaine des réseaux
                informatiques, où nous avons abordé des sujets tels que la
                création de réseaux en simulation avec différents protocoles
                sur un logiciel, entre autres. Nous avons également eu
                l'opportunité de mettre en pratique nos connaissances en
                réalisant des projets concrets, tels que la mise en place
                d'un réseau intégrant un serveur de messagerie et un serveur
                téléphonique."
            />
            <HomePageArticle
              type="card"
              imageSource="/img/rocket.png"
              label=" Projets à venir"
              description="Mon principal objectif est de poursuivre dans le domaine
                informatique, avec une passion particulière pour le
                développement web, qui m'inspire plus que tout dans ce vaste
                domaine. Pour concrétiser ce projet, je vise à obtenir un
                BTS, suivi d'une licence, et idéalement un master pour
                approfondir mes connaissances et me spécialiser davantage."
            />
          </>
        </HomePageSection>

        {/* TABLE LEFT */}
        <HomePageSection>
          <>
            <Image
              className="z-20 rotate-6 transform rounded-3xl shadow-lg transition-all duration-500 ease-in-out hover:translate-x-[-5px] hover:translate-y-[-2px] hover:rotate-[-6deg] hover:scale-110 hover:opacity-90 hover:shadow-2xl hover:shadow-blue-500/40 sm:mx-auto sm:w-auto md:flex md:w-auto md:items-center md:justify-center lg:mx-auto lg:mt-4 lg:w-[500px] lg:translate-x-14 lg:rotate-3 lg:transition lg:duration-200 lg:ease-in-out lg:hover:rotate-[-12deg]"
              src={"/img/DepanageLogo.png"}
              alt="hotelimg"
              width={"250"}
              height={"250"}
            />
            <HomePageTable
              label="Dépannage Informatique"
              subLabel="CHRSO"
              subject="3 Techniciens Réseaux applicatifs"
              subjectDescription="PRÉSENTATION DU SERVICE"
              description="En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV
               -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV
                -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV
                 -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV -En DEV"
            />
          </>
        </HomePageSection>

        {/* PARAGRAPHE 3 */}
        <HomePageSection>
          <HomePageArticle
            type="info"
            label="Pourquoi avoir choisi le CHRSO ?"
            description="J'ai effectué trois stages au sein du CHRSO, principalement pour acquérir une expérience enrichissante qui m'a permis 
            de progresser dans mon intégration à l'équipe. Au fil des stages, j'ai assumé des responsabilités croissantes, ce qui m'a permis 
            de m'impliquer pleinement, presque comme un salarié, et de découvrir de manière concrète et sérieuse le travail effectué. 
            Ces stages m'ont non seulement apporté des compétences pratiques, mais ils ont également clarifié mon orientation professionnelle 
            en me donnant l'opportunité d'intervenir sur diverses situations, telles que des dépannages ou des cas spécifiques au sein de l'hôpital."
            linkinfos={[
              {
                label: "Présentation",
                href: "/Presentation",
                className:
                  "hover:-rotate-3 hover:shadow-[-4px_0_8px_5px_rgba(0,114,255,0.8)]",
              },
              {
                label: "Technique",
                href: "/Technique",
                className:
                  "hover:-rotate-3 hover:shadow-[4px_0px_8px_5px_rgba(0,114,255,0.8)]",
              },
            ]}
          />
        </HomePageSection>
      </div>
    </main>
  );
}
