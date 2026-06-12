import { useEffect, useState } from "react";

export default function Release({ message, setPage }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const drop = new Audio("/sounds/drop.mp3");
    drop.volume = 0.6;
    drop.play().catch(() => {});

    const start = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    const timer = setTimeout(() => {
      setPage("meditation");
    }, 8000);

    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [setPage]);

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-100 to-blue-200 flex flex-col items-center justify-center px-6 overflow-hidden">

      <div
        className={`
          bg-white rounded-3xl shadow-xl p-8 max-w-md text-center
          transition-all duration-1000 ease-in-out
          ${animate ? "translate-y-40 opacity-0 scale-90" : ""}
        `}
      >
        <p className="text-slate-700 italic">
          {message || "Hari ini akan berlalu."}
        </p>
      </div>

      <p className="mt-10 text-slate-600 animate-pulse">
        Biarkan semuanya mengalir...
      </p>

    </div>
  );
} 