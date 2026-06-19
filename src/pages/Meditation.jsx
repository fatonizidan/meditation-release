import { useState, useEffect } from "react";

export default function Meditation({ audioRef, setPage }) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);

  // TIMER
  useEffect(() => {
    let interval;

    if (running && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && running) {
      setRunning(false);

      const audio = audioRef?.current?.ambient;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }

    return () => clearInterval(interval);
  }, [running, timeLeft]);

  const startMeditation = (minutes) => {
    const seconds = minutes * 60;
    setTimeLeft(seconds);
    setRunning(true);

    const audio = audioRef?.current?.ambient;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

  const stop = () => {
    setRunning(false);
    setTimeLeft(0);

    const audio = audioRef?.current?.ambient;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/night.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay calm */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative text-center">

        {/* TITLE */}
        <h1 className="text-3xl font-semibold tracking-wide">
          Meditation
        </h1>

        {/* TIMER */}
        <div className="mt-6 text-5xl font-mono tracking-wider">
          {Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, "0")}
          :
          {(timeLeft % 60).toString().padStart(2, "0")}
        </div>

        {/* SUB TEXT */}
        <p className="mt-3 text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
        Tidak apa-apa untuk berhenti sejenak.  
        Di sini kamu aman, di sini kamu bisa tenang.  
        Biarkan pikiranmu pelan-pelan mereda.
        </p>

        {/* BUTTON GROUP */}
        {!running && (
          <div className="flex gap-3 justify-center mt-8">

            <button
              onClick={() => startMeditation(2)}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              2 min
            </button>

            <button
              onClick={() => startMeditation(5)}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              5 min
            </button>

            <button
              onClick={() => startMeditation(10)}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              10 min
            </button>

          </div>
        )}

        {/* STOP BUTTON */}
        {running && (
          <button
            onClick={stop}
            className="mt-8 px-6 py-2 rounded-full bg-red-500/80 hover:bg-red-500 transition"
          >
            Stop
          </button>
        )}

      </div>
    </div>
  );
}