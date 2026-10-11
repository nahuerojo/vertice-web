"use client";

import React from "react";
import Link from "next/link";
import Certificate from "@/components/certificate";

export default function CertificadoPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 print:p-0 print:bg-white">
      {/* Barra de Acciones (Oculta al imprimir) */}
      <div className="max-w-[297mm] mx-auto mb-6 px-4 flex justify-between items-center print:hidden">
        <Link
          href="/"
          className="text-xs font-semibold text-[#064E3B] hover:underline flex items-center gap-1"
        >
          ← Volver al sitio
        </Link>
        <button
          onClick={() => window.print()}
          className="bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold px-4 py-2 rounded shadow transition flex items-center gap-2"
        >
          <span>🖨️</span> Imprimir / Guardar en PDF
        </button>
      </div>

      {/* Hoja A4 del Certificado */}
      <Certificate />
    </div>
  );
}