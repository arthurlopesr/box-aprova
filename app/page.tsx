import { SalesCard } from "./components/salesCard/SalesCard";
import { About } from "./page/home/about/About";
import { Access } from "./page/home/access/Access";
import { Footer } from "./page/home/footer/Footer";
import { HeroSection } from "./page/home/heroSection/HeroSection";


export default async function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Access />
      <SalesCard />
      <Footer />
    </>
  )
}
