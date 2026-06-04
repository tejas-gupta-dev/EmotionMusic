
import {
  motion,
} from "framer-motion";

import useEmotionStore from "../store/emotionStore";

const emotionEffects = {

  happy: {
    gradient:
      "linear-gradient(135deg,#FFD166,#FF8C42,#FF6B6B)",

    glow:
      "shadow-[0_0_120px_rgba(255,180,50,0.35)]",

    orb:
      "bg-yellow-400/30",
  },

  neutral: {
    gradient:
      "linear-gradient(135deg,#334155,#1e293b,#0f172a)",

    glow:
      "shadow-[0_0_120px_rgba(100,116,139,0.25)]",

    orb:
      "bg-slate-400/20",
  },

  sad: {
    gradient:
      "linear-gradient(135deg,#2563eb,#1e3a8a,#020617)",

    glow:
      "shadow-[0_0_120px_rgba(59,130,246,0.3)]",

    orb:
      "bg-blue-500/25",
  },

  angry: {
    gradient:
      "linear-gradient(135deg,#ef4444,#991b1b,#000000)",

    glow:
      "shadow-[0_0_120px_rgba(239,68,68,0.35)]",

    orb:
      "bg-red-500/30",
  },

  surprised: {
    gradient:
      "linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)",

    glow:
      "shadow-[0_0_120px_rgba(6,182,212,0.35)]",

    orb:
      "bg-cyan-400/30",
  },

  sleepy: {
    gradient:
      "linear-gradient(135deg,#4338ca,#581c87,#020617)",

    glow:
      "shadow-[0_0_120px_rgba(99,102,241,0.3)]",

    orb:
      "bg-indigo-500/25",
  },

  lonely: {
    gradient:
      "linear-gradient(135deg,#27272a,#18181b,#09090b)",

    glow:
      "shadow-[0_0_120px_rgba(161,161,170,0.15)]",

    orb:
      "bg-zinc-500/20",
  },

};

export default function ChangeUi() {

  const emotion =
    useEmotionStore(
      (state) => state.currentEmotion
    );

  const effect =
    emotionEffects[emotion] ||
    emotionEffects.neutral;

  return (
  <motion.div
    animate={{
      background: effect.gradient,
    }}
    transition={{
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      fixed
      inset-0
      -z-10
      overflow-hidden
    "
  >

    {/* Orb 1 */}

    <motion.div
      animate={{
        x: [-80, 80, -80],
        y: [-50, 50, -50],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        top-20
        left-20
        h-[450px]
        w-[450px]
        rounded-full
        blur-[140px]
        ${effect.orb}
      `}
    />

    {/* Orb 2 */}

    <motion.div
      animate={{
        x: [60, -60, 60],
        y: [50, -50, 50],
        scale: [1.1, 1.4, 1.1],
      }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        bottom-10
        right-10
        h-[500px]
        w-[500px]
        rounded-full
        blur-[180px]
        ${effect.orb}
      `}
    />

    {/* Orb 3 */}

    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`
        absolute
        top-1/2
        left-1/2
        h-[650px]
        w-[650px]
        rounded-full
        blur-[220px]
        -translate-x-1/2
        -translate-y-1/2
        ${effect.orb}
      `}
    />

    {/* Noise Overlay */}

    <div
      className="
        absolute
        inset-0
        opacity-[0.03]
        mix-blend-overlay
      "
      style={{
        backgroundImage:
          "radial-gradient(circle at center, white 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    {/* Glass Layer */}

    <div
      className="
        absolute
        inset-0
        backdrop-blur-[120px]
      "
    />

    {/* Center Text */}

    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
      "
    >

      <motion.h1
        key={emotion}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.08,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className={`
          uppercase
          font-black
          text-[120px]
          md:text-[220px]
          lg:text-[280px]
          tracking-[25px]
          text-white
          ${effect.glow}
        `}
      >
        {emotion}
      </motion.h1>

    </div>

  </motion.div>
);
}