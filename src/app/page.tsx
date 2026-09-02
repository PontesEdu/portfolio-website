import { Contato } from "@/components/sections/contato";
import { Hero } from "@/components/sections/hero";
import { Projetos } from "@/components/sections/projetos";
import { Sobre } from "@/components/sections/sobre";
import { Stack } from "@/components/sections/stack";
import { Trajetoria } from "@/components/sections/trajetoria";

export default function Home() {
  return (
    <>
      <Hero />
      <Projetos />
      <Sobre />
      <Stack />
      <Trajetoria />
      <Contato />
    </>
  );
}
