"use client";

import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-[#020617]/50 relative overflow-hidden"
    >
      <div className="blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-6">
              Portfolio
            </h2>
            <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              My projects
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md font-medium text-lg leading-relaxed"
          >
            Professional and modern web solutions with high performance
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -15 }}
              className="group flex flex-col glass-morphism rounded-[3rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                  <motion.a
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    href={project.github}
                    className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-2xl"
                  >
                    <Github size={28} />
                  </motion.a>
                  <motion.a
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    href={project.link}
                    className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-2xl"
                  >
                    <ExternalLink size={28} />
                  </motion.a>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="mt-auto pt-6 flex items-center text-xs font-black uppercase tracking-[0.2em] text-white group-hover:text-blue-400 transition-colors border-t border-white/5">
                  See more
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
