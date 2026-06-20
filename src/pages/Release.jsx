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
      className="min-h-screen flex items-center justify-center px-4 text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/sky.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CARD CONTAINER */}
      <div className="relative w-full max-w-md sm:max-w-lg text-center">

        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl space-y-3">

          {/* ICON */}
          <div className="text-3xl sm:text-4xl animate-pulse">
            🌬️
          </div>

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl font-semibold">
            Release Space
          </h1>

          <p className="text-white/70 text-xs sm:text-sm">
            Lepaskan semua pikiranmu dengan tenang
          </p>

          {/* MESSAGE BOX */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 max-h-36 sm:max-h-40 overflow-y-auto">
            <p className="text-sm sm:text-base text-white/90 break-words leading-relaxed">
              {message || "Tidak ada pesan"}
            </p>
          </div>

          {/* BUTTON / STATUS */}
          {!started ? (
            <button
              onClick={startRelease}
              className="w-full sm:w-auto px-5 py-2.5 bg-white text-black rounded-xl text-sm sm:text-base font-medium hover:bg-white/90 transition"
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