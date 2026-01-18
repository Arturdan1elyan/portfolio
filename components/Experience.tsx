"use client";

import { Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

export const Experience = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-6">
            Career Path
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">
            Projects & Learning Journey
          </h3>
        </motion.div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-gray-800 bg-gray-950 text-blue-500 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Briefcase size={20} />
              </div>

              <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3.5rem)] p-10 rounded-[2.5rem] glass-morphism hover:border-blue-500/30 transition-all shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                    {exp.role}
                  </h4>
                  <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-blue-400 font-black uppercase tracking-widest text-xs mb-6">
                  {exp.company}
                </p>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-gray-400 text-sm leading-relaxed font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
