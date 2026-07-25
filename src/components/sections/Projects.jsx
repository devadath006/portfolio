import { motion } from "framer-motion";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-wider font-semibold">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured Work
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl">
            A selection of projects that demonstrate my skills in
            frontend development, backend development, and full-stack
            application design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;