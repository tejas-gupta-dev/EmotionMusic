import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";
import { HiMenu, HiX } from "react-icons/hi";

import useEmotionStore from "../store/emotionStore";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const theme = useEmotionStore(
    (state) => state.currentTheme
  );

  const emotion = useEmotionStore(
    (state) => state.currentEmotion
  );

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = async () => {
    try {
      await api.post(
        "/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      localStorage.removeItem("user");

      navigate("/login");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const buttonStyles = {
    happy:
      "from-yellow-400 via-orange-500 to-pink-500",

    sad:
      "from-blue-500 via-cyan-500 to-indigo-600",

    angry:
      "from-red-500 via-rose-500 to-orange-500",

    surprised:
      "from-cyan-400 via-sky-500 to-indigo-500",

    sleepy:
      "from-violet-500 via-purple-600 to-indigo-700",

    lonely:
      "from-zinc-500 via-slate-600 to-zinc-800",

    neutral:
      "from-slate-500 via-zinc-600 to-slate-800",
  };

  const buttonGradient =
    buttonStyles[emotion] ||
    buttonStyles.neutral;

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        backdrop-blur-3xl
        bg-black/20
        border-b
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-20
          flex
          items-center
          justify-between
        "
      >
        <Link
          to="/"
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className={`
              h-11
              w-11
              rounded-2xl
              bg-gradient-to-br
              ${buttonGradient}
              shadow-lg
            `}
          />

          <div>
            <h1
              className={`
                text-xl
                font-black
                ${theme.accent}
              `}
            >
              Emotion AI
            </h1>

            <p
              className="
                hidden
                sm:block
                text-xs
                text-white/40
              "
            >
              Music Intelligence
            </p>
          </div>
        </Link>

        <div
          className="
            hidden
            md:flex
            items-center
            gap-10
          "
        >
          <Link
            to="/"
            className="
              text-white/70
              hover:text-white
              transition
            "
          >
            Home
          </Link>

          <Link
            to="/play"
            className="
              text-white/70
              hover:text-white
              transition
            "
          >
            Play Music
          </Link>

          <Link
            to="/about"
            className="
              text-white/70
              hover:text-white
              transition
            "
          >
            About
          </Link>
        </div>

        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
          "
        >
          {user ? (
            <>
              <div
                className="
                  px-4
                  py-2
                  text-white
                  font-medium
                "
              >
                Hi, {user.username}
              </div>

              <button
                onClick={handleLogout}
                className="
                  px-6
                  py-2.5
                  rounded-xl
                  bg-gradient-to-r
                  from-red-500
                  to-rose-600
                  text-white
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-500
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`
                  px-5
                  py-2.5
                  rounded-xl
                  border
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ${theme.card}
                  ${theme.border}
                `}
              >
                Login
              </Link>

              <Link
                to="/register"
                className={`
                  px-6
                  py-2.5
                  rounded-xl
                  bg-gradient-to-r
                  ${buttonGradient}
                  text-white
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-500
                `}
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="
            md:hidden
            text-3xl
          "
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="
            md:hidden
            px-6
            py-4
            bg-black/90
            backdrop-blur-xl
            flex
            flex-col
            gap-4
          "
        >
          <Link to="/">Home</Link>
          <Link to="/play">Play Music</Link>
          <Link to="/about">About</Link>

          {user ? (
            <>
              <div className="text-white/80">
                Hi, {user.username}
              </div>

              <button
                onClick={handleLogout}
                className="
                  py-3
                  rounded-xl
                  bg-red-500
                  text-white
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
