export default function Sidebar({ isOpen, setIsOpen, setPage }) {
  const handleNavigate = (targetPage) => {
    console.log("Pindah ke:", targetPage);

    setPage(targetPage);
    setIsOpen(false);
  };

  return (
    <>
      {/* Tombol Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-xl px-4 py-2 hover:scale-105 transition"
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-sky-600">
            🌿 Meditation Release
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Temukan ketenanganmu.
          </p>

          <div className="mt-10 space-y-4">
            <button
              onClick={() => handleNavigate("home")}
              className="block w-full text-left px-3 py-2 rounded-xl hover:bg-sky-100 hover:text-sky-600 transition"
            >
              🏠 Home
            </button>

            <button
              onClick={() => handleNavigate("reflection")}
              className="block w-full text-left px-3 py-2 rounded-xl hover:bg-sky-100 hover:text-sky-600 transition"
            >
              ✍️ Reflection
            </button>

            <button
              onClick={() => handleNavigate("meditation")}
              className="block w-full text-left px-3 py-2 rounded-xl hover:bg-sky-100 hover:text-sky-600 transition"
            >
              🧘 Meditation
            </button>

            <button
              onClick={() => handleNavigate("about")}
              className="block w-full text-left px-3 py-2 rounded-xl hover:bg-sky-100 hover:text-sky-600 transition"
            >
              ℹ️ About
            </button>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs text-slate-400 text-center">
              "Take a moment to breathe."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}