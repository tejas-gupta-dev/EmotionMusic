import { useEffect, useRef } from "react";

import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";

import useEmotionStore from "../store/emotionStore";

export default function FaceFeed() {

  const videoRef = useRef(null);

  const canvasRef = useRef(null);

  const landmarkerRef = useRef(null);

  const setEmotion = useEmotionStore(
    (state) => state.setEmotion
  );

  const addHistory = useEmotionStore(
    (state) => state.addHistory
  );

  useEffect(() => {

    let animationFrameId;

    let lastEmotion = "neutral";

    let stableFrames = 0;

    const initialize = async () => {


      const vision =
        await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );


      landmarkerRef.current =
        await FaceLandmarker.createFromOptions(
          vision,
          {
            baseOptions: {
              modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
            },

            outputFaceBlendshapes: true,

            runningMode: "VIDEO",

            numFaces: 1,
          }
        );

  

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            width: 1280,
            height: 720,
          },
          audio: false,
        });

      if (!videoRef.current) return;

      videoRef.current.srcObject = stream;

      await videoRef.current.play();

  

      const detectFace = async () => {

      

        animationFrameId =
          requestAnimationFrame(
            detectFace
          );

        

        if (
          !landmarkerRef.current ||
          !videoRef.current ||
          !canvasRef.current
        ) {
          return;
        }

       

        if (
          videoRef.current.readyState < 2
        ) {
          return;
        }

      

        const results =
          landmarkerRef.current.detectForVideo(
            videoRef.current,
            performance.now()
          );

       

        const canvas =
          canvasRef.current;

        const ctx =
          canvas.getContext("2d");

        if (!ctx) return;

        canvas.width =
          videoRef.current.videoWidth;

        canvas.height =
          videoRef.current.videoHeight;

       

        ctx.clearRect(
          0,
          0,
          canvas.width,
          canvas.height
        );

        

        ctx.drawImage(
          videoRef.current,
          0,
          0,
          canvas.width,
          canvas.height
        );

        
        if (
          results.faceLandmarks &&
          results.faceLandmarks.length > 0
        ) {

          const landmarks =
            results.faceLandmarks[0];

          landmarks.forEach((point) => {

            ctx.beginPath();

            ctx.arc(
              point.x * canvas.width,
              point.y * canvas.height,
              1.2,
              0,
              2 * Math.PI
            );

            ctx.fillStyle =
              "#ff0055";

            ctx.shadowBlur = 10;

            ctx.shadowColor =
              "#ff0055";

            ctx.fill();
          });
        }


        if (
          results.faceBlendshapes &&
          results.faceBlendshapes.length > 0
        ) {

          const blendshapes =
            results.faceBlendshapes[0]
              .categories;

          const getScore = (name) =>
            blendshapes.find(
              (b) =>
                b.categoryName === name
            )?.score || 0;

         

          const smile =
            (
              getScore("mouthSmileLeft") +
              getScore("mouthSmileRight")
            ) / 2;

        

          const browRaise =
            getScore("browInnerUp");

          const browDown =
            (
              getScore("browDownLeft") +
              getScore("browDownRight")
            ) / 2;

          // Mouth

          const jawOpen =
            getScore("jawOpen");

          const mouthPucker =
            getScore("mouthPucker");

          const mouthShrug =
            getScore("mouthShrugUpper");

          const mouthPress =
            (
              getScore("mouthPressLeft") +
              getScore("mouthPressRight")
            ) / 2;

          const frown =
            (
              getScore("mouthFrownLeft") +
              getScore("mouthFrownRight")
            ) / 2;

          // Eyes

          const blink =
            (
              getScore("eyeBlinkLeft") +
              getScore("eyeBlinkRight")
            ) / 2;

          // Emotion Scores

          const emotionScores = {

            happy:
              smile * 1.5 +
              browRaise * 0.3,

            surprised:
              jawOpen * 1.4 +
              browRaise * 1.2,

            sad:
              frown * 1.5 +
              mouthShrug * 0.5,

            angry:
              browDown * 1.6 +
              mouthPress * 1,

            sleepy:
              blink * 1.6 +
              jawOpen * 0.3,

            lonely:
              mouthPucker * 1.2 +
              mouthShrug * 0.8,

            neutral:
              0.35,
          };

          // Find Highest Score

          let currentEmotion =
            "neutral";

          let highestScore = 0;

          Object.entries(
            emotionScores
          ).forEach(([emotion, score]) => {

            if (
              score > highestScore
            ) {

              highestScore =
                score;

              currentEmotion =
                emotion;
            }
          });

          // Confidence Threshold

          if (
            highestScore < 0.45
          ) {

            currentEmotion =
              "neutral";
          }

          // Emotion Stabilization

          if (
            currentEmotion ===
            lastEmotion
          ) {

            stableFrames++;
          }

          else {

            stableFrames = 0;

            lastEmotion =
              currentEmotion;
          }

          // Update Only After Stable Frames

          if (
            stableFrames > 10
          ) {

            setEmotion(
              currentEmotion
            );

            addHistory({
              emotion:
                currentEmotion,

              timestamp:
                Date.now(),
            });
          }

          // Debug Overlay

          ctx.fillStyle =
            "rgba(0,0,0,0.5)";

          ctx.fillRect(
            20,
            20,
            260,
            90
          );

          ctx.fillStyle =
            "#ffffff";

          ctx.font =
            "bold 28px Arial";

          ctx.fillText(
            `Emotion: ${currentEmotion}`,
            30,
            60
          );

          ctx.font =
            "20px Arial";

          ctx.fillText(
            `Confidence: ${highestScore.toFixed(2)}`,
            30,
            95
          );
        }
      };

      detectFace();
    };

    initialize();

    return () => {

      cancelAnimationFrame(
        animationFrameId
      );

      // Stop Webcam

      if (
        videoRef.current?.srcObject
      ) {

        videoRef.current.srcObject
          .getTracks()
          .forEach((track) =>
            track.stop()
          );
      }

      // Cleanup Model

      if (
        landmarkerRef.current
      ) {

        landmarkerRef.current.close();
      }
    };

  }, [
    setEmotion,
    addHistory,
  ]);

  return (
    <div className="relative flex justify-center">

      {/* Hidden Webcam */}

      <video
        ref={videoRef}
        className="hidden"
        autoPlay
        muted
        playsInline
      />

      {/* AI Canvas */}

      <canvas
        ref={canvasRef}
        className="
          rounded-3xl
          shadow-2xl
          border
          border-white/10
          w-[640px]
          h-[480px]
          backdrop-blur-xl
        "
      />

    </div>
  );
}