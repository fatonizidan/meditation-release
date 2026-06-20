import { useState, useRef, useEffect } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Reflection from "./pages/Reflection";
import Release from "./pages/Release";
import Meditation from "./pages/Meditation";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Data from "./pages/Data";

export default function App() {
  // 🔐 LOGIN STATE (WAJIB DIPISAH DARI PAGE)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 📄 PAGE SYSTEM (NAVIGASI UTAMA)
  const [page, setPage] = useState("home");

  // ✍️ DATA REFLECTION
  const [message, setMessage] = useState("");

  // 🎧 AUDIO GLOBAL SYSTEM
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = {
      ambient: new Audio("/sounds/ambient.mp3"),
      drop: new Audio("/sounds/drop.mp3"),
    };

    audioRef.current.ambient.loop = true;
    audioRef.current.ambient.volume = 0.4;

    audioRef.current.drop.loop = false;
    audioRef.current.drop.volume = 0.6;
  }

  // 🔥 AUTO STOP SEMUA AUDIO KETIKA PINDAH PAGE
  useEffect(() => {
    const ambient = audioRef.current.ambient;
    const drop = audioRef.current.drop;

    ambient.pause();
    ambient.currentTime = 0;

    drop.pause();
    drop.currentTime = 0;
  }, [page]);

  // 🔐 LOGIN SCREEN (PASTI INI YANG MUNCUL DULU)
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="app-container">

      {/* NAVBAR */}
      <Navbar setPage={setPage} />

      {/* PAGES SYSTEM */}
      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {page === "reflection" && (
        <Reflection
          setPage={setPage}
          setMessage={setMessage}
        />
      )}

      {page === "release" && (
        <Release
          message={message}
          setPage={setPage}
          audioRef={audioRef}
        />
      )}

      {page === "meditation" && (
        <Meditation
          audioRef={audioRef}
          setPage={setPage}
        />
      )}

      {page === "about" && (
        <About />
      )}

      {page === "data" && (
        <Data />
      )}

    </div>
  );
}