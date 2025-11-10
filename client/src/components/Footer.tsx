import { APP_LOGO } from "@/const";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[var(--header-footer)] text-[var(--header-footer-foreground)] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={APP_LOGO} alt="Logo" className="h-14 w-auto rounded-full object-cover border-2 border-white" />
              <h3 className="font-bold text-lg text-white">Club DSI Madagascar</h3>
            </div>
            <p className="text-[var(--header-footer-foreground)] text-opacity-80 text-sm leading-relaxed">
              Plateforme nationale de concertation et de collaboration pour la promotion de la gouvernance et de l'innovation numérique à Madagascar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-[var(--header-footer-foreground)] text-opacity-80 hover:text-opacity-100 hover:text-[var(--primary)] transition">Accueil</Link></li>
              <li><Link href="/apropos" className="text-[var(--header-footer-foreground)] text-opacity-80 hover:text-opacity-100 hover:text-[var(--primary)] transition">À propos</Link></li>
              <li><Link href="/membres" className="text-[var(--header-footer-foreground)] text-opacity-80 hover:text-opacity-100 hover:text-[var(--primary)] transition">Membres</Link></li>
              <li><Link href="/evenements" className="text-[var(--header-footer-foreground)] text-opacity-80 hover:text-opacity-100 hover:text-[var(--primary)] transition">Événements</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-[var(--header-footer-foreground)] text-opacity-80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@club-dsi.mg" className="hover:text-[var(--primary)] hover:text-opacity-100 transition">contact@club-dsi.mg</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+261 (0)32 00 000 00</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Antananarivo, Madagascar</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 hover:text-[var(--primary)] transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 hover:text-[var(--primary)] transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 hover:text-[var(--primary)] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--header-footer-foreground)] border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--header-footer-foreground)] text-opacity-80">
            <p className="text-white text-opacity-80">&copy; 2025 Club des DSI de Madagascar. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[var(--primary)] hover:text-opacity-100 transition">Politique de confidentialité</a>
              <a href="#" className="hover:text-[var(--primary)] hover:text-opacity-100 transition">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
