import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  { name: "Sarah M.", text: "Absolutely flawless. My apartment looked brand new after their visit. Highly recommend!", avatar: "S" },
  { name: "James K.", text: "Professional, thorough, and incredibly detail-oriented. Best cleaning service I've ever used.", avatar: "J" },
  { name: "Priya D.", text: "They transformed my office space. The team was punctual and the results were stunning.", avatar: "P" },
  { name: "Marcus T.", text: "From carpets to kitchens, everything was spotless. Will definitely book again!", avatar: "M" },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">What Clients Say</h2>
        </motion.div>

        <div className="relative h-52">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 glass-card p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">{reviews[idx].avatar}</span>
              </div>
              <p className="text-foreground italic mb-4">"{reviews[idx].text}"</p>
              <p className="text-primary text-sm font-medium">{reviews[idx].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
