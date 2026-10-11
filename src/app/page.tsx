"use client";
import React from "react";
import InteractiveDots from "@/components/InteractiveDots";
import Navbar from "@/components/Navbar";
import { BentoCard } from "@/components/BentoCard";
import { ArrowUpRight, Shield, Zap, BookOpen, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-body">
      {/* 1. EL FONDO REACTIVO (Arcturis Style) */}
      <InteractiveDots />

      {/* 2. NAVEGACIÓN MODERNA */}
      <Navbar />

      {/* 3. HERO SECTION - REDISEÑADA */}
      <section className="relative z-10 pt-48 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-24"
          >
            <span className="inline-block bg-[#168369]/10 border border-[#168369]/20 text-[#168369] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.3em] mb-8 font-mono">
              Auditoría OAA · Normas ASME B30 · Seguridad HSE
            </span>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-[#0A1F19] leading-[0.9] tracking-tighter mb-10">
              Rigor técnico en <br />
              <span className="text-[#168369] italic font-medium">izajes críticos.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#334155] max-w-2xl leading-relaxed">
              Garantizamos la continuidad operativa de su planta mediante peritajes de maniobras críticas y certificación de competencias.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="mailto:jpugalicenciatura@gmail.com?subject=Solicitar%20evaluaci%C3%B3n" className="bg-[#168369] text-white px-8 py-4 font-bold rounded-sm hover:bg-[#0A1F19] transition-all flex items-center gap-2">
                SOLICITAR EVALUACIÓN <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* 4. BENTO GRID - TUS 4 DIVISIONES RE-ESTILIZADAS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-20">
            
            {/* DIVISIÓN 01 - GRANDE */}
            <BentoCard id="auditoria" className="md:col-span-8 bg-white/50 border-black/5">
              <div className="flex flex-col justify-between h-full min-h-[300px]">
                <Shield className="w-10 h-10 text-[#168369]" />
                <div>
                  <span className="text-[10px] font-mono text-[#168369] uppercase tracking-widest block mb-2">División 01 //</span>
                  <h3 className="text-4xl font-display font-bold text-[#0A1F19] mb-4 uppercase tracking-tighter">Auditoría OAA & Sistemas</h3>
                  <p className="text-[#475569] max-w-lg">
                    Acreditación e implementación ISO/IEC 17020 y 17024 para organismos de inspección y certificación. Garantía técnica de cumplimiento.
                  </p>
                </div>
              </div>
            </BentoCard>

            {/* DIVISIÓN 02 - CHICA */}
            <BentoCard id="izaje" className="md:col-span-4 bg-[#0A1F19] text-white border-none">
              <Zap className="w-10 h-10 text-[#32BE98] mb-12" />
              <span className="text-[10px] font-mono text-[#32BE98] uppercase tracking-widest block mb-2">División 02 //</span>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase">Ingeniería de Izaje</h3>
              <p className="text-white/60 text-sm">
                Cálculo, validación de Rigging Plans y supervisión técnica en campo para maniobras complejas.
              </p>
            </BentoCard>

            {/* DIVISIÓN 03 - CHICA */}
            <BentoCard id="capacitacion" className="md:col-span-4 bg-white/50 border-black/5">
              <BookOpen className="w-10 h-10 text-[#168369] mb-12" />
              <span className="text-[10px] font-mono text-[#168369] uppercase tracking-widest block mb-2">División 03 //</span>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase text-[#0A1F19]">Capacitación ASME</h3>
              <p className="text-[#475569] text-sm">
                Cursos In-Company bajo serie ASME B30 (grúas, eslingas y aparejos) con diplomas trazables.
              </p>
            </BentoCard>

            {/* DIVISIÓN 04 - GRANDE */}
            <BentoCard id="seguridad" className="md:col-span-8 bg-white/50 border-black/5">
              <div className="flex flex-col md:flex-row justify-between items-center h-full gap-8">
                <div className="flex-1">
                  <Activity className="w-10 h-10 text-[#168369] mb-8" />
                  <span className="text-[10px] font-mono text-[#168369] uppercase tracking-widest block mb-2">División 04 //</span>
                  <h3 className="text-4xl font-display font-bold text-[#0A1F19] mb-4 uppercase tracking-tighter">Higiene y Seguridad</h3>
                  <p className="text-[#475569]">
                    Asesoramiento técnico permanente, matrices de riesgo IPER y adecuación legal técnica ante ART.
                  </p>
                </div>
                <div className="w-48 h-48 border border-dashed border-[#168369]/30 rounded-full flex items-center justify-center animate-spin-slow">
                   <span className="text-[9px] font-mono text-[#168369]">HSE_COMPLIANCE</span>
                </div>
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

      <section id="contacto" className="relative z-10 px-8 py-20 text-center bg-white/30">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#168369] uppercase tracking-[0.3em]">
            Contacto técnico
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-[#0A1F19]">
            Hablemos de su próximo proyecto.
          </h2>
          <a
            href="mailto:jpugalicenciatura@gmail.com?subject=Consulta%20t%C3%A9cnica"
            className="mt-8 inline-flex items-center gap-2 text-[#168369] font-semibold hover:underline"
          >
            jpugalicenciatura@gmail.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-12 border-t border-black/5 bg-white/30 backdrop-blur-md px-8 text-center">
        <p className="text-xs font-mono text-slate-500 tracking-widest uppercase">
          VÉRTICE Consultoría Técnica · Dirección Técnica: Lic. Jimena Puga (Auditora OAA)
        </p>
      </footer>
    </main>
  );
}