import useEmotionStore from "../store/emotionStore";

export default function Footer() {

  const theme =
    useEmotionStore(
      (state) => state.currentTheme
    );

  return (

    <footer
      className="
        py-16
        border-t
        border-white/10
        mt-24
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          text-center
        "
      >

        <h3
          className={`
            text-3xl
            font-black
            ${theme.accent}
          `}
        >
          Emotion Music AI
        </h3>

        <p
          className="
            mt-4
            text-white/50
          "
        >
          Music that understands emotions.
        </p>

        <p
          className="
            mt-8
            text-sm
            text-white/30
          "
        >
          © 2026 Emotion Music AI.
          All Rights Reserved.
        </p>

      </div>

    </footer>

  );
}