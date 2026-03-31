import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", service: "" });
  };

  return (
    <section id="book" className="py-24 px-6">
      <div className="container mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Get Started</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">Book a Cleaning</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          {[
            { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
            { key: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000" },
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
            <label className="text-sm text-muted-foreground mb-1 block">Service Type</label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-secondary/50 border border-primary/10 rounded-lg px-4 py-3 text-foreground outline-none transition-all glow-input focus:border-primary/40"
            >
              <option value="">Select a service</option>
              <option value="residential">Residential Deep Clean</option>
              <option value="commercial">Commercial Spaces</option>
              <option value="moveinout">Move-In / Move-Out</option>
              <option value="carpet">Carpet & Upholstery</option>
              <option value="construction">Post-Construction</option>
              <option value="custom">Custom Package</option>
            </select>
          </div>
          <Button variant="glow" size="lg" className="w-full text-base" type="submit">
            {submitted ? "✓ Request Sent!" : "Submit Request"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
