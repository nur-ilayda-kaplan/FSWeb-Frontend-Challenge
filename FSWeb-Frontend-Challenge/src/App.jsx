import React, { useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-[#252128] text-white" : "bg-white text-[#252128]"
      } min-h-screen`}
    >
      <div className="absolute top-4 right-4 flex items-center space-x-4 ">
        <button className="px-4 py-2 bg-transparent text-CBF281 rounded hover:bg-green-600">
          Türkçe'ye Geç
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-300 rounded-3xl hover:bg-gray-400"
        >
          Dark Mode
        </button>
      </div>
      <Header darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Profile darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
