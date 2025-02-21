import Image from "next/image";
import HomePageSection from "@/components/HomePage/HomePageSection";
import HomePageArticle from "@/components/HomePage/HomePageArticle";
import HomePageTable from "@/components/HomePage/HomePageTable";
import StagePageArticle from "@/components/StagePage/StagePageArticle";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative w-auto sm:overflow-hidden">
      <ParticlesBackground />
      <div className="relative flex w-auto flex-col justify-center">
        <HomePageSection isFlexCol={true}>
          <HomePageArticle
            type="intro"
            label="ffffffffff"
            description="Ce site présente la PFMP obligatoire du 23 septembre 2024 au 11 octobre 2024 (3 Semaines) réalisée dans le cadre de la formation en BAC PRO SN RISC. 
                  Ce stage a permis de mettre en pratique les compétences techniques et théoriques acquises durant la formation, 
                  en travaillant sur des problématiques concrètes liées à la gestion et la sécurisation des réseaux au sein de l’entreprise."
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
              },
            ]}
          />
          <HomePageArticle
            type="paragraphe"
            label="Cadre du stage"
            description="Ce stage, réalisé dans le cadre de la formation en Administration Réseau et Systèmes, a permis de mettre en pratique les compétences théoriques acquises. 
              Cette formation prépare des professionnels capables de gérer et administrer des infrastructures réseau, d’en assurer la sécurité, et de répondre aux besoins techniques des entreprises.
               Les stagiaires y développent des aptitudes essentielles en connectivité, en protection des données et en résolution des problématiques informatiques, 
              renforçant ainsi leur expertise dans un domaine clé pour la performance des organisations modernes."
          />
          <HomePageArticle
            type="paragraphe"
            label="Cadre du stage"
            description="Ce stage, réalisé dans le cadre de la formation en Administration Réseau et Systèmes, a permis de mettre en pratique les compétences théoriques acquises. 
              Cette formation prépare des professionnels capables de gérer et administrer des infrastructures réseau, d’en assurer la sécurité, et de répondre aux besoins techniques des entreprises.
              Les stagiaires y développent des aptitudes essentielles en connectivité, en protection des données et en résolution des problématiques informatiques, 
              renforçant ainsi leur expertise dans un domaine clé pour la performance des organisations modernes."
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
              description="LypsChill est une plateforme de streaming qui fonctionne de manière
                  similaire à Netflix, permettant aux utilisateurs de regarder un
                  large éventail de films, de séries, de documentaires et d'autres
                  contenus sans interruption publicitaire. Disponible sur divers
                  appareils connectés à Internet, LypsChill se démarque grâce à ses
                  recommandations personnalisées. Ces suggestions sont adaptées aux
                  préférences individuelles des utilisateurs en se basant sur leurs
                  habitudes de visionnage. En outre, la plateforme propose des
                  productions originales de grande qualité, ce qui contribue à
                  renforcer son impact."
            />
          </>
        </HomePageSection>

        <HomePageSection>
          <>
          <StagePageArticle
            type="paragraphe"
            label="Le Centre Hospitalier"
            description="dfdfdfdfdfdf"
          />
          </>
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
              description="Le service de dépannage informatique joue un rôle essentiel dans la productivité 
              et l’efficacité de l’établissement. Les trois techniciens réseaux garantissent des équipements 
              informatiques fonctionnels et adaptés aux besoins des utilisateurs. Leur mission englobe la 
              réparation des pannes, qu’elles soient matérielles ou liées à Windows, ainsi que l’installation 
              et la configuration de nouveaux outils. Grâce à leurs interventions rapides et efficaces, 
              ils préviennent les interruptions prolongées, assurant une continuité de travail indispensable. 
              Dans un environnement comme un hôpital, où les systèmes informatiques sont cruciaux pour les soins
               et la gestion, leur expertise garantit la fiabilité des appareils et contribue directement au bon fonctionnement global."
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
