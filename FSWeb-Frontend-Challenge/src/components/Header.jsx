import React, { useState } from "react";
import github from "/images/github.png";
import linkedIn from "/images/LinkedIn.png";
import IMG_5723 from "/images/IMG_5723.png";
import { profileAboutMe } from "../data/InfoData";

const Header = () => {
  return (
    <div className=" min-h-screen mx-20 flex flex-col md:flex-row items-center justify-between">
      {/* Sol Bölüm */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-[#CBF281]">I am a Frontend Developer...</span>
        </h1>
        <p className="text-3xl mb-6">İlayda</p>
        <p className="text-3xl mb-6">{profileAboutMe.HeaderAbout}</p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/nur-ilayda-kaplan"
            target="_blank"
            className="ml-5 w-40 h-14  flex items-center gap-2 border-2 rounded-md p-2 text-lg"
          >
            <img src={github} alt="github" className="dark:bg-[#252128] " />{" "}
            <span> GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ilayda-kaplann/"
            target="_blank"
            className="ml-5 w-40 h-14 rounded-md flex items-center gap-2 border-2 p-2 text-lg"
          >
            <img src={linkedIn} alt="linkedin" className="dark:bg-[#252128] " />{" "}
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Sağ Bölüm */}
      <div className="w-1/5 h-1/5 mt-8 mr-16">
        <img src={IMG_5723} className="rounded-xl shadow-lg" />
      </div>
    </div>
  );
};
export default Header;
