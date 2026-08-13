import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HomeownerFocus from "@/components/HomeownerFocus";
import EVSpotlight from "@/components/EVSpotlight";
import Plan from "@/components/Plan";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <HomeownerFocus />
        <Plan />
        <Gallery />
        <EVSpotlight />
        <Reviews />
        <About />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
