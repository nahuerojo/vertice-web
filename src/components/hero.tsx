"use client";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Activity } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 1. Fondo de Grilla Técnica */}
      <div className="absolute inset-0 bg-grid-blueprint z-0" />
      
      {/* 2. Efectos de Iluminación (Glows) */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-vertice-emerald/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-vertice-mint/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8 space-y-8">
          {/* Badge Técnico */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-3 py-1 bg-vertice-emerald/5 border border-vertice-border rounded-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vertice-mint opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vertice-mint"></span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-vertice-mint uppercase">
              Operational Status: Active / Acreditación OAA
            </span>
          </motion.div>

          {/* Título de Alto Impacto */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-bold leading-[0.9] text-white"
          >
            Ingeniería de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vertice-emerald to-vertice-mint italic">
              Precisión Crítica.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-vertice-slate text-lg md:text-xl font-body leading-relaxed"
          >
            Especialistas en auditoría técnica de izajes, ingeniería de maniobras y seguridad industrial 
            con tolerancia cero a fallas en entornos pesados.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            <button className="group relative bg-vertice-emerald hover:bg-vertice-mint text-white px-8 py-4 font-display font-bold transition-all overflow-hidden">
              <div className="absolute inset-0 scan-line" />
              <span className="relative z-10 flex items-center gap-2">
                INICIAR DIAGNÓSTICO <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 border border-vertice-border hover:bg-white/5 font-display font-bold transition-all text-white">
              VERIFICAR CERTIFICADOS
            </button>
          </motion.div>
        </div>

        {/* 4. Widget Lateral de Datos (Estilo Arcturis) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="glass-panel p-6 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vertice-mint to-transparent opacity-50" />
            
            <div className="flex justify-between items-start">
              <Activity className="text-vertice-mint w-8 h-8" />
              <span className="font-mono text-[10px] text-vertice-mint">REF: VTC-2024</span>
            </div>

            <div className="space-y-4">
              <div className="border-b border-vertice-border pb-4">
                <p className="text-[10px] font-mono text-vertice-slate uppercase tracking-widest">Normativa Base</p>
                <h4 className="text-white font-display font-bold">ASME B30.5 / B30.26</h4>
              </div>
              <div className="border-b border-vertice-border pb-4">
                <p className="text-[10px] font-mono text-vertice-slate uppercase tracking-widest">Tasa de Siniestralidad</p>
                <h4 className="text-vertice-mint font-display font-bold">0.00% AUDITADO</h4>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2">
               <ShieldCheck className="text-vertice-emerald w-5 h-5" />
               <span className="text-xs font-mono text-vertice-slate">ISO/IEC 17020 COMPLIANT</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Decoración Inferior: Coordenadas */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="font-mono text-[9px] text-vertice-emerald/40 uppercase tracking-[0.6em]">
          Lat: -34.6037 | Lon: -58.3816 | Vértice_Systems_v1.0
        </p>
      </div>
    </div>
  );
}