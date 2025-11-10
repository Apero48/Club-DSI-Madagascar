import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";

export default function Apropos() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--chart-5)] text-white py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">À propos du Club</h1>
              <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
                Découvrez notre histoire, notre mission et nos valeurs
              </p>
            </div>
          </div>
        </div>

        {/* Historique */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">Historique & Contexte</h2>
              <div className="w-20 h-1 bg-[var(--primary)] mx-auto mt-3"></div>
            </div>
            <div className="bg-[var(--accent)] p-6 sm:p-8 rounded-lg border border-[var(--border)] shadow-sm">
              <p className="text-[var(--foreground)] mb-4 leading-relaxed text-sm sm:text-base">
                Créé en 2025, le Club des DSI de Madagascar est né de la volonté des responsables informatiques de promouvoir une culture de gouvernance SI adaptée aux enjeux économiques, technologiques et institutionnels du pays.
              </p>
              <p className="text-[var(--foreground)] leading-relaxed text-sm sm:text-base">
                L'association regroupe des DSI issus des ministères, des grandes entreprises publiques, des banques, assurances, télécoms, et du secteur privé. Elle se positionne comme une plateforme nationale de concertation, de partage d'expériences et de collaboration dédiée à la promotion de la gouvernance et de l'innovation numérique.
              </p>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Valeurs */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">Vision, Mission & Valeurs</h2>
              <div className="w-20 h-1 bg-[var(--primary)] mx-auto mt-3"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-6 bg-[var(--card)]">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Vision</h3>
                <p className="text-gray-700">
                  Devenir la référence en matière de gouvernance et d'innovation numérique à Madagascar.
                </p>
              </Card>
              
              <Card className="p-6 bg-[var(--card)]">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Mission</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-1">•</span>
                    <span className="text-gray-700">Rassembler les professionnels du numérique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-1">•</span>
                    <span className="text-gray-700">Partager les meilleures pratiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-1">•</span>
                    <span className="text-gray-700">Promouvoir l'innovation</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-[var(--card)]">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Valeurs</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
                    <span className="text-gray-700">Collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
                    <span className="text-gray-700">Intégrité</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
                    <span className="text-gray-700">Innovation</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Objectifs */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">Nos Objectifs</h2>
              <div className="w-20 h-1 bg-[var(--primary)] mx-auto mt-3"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Promouvoir les bonnes pratiques en gouvernance SI",
                "Favoriser le partage d'expériences entre DSI",
                "Développer les compétences des professionnels du numérique",
                "Contribuer à la transformation numérique de Madagascar",
                "Représenter les intérêts des DSI auprès des institutions",
                "Encourager l'innovation technologique"
              ].map((objective, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent)] text-[var(--primary)] rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[var(--foreground)]">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--primary)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Prêt à nous rejoindre ?</h2>
            <p className="text-[var(--foreground)] mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté de professionnels du numérique et participez à notre mission de transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/adhesion">
                <Button className="bg-white text-[var(--primary)] hover:bg-white/90 px-6 py-3 font-medium">
                  Devenir Membre
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="text-white border-white hover:bg-white/10 px-6 py-3">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}