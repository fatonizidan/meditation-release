import { useState } from "react";

export default function Release({ message, setPage, audioRef }) {
  const [started, setStarted] = useState(false);

  const startRelease = () => {
    const audio = audioRef?.current?.drop;
    if (!audio) return;

    setStarted(true);

    audio.currentTime = 0;

    audio.play().catch((err) => {
      console.log("Audio error:", err);
    });

    audio.onended = () => {
      setPage("meditation");
    };
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/sky.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CARD */}
      <div className="relative text-center max-w-md w-full text-white">

        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-6 shadow-xl">

          {/* ICON */}
          <div className="text-4xl mb-3 animate-pulse">
            🌬️
          </div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold mb-1">
            Release Space
          </h1>

          <p className="text-white/70 text-xs mb-4">
            Lepaskan semua pikiranmu dengan tenang
          </p>

          {/* MESSAGE BOX (FIX OVERFLOW) */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-5 max-h-40 overflow-y-auto">
            <p className="text-sm text-white/90 break-words leading-relaxed">
              {message || "Tidak ada pesan"}
            </p>
          </div>

          {/* BUTTON / STATUS */}
          {!started ? (
            <button
              onClick={startRelease}
              className="px-5 py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-white/90 transition"
            >
              Start Release 🌿
            </button>
          ) : (
            <p className="text-white/60 text-sm animate-pulse">
              Releasing your thoughts...
            </p>
          )}

        </div>

      </div>
    </div>
  );
}