"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function Skills() {
  const skills = [
    "Diseño de páginas web", "Django", "Laravel", "Vue", "Javascript",
    "HTML", "CSS", "Metodología SCRUM", "MySql", "Graphql",
    "Emberjs", "Wordpress", "Rest Framework", "N8N/Make", "Administración de sistemas"
  ];

  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Nivel intermedio (B1)" }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <Wrench size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Habilidades e Idiomas</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-gray-800/80 hover:bg-emerald-500 text-gray-300 hover:text-white rounded-xl border border-gray-700/50 cursor-default transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Idiomas</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700/50 flex justify-between items-center"
                >
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-emerald-400 text-sm">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
