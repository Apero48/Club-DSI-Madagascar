// Navbar rendered globally in App.tsx
import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Clock, Users, Lightbulb, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1 pt-32">
        {/* Hero Banner */}
        <div className="w-full bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Ensemble pour un numérique souverain et performant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
              Un réseau d'experts au cœur de la transformation digitale malgache
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[var(--header-footer)] hover:bg-gray-100 hover:text-[var(--header-footer)]">
                Devenir membre
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Découvrir nos événements
              </Button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-[var(--accent)] rounded-lg p-8 border border-[var(--primary)] border-opacity-20">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">À propos</h2>
            <p className="text-[var(--foreground)] mb-4 leading-relaxed">
              Le Club des DSI de Madagascar est une association à but non lucratif qui réunit les dirigeants et responsables des systèmes d'information issus de l'administration publique, des entreprises privées et des établissements publics de Madagascar.
            </p>
            <p className="text-[var(--foreground)] mb-6 leading-relaxed">
              Il se positionne comme une plateforme nationale de concertation, de partage d'expériences et de collaboration dédiée à la promotion de la gouvernance et de l'innovation numérique.
            </p>
            <Link href="/apropos">
              <a className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </section>

        {/* Objectifs du Club */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-white rounded-lg p-6 border border-[var(--border)]">
            <h3 className="text-2xl font-bold text-[var(--header-footer)] mb-4">Les objectifs du Club</h3>
            <ul className="space-y-2 text-[var(--foreground)] list-disc pl-5">
              <li>Promouvoir la gouvernance numérique, la transformation digitale et l'excellence technologique au service du développement de Madagascar</li>
              <li>Renforcer la contribution des DSI dans l'élaboration des stratégies des entreprises</li>
              <li>Accompagner le développement continu des Systèmes d'Information à Madagascar</li>
              <li>Développer des partenariats stratégiques avec les acteurs de la sphère informatique</li>
              <li>Approfondir les échanges d'expériences entre les différents acteurs du domaine des TICs</li>
              <li>Œuvrer pour adapter la formation dans le domaine des TICs aux besoins du marché de l'emploi</li>
              <li>Contribuer aux travaux des commissions nationales chargées des programmes de mise à niveau du secteur</li>
              <li>Organiser des forums et des rencontres avec les professionnels du domaine des TIC</li>
            </ul>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="bg-gradient-to-b from-white to-[var(--accent)] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[var(--header-footer)] text-center">Pourquoi adhérer ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-md transition-shadow bg-white">
                <div className="bg-[var(--secondary)] bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-[var(--primary)] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--header-footer)]">Réseautage</h3>
                <p className="text-[var(--foreground)]">Rejoignez un réseau d'experts et de décideurs du numérique à Madagascar.</p>
              </Card>
              <Card className="p-6 hover:shadow-md transition-shadow bg-white">
                <div className="bg-[var(--secondary)] bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="text-[var(--primary)] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--header-footer)]">Partage d'expérience</h3>
                <p className="text-[var(--foreground)]">Bénéficiez des retours d'expérience et des bonnes pratiques des autres membres.</p>
              </Card>
              <Card className="p-6 hover:shadow-md transition-shadow bg-white">
                <div className="bg-[var(--secondary)] bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="text-[var(--primary)] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--header-footer)]">Formation continue</h3>
                <p className="text-[var(--foreground)]">Accédez à des formations et ateliers sur les dernières tendances technologiques.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-[var(--header-footer)]">Actualités à la une</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="h-48 bg-[var(--muted)]"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[var(--primary)] font-medium">15 mars 2025</span>
                    <span className="text-sm bg-[var(--accent)] text-[var(--primary)] px-2 py-1 rounded">Événement</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--header-footer)]">Titre de l'actualité {item}</h3>
                  <p className="text-[var(--foreground)] mb-4">
                    Brève description de l'actualité avec quelques détails pour donner envie d'en savoir plus...
                  </p>
                  <a href="#" className="text-[var(--primary)] font-medium hover:underline inline-flex items-center">
                    Lire la suite <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
              Voir toutes les actualités
            </Button>
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-[var(--accent)] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[var(--header-footer)]">Événements à venir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition bg-white">
                  <div className="h-32 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white">
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold">2{item}</div>
                      <div className="text-sm uppercase tracking-wider">MARS</div>
                      <div className="text-sm">2025</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--header-footer)]">Titre de l'événement {item}</h3>
                    <div className="flex items-center text-[var(--foreground)] mb-3">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>14h00 - 17h00</span>
                    </div>
                    <div className="flex items-center text-[var(--foreground)] mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Lieu de l'événement, Ville</span>
                    </div>
                    <p className="text-[var(--foreground)] mb-4">
                      Brève description de l'événement avec les principaux points qui seront abordés...
                    </p>
                    <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white">
                      S'inscrire à l'événement
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
                Voir tous les événements
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--primary)] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre la communauté ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
              Devenez membre du Club DSI Madagascar et bénéficiez de nos formations, événements et réseautage exclusifs.
            </p>
            <Link href="/adhesion">
              <a className="inline-block">
                <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-gray-100">
                  Rejoindre le Club
                </Button>
              </a>
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[var(--accent)] py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[var(--header-footer)] mb-2">Restez informé</h2>
            <p className="text-[var(--header-footer)] text-opacity-80 mb-6">Recevez les actualités du Club DSI Madagascar directement dans votre boîte mail</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
              <Button className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white">S'abonner</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
 
