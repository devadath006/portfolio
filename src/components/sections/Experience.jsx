import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import ExperienceCard from "../cards/ExperienceCard";

function Experience() {
  return (
    <section id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <h2>Experience</h2>

        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Experience;