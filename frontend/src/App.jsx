import { Routes, Route, useLocation } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import PlayMusic from "./pages/PlayMusic";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";
import PageTransition from "./components/PageTransition";

function App() {

  const location = useLocation();

  return (

    <AnimatePresence mode="wait">

      

      <Routes
        location={location}
        key={location.pathname}
      >

        <Route
          path="/error"
        element={<ErrorPage />}
        />
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/play"
          element={
            <ProtectedRoute>
              <PageTransition>
                <PlayMusic />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />

        <Route
          path="/register"
          element={
            <PageTransition>
              <Register />
            </PageTransition>
          }
        />

      </Routes>

    </AnimatePresence>
  );
}

export default App;