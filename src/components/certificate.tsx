import React from "react";

export interface CertificateProps {
  certId?: string;
  studentName?: string;
  studentDni?: string;
  companyName?: string;
  courseTitle?: string;
  normativeCode?: string;
  hoursTotal?: number;
  hoursTheory?: number;
  hoursPractice?: number;
  issueDate?: string;
  qrVerificationUrl?: string;
}

export const Certificate: React.FC<CertificateProps> = ({
  certId = "CERT-VRT-2026-0042",
  studentName = "MAURO MACCHIAVELLO",
  studentDni = "DNI / ID: 35.892.104",
  companyName = "SERVICIOS INDUSTRIALES S.A.",
  courseTitle = "Inspección y Criterios de Rechazo en Aparejos y Accesorios de Izaje",
  normativeCode = "ASME B30.26 / IRAM / ISO 17020",
  hoursTotal = 8,
  hoursTheory = 4,
  hoursPractice = 4,
  issueDate = "05 de Octubre de 2026",
  qrVerificationUrl = "https://verticeconsultora.vercel.app/verify/CERT-VRT-2026-0042",
}) => {
  return (
    <div className="w-[297mm] h-[210mm] bg-white text-[#1E293B] p-12 mx-auto box-border flex flex-col justify-between border border-slate-300 print:border-none print:m-0 print:p-10 shadow-lg print:shadow-none font-sans">
      {/* Cabecera Técnica Oficial */}
      <div className="flex justify-between items-start border-b-2 border-[#064E3B] pb-4">
        <div className="flex items-center gap-4">
          {/* Isotipo Verde Facetado */}
          <svg className="w-12 h-12" viewBox="0 0 80 80" fill="none">
            <polygon points="12,14 26,14 38,40 24,40" fill="#10B981" />
            <polygon points="68,14 54,14 42,40 56,40" fill="#0D9488" />
            <polygon points="24,40 38,40 40,68 26,68" fill="#059669" />
            <polygon points="56,40 42,40 40,68 54,68" fill="#047857" />
            <polygon points="40,40 32,54 48,54" fill="#064E3B" />
          </svg>
          <div>
            <h1 className="font-bold text-2xl tracking-widest text-[#064E3B]">VÉRTICE</h1>
            <p className="text-[10px] tracking-wider text-[#059669] font-bold uppercase">
              Consultoría Técnica · Izaje, Maquinaria Vial & Auditoría OAA
            </p>
          </div>
        </div>

        <div className="text-right text-xs">
          <span className="font-mono bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded font-bold text-[#064E3B]">
            {certId}
          </span>
          <p className="text-[10px] text-slate-500 mt-1">Registro de Competencia Técnica B2B</p>
        </div>
      </div>

      {/* Título Oficial */}
      <div className="text-center my-1">
        <h2 className="text-lg tracking-widest text-[#064E3B] uppercase font-extrabold">
          Certificado de Competencia Técnica y Aprobación
        </h2>
        <p className="text-xs text-slate-500 italic">
          Expedido de conformidad con los lineamientos técnicos de inspección y seguridad operativa
        </p>
      </div>

      {/* Datos del Participante */}
      <div className="text-center space-y-1">
        <p className="text-xs text-slate-600">Por cuanto se certifica que</p>
        <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-wide uppercase border-b border-emerald-200 pb-1 max-w-xl mx-auto">
          {studentName}
        </h3>
        <p className="text-xs text-slate-500 font-mono">
          {studentDni} · Empresa: <span className="font-semibold text-[#1E293B]">{companyName}</span>
        </p>
      </div>

      {/* Bloque Normativo y Horas Cátedra */}
      <div className="bg-[#F0FDF4] border border-emerald-200 rounded-md p-4 text-center max-w-3xl mx-auto space-y-2">
        <p className="text-xs text-slate-700">
          Ha completado y aprobado satisfactoriamente la formación y evaluación teórico-práctica in situ de:
        </p>
        <p className="text-base font-bold text-[#064E3B]">
          {courseTitle}
        </p>
        <div className="flex justify-center items-center gap-6 text-xs text-slate-600 pt-1 border-t border-emerald-200/60">
          <span><strong>Norma de Referencia:</strong> {normativeCode}</span>
          <span>•</span>
          <span><strong>Carga Horaria:</strong> {hoursTotal} hs cátedra ({hoursTheory}h Teoría / {hoursPractice}h Práctica en Planta)</span>
        </div>
      </div>

      {/* Pie Técnico: Fecha, Firma Jimena Puga y QR */}
      <div className="grid grid-cols-3 items-end pt-4 border-t border-slate-200">
        <div className="text-left text-xs space-y-1">
          <p className="text-slate-600"><strong>Fecha de Emisión:</strong> {issueDate}</p>
          <p className="text-[10px] text-slate-400">Válido ante auditorías de planta, ART y aseguradoras de riesgo.</p>
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="h-14 flex items-end">
            <span className="font-serif italic text-slate-400 text-sm">[Firma digitalizada]</span>
          </div>
          <div className="w-52 border-t border-[#064E3B] mt-1 pt-1">
            <p className="font-bold text-xs text-[#064E3B]">Lic. Jimena Puga</p>
            <p className="text-[9px] text-slate-600 font-semibold">Directora Técnica · Auditora OAA</p>
            <p className="text-[8px] text-slate-400">Especialista en Equipos de Izaje y Maquinaria Vial</p>
          </div>
        </div>

        <div className="text-right flex flex-col items-end">
          <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[8px] text-[#064E3B] font-mono text-center">
            QR Check
          </div>
          <p className="text-[8px] font-mono text-slate-400 mt-1">Verificación en línea de idoneidad</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;