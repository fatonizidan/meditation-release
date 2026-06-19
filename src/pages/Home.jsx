import "../styles/home.css";
import { useState, useEffect } from "react";

export default function Home({ setPage }) {
  const backgrounds = [
    "/backgrounds/beach.jpg",
    "/backgrounds/forest.jpg",
    "/backgrounds/night.jpg",
    "/backgrounds/sky.jpg",
  ];

  const [bg, setBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      <div
        className="home-bg"
        style={{ backgroundImage: `url(${backgrounds[bg]})` }}
      />

      <div className="home-overlay" />

      <div className="home-content">

        <p className="home-kicker">
          Meditation Space 🌿
        </p>

        <p className="home-desc main-text">
          Tulis pikiranmu, lepaskan, lalu tenangkan diri
        </p>

        <button
          className="home-btn"
          onClick={() => setPage("reflection")}
        >
          Begin Your Journey
        </button>

      </div>

    </div>
  );
}