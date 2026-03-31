import { useState, useRef } from "react";
import { motion } from "framer-motion";

const BeforeAfterSection = () => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section id="results" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">See the Difference</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">Before & After</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          ref={containerRef}
          className="relative max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden cursor-col-resize select-none glass-card"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* "Before" side */}
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground text-lg font-medium">Before</p>
              <p className="text-muted-foreground/60 text-sm">Dusty & neglected</p>
            </div>
          </div>
          {/* "After" side */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <div className="text-center">
              <p className="text-foreground text-lg font-medium">After</p>
              <p className="text-primary text-sm">Spotless & pristine</p>
            </div>
          </div>
          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary glow-purple z-10"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center glow-purple">
              <span className="text-primary-foreground text-xs font-bold">↔</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
