"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "ESPOL (Escuela Superior Politécnica del Litoral)",
      degree: "Ingeniería en Computación",
      period: "Abril 2017 - Agosto 2022"
    },
    {
      institution: "Academia Naval Almirante Illingworth",
      degree: "Estudios de bachillerato",
      period: "Graduado"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <GraduationCap size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Datos Académicos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/30 p-8 rounded-3xl border border-gray-700/50 hover:border-emerald-500/30 transition-all hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-emerald-400 font-medium mb-4">{edu.institution}</h4>
              <div className="inline-block px-4 py-1 bg-gray-900/50 text-gray-400 rounded-full text-sm font-medium">
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
