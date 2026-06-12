import { useState } from "react";

import Home from "./pages/Home";
import Reflection from "./pages/Reflection";
import Release from "./pages/Release";
import Meditation from "./pages/Meditation";
import About from "./pages/About";

import Sidebar from "./components/Sidebar";

export default function App() {
  const [page, setPage] = useState("home");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  let currentPage;

  if (page === "home") {
    currentPage = (
      <Home setPage={setPage} />
    );

  } else if (page === "reflection") {
    currentPage = (
      <Reflection
        setPage={setPage}
        setMessage={setMessage}
      />
    );

  } else if (page === "release") {
    currentPage = (
      <Release
        message={message}
        setPage={setPage}
      />
    );

  } else if (page === "meditation") {
    currentPage = (
      <Meditation />
    );

  } else if (page === "about") {
    currentPage = (
      <About />
    );

  } else {
    currentPage = (
      <Home setPage={setPage} />
    );
  }

  console.log("Page sekarang:", page);
  return (
    <div className="relative">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setPage={setPage}
      />

      {currentPage}
    </div>
  );
}