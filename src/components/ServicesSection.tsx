import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Briefcase, HardHat, ShowerHead } from "lucide-react";

const services = [
  { icon: Building2, title: "Office Cleaning", desc: "Awesome site on the top advertising a business online includes assembling. Having the most keep.", color: "bg-primary text-primary-foreground" },
  { icon: ShowerHead, title: "Toilet Cleaning", desc: "Awesome site on the top advertising a business online includes assembling. Having the most keep.", color: "bg-card text-foreground" },
  { icon: Sparkles, title: "Laundry Cleaning", desc: "Awesome site on the top advertising a business online includes assembling. Having the most keep.", color: "bg-card text-foreground" },
  { icon: Home, title: "End Of Lease Cleaning", desc: "Get your full bond back with our thorough end-of-lease clean.", color: "bg-card text-foreground" },
  { icon: HardHat, title: "After Renovation Cleaning", desc: "Dust, debris & residue removal after any build or renovation.", color: "bg-card text-foreground" },
  { icon: Briefcase, title: "Commercial Cleaning", desc: "Large-scale cleaning for retail, warehouses & more.", color: "bg-card text-foreground" },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-widest uppercase text-sm mb-3 font-semibold">What We Do</p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold">Keep your vision to our latest<br />projects.</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Awesome site on the top advertising a business online includes assembling. Having the most keep.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group"
          >
            <div className={`${s.color} rounded-2xl p-8 h-full flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border hover:border-primary/30 hover:bg-primary hover:text-primary-foreground`}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300">
                <s.icon className="w-7 h-7 transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
