import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Smartphone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">Contact Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-6 flex flex-col justify-center"
          >
            <h3 className="font-display text-xl font-semibold mb-2">Reach Us Directly</h3>
            <div className="space-y-5">
              <a href="tel:+61452419789" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+61 452 419 789</span>
              </a>
              <a href="tel:+61415883582" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Smartphone className="w-5 h-5 text-primary" />
                <span>+61 415 883 582</span>
              </a>
              <a href="mailto:Themasterstouchservices112@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors break-all">
                <Mail className="w-5 h-5 text-primary" />
                <span>Themasterstouchservices112@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            {[
              { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { key: "phone", label: "Phone Number", type: "tel", placeholder: "+61 400 000 000" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-sm text-muted-foreground mb-1 block">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full bg-secondary/50 border border-primary/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/40 outline-none transition-all glow-input focus:border-primary/40"
                />
              </div>
            ))}
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Message</label>
              <textarea
                placeholder="Tell us what you need..."
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-primary/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/40 outline-none transition-all glow-input focus:border-primary/40 resize-none"
              />
            </div>
            <Button variant="glow" size="lg" className="w-full text-base" type="submit">
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
