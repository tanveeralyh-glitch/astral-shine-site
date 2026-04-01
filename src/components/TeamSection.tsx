import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

const team = [
  { name: "Avril Lavigne", role: "Cleaner", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Alexa Bliss", role: "Cleaner", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Steave Smith", role: "Cleaner", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Jesica", role: "Cleaner", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
];

const TeamSection = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-widest uppercase text-sm mb-3 font-semibold">Our Team</p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold">Meet Our Team</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Awesome site on the top advertising a business online includes assembling. Having the most keep.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="rounded-2xl overflow-hidden card-hover bg-card border border-border">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-display font-bold text-primary">{t.name}</p>
                <p className="text-muted-foreground text-sm mb-3">{t.role}</p>
                <div className="flex justify-center gap-2">
                  {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
