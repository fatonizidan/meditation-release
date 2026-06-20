import { useState } from "react";

export default function Reflection({ setPage, setMessage }) {
  const [input, setInput] = useState("");

  const handleNext = () => {
    if (!input.trim()) return;

    setMessage(input);
    setPage("release");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/forest.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTAINER */}
      <div className="relative w-full max-w-md sm:max-w-lg text-center space-y-4">

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-light">
          Reflection Space
        </h1>

        <p className="text-slate-300 text-sm sm:text-base">
          Tulis apa yang kamu rasakan sebelum melanjutkan perjalanan
        </p>

        {/* TEXTAREA */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pikiranmu di sini..."
          className="w-full h-36 sm:h-44 p-3 sm:p-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm sm:text-base outline-none resize-none backdrop-blur-md"
        />

        {/* BUTTON */}
        <button
          onClick={handleNext}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-900 font-medium text-sm sm:text-base hover:bg-white/90 transition"
        >
          Next Journey 🌿
        </button>

      </div>

    </div>
  );
}