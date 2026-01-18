import { Code2, Heart } from "lucide-react";
import { SOCIALS } from "../constants";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Code2 className="text-white" size={18} />
          </div>
          <span className="text-lg font-bold text-white">DevFlow</span>
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-1">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> by
          DevFlow &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          {SOCIALS.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="text-gray-500 hover:text-white transition-colors"
              aria-label={social.label}
            >
              {social.iconName}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

