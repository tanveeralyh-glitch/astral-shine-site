import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-primary/10 py-12 px-6">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="text-gradient font-display font-bold text-lg mb-3">The Master's Touch Cleaning</p>
          <p className="text-muted-foreground text-sm">Professional cleaning services across Sydney.</p>
        </div>
        <div className="space-y-2">
          <a href="tel:+61452419789" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
            <Phone className="w-4 h-4 text-primary" /> +61 452 419 789
          </a>
          <a href="tel:+61415883582" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
            <Phone className="w-4 h-4 text-primary" /> +61 415 883 582
          </a>
          <a href="mailto:Themasterstouchservices112@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors break-all">
            <Mail className="w-4 h-4 text-primary" /> Themasterstouchservices112@gmail.com
          </a>
        </div>
        <div>
          <div className="flex items-start gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary mt-0.5" />
            <span>Hebe St, Greenacre NSW 2190, Australia</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10 pt-6 text-center">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} The Master's Touch Cleaning. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
