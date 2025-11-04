import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Partenaires() {
  const partenaires = [
    {
      id: 1,
      name: "Tech Solutions Bénin",
      category: "Technologie",
      description: "Leader en solutions informatiques et services numériques."
    },
    {
      id: 2,
      name: "Digital Innovations",
      category: "Consulting",
      description: "Cabinet de conseil en transformation numérique."
    },
    {
      id: 3,
      name: "Cloud Services Africa",
      category: "Infrastructure Cloud",
      description: "Fournisseur de services cloud pour les entreprises africaines."
    },
    {
      id: 4,
      name: "Cybersecurity Pro",
      category: "Sécurité",
      description: "Experts en cybersécurité et protection des données."
    },
    {
      id: 5,
      name: "Data Analytics Hub",
      category: "Analytics",
      description: "Spécialistes en analyse de données et business intelligence."
    },
    {
      id: 6,
      name: "Enterprise Solutions",
      category: "ERP & CRM",
      description: "Implémentation de systèmes d'information d'entreprise."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Nos Partenaires</h1>
            <p className="text-lg mt-2">Découvrez les entreprises qui nous soutiennent</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partenaires.map((partenaire) => (
              <Card key={partenaire.id} className="overflow-hidden hover:shadow-lg transition">
                <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                  <span className="text-center font-bold text-lg px-4">{partenaire.name}</span>
                </div>
                <div className="p-6">
                  <p className="text-green-600 font-semibold text-sm mb-3">{partenaire.category}</p>
                  <p className="text-gray-700 mb-4">{partenaire.description}</p>
                  <Button variant="outline" className="w-full">
                    En savoir plus
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-green-50 p-8 rounded-lg border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Devenir partenaire</h3>
            <p className="text-gray-700 mb-6">
              Vous êtes une entreprise et vous souhaitez devenir partenaire du Club DSI ? Contactez-nous pour discuter des opportunités de collaboration.
            </p>
            <Button className="bg-green-700 hover:bg-green-800">
              Nous contacter
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Club DSI Bénin. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

 
