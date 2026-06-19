export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* soft gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-100 via-indigo-100 to-purple-100"></div>

      {/* CONTENT CARD */}
      <div className="relative bg-white-500/60 backdrop-blur-md border border-blue-400 shadow-xl rounded-3xl p-8 max-w-2xl text-center">

        {/* ICON */}
        <div className="text-4xl mb-3">
          🌿
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-slate-700">
          About Meditation Release
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 text-slate-600 text-sm leading-relaxed">
          Meditation Release adalah ruang sederhana untuk membantu kamu
          menenangkan pikiran, menulis perasaan, dan melepaskan beban
          melalui proses yang lembut dan tenang.
        </p>

        <p className="mt-4 text-slate-600 text-sm leading-relaxed">
          Setiap langkah di dalam aplikasi ini dirancang untuk membawa
          kamu kembali pada ketenangan diri, tanpa tekanan, tanpa terburu-buru.
        </p>

        {/* FEATURES */}
        <div className="mt-6 text-left text-slate-600 text-sm space-y-2">
          <p>✍️ Reflection : menulis isi hati</p>
          <p>🌬️ Release : melepaskan emosi</p>
          <p>🧘 Meditation : kembali ke ketenangan</p>
        </div>

        {/* FOOTER */}
        <p className="mt-6 text-xs text-slate-400">
          Dibuat dengan React sebagai ruang kecil untuk ketenangan.
        </p>

      </div>
    </div>
  );
}