import { motion } from "framer-motion";

const images = [
  { src: "/work1.jpg", label: "Range Hood Cleaning" },
  { src: "/work2.jpg", label: "Stove & Oven Cleaning" },
  { src: "/work3.jpg", label: "Cabinet Deep Clean" },
  { src: "/work4.jpg", label: "Carpet Cleaning" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-widest uppercase text-sm mb-3 font-semibold">Our Work</p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold">Keep your vision to our latest<br />projects.</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Browse through our recent cleaning projects showcasing quality results.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl shadow border border-border bg-background"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <p className="text-primary-foreground font-display font-bold text-sm">{img.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
