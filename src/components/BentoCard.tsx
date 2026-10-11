"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function BentoCard({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative bg-[#08221B]/70 backdrop-blur-md border border-vertice-emerald/20 p-8 rounded-none group transition-all duration-300 hover:border-vertice-mint/50 ${className}`}
    >
      {/* Corner Markers (+) */}
      <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-vertice-mint font-light opacity-50">+</span>
      <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-vertice-mint font-light opacity-50">+</span>
      <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-vertice-mint font-light opacity-50">+</span>
      <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-vertice-mint font-light opacity-50">+</span>
      
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
}