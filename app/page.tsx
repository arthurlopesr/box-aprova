import { About } from "./page/home/about/About";
import { HeroSection } from "./page/home/heroSection/HeroSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <About />
    </>
  )
}
