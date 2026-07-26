import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2">

      {/* <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      /> */}

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="flex gap-4 mt-6">

          <a
            href={project.github}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;