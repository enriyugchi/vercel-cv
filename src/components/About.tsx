"use client";

import { motion } from "framer-motion";
import { User, Code, Server, Bot } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: <Code className="text-emerald-400" />, title: "Frontend", desc: "Vue, Ember.js" },
    { icon: <Server className="text-emerald-400" />, title: "Backend", desc: "Django, Laravel" },
    { icon: <Bot className="text-emerald-400" />, title: "Automatización", desc: "Bots conversacionales" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <User size={28} className="text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre Mí</h2>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-10 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Desarrollador de Software Senior con trayectoria en aplicaciones web usando 
              <span className="text-emerald-400 font-semibold"> Vue, Ember.js, Django y Laravel</span>. 
              Experto en bases de datos relacionales y puesta en producción. Integro orquestación de 
              procesos y bots conversacionales (WhatsApp y voz) para automatizar soporte y tareas clave. 
              Inglés B1; perseverante y flexible ante nuevos retos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
