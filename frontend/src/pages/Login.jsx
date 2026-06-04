import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { loginUser } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await api.post(
        "http://localhost:3000/api/auth/login",
        formData,
        {
          withCredentials: true,
        }
      );

      setMessage(response.data.message);

      loginUser(response.data.user);
      navigate("/");
      window.location.reload();

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
      "
    >
      <Navbar />

      <div
        className="
          flex
          justify-center
          items-center
          min-h-screen
          px-6
        "
      >
        <form
          onSubmit={handleLogin}
          className="
            w-full
            max-w-md
            p-8
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
          "
        >
          <h1
            className="
              text-4xl
              font-black
              mb-8
            "
          >
            Login
          </h1>

          {message && (
            <div
              className="
                mb-4
                p-3
                rounded-xl
                bg-white/10
                text-center
              "
            >
              {message}
            </div>
          )}

          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            value={formData.username}
            onChange={handleChange}
            required
            className="
              w-full
              p-4
              mb-4
              rounded-xl
              bg-black/30
              border
              border-white/10
              outline-none
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
              w-full
              p-4
              mb-6
              rounded-xl
              bg-black/30
              border
              border-white/10
              outline-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              font-semibold
              disabled:opacity-50
            "
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          <p className="text-center mt-6 text-white/60">
            Don't have an account?
            <span
              onClick={() => navigate("/register")}
              className="
                ml-2
                text-cyan-400
                cursor-pointer
              "
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}