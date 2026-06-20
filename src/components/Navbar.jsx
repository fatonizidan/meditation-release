export default function Navbar({ setPage }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-8 py-3">

        {/* TITLE */}
        <h1
          className="text-lg sm:text-2xl font-bold text-white cursor-pointer"
          onClick={() => setPage("home")}
        >
          Meditation Website
        </h1>

        {/* MENU */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-8 mt-2 sm:mt-0">

          <button
            onClick={() => setPage("home")}
            className="text-white text-sm sm:text-base hover:text-cyan-300 transition"
          >
            Home
          </button>

          <button
            onClick={() => setPage("reflection")}
            className="text-white text-sm sm:text-base hover:text-cyan-300 transition"
          >
            Reflection
          </button>

          <button
            onClick={() => setPage("meditation")}
            className="text-white text-sm sm:text-base hover:text-cyan-300 transition"
          >
            Meditation
          </button>

          <button
            onClick={() => setPage("data")}
            className="text-white text-sm sm:text-base hover:text-cyan-300 transition"
          >
            Data
          </button>

          <button
            onClick={() => setPage("about")}
            className="text-white text-sm sm:text-base hover:text-cyan-300 transition"
          >
            About
          </button>

        </div>

      </div>
    </nav>
  );
}