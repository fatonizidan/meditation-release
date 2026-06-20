export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md sm:max-w-lg text-center space-y-4">

        {/* ICON */}
        <div className="text-2xl sm:text-3xl">
          🌿
        </div>

        {/* TITLE */}
        <h1 className="text-2xl sm:text-4xl font-light">
          About Meditation Release
        </h1>

        {/* DESCRIPTION */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Meditation Release dibuat sebagai ruang sederhana untuk membantu
          seseorang berhenti sejenak dari kesibukan, menuliskan isi pikiran,
          melepaskan beban yang dirasakan, dan kembali menemukan ketenangan.
        </p>

        {/* LINE */}
        <div className="w-16 h-px bg-white/20 mx-auto"></div>

        {/* QUOTE */}
        <p className="text-slate-400 italic text-sm sm:text-base leading-relaxed">
          "Terkadang kita tidak membutuhkan jawaban untuk semua hal.
          Kita hanya membutuhkan ruang untuk bernapas, menerima,
          dan melepaskan."
        </p>

        {/* FOOTER */}
        <div className="text-slate-500 text-xs sm:text-sm pt-4">
          Meditation Release • React JS Project
        </div>

      </div>

    </div>
  );
}