import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";

// Home
import Hero from "../components/Home/Hero";
import Marquee from "../components/Home/Marquee";
import Stats from "../components/Home/Stats";
import AboutOne from "../components/Home/AboutOne";
import Services from "../components/Home/Services";
import AboutTwo from "../components/Home/AboutTwo";
import Timeline from "../components/Home/Timeline";
import News from "../components/Home/News";
import CTA from "../components/Home/CTA";

export default function Home() {
  return (
    <>
      {/*
    
      <Menu />
    */}

      <a id="banner"></a>

      <Hero />
      <Marquee />
      <Stats />
      <AboutOne />
      <Services />
      <AboutTwo />

      <Timeline />
      <News />
      <CTA />

      <Rodape />
      <Whats />
    </>
  );
}
