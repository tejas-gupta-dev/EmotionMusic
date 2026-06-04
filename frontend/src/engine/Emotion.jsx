import { useEffect } from "react";
import useEmotionStore from "../store/emotionStore";

function calculateEmotion(landmarks) {
  if (!landmarks) return "neutral";

  const mouthTop = landmarks[13];
  const mouthBottom = landmarks[14];

  const eyeTop = landmarks[159];
  const eyeBottom = landmarks[145];

  const mouthDistance =
    Math.abs(mouthBottom.y - mouthTop.y);

  const eyeDistance =
    Math.abs(eyeBottom.y - eyeTop.y);

  if (mouthDistance > 0.04) {
    return "happy";
  }

  if (eyeDistance < 0.015) {
    return "sleepy";
  }

  return "neutral";
}

export default function EmotionPrediction() {
  const landmarks = useEmotionStore(
    (state) => state.landmarks
  );

  const setEmotion = useEmotionStore(
    (state) => state.setEmotion
  );

  const addHistory = useEmotionStore(
    (state) => state.addHistory
  );

  useEffect(() => {
    if (!landmarks) return;

    const emotion =
      calculateEmotion(landmarks);

    setEmotion(emotion);

    addHistory({
      emotion,
      timestamp: Date.now(),
    });
  }, [
    landmarks,
    setEmotion,
    addHistory,
  ]);

  return null;
}