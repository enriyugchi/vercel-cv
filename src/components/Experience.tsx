"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Ayudante titular Bootcamp DJANGO",
      company: "Academia Desafío Latam",
      period: "Enero 2024 - Junio 2024",
      description: "Apoyo en la formación de nuevos desarrolladores en el framework Django.",
      projects: []
    },
    {
      role: "Programador Full Stack",
      company: "Comextweb S.A",
      period: "Febrero 2020 - Actualidad",
      description: "Desarrollo y mantenimiento de múltiples plataformas y sistemas.",
      projects: [
        "Comextweb (Django)",
        "Tleaze (Laravel, Emberjs y Wordpress)",
        "Lobitozz (Vuejs y Django)",
        "Comextweb Aranceles (Vuejs y Django Rest)",
        "Ecuasueña (Graphql, Django, Postgres y Vuejs)",
        "Logiga Corp (Bot WhatsApp + AI vía telefónica)"
      ]
    },
    {
      role: "Ayudante de Fundamentos de Programación",
      company: "ESPOL",
      period: "Junio 2018 - Enero 2020",
      description: "Impartir clases y conocimientos a estudiantes en lenguaje Python.",
      projects: []
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <Briefcase size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia Laboral</h2>
        </div>

        <div className="relative border-l border-gray-700 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-emerald-500 border-4 border-gray-900" />
              
              <div className="bg-gray-800/30 hover:bg-gray-800/60 transition-colors rounded-2xl p-6 md:p-8 border border-gray-700/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                  <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-emerald-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                {exp.projects.length > 0 && (
                  <div className="mt-4">
                    <h5 className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-3">Proyectos Destacados</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.projects.map((project, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
