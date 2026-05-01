"use client";

import { motion } from "framer-motion";
import { Users, Phone } from "lucide-react";

export default function References() {
  const references = [
    { name: "Ing. Marcelo Sánchez", phone: "+593 98 434 7576" },
    { name: "Ing. Betsy Nazareno", phone: "+593 96 276 2971" },
    { name: "Ing. Roger Avilés", phone: "+593 98 645 1301" }
  ];

  return (
    <section id="references" className="py-20 relative border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <Users size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Referencias</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center bg-gray-800/30 p-8 rounded-2xl border border-gray-700/30 hover:bg-gray-800/60 transition-all text-center"
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-400">{ref.name.charAt(4)}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{ref.name}</h3>
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <Phone size={14} />
                <span>{ref.phone}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
