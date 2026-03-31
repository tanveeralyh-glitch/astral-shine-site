import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 sm:p-14 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-primary-foreground mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Get 20% off on your first order just by subscribing to our newsletter.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-full px-6 py-3 outline-none focus:bg-primary-foreground/20 transition-colors"
            />
            <Button
              type="submit"
              className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-3 font-bold"
            >
              {subscribed ? "✓ Subscribed!" : "Subscribe"}
            </Button>
          </form>
          <p className="text-primary-foreground/50 text-xs mt-4">You will be able to unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
