import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import LatestProjects from "../components/home/LatestProjects";
import MarqueeContainer from "../components/home/MarqueeContainer";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestProjects />
      <Intro />
      <MarqueeContainer />
      <Contact />
    </div>
  );
}
