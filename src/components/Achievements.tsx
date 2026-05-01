"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Finalista en competencia de diseño (2021)",
      description: "Mi proyecto fue seleccionado como el segundo mejor en la competencia."
    },
    {
      title: "Diploma de Honor",
      description: "Por el desarrollo de una de las mejores 10 tesis a nivel de toda la universidad ESPOL (2022)."
    },
    {
      title: "Nasa Challenge Guayaquil (2023)",
      description: "Segundo puesto en la competencia."
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <Award size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Logros Personales</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900 p-6 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-colors shadow-lg"
            >
              <Award className="text-emerald-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
