import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Workintech",
      description: "A simple project to demonstrate React skills.",
      link: "#",
    },
    {
      name: "Journey",
      description: "A portfolio site built with React and Tailwind.",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#CBF281] py-10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded">
              <h4 className="text-xl font-semibold">{project.name}</h4>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 underline mt-2 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
