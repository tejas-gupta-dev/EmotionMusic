import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { loginUser } from "../utils/auth";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await api.post(
        `/api/auth/register`,
        formData,
        {
          withCredentials: true,
        }
      );

      loginUser(response.data.user);
      setMessage(response.data.message);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Something went wrong"
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
          onSubmit={handleRegister}
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
            Create Account
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
            placeholder="Username"
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
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
              from-pink-500
              to-purple-500
              font-semibold
              disabled:opacity-50
            "
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <p className="text-center mt-6 text-white/60">
            Already have an account?
            <span
              onClick={() => navigate("/login")}
              className="
                ml-2
                text-pink-400
                cursor-pointer
              "
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
