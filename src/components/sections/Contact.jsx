import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { socialLinks } from "../../data/social";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Send button clicked!");
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("SUCCESS:", result);
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(error.text || error.message || "Failed to send message.");
      });
  };

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
            Feel free to reach out for internships, collaborations, or
            freelance projects.
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
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-slate-400">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message(add your mail id and phone number in the message)"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
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