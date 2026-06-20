export default function Data() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md sm:max-w-lg text-center space-y-4">

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-light">
          Data Website
        </h1>

        <p className="text-slate-400 text-sm sm:text-base">
          Informasi fitur yang tersedia dalam Meditation Release
        </p>

        {/* LIST */}
        <div className="space-y-3 text-left">

          <div className="border-b border-white/10 pb-2">
            <h2 className="text-base sm:text-lg font-medium">
              ✍️ Reflection
            </h2>
            <p className="text-slate-400 text-sm">
              Menulis pikiran dan perasaan yang ingin dilepaskan.
            </p>
          </div>

          <div className="border-b border-white/10 pb-2">
            <h2 className="text-base sm:text-lg font-medium">
              🍃 Release
            </h2>
            <p className="text-slate-400 text-sm">
              Membantu proses pelepasan emosi secara lebih tenang melalui suasana relaksasi.
            </p>
          </div>

          <div className="border-b border-white/10 pb-2">
            <h2 className="text-base sm:text-lg font-medium">
              🧘 Meditation
            </h2>
            <p className="text-slate-400 text-sm">
              Sesi meditasi dengan timer dan audio yang membantu pengguna merasa lebih fokus dan damai.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-medium">
              📖 About
            </h2>
            <p className="text-slate-400 text-sm">
              Menampilkan informasi mengenai tujuan dan manfaat aplikasi Meditation Release.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}