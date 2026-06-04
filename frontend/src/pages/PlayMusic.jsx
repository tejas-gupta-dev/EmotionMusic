import Navbar from "../components/Navbar";
import FaceFeed from "../engine/FaceFeed";
import MusicPlayer from "../components/MusicPlayer";
import EmotionCard from "../components/EmotionCard";
import ChangeUi from "../engine/ChangeUi";
import useEmotionStore from "../store/emotionStore";

export default function PlayMusic() {

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

      <Navbar />


      <div
        style={{
          position: "fixed",
          width: "1px",
          height: "1px",
          opacity: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <FaceFeed />
      </div>

      {/* Premium Center Glow */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[1000px]
          w-[1000px]
          rounded-full
          bg-white/[0.03]
          blur-[280px]
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[800px]
          w-[800px]
          rounded-full
          bg-cyan-500/10
          blur-[220px]
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-500/10
          blur-[180px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-28
          pb-16
        "
      >

        {/* Page Heading */}

        <div
          className="
            text-center
            mb-10
          "
        >

          <h1
            className="
              text-4xl
              md:text-6xl
              font-black
              tracking-tight
            "
          >
            Emotion Music AI
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-white/60
              text-base
              md:text-lg
            "
          >
            Real-time emotion detection and
            adaptive music recommendations
            powered by AI.
          </p>

        </div>

        {/* Player */}

        <div
          className="
            flex
            justify-center
            items-center
            w-full
          "
        >

          <div
            className={`
              relative
              w-full
              overflow-hidden
              rounded-[40px]
              backdrop-blur-3xl
              border
              shadow-[0_25px_120px_rgba(0,0,0,0.45)]
              transition-all
              duration-700

              ${theme.card}
              ${theme.border}
              ${theme.glow}
            `}
          >

            <MusicPlayer />

          </div>

        </div>

        <div
          className="
            mt-8
            flex
            justify-center
            w-full
            glow-lg
            shadow-lg
          "
        >

          <EmotionCard />


        </div>

      </div>

    </div>
  );
}