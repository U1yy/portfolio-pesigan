import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";
import { toast } from "sonner"; 

export default function Contact() {
  const discordTag = "ulysses0401"; 

  const handleDiscordClick = async () => {
    try {
      await navigator.clipboard.writeText(discordTag);
      toast.success("Discord tag copied to clipboard!", {
        description: discordTag,
        duration: 2000,
      });
    } catch (err) {
      toast.error("Failed to copy Discord tag.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-800 text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-indigo-400">Contact Me</h2>
      <p className="text-gray-400 mb-10 text-center max-w-xl">
        Let’s connect! Whether it’s for collaboration, inquiries, or just to
        chat, feel free to reach out through any of my social platforms below.
      </p>

      <div className="flex space-x-8">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/james.carlo.pesigan.2025"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <FaFacebookF size={28} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/U1yy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <FaGithub size={28} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/labkosicarlo/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <FaInstagram size={28} />
        </a>

        {/* Twitter (X) */}
        <a
          href="https://x.com/Ulysseshesh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white text-gray-800 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <FaXTwitter size={28} />
        </a>

        {/* Discord (Copy to Clipboard) */}
        <button
          onClick={handleDiscordClick}
          className="p-4 rounded-full bg-white text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <FaDiscord size={28} />
        </button>
      </div>
    </section>
  );
}
