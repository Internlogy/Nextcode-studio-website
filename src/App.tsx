import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Apply from "./components/Apply";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <HowItWorks />
        <Services />
        <Projects />
        <Reviews />
        <Faq />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
