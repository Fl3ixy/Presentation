import Image from "next/image";
import ParticlesBackground from "@/components/GlobalComponents/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-w-[20vw]">
      {/* Particules d'arrière-plan */}
      <ParticlesBackground />
    </main>
  );
}
