"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import myPhoto from "../public/myPhoto.png";
import { SOCIALS } from "../constants";
import Image from "next/image";

const SocialIconMap: Record<string, React.ReactNode> = {
  Github: <Github size={22} />,
  Linkedin: <Linkedin size={22} />,
  Mail: <Mail size={22} />,
};

export const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="blob top-[10%] -left-[10%] animate-pulse"></div>
      <div
        className="blob bottom-[10%] -right-[10%] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-black tracking-[0.2em] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            I am available for new projects
          </motion.div>

          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            DESIGNING <br />
            <span className="text-gradient">FUTURE</span> <br />
            WEB APPS.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
            Junior Frontend Developer | Crafting Modern React & TypeScript Web
            Apps
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30"
            >
              My projects
              <ArrowRight size={20} />
            </motion.a>
            <div className="flex items-center gap-4">
              {SOCIALS.map((social, idx) => (
                <motion.a
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  whileHover={{ y: -5, color: "#fff" }}
                  href={social.href}
                  target="_blank"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-900 border border-gray-800 text-gray-500 hover:border-blue-500 transition-all"
                  aria-label={social.label}
                >
                  {SocialIconMap[social.iconName]}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center z-10"
        >
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] rotate-6 opacity-20 blur-2xl"></div>
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src={myPhoto}
                alt="Developer profile"
                fill
                priority
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
