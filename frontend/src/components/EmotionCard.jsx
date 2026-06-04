import useEmotionStore from "../store/emotionStore";

export default function EmotionCard() {

  const dominantEmotion =
    useEmotionStore(
      (state) =>
        state.dominantEmotion
    );

  const currentEmotion =
    useEmotionStore(
      (state) =>
        state.currentEmotion
    );

  const theme =
    useEmotionStore(
      (state) => state.currentTheme
    );

  return (

    <div
      className={`
        px-10
        py-6
        rounded-3xl
        backdrop-blur-3xl
        border
        text-center
        ${theme.card}
        ${theme.border}
      `}
    >

      <p
        className={`
          text-sm
          uppercase
          tracking-[0.3em]
          ${theme.accent}
        `}
      >
        Dominant Mood
      </p>

      <h1
        className="
          mt-3
          text-5xl
          font-black
          uppercase
        "
      >
        {dominantEmotion || "neutral"}
      </h1>

      <div
        className="
          mt-4
          pt-4
          border-t
          border-white/10
        "
      >

        <p className="text-white/50 text-sm">
          Live Detection
        </p>

        <p
          className="
            text-xl
            font-semibold
            mt-1
          "
        >
          {currentEmotion}
        </p>

      </div>

    </div>
  );
}