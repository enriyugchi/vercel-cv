"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950 opacity-90" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-emerald-400 font-medium tracking-wider uppercase mb-2">Ingeniería en Ciencias de la Computación</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Enrique <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Yugcha</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Desarrollador de Software Senior especializado en la creación de aplicaciones web escalables y la orquestación de procesos inteligentes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="mailto:enriyugchi@hotmail.com" className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <Mail size={18} />
                Contactar ahora
              </a>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="https://github.com/enriyugchi" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full backdrop-blur-sm transition-all flex items-center justify-center font-bold">
                  GH
                </a>
                <a href="#" className="p-3 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full backdrop-blur-sm transition-all">
                  In
                </a>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone size={16} className="text-emerald-400" /> +593-99-005-6517
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={16} className="text-emerald-400" /> Beatas Mercedes Molina B11 V31, Guayaquil, Ecuador
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-400/50 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                {/* Image tag using the generated placeholder, will be instructed to change later */}
                <Image 
                  src="/profile.png" 
                  alt="Enrique Yugcha" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
