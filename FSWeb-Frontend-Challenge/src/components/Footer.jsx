import React from "react";
import { profileAboutMe } from "../data/InfoData";
import Twitter from "/images/twitter.svg";
import Codepen from "/images/codepen.svg";
import Atsign from "/images/at-sign.svg";
import Instagram from "/images/instagram.svg";

const Footer = () => {
  const FooterIcons = [
    { name: "Twitter", icon: Twitter },
    { name: "Codepen", icon: Codepen },
    { name: "Atsign", icon: Atsign },
    { name: "Instagram", icon: Instagram },
  ];
  return (
    <footer className=" text-[#4731D3] py-6 text-center">
      <h3 className="text-2xl font-bold">Send me a message!</h3>
      <p>Got a question or proposal? Reach out to me at:</p>
      <p className="underline underline-offset-2">{profileAboutMe.Email}</p>
      <div className="flex justify-center space-x-4 mt-4">
        {FooterIcons.map((footer, index) => (
          <div key={index} className="p-4 bg-transparent rounded">
            {/* Görsel */}
            <img
              src={footer.icon}
              alt={footer.name}
              className="w-10 h-20 mx-auto  "
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
