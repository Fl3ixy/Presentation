'use client';
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";
import { WebsiteCard } from "@/components/Website/WebsiteCard";
import { motion } from "framer-motion";
import { FileText, Folder, X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageScale, setImageScale] = useState(1);
  const [expandedFolders, setExpandedFolders] = useState({
    root: true,
    app: true,
    components: false,
    public: false
  });

  const galleryImages = [
    { 
      id: 1, 
      src: "/ImgRapport/Figma.png", 
      title: "Maquette Figma", 
      description: "Design responsive du site" 
    },
    { 
      id: 2, 
      src: "/ImgRapport/Photopea.png", 
      title: "Montage sur Photopea", 
      description: "Montage photo des images" 
    },
    { 
      id: 3, 
      src: "/ImgRapport/ImageVSCode.png", 
      title: "Components React", 
      description: "Optimisation et praticité" 
    },
    { 
      id: 4, 
      src: "/ImgRapport/ParticlesBackground.png", 
      title: "ParticlesBackground", 
      description: "ParticlesBackground en REACT" 
    },
    { 
      id: 5, 
      src: "/ImgRapport/TailwindCss.png", 
      title: "Avantage du TailwindCSS", 
      description: "Attribus CSS beaucoup plus poussé et professionel" 
    },
    { 
      id: 6, 
      src: "/ImgRapport/NextJsReact.png", 
      title: "Puissance de NextJS et React", 
      description: "Adaption et utilisation des components" 
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setImageScale(1);
  };

  const handleZoomIn = () => {
    setImageScale(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setImageScale(prev => Math.max(prev - 0.5, 0.5));
  };

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const FileStructureItem = ({ name, type, level = 0, folder, children }) => (
    <div className="font-mono text-sm sm:text-xs">
      <div 
        className={`flex items-center gap-2 py-1 px-2 hover:bg-gray-800/50 cursor-pointer transition-colors ${
          type === 'folder' ? 'text-blue-400' : 'text-gray-300'
        }`}
        style={{ paddingLeft: `${level * 20 + 8}px` }}
        onClick={() => type === 'folder' && toggleFolder(folder)}
      >
        {type === 'folder' ? (
          <>
            <Folder size={16} className={`${expandedFolders[folder] ? 'text-yellow-400' : 'text-blue-400'} sm:w-3 sm:h-3`} />
            <span className={`${expandedFolders[folder] ? 'text-yellow-400' : 'text-blue-400'} sm:text-xs`}>{name}</span>
          </>
        ) : (
          <>
            <FileText size={16} className="sm:w-3 sm:h-3" />
            <span className="sm:text-xs">{name}</span>
          </>
        )}
      </div>
      {type === 'folder' && expandedFolders[folder] && children}
    </div>
  );

  return (
    <main className="relative w-full min-h-screen text-white bg-black/70 overflow-x-hidden">
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 sm:p-4 md:p-6 text-center">
        {/* Éléments Technique - Masqués sur mobile/tablette */}
        <div className="absolute -left-16 top-12 w-12 h-1 bg-white opacity-30 sm:hidden md:hidden lg:block"></div>
        <div className="absolute -right-16 bottom-12 w-12 h-1 bg-white opacity-30 sm:hidden md:hidden lg:block"></div>
        <div className="absolute left-4 -top-8 w-1 h-8 bg-white opacity-30 sm:hidden md:hidden lg:block"></div>
        <div className="absolute right-4 -bottom-8 w-1 h-8 bg-white opacity-30 sm:hidden md:hidden lg:block"></div>
        <div className="absolute left-10 top-10 w-3 h-3 border border-white rounded-full opacity-20 sm:hidden md:hidden lg:block"></div>
        <div className="absolute right-10 bottom-20 w-3 h-3 border border-white rounded-full opacity-20 sm:hidden md:hidden lg:block"></div>
        
        <p className="text-lg font-mono text-white opacity-70 sm:text-sm md:text-base lg:text-lg pt-6 sm:pt-4">
          {"//Présentation de mon site web"}
        </p>
        <h2 className="mt-2 sm:mt-3 md:mt-2 text-4xl sm:text-xl md:text-2xl lg:text-4xl font-mono font-bold text-white">
          Comment j&apos;ai créé ce site?
        </h2>
        <h2 className="mt-1 sm:mt-2 md:mt-1 text-3xl sm:text-lg md:text-xl lg:text-3xl font-mono font-bold text-white opacity-70">
          Voici mon processus de création
        </h2>
        <div className="w-full max-w-6xl sm:max-w-full md:max-w-4xl lg:max-w-6xl">
          <p className="mx-auto mt-6 sm:mt-4 md:mt-6 font-mono text-sm sm:text-xs md:text-sm lg:text-sm text-gray-300 leading-relaxed px-4 sm:px-2 md:px-6 lg:px-[30%] text-center sm:text-left md:text-center">
            {"< J'ai créé ce site en utilisant des technologies modernes comme " +
            "Next.js, React et TailwindCSS. Le design a été pensé et réalisé sur " +
            "Figma pour offrir une interface claire et une navigation fluide. " +
            "Chaque page a été développée en React, tandis que TailwindCSS m'a " +
            "permis de rendre le site esthétique et réactif. J'ai aussi optimisé " +
            "la performance pour garantir une bonne expérience, même sur mobile. " +
            "Ce projet m'a permis de mettre en pratique mes compétences en " +
            "développement web et d'aller plus loin avec des outils comme Next.js " +
            "et React. />"}
          </p>
        </div>
      </div>

      {/* Section principale */}
      <section className="flex w-full justify-center py-12 sm:py-6 md:py-8 lg:py-12">
        <article className="container max-w-7xl flex flex-col items-start text-start text-white sm:items-center md:items-center lg:items-start px-4 sm:px-2 md:px-6 lg:px-4">
          <div className="border-l-2 border-white text-start sm:border-none sm:text-center md:border-none md:text-center lg:border-l-2 lg:text-start w-full">
            <p className="pl-4 sm:pl-0 md:pl-0 lg:pl-4 text-start sm:text-center md:text-center lg:text-start text-2xl sm:text-lg md:text-xl lg:text-2xl font-mono font-semibold text-white">
              {"// Les languages"}
            </p>
            <p className="text-start sm:text-center md:text-center lg:text-start pl-4 sm:pl-0 md:pl-0 lg:pl-4 font-mono text-xl sm:text-sm md:text-base lg:text-xl text-gray-300 w-full sm:w-full md:w-full lg:w-[80vw] mt-4 sm:mt-2 md:mt-3 lg:mt-0 sm:px-2 md:px-0">
              {"< Le site web utilise plusieurs langages et outils modernes pour " +
              "offrir une expérience fluide et interactive, tout en gérant " +
              "efficacement le code et la structure du site, en accord avec mon " +
              "niveau actuel />"}
            </p>
          </div>
        </article>
      </section>

      {/* Section Cartes */}
      <section className="flex w-full justify-center px-4 sm:px-2 md:px-4 lg:px-4 pb-4">
        <article className="container mx-auto flex justify-center w-full max-w-7xl bg-black text-center">
          <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 sm:grid-rows-8 md:grid-rows-4 lg:grid-rows-2 gap-4 sm:gap-3 md:gap-4 lg:gap-4">
            <WebsiteCard
              imageSource="/img/CardIconNextJS.svg"
              title="NextJS"
              description="Framework React avec rendu serveur et génération statique"
            />
            <WebsiteCard
              imageSource="/img/CardIconTailwindCSS.svg"
              title="TailwindCSS"
              description="Framework CSS utilitaire pour des designs personnalisés rapidement"
            />
            <WebsiteCard
              imageSource="/img/CardIconReact.svg"
              title="React"
              description="Bibliothèque JavaScript pour créer des interfaces utilisateur interactives"
            />
            <WebsiteCard
              imageSource="/img/CardIconJS.svg"
              title="JS"
              description="Langage de programmation pour rendre les pages web interactives"
            />
            <WebsiteCard
              imageSource="/img/CardIconHTML.svg"
              title="HTML5"
              description="Langage de balisage pour structurer le contenu des pages web"
            />
            <WebsiteCard
              imageSource="/img/CardIconCSS.svg"
              title="CSS3"
              description="Langage de style pour définir l'apparence des pages web"
            />
            <WebsiteCard
              imageSource="/img/CardIconFigma.svg"
              title="Figma"
              description="Outil de design pour créer des interfaces et prototypes"
            />
            <WebsiteCard
              imageSource="/img/CardIconPhotopea.svg"
              title="Photopea"
              description="Outil en ligne puissant pour éditer des images, similaire à Photoshop"
            />
          </div>
        </article>
      </section>

      {/* Section Structure du Projet */}
      <section className="flex w-full justify-center py-12 sm:py-6 md:py-8 lg:py-12">
        <article className="container mx-auto px-6 sm:px-3 md:px-6 lg:px-6 max-w-7xl">
          <div className="border-l-2 border-white mb-8 sm:border-none sm:mb-6 sm:text-center md:border-none md:mb-6 md:text-center lg:border-l-2 lg:mb-8 lg:text-start">
            <p className="pl-4 sm:pl-0 md:pl-0 lg:pl-4 text-start sm:text-center md:text-center lg:text-start text-2xl sm:text-lg md:text-xl lg:text-2xl font-mono font-semibold text-white">
              {"// Structure du projet"}
            </p>
            <p className="text-start sm:text-center md:text-center lg:text-start pl-4 sm:pl-0 md:pl-0 lg:pl-4 font-mono text-lg sm:text-sm md:text-base lg:text-lg text-gray-300 w-full sm:w-full md:w-full lg:w-[80vw] mt-4 sm:mt-2 md:mt-3 lg:mt-0">
              {"< Voici l'organisation des fichiers et dossiers de mon site web />"}
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 sm:p-3 md:p-4 lg:p-6 max-w-2xl sm:max-w-full md:max-w-3xl lg:max-w-2xl mx-auto">
            <div className="bg-gray-800 px-4 sm:px-2 md:px-3 lg:px-4 py-2 rounded-t-lg mb-4 sm:mb-3 md:mb-4 lg:mb-4">
              <span className="font-mono text-sm sm:text-xs md:text-sm lg:text-sm text-green-400">📁 portfolio de Lohan</span>
            </div>
            
            <div className="overflow-x-auto">
              <FileStructureItem name="next" type="folder" folder="root" level={0}>
                <FileStructureItem name="app" type="folder" folder="app" level={1}>
                  {expandedFolders.app && (
                    <>
                      <FileStructureItem name="Activites" type="folder" level={2} />
                      <FileStructureItem name="Annexes" type="folder" level={2} />
                      <FileStructureItem name="page.jsx" type="file" level={2} />
                      <FileStructureItem name="Conclusion" type="folder" level={2} />
                      <FileStructureItem name="Presentation" type="folder" level={2} />
                      <FileStructureItem name="layout.jsx" type="file" level={2} />
                    </>
                  )}
                </FileStructureItem>
                
                <FileStructureItem name="components" type="folder" folder="components" level={1}>
                  {expandedFolders.components && (
                    <>
                      <FileStructureItem name="GlobalComponents" type="folder" level={2} />
                      <FileStructureItem name="HomePage" type="folder" level={2} />
                      <FileStructureItem name="Presentation" type="folder" level={2} />
                      <FileStructureItem name="StagePage" type="folder" level={2} />
                      <FileStructureItem name="Website" type="folder" level={2} />
                    </>
                  )}
                </FileStructureItem>
                
                <FileStructureItem name="public" type="folder" folder="public" level={1}>
                  {expandedFolders.public && (
                    <>
                      <FileStructureItem name="img" type="folder" level={2} />
                      <FileStructureItem name="icones" type="folder" level={2} />
                      <FileStructureItem name="ImgRapport" type="folder" level={2} />
                      <FileStructureItem name="logo" type="folder" level={2} />
                    </>
                  )}
                </FileStructureItem>
                
                <FileStructureItem name="package.json" type="file" level={1} />
                <FileStructureItem name="tailwind.config.js" type="file" level={1} />
                <FileStructureItem name="next.config.js" type="file" level={1} />
              </FileStructureItem>
            </div>
          </div>
        </article>
      </section>

      {/* Section Galerie de Screenshots */}
      <section className="flex w-full justify-center py-12 sm:py-6 md:py-8 lg:py-12">
        <article className="container mx-auto px-6 sm:px-3 md:px-6 lg:px-6 max-w-7xl">
          <div className="border-l-2 border-white mb-8 sm:border-none sm:mb-6 sm:text-center md:border-none md:mb-6 md:text-center lg:border-l-2 lg:mb-8 lg:text-start">
            <p className="pl-4 sm:pl-0 md:pl-0 lg:pl-4 text-start sm:text-center md:text-center lg:text-start text-2xl sm:text-lg md:text-xl lg:text-2xl font-mono font-semibold text-white">
              {"// Aperçu du site"}
            </p>
            <p className="text-start sm:text-center md:text-center lg:text-start pl-4 sm:pl-0 md:pl-0 lg:pl-4 font-mono text-lg sm:text-sm md:text-base lg:text-lg text-gray-300 w-full sm:w-full md:w-full lg:w-[80vw] mt-4 sm:mt-2 md:mt-3 lg:mt-0">
              {"< Découvrez les différentes sections et fonctionnalités du site />"}
            </p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3 md:gap-4 lg:gap-4">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleImageClick(image)}
              >
                <div className="aspect-video relative">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 items-center justify-center hidden">
                    <div className="text-center text-white/70">
                      <ZoomIn size={32} className="mx-auto mb-2 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                      <p className="text-sm sm:text-xs md:text-sm lg:text-sm">Image non trouvée</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <ZoomIn className="text-white mx-auto mb-2 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:w-6" size={24} />
                    <p className="text-white text-sm sm:text-xs md:text-sm lg:text-sm font-medium">Cliquer pour agrandir</p>
                  </div>
                </div>
                
                <div className="p-4 sm:p-2 md:p-3 lg:p-4">
                  <h3 className="font-mono font-semibold text-white mb-1 sm:text-sm sm:mb-1 md:text-base md:mb-1 lg:text-base lg:mb-1">{image.title}</h3>
                  <p className="font-mono text-sm sm:text-xs md:text-sm lg:text-sm text-gray-400">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </article>
      </section>

      {/* Modal pour image agrandie */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-1 md:p-3 lg:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full h-full max-w-7xl max-h-[95vh] sm:max-w-full sm:max-h-full sm:rounded-none md:max-w-5xl md:max-h-[90vh] md:rounded-lg lg:max-w-7xl lg:max-h-[95vh] lg:rounded-lg bg-gray-900/95 overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barre d'outils */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 p-4 sm:p-2 md:p-3 lg:p-4 flex items-center justify-between sm:flex-col sm:gap-2 md:flex-row lg:flex-row">
              <div className="flex items-center gap-4 sm:flex-col sm:gap-1 sm:text-center md:flex-row md:gap-3 lg:flex-row lg:gap-4">
                <h3 className="font-mono font-bold text-xl sm:text-sm md:text-base lg:text-xl text-white">{selectedImage.title}</h3>
                <span className="text-sm sm:text-xs md:text-sm lg:text-sm text-gray-400 font-mono">Zoom: {Math.round(imageScale * 100)}%</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-1 md:gap-2 lg:gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 sm:p-1 md:p-1.5 lg:p-2 bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded"
                  disabled={imageScale <= 0.5}
                >
                  <ZoomOut size={20} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="p-2 sm:p-1 md:p-1.5 lg:p-2 bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded"
                  disabled={imageScale >= 3}
                >
                  <ZoomIn size={20} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 sm:p-1 md:p-1.5 lg:p-2 bg-red-600 text-white hover:bg-red-700 transition-colors ml-2 sm:ml-1 md:ml-2 lg:ml-2 rounded"
                >
                  <X size={20} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>
            
            {/* Zone d'affichage de l'image */}
            <div className="absolute inset-0 pt-20 sm:pt-16 md:pt-18 lg:pt-20 pb-16 sm:pb-10 md:pb-12 lg:pb-16 overflow-auto">
              <div className="flex items-center justify-center min-h-full p-4 sm:p-1 md:p-2 lg:p-4">
                <motion.div
                  style={{ 
                    transform: `scale(${imageScale})`,
                    transformOrigin: 'center center'
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    width={1200}
                    height={800}
                    className="object-contain max-w-none rounded-lg sm:rounded-none md:rounded-lg lg:rounded-lg shadow-2xl"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: imageScale > 1 ? 'none' : '100%',
                      maxHeight: imageScale > 1 ? 'none' : '60vh'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-[400px] sm:h-[250px] md:h-[350px] lg:h-[500px] bg-gradient-to-br from-blue-900/30 to-purple-900/30 items-center justify-center rounded-lg hidden">
                    <div className="text-center text-white/70">
                      <ZoomIn size={48} className="mx-auto mb-4 sm:w-6 sm:h-6 sm:mb-2 md:w-8 md:h-8 md:mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                      <p className="text-lg sm:text-xs md:text-sm lg:text-base font-mono">Image non disponible</p>
                      <p className="text-sm sm:text-xs md:text-xs lg:text-sm opacity-70">Vérifiez le chemin vers l&apos;image</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-700 p-4 sm:p-2 md:p-3 lg:p-4">
              <p className="font-mono text-gray-300 text-center sm:text-xs md:text-sm lg:text-base">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Éléments de design technique */}
      <div className="fixed top-6 left-6 w-6 h-6 border-t border-l border-white opacity-20 sm:hidden md:hidden lg:block"></div>
      <div className="fixed top-6 right-6 w-6 h-6 border-t border-r border-white opacity-20 sm:hidden md:hidden lg:block"></div>
      <div className="fixed bottom-6 left-6 w-6 h-6 border-b border-l border-white opacity-20 sm:hidden md:hidden lg:block"></div>
      <div className="fixed bottom-6 right-6 w-6 h-6 border-b border-r border-white opacity-20 sm:hidden md:hidden lg:block"></div>

      {/* Particules Background */}
      <ParticlesBackground />
    </main>
  );
}