import { useEffect, useState, useRef } from "react";
import api from "../api/axios";
import YouTube from "react-youtube";
import useEmotionStore from "../store/emotionStore";

export default function MusicPlayer() {


  const dominantEmotion =
  useEmotionStore(
    (state) =>
      state.dominantEmotion
  );

  const [song, setSong] = useState(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    console.log("Current Dominant Emotion:", dominantEmotion);
  }, [dominantEmotion]);

  useEffect(() => {
    console.log("Current Song:", song);
  }, [song]);

  useEffect(() => {

    const fetchMusic = async () => {

      try {

        setLoading(true);

        const response =
          await api.get(
            `/api/music/${dominantEmotion}`,
            {
              withCredentials: true,
            }
          );

        if (
          response.data.songs &&
          response.data.songs.length > 0
        ) {
          const songs = response.data.songs;
          const randomIndex = Math.floor(Math.random() * songs.length);
          setSong(songs[randomIndex]);
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  fetchMusic();


  }, [dominantEmotion]);



  if (loading) {
    return (
      <h1 className="text-white">
        Loading Music...
      </h1>
    );
  }

  if (!song) return null;

  return (

    <div
      className="
        mt-8
        mx-auto
        w-full
        max-w-5xl
        backdrop-blur-3xl
        rounded-3xl

      "
    >
      {song && (
        <>
        <p>Video ID: {song.videoId}</p>
        {/* <p>Title: {song.title}</p> */}
        </>
    )}

    <YouTube
    videoId={song.videoId}
    opts={{
    width: "100%",
    height: "400",
    playerVars: {
      autoplay: 1,
    },
    }}
    />


      <div
        className="
          mt-4
          text-center
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          {song.title}
        </h2>

        <p
          className="
            text-white/70
          "
        >
          {song.channel}
        </p>

      </div>

    </div>
  );
}
