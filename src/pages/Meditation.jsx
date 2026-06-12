import { useState, useEffect, useRef } from "react";

export default function Meditation() {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isRunning, setIsRunning] = useState(false);

  const audioRef = useRef(null);

  // Timer
  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Stop musik saat keluar dari halaman Meditation
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const startTimer = (seconds) => {
    setTimeLeft(seconds);
    setIsRunning(true);

    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/ambient.mp3");
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;
    }

    audioRef.current.currentTime = 0;

    audioRef.current.play().catch((err) => {
      console.log("Audio gagal diputar:", err);
    });
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;

    return `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-900 to-slate-950 flex flex-col items-center justify-center text-white px-6">

      <h1 className="text-3xl font-bold">
        🧘 Meditation Space
      </h1>

      <div className="mt-10 text-6xl font-mono">
        {formatTime(timeLeft)}
      </div>

      {!isRunning && (
        <div className="flex gap-4 mt-10">
          <button
            onClick={() => startTimer(120)}
            className="bg-white text-black px-4 py-2 rounded-full"
          >
            2 Menit
          </button>

          <button
            onClick={() => startTimer(300)}
            className="bg-white text-black px-4 py-2 rounded-full"
          >
            5 Menit
          </button>

          <button
            onClick={() => startTimer(600)}
            className="bg-white text-black px-4 py-2 rounded-full"
          >
            10 Menit
          </button>
        </div>
      )}

      {timeLeft === 0 && (
        <p className="mt-6 text-green-300">
          🌿 Sesi selesai
        </p>
      )}

    </div>
  );
}