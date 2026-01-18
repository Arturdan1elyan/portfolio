"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Send, Mail, MapPin, MessageCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,

          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      console.log("SUCCESS!", result.status, result.text);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("FAILED...", error);
      alert(`something is wrong: ${error?.text || "unknown error"}`);
    }
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Let's build something <br />
              amazing together.
            </h3>
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email Me</p>
                  <p className="text-lg font-bold">adanielyan949@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">WhatsApp</p>
                  <p className="text-lg font-bold">+37477922303</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Location</p>
                  <p className="text-lg font-bold">Yerevan, Armenia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism p-8 md:p-12 rounded-[2.5rem]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] shadow-lg shadow-blue-900/20 active:scale-[0.98]"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
