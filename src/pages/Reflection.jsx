import { useState } from "react";

export default function Reflection({ setPage, setMessage }) {
  const [text, setText] = useState("");

  const handleRelease = () => {
    if (!text.trim()) return;

    setMessage(text);
    setPage("release");
  };

  return (
    <div
      className="min-h-screen relative flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/backgrounds/sky.jpg')", // nanti kamu ganti sendiri
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay biar tenang */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative text-center text-white max-w-xl w-full">

        {/* TITLE */}
        <h1 className="text-4xl font-bold tracking-wide">
          Reflection
        </h1>

        <p className="mt-2 text-sm text-white/70">
          Tulis apa yang sedang kamu rasakan
        </p>

        {/* TEXTAREA */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Aku merasa..."
          className="w-full h-56 mt-6 p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none resize-none text-lg font-medium leading-relaxed"
        />

        {/* BUTTON */}
        <button
             onClick={handleRelease}
              className="mt-6 w-full py-3 rounded-2xl
             bg-white/10 backdrop-blur-md
             border border-white/20
             text-white font-medium
             hover:bg-white/20
             hover:scale-[1.01]
             transition duration-300"
>
  Release 🌊
</button>

      </div>
    </div>
  );
}