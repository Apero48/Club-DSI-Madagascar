// Navbar rendered globally in App.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Partenariats() {
  const offres = [
    {
      nom: "Partenaire Argent",
      couleur: "from-gray-400 to-gray-600",
      prix: "À définir",
      avantages: [
        "Logo sur la page partenaires du site",
        "Citation et logo dans 2 newsletters annuelles",
        "Visibilité sur les supports d'un événement",
        "Intervention de 10 minutes lors d'un webinaire",
        "2 invitations pour un événement majeur"
      ]
    },
    {
      nom: "Partenaire Or",
      couleur: "from-yellow-400 to-yellow-600",
      prix: "À définir",
      avantages: [
        "Logo mis en avant sur le site et l'espace membre",
        "Logo sur la bannière de tous les événements",
        "Citation et logo dans 4 newsletters annuelles",
        "Post dédié sur les réseaux sociaux",
        "Article ou interview publié(e) sur le site",
        "Intervention de 20-30 minutes lors d'un atelier",
        "Animation d'un atelier collaboratif",
        "Accès à l'annuaire des membres",
        "4 invitations pour les événements majeurs",
        "Espace privilégié au Forum Annuel"
      ],
      recommande: true
    },
    {
      nom: "Partenaire Platine",
      couleur: "from-purple-400 to-purple-600",
      prix: "À définir",
      avantages: [
        "Logo en tête d'affiche sur tous les supports",
        "Remerciements et logo en évidence dans les communiqués",
        "Campagne dédiée sur les réseaux sociaux",
        "Publication conjointe d'un livre blanc ou étude",
        "Keynote ou conférence plénière au Forum Annuel",
        "Droit de labeliser un événement",
        "Participation prioritaire au comité de programme",
        "Participation à un groupe de travail thématique",
        "Rencontres bilatérales organisées",
        "Stand privilégié et package d'invitations au Forum",
        "Exclusivité sectorielle possible"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Partenariats & Écosystème</h1>
            <p className="text-lg mt-2">Devenez partenaire du Club DSI et rejoignez notre écosystème</p>
          </div>
        </div>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 mb-12">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Conditions de Partenariat</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le Club des DSI de Madagascar offre un cadre privilégié pour rencontrer l'écosystème décisionnel IT du pays. En devenant partenaire, vous bénéficiez d'une visibilité ciblée auprès des Directeurs des Systèmes d'Information et responsables IT les plus influents.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nos offres de partenariat sont conçues pour s'adapter à vos objectifs stratégiques. Ensemble, forgeons l'avenir numérique de Madagascar.
            </p>
          </div>

          {/* Offres */}
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Nos Offres de Partenariat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offres.map((offre, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-lg transition ${offre.recommande ? 'ring-2 ring-yellow-400' : ''}`}>
                <div className={`bg-gradient-to-r ${offre.couleur} text-white p-6`}>
                  <h3 className="text-2xl font-bold">{offre.nom}</h3>
                  {offre.recommande && (
                    <div className="mt-2 inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Recommandé
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm">Tarif</p>
                    <p className="text-2xl font-bold text-blue-700">{offre.prix}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-gray-800">Contreparties :</h4>
                    {offre.avantages.map((avantage, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-700">{avantage}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-700 hover:bg-blue-800">
                    Nous contacter
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Engagement */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Engagement et Procédure</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Durée des Partenariats</h3>
                <p className="text-gray-700">Les engagements sont annuels et renouvelables selon les modalités définies dans la convention.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Processus de Validation</h3>
                <p className="text-gray-700">Toute prise de parole et contenu promotionnel sont soumis à la validation du Bureau du Club pour garantir la neutralité et la qualité.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Exclusivité Sectorielle</h3>
                <p className="text-gray-700">L'offre Platine peut inclure une exclusivité par secteur d'activité, sous réserve de disponibilité.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Convention</h3>
                <p className="text-gray-700">Une convention détaillant les engagements réciproques est établie pour chaque partenariat.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-blue-700 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Pour Devenir Partenaire</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
              Nous sommes convaincus que des partenariats forts sont la clé pour faire avancer l'écosystème numérique malgache.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-sm text-blue-200 mb-2">Email</p>
                <a href="mailto:partenariats@club-dsi.mg" className="text-white font-semibold hover:text-blue-100">
                  partenariats@club-dsi.mg
                </a>
              </div>
              <div>
                <p className="text-sm text-blue-200 mb-2">Téléphone</p>
                <p className="text-white font-semibold">+261 32 34 845 86</p>
              </div>
              <div>
                <p className="text-sm text-blue-200 mb-2">Documentation</p>
                <Button className="bg-white text-blue-700 hover:bg-gray-100">
                  📥 Télécharger Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partenaires actuels */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Nos Partenaires Actuels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Ministère du Développement Numérique",
                "GIZ (Coopération Allemande)",
                "AFD (Agence Française de Développement)",
                "Banque Mondiale",
                "Expertise France",
                "Universités et Écoles d'Ingénieurs"
              ].map((partenaire, index) => (
                <Card key={index} className="p-6 bg-white border-2 border-gray-200">
                  <p className="text-gray-700 font-semibold text-center">{partenaire}</p>
                </Card>
              ))}
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

 
