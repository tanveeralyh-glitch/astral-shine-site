import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80", alt: "Clean kitchen" },
  { src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80", alt: "Sparkling bathroom" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", alt: "Office space" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80", alt: "Polished floor" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", alt: "Living room" },
  { src: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&q=80", alt: "Clean bedroom" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-widest uppercase text-sm mb-3">Our Work</p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold">Gallery</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-square glass-card"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-foreground font-display font-semibold">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
