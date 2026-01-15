import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-dsts.png";

const footerLinks = {
  solutions: [
    { name: "Sécurité", href: "/solutions/securite" },
    { name: "Immobilier", href: "/solutions/immobilier" },
    { name: "Bureaux", href: "/solutions/bureaux" },
    { name: "Agriculture", href: "/solutions/agriculture" },
    { name: "Bancaire", href: "/solutions/bancaire" },
  ],
  services: [
    { name: "Étude & Conception", href: "/services/etude-conception" },
    { name: "Installation", href: "/services/installation" },
    { name: "Intégration", href: "/services/integration" },
  ],
  company: [
    { name: "À Propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="DSTS" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Digenta Smart Telecom Solution transforme vos espaces en environnements intelligents, sécurisés et économiques.
            </p>
            <div className="flex gap-4">
                <a
                href="https://www.facebook.com/share/17iYzJhg4J/"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Quest Foire N° 205, Dakar, Sénégal</span>
              </li>
              <li>
                <a
                  href="tel:+221781979191"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>+221 78 197 91 91</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@digentasmartsn.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>admin@digentasmartsn.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DSTS - Digenta Smart Telecom Solution. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-muted-foreground hover:text-primary transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
