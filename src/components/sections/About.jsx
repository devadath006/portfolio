import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description: "BCA (Hons) Student",
    },
    {
      icon: <FaLaptopCode />,
      title: "Development",
      description: "React, JavaScript, Tailwind CSS",
    },
    {
      icon: <FaRocket />,
      title: "Focus",
      description: "Building modern web applications",
    },
    {
      icon: <FaLightbulb />,
      title: "Learning",
      description: "Always exploring new technologies",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Who I Am
          </h2>

          <p className="mt-6 max-w-3xl text-slate-400 leading-8">
            I'm a passionate web developer who enjoys creating clean,
            responsive, and user-friendly web applications. I love
            transforming ideas into real products using modern
            technologies while continuously learning and improving my
            development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition"
            >
              <div className="text-3xl text-cyan-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default About;