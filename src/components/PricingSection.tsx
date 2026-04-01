import { motion } from "framer-motion";
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Commercial",
    price: "$20",
    period: "/month",
    features: [
      "Unlimited Access Services",
      "Certificate After Completion",
      "High Quality Equipment",
      "24/7 Dedicated Support",
    ],
    highlighted: false,
  },
  {
    name: "Personal",
    price: "$60",
    period: "/month",
    features: [
      "Unlimited Access Services",
      "Certificate After Completion",
      "High Quality Equipment",
      "24/7 Dedicated Support",
    ],
    highlighted: true,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 px-6">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-6">
            Save <span className="text-gradient">30%</span> Monthly
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Training programs can bring you a super exciting experience of learning through online.
            You never face any negative experience while enjoying your classes. Awesome site on the top advertising.
          </p>
          <button className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Play className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors fill-current" />
            </div>
            <span className="font-display font-bold text-foreground">Video Presentation</span>
          </button>
        </motion.div>

        {/* Right — cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-xl"
                  : "bg-card border-border shadow-sm"
              }`}
            >
              <p className={`font-display font-bold text-lg mb-4 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`}>
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? "secondary" : "glow"}
                className="w-full rounded-full font-bold"
                asChild
              >
                <a href="#contact">Get Now →</a>
              </Button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default PricingSection;
