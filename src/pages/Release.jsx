import { useEffect } from "react";

export default function Release({ message, setPage, audioRef }) {
  useEffect(() => {
    const audio = audioRef?.current?.drop;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    const playAndNavigate = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log("Audio blocked:", err);
      }

      // fallback: pakai durasi audio
      const duration = audio.duration || 10;

      setTimeout(() => {
        setPage("meditation");
      }, duration * 1000);
    };

    playAndNavigate();

    return () => {
      audio.pause();
    };
  }, [setPage, audioRef]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/forest.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center max-w-lg text-white">

        <div className="text-5xl mb-4 animate-pulse">
          🌬️
        </div>

        <h1 className="text-3xl font-semibold">
          Releasing…
        </h1>

        <div className="mt-6 bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md">
          <p className="text-white/90 text-sm">
            {message || "Lepaskan semuanya…"}
          </p>
        </div>

        <p className="mt-5 text-white/60 text-xs">
          Proses berjalan otomatis…
        </p>

      </div>
    </div>
  );
}