import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Apropos() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">À propos du Club</h1>
            <p className="text-lg mt-2">Découvrez notre histoire, notre mission et nos valeurs</p>
          </div>
        </div>

        {/* Historique */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Historique & Contexte</h2>
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Créé en 2025, le Club des DSI de Madagascar est né de la volonté des responsables informatiques de promouvoir une culture de gouvernance SI adaptée aux enjeux économiques, technologiques et institutionnels du pays.
            </p>
            <p className="text-gray-700 leading-relaxed">
              L'association regroupe des DSI issus des ministères, des grandes entreprises publiques, des banques, assurances, télécoms, et du secteur privé. Elle se positionne comme une plateforme nationale de concertation, de partage d'expériences et de collaboration dédiée à la promotion de la gouvernance et de l'innovation numérique.
            </p>
          </div>
        </section>

        {/* Vision, Mission, Valeurs */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Vision, Mission & Valeurs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  Faire du DSI un acteur central du développement économique et de la transformation numérique de Madagascar.
                </p>
              </Card>

              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Mission</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Fédérer les DSI autour d'une communauté d'expertise et de partage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Promouvoir les meilleures pratiques de gestion et de sécurité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Favoriser les échanges public-privé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Contribuer aux politiques numériques nationales</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Valeurs</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 font-semibold">Collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 font-semibold">Innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 font-semibold">Intégrité</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 font-semibold">Excellence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 font-semibold">Engagement</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Gouvernance */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Gouvernance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Bureau Exécutif</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Président(e)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Vice-président(e)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Secrétaire général(e)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Trésorier(ère)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Comité Scientifique & Technique</h3>
              <p className="text-gray-700 mb-4">
                Experts en :
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">Cybersécurité</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">Gouvernance SI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">Data & Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">Cloud & Infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">Intelligence Artificielle</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Objectifs */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Nos Objectifs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Promouvoir la gouvernance numérique et la transformation digitale",
                "Renforcer la contribution des DSI dans l'élaboration des stratégies",
                "Accompagner le développement continu des Systèmes d'Information",
                "Développer des partenariats stratégiques avec les acteurs IT",
                "Approfondir les échanges d'expériences entre acteurs des TICs",
                "Adapter la formation aux besoins du marché de l'emploi"
              ].map((objectif, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{objectif}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partenaires */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Nos Partenaires Institutionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Ministère du Développement Numérique",
              "GIZ (Coopération Allemande)",
              "AFD (Agence Française de Développement)",
              "Banque Mondiale",
              "Expertise France",
              "Universités et écoles d'ingénieurs"
            ].map((partenaire, index) => (
              <Card key={index} className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                <p className="text-gray-700 font-semibold">{partenaire}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Documents Officiels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg text-blue-700 mb-3">📄 Statuts de l'Association</h3>
                <p className="text-gray-600 mb-4">Consultez les statuts officiels du Club des DSI de Madagascar.</p>
                <Button variant="outline" className="w-full">Télécharger (PDF)</Button>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg text-blue-700 mb-3">📋 Charte du Membre</h3>
                <p className="text-gray-600 mb-4">Engagement moral et responsabilités des membres du Club.</p>
                <Button variant="outline" className="w-full">Télécharger (PDF)</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2025 Club des DSI de Madagascar. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <a className="px-3 py-2 rounded hover:bg-blue-600 transition whitespace-nowrap text-sm">
        {label}
      </a>
    </Link>
  );
}
