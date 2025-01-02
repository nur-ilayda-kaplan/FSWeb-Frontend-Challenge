import React from "react";

// Görselleri içe aktar
import JSLogo from "../images/JSLogo.jpg";
import ReactLogo from "../images/ReactLogo.png";
import NodeJSLogo from "../images/NodeJSLogo.jpg";
import ReduxLogo from "../images/ReduxLogo.png";
import VSCodeLogo from "../images/VSCodeLogo.png";
import FigmaLogo from "../images/FigmaLogo.jpg";

const Skills = () => {
  const skills = [
    { name: "JAVASCRIPT", icon: JSLogo },
    { name: "NODE", icon: NodeJSLogo },
    { name: "REACT", icon: ReactLogo },
    { name: "VS CODE", icon: VSCodeLogo },
    { name: "REDUX", icon: ReduxLogo },
    { name: "FİGMA", icon: FigmaLogo },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl  mx-auto ">
        <h3 className="text-3xl font-bold text-left mb-4">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 ">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-transparent rounded">
              {/* Görsel */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mx-auto  shadow-lg"
              />
              {/* Başlık */}
              <p className="mt-2 font-semibold text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
