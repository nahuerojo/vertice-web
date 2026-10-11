"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // Importamos el componente de imagen de Next

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Auditoría ISO 17020", path: "#auditoria" },
    { name: "Ingeniería de Izaje", path: "#izaje" },
    { name: "Capacitaciones ASME", path: "#capacitacion" },
    { name: "Higiene y Seguridad", path: "#seguridad" },
    { name: "Consulta técnica", path: "#contacto" },
    { name: "Verificar Diploma", path: "/certificado" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-white/50 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-4">
           {/* TU LOGO OFICIAL */}
           <Image 
              src="/logo-vertice.png" 
              alt="Vértice Logo" 
              width={180} 
              height={60} 
              className="object-contain"
              priority
           />
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:jpugalicenciatura@gmail.com?subject=Consulta%20t%C3%A9cnica" className="hidden md:block text-[10px] font-mono tracking-widest text-[#168369] font-bold border border-[#168369]/20 px-4 py-2 rounded-full hover:bg-[#168369] hover:text-white transition-all">
            CONSULTA_TÉCNICA //
          </a>
          <button 
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 bg-[#0A1F19] flex items-center justify-center rounded-full hover:bg-[#168369] transition-all shadow-lg"
          >
            <Menu className="text-white w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* MENÚ DESPLEGABLE (ESTILO PREMIUM) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#0A1F19] text-white p-8 md:p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <Image 
                src="/logo-vertice.png" 
                alt="Vértice Logo" 
                width={150} 
                height={50} 
                className="brightness-0 invert opacity-80" // Esto hace que el logo se vea blanco en el menú oscuro
              />
              <button onClick={() => setIsOpen(false)} className="p-4 hover:rotate-90 transition-transform">
                <X className="w-8 h-8 text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-[0.5em] text-[#168369] mb-4">MAPA_DE_SISTEMAS</span>
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-7xl font-display font-bold hover:text-[#32BE98] transition-colors flex items-center gap-6 group tracking-tighter"
                >
                  <span className="text-sm font-mono text-white/20 group-hover:text-[#32BE98]">0{i+1}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-end gap-4">
              <div className="text-left w-full">
                <p className="text-sm font-bold tracking-tight">Lic. Jimena Puga</p>
                <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">Directora Técnica - Auditora OAA</p>
              </div>
              <div className="flex gap-8 font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">
                <span>ASME_B30</span>
                <span>ISO_17020</span>
                <span>VTC_2024</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}