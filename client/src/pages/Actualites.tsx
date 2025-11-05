// Navbar rendered globally in App.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Actualites() {
  const actualites = [
    { titre: "Lancement du Forum Annuel 2025", date: "Décembre 2024", categorie: "Événement" },
    { titre: "Nouveau partenariat avec la Banque Mondiale", date: "Novembre 2024", categorie: "Partenariat" },
    { titre: "Publication : État des lieux des SI à Madagascar", date: "Octobre 2024", categorie: "Étude" }
  ];

  const veille = [
    { titre: "IA et Cybersécurité : les nouveaux défis", date: "Cette semaine" },
    { titre: "Cloud souverain : enjeux pour l'Afrique", date: "Semaine dernière" },
    { titre: "Blockchain et transformation digitale", date: "Il y a 2 semaines" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Actualités & Publications</h1>
            <p className="text-lg mt-2">Restez informé des dernières nouvelles du Club</p>
          </div>
        </div>

        {/* Actualités */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Actualités du Club</h2>
          <div className="space-y-6">
            {actualites.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-blue-700">{item.titre}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-4">
                    {item.categorie}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.date}</p>
                <p className="text-gray-700 mb-4">
                  Découvrez les dernières actualités et événements du Club DSI Madagascar.
                </p>
                <Button variant="outline">Lire la suite</Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Articles & Tribunes */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Articles & Tribunes</h2>
            <p className="text-gray-700 mb-6">
              Espace ouvert aux membres pour publier des articles, retours d'expérience ou points de vue sur les enjeux du numérique à Madagascar.
            </p>
            <Button className="bg-blue-700 hover:bg-blue-800">
              Publier un article
            </Button>
          </div>
        </section>

        {/* Veille Technologique */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Veille Technologique</h2>
          <p className="text-gray-700 mb-6">
            Courts brefs hebdomadaires sur : IA, cybersécurité, cloud, data, blockchain, et nouveaux outils ou réglementations numériques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {veille.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-lg text-blue-700 mb-2">{item.titre}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.date}</p>
                <Button variant="outline" size="sm">Lire</Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Revue de Presse */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Revue de Presse Numérique</h2>
            <p className="text-gray-700 mb-6">
              Sélection mensuelle d'articles parus dans les médias nationaux et internationaux sur la transformation digitale.
            </p>
            <Button className="bg-blue-700 hover:bg-blue-800">
              Consulter la revue
            </Button>
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

 
