import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >

        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm{" "}
          <span className="text-cyan-400">
            Devadath
          </span>
        </h1>


        <h2 className="mt-5 text-2xl text-slate-300">
          React Developer | Full Stack Developer
        </h2>


        <p className="mt-6 max-w-2xl text-slate-400">
          Building modern web applications with React,
          JavaScript, and scalable technologies.
        </p>


        <div className="mt-8 flex justify-center gap-5">

          <a
            href="/resume.pdf"
            className="bg-cyan-500 px-6 py-3 rounded-xl text-black font-semibold hover:bg-cyan-400"
          >
            Resume
          </a>


          <a
            href="#contact"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black"
          >
            Contact
          </a>

        </div>


        <div className="flex justify-center gap-6 mt-8 text-3xl">

          <FaGithub className="hover:text-cyan-400 cursor-pointer"/>

          <FaLinkedin className="hover:text-cyan-400 cursor-pointer"/>

        </div>


      </motion.div>

    </section>
  );
}

export default Hero;