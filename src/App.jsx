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
// 🔐 LOGIN STATE
const [isLoggedIn, setIsLoggedIn] = useState(false);

// 📄 PAGE STATE
const [page, setPage] = useState("home");

// ✍️ MESSAGE STATE
const [message, setMessage] = useState("");

// 🎧 AUDIO REF
const audioRef = useRef(null);

// 🔥 INIT AUDIO (FIX VERCEL SAFE)
useEffect(() => {
audioRef.current = {
ambient: new Audio("/sounds/ambient.mp3"),
drop: new Audio("/sounds/drop.mp3"),
};

audioRef.current.ambient.loop = true;
audioRef.current.ambient.volume = 0.4;
audioRef.current.ambient.preload = "auto";

audioRef.current.drop.loop = false;
audioRef.current.drop.volume = 0.6;
audioRef.current.drop.preload = "auto";

}, []);

// 🔇 STOP AUDIO TIAP GANTI PAGE
useEffect(() => {
if (!audioRef.current) return;

const { ambient, drop } = audioRef.current;

ambient.pause();
ambient.currentTime = 0;

drop.pause();
drop.currentTime = 0;

}, [page]);

// 🔐 LOGIN SCREEN
if (!isLoggedIn) {
return <Login setIsLoggedIn={setIsLoggedIn} />;
}

return (
<div className="app-container">

  {/* NAVBAR */}
  <Navbar setPage={setPage} />

  {/* PAGES */}
  {page === "home" && (
    <Home setPage={setPage} audioRef={audioRef} />
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

  {page === "about" && <About />}

  {page === "data" && <Data />}

</div>

);
}