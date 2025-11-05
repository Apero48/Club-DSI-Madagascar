// Navbar rendered globally in App.tsx
import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Ensemble pour un numérique souverain et performant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Un réseau d'experts au cœur de la transformation digitale malgache
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Devenir membre
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                Découvrir nos événements
              </Button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">À propos</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le Club des DSI de Madagascar est une association à but non lucratif qui réunit les dirigeants et responsables des systèmes d'information issus de l'administration publique, des entreprises privées et des établissements publics de Madagascar.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Il se positionne comme une plateforme nationale de concertation, de partage d'expériences et de collaboration dédiée à la promotion de la gouvernance et de l'innovation numérique.
            </p>
            <Link href="/apropos">
              <a className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </section>

        {/* Objectifs du Club */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Les objectifs du Club</h3>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Promouvoir la gouvernance numérique, la transformation digitale et l’excellence technologique au service du développement de Madagascar</li>
              <li>Renforcer la contribution des DSI dans l’élaboration des stratégies des entreprises</li>
              <li>Accompagner le développement continu des Systèmes d’Information à Madagascar</li>
              <li>Développer des partenariats stratégiques avec les acteurs de la sphère informatique</li>
              <li>Approfondir les échanges d’expériences entre les différents acteurs du domaine des TICs</li>
              <li>Œuvrer pour adapter la formation dans le domaine des TICs aux besoins du marché de l’emploi</li>
              <li>Contribuer aux travaux des commissions nationales chargées des programmes de mise à niveau du secteur</li>
              <li>Organiser des forums et des rencontres avec les professionnels du domaine des TIC</li>
            </ul>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Pourquoi adhérer ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-blue-700 mb-3">🤝 Réseau & Partage</h3>
                <p className="text-gray-700">Accédez à un réseau national de pairs et partagez vos expériences dans un cadre de confiance.</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-blue-700 mb-3">📚 Développement</h3>
                <p className="text-gray-700">Formations, webinaires et masterclass animés par des experts reconnus pour votre développement professionnel.</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-blue-700 mb-3">💡 Influence</h3>
                <p className="text-gray-700">Portez collectivement les enjeux de la communauté DSI auprès des institutions et régulateurs.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-blue-700">Actualités à la une</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                  <span className="text-lg font-semibold">Actualité {item}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Titre de l'actualité {item}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Découvrez les dernières actualités et événements du Club DSI Madagascar.
                  </p>
                  <p className="text-gray-500 text-xs">Publié récemment</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">Événements à venir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition">
                  <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                    <span className="text-lg font-semibold">Événement {item}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Événement {item}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Rejoignez-nous pour cet événement majeur du Club DSI Madagascar.
                    </p>
                    <Button variant="outline" className="w-full">S'inscrire</Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/evenements">
                <a className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">
                  Voir tous les événements <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre la communauté ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
              Devenez membre du Club DSI Madagascar et bénéficiez de nos formations, événements et réseautage exclusifs.
            </p>
            <Link href="/adhesion">
              <a className="inline-block">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Rejoindre le Club
                </Button>
              </a>
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Restez informé</h2>
            <p className="text-gray-600 mb-6">Recevez les actualités du Club DSI Madagascar directement dans votre boîte mail</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-600"
              />
              <Button className="bg-blue-700 hover:bg-blue-800">S'abonner</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={APP_LOGO} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
                <h3 className="font-bold text-lg">Club DSI</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plateforme nationale de concertation et de collaboration pour la promotion de la gouvernance et de l'innovation numérique à Madagascar.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-white transition">Accueil</a></li>
                <li><a href="/apropos" className="text-gray-400 hover:text-white transition">À propos</a></li>
                <li><a href="/membres" className="text-gray-400 hover:text-white transition">Membres</a></li>
                <li><a href="/evenements" className="text-gray-400 hover:text-white transition">Événements</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@club-dsi.mg" className="hover:text-white transition">contact@club-dsi.mg</a>
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
              <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2025 Club des DSI de Madagascar. Tous droits réservés.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
                <a href="#" className="hover:text-white transition">Conditions d'utilisation</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
