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
className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden"
style={{
backgroundImage: "url('/backgrounds/sky.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
}}
>

  {/* overlay biar tetap soft */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative w-full max-w-xl text-center">

    {/* TITLE */}
    <h1 className="text-3xl font-light mb-2">
      Reflection Space
    </h1>

    <p className="text-slate-300 text-sm mb-6">
      Tulis apa yang kamu rasakan sebelum melanjutkan perjalanan
    </p>

    {/* INPUT */}
    <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Tulis pikiranmu di sini..."
      className="w-full h-40 p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none resize-none backdrop-blur-md"
    />

    {/* BUTTON */}
    <button
      onClick={handleNext}
      className="mt-6 px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-white/90 transition"
    >
      Next Journey 🌿
    </button>

  </div>

</div>

);
}