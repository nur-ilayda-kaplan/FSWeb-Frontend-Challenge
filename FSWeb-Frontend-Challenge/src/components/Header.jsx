import React from "react";
import github from "/images/github.png";
import linkedIn from "/images/LinkedIn.png";
import IMG_5723 from "/images/IMG_5723.png";
import { profileAboutMe } from "../data/InfoData";

const Header = ({ darkMode }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-between"
      style={{
        background: darkMode
          ? "linear-gradient(to right, #252128 67%, #374151 33%)"
          : "linear-gradient(to right, #4731D3 67%, #CBF281 33%)",
      }}
    >
      {/* Sol Bölüm */}

      <div className="flex-1 px-10 text-white">
        <p className="text-3xl mb-6">İlayda</p>
        <h1 className="text-5xl font-bold mb-4">
          <span className={`${darkMode ? "text-[#CBF281]" : "text-[#CBF281]"}`}>
            I am a Frontend Developer...
          </span>
        </h1>

        <p className="text-3xl mb-6">{profileAboutMe.HeaderAbout}</p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/nur-ilayda-kaplan"
            target="_blank"
            className="w-40 h-14 flex items-center gap-2 border-2 rounded-md p-2 text-lg bg-transparent"
          >
            <img src={github} alt="GitHub" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ilayda-kaplann/"
            target="_blank"
            className="w-40 h-14 flex items-center gap-2 border-2 rounded-md p-2 text-lg bg-transparent"
          >
            <img src={linkedIn} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Sağ Bölüm */}
      <div className="w-1/2 flex justify-center">
        <img
          src={IMG_5723}
          alt="Profile"
          className={`rounded-xl shadow-lg ${
            darkMode ? "shadow-gray-600" : ""
          }`}
          style={{
            width: "25rem", // Genişlik
            height: "30rem", // Yükseklik
            objectFit: "cover", // Görüntüyü düzgün boyutlandırır
          }}
        />
      </div>
    </div>
  );
};

export default Header;
