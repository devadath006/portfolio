import { motion } from "framer-motion";
import SkillCard from "../cards/SkillCard";
import { skillCategories } from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-wider font-semibold">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {skillCategories.map((category) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;