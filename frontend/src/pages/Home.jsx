import FaceFeed from "../engine/FaceFeed";
import ChangeUi from "../engine/ChangeUi";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "./About";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import useEmotionStore from "../store/emotionStore";

export default function Home() {

  const theme =
    useEmotionStore(
      (state) => state.currentTheme
    );

  return (

    <div
      className={`
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        ${theme.background}
        ${theme.text}
      `}
    >

      <ChangeUi />


      <div
        className="
          absolute
          top-0
          left-0
          h-[900px]
          w-[900px]
          bg-purple-600/20
          rounded-full
          blur-[250px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[900px]
          w-[900px]
          bg-cyan-600/20
          rounded-full
          blur-[250px]
        "
      />

      <Navbar />

      <div className="relative z-10">
        

        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Features />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Footer />
        </ScrollReveal>

      </div>

    </div>
  );
}
