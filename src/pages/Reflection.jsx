import { useState } from "react";

export default function Reflection({ setPage, setMessage }) {
  const [text, setText] = useState("");

const handleRelease = () => {
  setMessage(text);
  setPage("release");
};
  return (
    <div className="min-h-screen bg-linier-to-b from-sky-100 via-blue-50 to-purple-100 flex items-center justify-center px-6">
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-2xl">
        
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Ungkapkan perasaanmu.
        </h1>

        <p className="text-slate-500 text-center mt-3 leading-7">
          Tulis apa pun yang ingin kamu lepaskan hari ini.
          Tidak ada yang salah di sini.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Aku merasa..."
          className="mt-8 w-full h-52 rounded-2xl border border-slate-200 p-5 resize-none focus:outline-none focus:ring-2 focus:ring-sky-300"
        />

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-slate-400">
            {text.length} karakter
          </span>

          <button
           onClick={handleRelease}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition"
          >
            Lepaskan Perasaanku 🌊
           </button>
        </div>

      </div>
    </div>
  );
}