export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-100 to-purple-100 flex items-center justify-center px-6">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-2xl text-center">

        <h1 className="text-4xl font-bold text-slate-800">
          🌿 About Meditation Release
        </h1>

        <p className="mt-6 text-slate-600 leading-8">
          Meditation Release adalah aplikasi sederhana yang membantu pengguna
          mengungkapkan perasaan, melepaskan beban pikiran, dan menenangkan diri
          melalui sesi meditasi singkat.
        </p>

        <div className="mt-8 text-left text-slate-700 space-y-3">
          <p>✍️ Reflection — Menulis apa yang sedang dirasakan.</p>
          <p>🌬️ Release — Melepaskan emosi secara simbolis.</p>
          <p>🧘 Meditation — Menenangkan diri dengan timer dan musik ambient.</p>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Dibuat sebagai proyek pembelajaran React dan mindfulness.
        </p>

      </div>
    </div>
  );
}