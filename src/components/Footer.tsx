import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-14 px-6">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <p className="font-display font-extrabold text-lg mb-3">The Master's Touch Cleaning</p>
          <p className="text-background/60 text-sm leading-relaxed">Professional cleaning services across Sydney. Trusted by hundreds of happy customers.</p>
        </div>
        <div>
          <p className="font-display font-bold mb-3">Company</p>
          <ul className="space-y-2 text-background/60 text-sm">
            <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
            <li><a href="#gallery" className="hover:text-background transition-colors">Gallery</a></li>
            <li><a href="#reviews" className="hover:text-background transition-colors">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-bold mb-3">Support</p>
          <ul className="space-y-2 text-background/60 text-sm">
            <li><a href="#contact" className="hover:text-background transition-colors">Contact Us</a></li>
            <li><a href="tel:+61415883582" className="hover:text-background transition-colors">Call Support</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-bold mb-3">Contact Us</p>
          <div className="space-y-3 text-background/60 text-sm">
            <a href="tel:+61452419789" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-4 h-4" /> +61 452 419 789
            </a>
            <a href="tel:+61415883582" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-4 h-4" /> +61 415 883 582
            </a>
            <a href="mailto:Themasterstouchservices112@gmail.com" className="flex items-center gap-2 hover:text-background transition-colors break-all">
              <Mail className="w-4 h-4" /> Themasterstouchservices112@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Hebe St, Greenacre NSW 2190, Australia</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center">
        <p className="text-background/50 text-sm">© {new Date().getFullYear()} The Master's Touch Cleaning. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
