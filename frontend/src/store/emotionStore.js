
import { create } from "zustand";


//   happy: {
//     background:
//       'from-yellow-200 via-orange-500 to-pink-500',

//     card:
//       "bg-white/15",

//     border:
//       "border-pink-300/30",

//     text:
//       "text-white",

//     accent:
//       "text-yellow-200",

//     glow:
//       "shadow-pink-500/30",
//   },

//   neutral: {
//     background:
//       "from-slate-700 via-slate-800 to-black",

//     card:
//       "bg-white/10",

//     border:
//       "border-white/10",

//     text:
//       "text-white",

//     accent:
//       "text-slate-300",

//     glow:
//       "shadow-slate-500/20",
//   },

//   sad: {
//     background:
//       "from-blue-900 via-slate-900 to-black",

//     card:
//       "bg-blue-500/10",

//     border:
//       "border-blue-300/20",

//     text:
//       "text-blue-100",

//     accent:
//       "text-blue-300",

//     glow:
//       "shadow-blue-500/20",
//   },

//   angry: {
//     background:
//       "from-red-700 via-red-900 to-black",

//     card:
//       "bg-red-500/10",

//     border:
//       "border-red-300/20",

//     text:
//       "text-red-100",

//     accent:
//       "text-red-300",

//     glow:
//       "shadow-red-500/30",
//   },

//   surprised: {
//     background:
//       "from-cyan-400 via-blue-500 to-indigo-900",

//     card:
//       "bg-cyan-500/10",

//     border:
//       "border-cyan-300/20",

//     text:
//       "text-white",

//     accent:
//       "text-cyan-200",

//     glow:
//       "shadow-cyan-500/30",
//   },

//   sleepy: {
//     background:
//       "from-indigo-900 via-purple-900 to-slate-900",

//     card:
//       "bg-purple-500/10",

//     border:
//       "border-purple-300/20",

//     text:
//       "text-purple-100",

//     accent:
//       "text-purple-300",

//     glow:
//       "shadow-purple-500/30",
//   },

//   lonely: {
//     background:
//       "from-zinc-800 via-gray-900 to-black",

//     card:
//       "bg-gray-500/10",

//     border:
//       "border-gray-300/20",

//     text:
//       "text-gray-100",

//     accent:
//       "text-gray-300",

//     glow:
//       "shadow-gray-500/20",
//   },

// };
const emotionThemes = {

  happy: {
    background: "from-orange-950 via-amber-800 to-yellow-400",
    card: "bg-white/[0.08]",
    border: "border-yellow-300/[0.20]",
    text: "text-white",
    accent: "text-yellow-200",
    subtitle: "text-yellow-50/80",
    titleGradient: "from-yellow-200 via-orange-300 to-amber-500",
    button: "from-yellow-400 via-orange-500 to-amber-500",
    glow: "shadow-[0_0_180px_rgba(251,191,36,0.35)]",
  },

  neutral: {
    background: "from-black via-zinc-950 to-slate-900",
    card: "bg-white/[0.04]",
    border: "border-white/[0.08]",
    text: "text-white",
    accent: "text-zinc-300",
    subtitle: "text-zinc-300/70",
    titleGradient: "from-white via-zinc-300 to-slate-400",
    button: "from-slate-500 via-zinc-600 to-slate-800",
    glow: "shadow-[0_0_120px_rgba(255,255,255,0.08)]",
  },

  sad: {
    background: "from-black via-blue-950 to-indigo-900",
    card: "bg-blue-500/[0.06]",
    border: "border-blue-300/[0.18]",
    text: "text-blue-50",
    accent: "text-cyan-200",
    subtitle: "text-blue-100/80",
    titleGradient: "from-cyan-200 via-blue-300 to-indigo-400",
    button: "from-blue-500 via-cyan-500 to-indigo-600",
    glow: "shadow-[0_0_180px_rgba(59,130,246,0.28)]",
  },

  angry: {
    background: "from-black via-red-950 to-red-700",
    card: "bg-red-500/[0.06]",
    border: "border-red-400/[0.20]",
    text: "text-red-50",
    accent: "text-red-300",
    subtitle: "text-red-100/80",
    titleGradient: "from-red-200 via-rose-400 to-orange-500",
    button: "from-red-500 via-rose-500 to-orange-500",
    glow: "shadow-[0_0_200px_rgba(239,68,68,0.35)]",
  },

  surprised: {
    background: "from-indigo-950 via-cyan-700 to-sky-400",
    card: "bg-cyan-500/[0.06]",
    border: "border-cyan-300/[0.18]",
    text: "text-white",
    accent: "text-cyan-200",
    subtitle: "text-cyan-100/80",
    titleGradient: "from-cyan-200 via-sky-300 to-blue-500",
    button: "from-cyan-400 via-sky-500 to-blue-500",
    glow: "shadow-[0_0_180px_rgba(34,211,238,0.30)]",
  },

  sleepy: {
    background: "from-slate-950 via-violet-950 to-indigo-900",
    card: "bg-violet-500/[0.05]",
    border: "border-violet-300/[0.15]",
    text: "text-violet-100",
    accent: "text-violet-300",
    subtitle: "text-violet-100/80",
    titleGradient: "from-violet-200 via-purple-400 to-indigo-500",
    button: "from-violet-500 via-purple-600 to-indigo-600",
    glow: "shadow-[0_0_180px_rgba(168,85,247,0.22)]",
  },

  lonely: {
    background: "from-black via-zinc-900 to-slate-800",
    card: "bg-zinc-500/[0.04]",
    border: "border-zinc-300/[0.10]",
    text: "text-zinc-200",
    accent: "text-zinc-400",
    subtitle: "text-zinc-300/70",
    titleGradient: "from-zinc-200 via-slate-300 to-zinc-500",
    button: "from-zinc-500 via-slate-600 to-zinc-700",
    glow: "shadow-[0_0_120px_rgba(161,161,170,0.12)]",
  },

};


const getDominantEmotion = (history) => {
  const counts = {};

  for (const item of history) {
    counts[item.emotion] =
      (counts[item.emotion] || 0) + 1;
  }

  let dominant = "neutral";
  let currentEmotion = "neutral";


  let maxCount = 0;

  for (const emotion in counts) {
    if (counts[emotion] > maxCount) {
      maxCount = counts[emotion];
      dominant = emotion;
    }
  }

  return dominant;
};


const useEmotionStore = create((set) => ({

  currentEmotion: "neutral",

  currentTheme:
    emotionThemes.neutral,

  emotionHistory: [],

  setEmotion: (emotion) =>

    set({
      currentEmotion: emotion,

      currentTheme:
        emotionThemes[emotion] ||
        emotionThemes.neutral,
    }),

  addHistory: (entry) =>

    set((state) => {

      const oneMinuteAgo =
        Date.now() - 30 * 1000;

      const filtered =
        state.emotionHistory.filter(
          (item) =>
            item.timestamp >
            oneMinuteAgo
        );

        const updatedHistory = [
        ...filtered,
        entry,
      ];

      return {

        emotionHistory:
          updatedHistory,

        dominantEmotion:
          getDominantEmotion(
            updatedHistory
          ),
      };
      // return {
      //   emotionHistory: [
      //     ...filtered,
      //     entry,
      //   ],
        
      // };
    }),

}));

export default useEmotionStore;