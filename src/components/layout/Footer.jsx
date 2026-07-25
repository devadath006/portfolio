import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Devadath K Nair
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              Passionate about building modern web applications and
              solving real-world problems using technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a href="https://github.com/yourusername">
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a href="https://linkedin.com/in/yourusername">
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>

              <a href="mailto:your@email.com">
                <FaEnvelope className="hover:text-cyan-400 transition" />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Devadath K Nair. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm flex items-center gap-2 mt-3 md:mt-0">
            Made with <FaHeart className="text-red-500" /> using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;