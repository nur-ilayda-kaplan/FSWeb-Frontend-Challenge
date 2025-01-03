import React from "react";
import { profileAboutMe } from "../data/InfoData";

const Profile = ({ darkMode }) => {
  return (
    <section
      className={`${
        darkMode ? "bg-[#252128] text-white" : "bg-[#4731D3] text-white"
      } py-10`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <h1 className="text-[#CBF281] text-3xl font-bold text-left mb-4">
            Profile
          </h1>
          <h3 className="text-3xl font-bold">Basic Information</h3>
          <p>
            <span>Born Date:</span>
            {profileAboutMe.BornDate}
          </p>
          <p>
            <span>Home City:</span>
            {profileAboutMe.HomeCity}
          </p>
          <p>
            <span>Education:</span> {profileAboutMe.Education}
          </p>
          <p>
            <span>Preferred Role: </span> {profileAboutMe.PreferedRole}
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p>{profileAboutMe.ProfileAbout}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
