"use client";
import React, { useState, useEffect } from "react";

export default function InteractiveGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#061A14]">
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(50, 190, 152, 0.15), transparent 80%)`
        }}
      />
      
      {/* Dot Grid Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(rgba(22, 131, 105, 0.4) 1.5px, transparent 0)`,
          backgroundSize: `32px 32px`,
        }}
      />
    </div>
  );
}
