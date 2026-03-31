import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "Absolutely flawless. My apartment looked brand new after their visit. Highly recommend!", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" },
  { name: "James K.", text: "Professional, thorough, and incredibly detail-oriented. Best cleaning service I've ever used.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" },
  { name: "Priya D.", text: "They transformed my office space. The team was punctual and the results were stunning.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" },
  { name: "Marcus T.", text: "From carpets to kitchens, everything was spotless. Will definitely book again!", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80" },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3 font-semibold">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold">What Clients Say</h2>
        </motion.div>

        {/* Avatars row */}
        <div className="flex justify-center gap-2 mb-8">
          {reviews.map((r, i) => (
            <button key={r.name} onClick={() => setIdx(i)} className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${i === idx ? "border-primary scale-110" : "border-transparent opacity-60"}`}>
              <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        <div className="relative min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-foreground text-lg italic leading-relaxed mb-4">"{reviews[idx].text}"</p>
              <p className="text-primary font-display font-bold">{reviews[idx].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setIdx((i) => (i - 1 + reviews.length) % reviews.length)}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % reviews.length)}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
