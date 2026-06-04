import useEmotionStore from "../store/emotionStore";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  const theme =
    useEmotionStore(
      (state) => state.currentTheme
    );

  return (

    <section
      className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
        max-w-7xl
        mx-auto
      "
    >

      <div
        className={`
          px-5
          py-2
          rounded-full
          border
          backdrop-blur-3xl
          mb-8
          ${theme.card}
          ${theme.border}
        `}
      >
        <span className={theme.accent}>
          AI Emotion Powered Music Platform
        </span>
      </div>

      <h1
        className="
          text-6xl
          md:text-8xl
          lg:text-9xl
          font-black
          leading-none
        "
      >
        Feel Every

        <span
          className={`
            block
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            ${theme.titleGradient}
          `}
        >
          Beat
        </span>

      </h1>

      <p
        className={`
          mt-8
          max-w-3xl
          text-lg
          md:text-xl
          ${theme.subtitle}
        `}
      >
        Discover music that adapts to your
        emotions in real time. Our AI
        understands your mood and creates
        the perfect soundtrack for every
        moment.
      </p>

      <div
        className="
          mt-12
          flex
          gap-4
          flex-wrap
          justify-center
        "
      >

        <button
          onClick={() => navigate("/play")}
          className={`
            px-8
            py-4
            rounded-2xl
            font-bold
            bg-gradient-to-r
            ${theme.button}
          `}
        >
          Start Listening
        </button>


      </div>

    </section>

  );
}