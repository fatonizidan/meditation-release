import { useEffect } from "react";

export default function Release({ message, setPage, audioRef }) {
  useEffect(() => {
    const audio = audioRef?.current?.drop;
    if (!audio) return;

    audio.currentTime = 0;

    const handleEnd = () => {
      setPage("meditation");
    };

    audio.addEventListener("ended", handleEnd);

    const playSound = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    playSound();

    return () => {
      audio.removeEventListener("ended", handleEnd);
    };
  }, [audioRef, setPage]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/forest.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay soft biar tenang */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative text-center max-w-lg text-white">

        {/* ICON */}
        <div className="text-5xl mb-4 animate-pulse">
          🌬️
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-semibold">
          Releasing…
        </h1>

        {/* MESSAGE */}
        <div className="mt-6 bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md">
          <p className="text-white/90 text-sm leading-relaxed">
            {message || "Tidak ada pesan"}
          </p>
        </div>

        {/* INFO */}
        <p className="mt-5 text-white/70 text-xs">
          Biarkan perasaanmu mengalir seperti angin…
        </p>

        {/* NOTE */}
        <p className="mt-3 text-white/50 text-[11px]">
          Menunggu hingga proses pelepasan selesai...
        </p>

      </div>
    </div>
  );
}