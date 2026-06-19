export default function Navbar({ setPage }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => setPage("home")}
        >
          Meditation Website
        </h1>

        <div className="flex items-center gap-10">

          <button
            onClick={() => setPage("home")}
            className="text-white hover:text-cyan-300 transition duration-300"
          >
            Home
          </button>

          <button
            onClick={() => setPage("reflection")}
            className="text-white hover:text-cyan-300 transition duration-300"
          >
            Reflection
          </button>

          <button
            onClick={() => setPage("meditation")}
            className="text-white hover:text-cyan-300 transition duration-300"
          >
            Meditation
          </button>

          <button
            onClick={() => setPage("about")}
            className="text-white hover:text-cyan-300 transition duration-300"
          >
            About
          </button>

        </div>
      </div>
    </nav>
  );
}