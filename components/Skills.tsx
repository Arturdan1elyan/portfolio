"use client";
import {
  Layers,
  Code2,
  Palette,
  Zap,
  Terminal,
  Globe,
  Github,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const IconMap: Record<string, React.ReactNode> = {
  Layers: <Layers size={20} />,
  Code2: <Code2 size={20} />,
  Palette: <Palette size={20} />,
  Zap: <Zap size={20} />,
  Terminal: <Terminal size={20} />,
  Globe: <Globe size={20} />,
  Github: <Github size={20} />,
  Smartphone: <Smartphone size={20} />,
};

export const Skills = () => {
  const categories: ("Frontend" | "Tools" | "Design")[] = [
    "Frontend",
    "Tools",
    "Design",
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-6">
            My skills
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase">
            Technologies
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="glass-morphism rounded-[2.5rem] p-10 hover:border-blue-500/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>

              <h4 className="text-2xl font-black mb-8 text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                {category}
              </h4>
              <div className="space-y-5">
                {SKILLS.filter((s) => s.category === category).map(
                  (skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-5 p-4 rounded-2xl bg-gray-900/40 border border-white/5 hover:bg-gray-800/80 transition-all cursor-default"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center text-blue-500 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300">
                        {IconMap[skill.iconName] || <Code2 size={20} />}
                      </div>
                      <span className="font-bold text-gray-300 tracking-tight text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
