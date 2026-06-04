import useEmotionStore from "../store/emotionStore";

export default function Features() {

  const theme =
    useEmotionStore(
      (state) => state.currentTheme
    );

  const features = [

    {
      icon: "🎭",
      title: "Emotion Detection",
      desc: "AI recognizes facial expressions in real time."
    },

    {
      icon: "🎵",
      title: "Smart Playlists",
      desc: "Music changes automatically according to mood."
    },

    {
      icon: "⚡",
      title: "Instant Response",
      desc: "Recommendations update within seconds."
    },

    {
      icon: "🎨",
      title: "Adaptive Themes",
      desc: "Visuals and colors react to emotions."
    },

    {
      icon: "🧠",
      title: "Machine Learning",
      desc: "Continuously improves recommendations."
    },

    {
      icon: "🔒",
      title: "Privacy First",
      desc: "Your data stays secure and protected."
    }

  ];

  return (

    <section
      className="
        py-32
        max-w-7xl
        mx-auto
        px-6
      "
    >

      <h2
        className="
          text-5xl
          md:text-6xl
          font-black
          text-center
          mb-16
        "
      >
        Why Choose Us
      </h2>

      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >

        {features.map((feature) => (

          <div
            key={feature.title}
            className={`
              p-8
              rounded-3xl
              backdrop-blur-3xl
              border
              hover:scale-105
              transition-all
              duration-500
              ${theme.card}
              ${theme.border}
            `}
          >

            <div className="text-5xl mb-5">
              {feature.icon}
            </div>

            <h3
              className="
                text-2xl
                font-bold
                mb-4
              "
            >
              {feature.title}
            </h3>

            <p className="text-white/60">
              {feature.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

