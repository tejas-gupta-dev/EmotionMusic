import Navbar from "../components/Navbar";
import ChangeUi from "../engine/ChangeUi";
import useEmotionStore from "../store/emotionStore";

export default function About() {

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

      {/* Background Glow */}

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

      <section
  className="
    relative
    z-10
    pt-32
    pb-24
    max-w-7xl
    mx-auto
    px-6
  "
>

  {/* Hero */}

  <div className="max-w-5xl mx-auto text-center">

    <p
      className={`
        uppercase
        tracking-[0.3em]
        text-sm
        font-semibold
        mb-5
        ${theme.accent}
      `}
    >
      About Emotion Music AI
    </p>

    <h1
      className="
        text-5xl
        md:text-7xl
        font-black
        leading-tight
      "
    >
      Creating Music Experiences

      <span
        className={`
          block
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          ${theme.titleGradient}
        `}
      >
        Powered By Emotion
      </span>

    </h1>

    <p
      className={`
        mt-8
        text-lg
        md:text-xl
        leading-relaxed
        ${theme.subtitle}
      `}
    >
      Emotion Music AI bridges the gap
      between human emotions and digital
      entertainment. Instead of searching
      for the perfect song, our intelligent
      system understands how you feel and
      delivers music that resonates with
      your current emotional state.
    </p>

  </div>

  <div
    className="
      mt-24
      grid
      md:grid-cols-2
      gap-8
    "
  >

    <div
      className={`
        p-10
        rounded-3xl
        backdrop-blur-3xl
        border
        ${theme.card}
        ${theme.border}
      `}
    >
      <h3 className="text-3xl font-black mb-5">
        🚀 Our Vision
      </h3>

      <p className="text-white/70 leading-relaxed">
        We envision a future where music
        responds naturally to human
        emotions, creating a seamless
        connection between technology and
        personal well-being.
      </p>

    </div>

    <div
      className={`
        p-10
        rounded-3xl
        backdrop-blur-3xl
        border
        ${theme.card}
        ${theme.border}
      `}
    >
      <h3 className="text-3xl font-black mb-5">
        🎯 Our Mission
      </h3>

      <p className="text-white/70 leading-relaxed">
        To make music discovery effortless
        through AI-driven emotion analysis,
        helping users find the right music
        for every mood and moment.
      </p>

    </div>

  </div>

  {/* Technology */}

  <div className="mt-28">

    <h2
      className="
        text-center
        text-4xl
        font-black
        mb-14
      "
    >
      Technology Behind The Experience
    </h2>

    <div
      className="
        grid
        md:grid-cols-4
        gap-6
      "
    >

      {[
        {
          icon: "📷",
          title: "Computer Vision",
        },
        {
          icon: "🧠",
          title: "Machine Learning",
        },
        {
          icon: "🎵",
          title: "Music Intelligence",
        },
        {
          icon: "⚡",
          title: "Real-Time Processing",
        },
      ].map((item) => (

        <div
          key={item.title}
          className={`
            p-8
            text-center
            rounded-3xl
            backdrop-blur-3xl
            border
            ${theme.card}
            ${theme.border}
          `}
        >

          <div className="text-5xl mb-4">
            {item.icon}
          </div>

          <h3 className="font-bold text-xl">
            {item.title}
          </h3>

        </div>

      ))}

    </div>

  </div>

  {/* Privacy */}

  <div
    className={`
      mt-28
      p-10
      rounded-3xl
      backdrop-blur-3xl
      border
      text-center
      ${theme.card}
      ${theme.border}
    `}
  >

    <h2
      className="
        text-4xl
        font-black
        mb-6
      "
    >
      🔒 Privacy First
    </h2>

    <p
      className="
        max-w-4xl
        mx-auto
        text-white/70
        leading-relaxed
      "
    >
      Your facial data is used only for
      emotion analysis during your session.
      We prioritize user privacy and
      security while delivering a highly
      personalized music experience.
    </p>

  </div>


  <div className="mt-28">

    <h2
      className="
        text-center
        text-4xl
        font-black
        mb-14
      "
    >
      Future Roadmap
    </h2>

    <div
      className="
        grid
        md:grid-cols-3
        gap-8
      "
    >

      {[
        "🎧 Spotify Integration",
        "📱 Mobile Application",
        "🤖 Smarter AI Models",
      ].map((item) => (

        <div
          key={item}
          className={`
            p-8
            rounded-3xl
            text-center
            backdrop-blur-3xl
            border
            ${theme.card}
            ${theme.border}
          `}
        >
          <h3 className="font-bold text-xl">
            {item}
          </h3>
        </div>

      ))}

    </div>

  </div>

  {/* CTA */}

  <div className="mt-32 text-center">

    <h2
      className="
        text-5xl
        font-black
      "
    >
      Ready To Experience
      Emotion Driven Music?
    </h2>

    <p
      className={`
        mt-5
        text-lg
        ${theme.subtitle}
      `}
    >
      Let AI discover the soundtrack
      that matches your emotions.
    </p>

    <button
      className={`
        mt-10
        px-10
        py-4
        rounded-2xl
        font-semibold
        bg-gradient-to-r
        ${theme.button}
      `}
    >
      Start Listening
    </button>

  </div>

</section>

    </div>

  );
}