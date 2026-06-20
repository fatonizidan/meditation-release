export default function Data() {
return (
<div className="h-screen bg-slate-900 text-white px-6 pt-20 overflow-hidden">

  <div className="max-w-xl mx-auto text-center">

    <h1 className="text-3xl font-light mb-2">
      Data Website
    </h1>

    <p className="text-slate-400 text-sm mb-6">
      Informasi fitur yang tersedia dalam Meditation Release
    </p>

    <div className="space-y-3 text-left">

      <div className="border-b border-white/10 pb-2">
        <h2 className="text-lg font-medium">
          ✍️ Reflection
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Menulis pikiran dan perasaan yang ingin dilepaskan.
        </p>
      </div>

      <div className="border-b border-white/10 pb-2">
        <h2 className="text-lg font-medium">
          🍃 Release
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Membantu proses pelepasan emosi secara lebih tenang melalui suasana relaksasi.
        </p>
      </div>

      <div className="border-b border-white/10 pb-2">
        <h2 className="text-lg font-medium">
          🧘 Meditation
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Sesi meditasi dengan timer dan audio yang membantu pengguna merasa lebih fokus dan damai.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-medium">
          📖 About
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Menampilkan informasi mengenai tujuan dan manfaat aplikasi Meditation Release.
        </p>
      </div>

    </div>

  </div>

</div>

);
}