import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 font-semibold mb-2">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Devadath
              <span className="text-cyan-400"> K Nair</span>
            </h1>

            <h2 className="mt-5 text-2xl md:text-3xl text-slate-300">
              React Developer & Full Stack Developer
            </h2>

            <p className="mt-6 text-slate-400 leading-8 max-w-xl">
              Passionate about building modern web applications,
              creating user-friendly interfaces, and solving
              real-world problems with technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold transition"
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="#contact"
                className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-xl transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 mt-8 text-3xl">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
              <img
                src={profile}
                alt="Devadath"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;