import { Link } from "react-router-dom";

export default function ErrorPage({ error }) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-gray-950
        via-gray-900
        to-gray-800
        text-white
        flex
        items-center
        justify-center
        px-6
      "
    >


      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-red-500/20
          blur-[150px]
        "
      />

      {/* Card */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-2xl
          p-12
          rounded-[32px]
          backdrop-blur-3xl
          bg-white/5
          border
          border-red-500/30
          shadow-[0_0_60px_rgba(239,68,68,0.25)]
          text-center
        "
      >


        <div
          className="
            mx-auto
            mb-8
            w-24
            h-24
            rounded-full
            bg-red-500/10
            border
            border-red-500/30
            flex
            items-center
            justify-center
            shadow-[0_0_40px_rgba(239,68,68,0.4)]
          "
        >
          <span className="text-5xl">
            ⚠️
          </span>
        </div>

        <h2
          className="
            text-4xl
            md:text-5xl
            font-black
            mb-5
          "
        >
          Something Went Wrong
        </h2>

        <p
          className="
            text-gray-300
            text-lg
            leading-relaxed
            mb-10
          "
        >
          {error ||
            "The server is currently unavailable. Please try again later."}
        </p>

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <Link
            to="/"
            className="
              px-8
              py-3
              rounded-2xl
              bg-red-500
              hover:bg-red-600
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Go Home
          </Link>

          <Link
            to="/about"
            className="
              px-8
              py-3
              rounded-2xl
              bg-white/5
              border
              border-white/10
              hover:bg-white/10
              transition-all
              duration-300
              hover:scale-105
            "
          >
            About Project
          </Link>
        </div>

      </div>

    </div>
  );
}