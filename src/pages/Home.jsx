export default function Home({ setPage }) {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Meditation Space 🌿</h1>

      <p className="text-gray-400 mt-3">
        Tulis pikiranmu, lepaskan, lalu tenangkan diri
      </p>

      <button
       onClick={() => setPage("reflection")}
       className="mt-10 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow-lg transition duration-300 hover:scale-105"
    >
       Begin Your Journey 🌿
      </button>
    </div>
  );
}