export default function Navbar({ setPage }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow">
      <h1 className="font-bold">🌿 Meditation UAS</h1>

      <div className="space-x-4">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("reflection")}>Reflect</button>
        <button onClick={() => setPage("meditation")}>Meditate</button>
      </div>
    </div>
  );
}