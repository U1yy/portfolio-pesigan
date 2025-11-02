import React, { useState, useEffect } from "react";
import {FaFacebookF, FaInstagram, FaGithub, FaXTwitter, FaDiscord,} from "react-icons/fa6";

export default function Hero() {
  const words = [
    "a Student in CVSU-Bacoor",
    "a 3rd Year",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [speed, setSpeed] = useState(120);

  const discordTag = "ulysses0401";

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = speed;

    if (isDeleting) typingSpeed /= 2;

    const handleTyping = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [text, isDeleting, wordIndex, words, speed]);

  // Discord tag function
  const handleDiscordClick = async () => {
    try {
      await navigator.clipboard.writeText(discordTag);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy Discord tag: ", err);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex flex-col justify-center items-center 
                 bg-gradient-to-b from-gray-700 to-gray-800 text-white text-center"
    >
      <h1 className="text-5xl font-bold mb-2">James Carlo R. Pesigan</h1>

      {/* typing animation */}
      <p className="text-xl mb-8">
        I&apos;m{" "}
        <span className="border-r-2 border-white pr-1 animate-pulse">
          {text}
        </span>
      </p>

      {/* socmed icons */}
      <div className="flex space-x-6">
        <a
          href="https://www.facebook.com/james.carlo.pesigan.2025"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white text-gray-800 rounded-full shadow-md 
                     hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <FaFacebookF size={22} />
        </a>

        <a
          href="https://www.instagram.com/labkosicarlo/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white text-gray-800 rounded-full shadow-md 
                     hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="https://github.com/U1yy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white text-gray-800 rounded-full shadow-md 
                     hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://x.com/Ulysseshesh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white text-gray-800 rounded-full shadow-md 
                     hover:bg-blue-400 hover:text-white transition-all duration-300"
        >
          <FaXTwitter size={22} />
        </a>

        <button
          onClick={handleDiscordClick}
          className="relative p-3 bg-white text-gray-800 rounded-full shadow-md 
                     hover:bg-indigo-600 hover:text-white transition-all duration-300"
        >
          <FaDiscord size={22} />
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 
                             bg-black text-white text-xs px-3 py-1 rounded-full animate-bounce">
              Copied!
            </span>
          )}
        </button>
      </div>
    </section>
  );
}
