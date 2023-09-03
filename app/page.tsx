import { About } from "./page/home/about/About";
import { Access } from "./page/home/access/Access";
import { HeroSection } from "./page/home/heroSection/HeroSection";


export default async function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Access />
    </>
  )
}
