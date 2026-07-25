import { motion } from "framer-motion";
import { socialLinks } from "../../data/social";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase font-semibold">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's Connect
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl">
            Whether you have a project, internship opportunity, or just want to
            connect, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Info */}
          <div className="space-y-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
                >
                  <Icon className="text-2xl text-cyan-400" />

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-slate-400">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 outline-none focus:border-cyan-400"
            ></textarea>

            <button
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;