// Navbar rendered globally in App.tsx
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Membres() {
  const membres = [
    { id: 1, name: "Directeur 1", role: "Président", company: "Ministère du Numérique" },
    { id: 2, name: "Directeur 2", role: "Vice-Président", company: "Grande Entreprise" },
    { id: 3, name: "Directrice 3", role: "Secrétaire Générale", company: "Banque Malgache" },
    { id: 4, name: "Directeur 4", role: "Trésorier", company: "Entreprise Telecom" },
    { id: 5, name: "Directrice 5", role: "Membre", company: "Assurance Madagascar" },
    { id: 6, name: "Directeur 6", role: "Membre", company: "Secteur Privé" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Annuaire des Membres</h1>
            <p className="text-lg mt-2">Directeurs et responsables IT du Club DSI Madagascar</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membres.map((membre) => (
              <Card key={membre.id} className="overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                  <span className="text-center">
                    <div className="text-4xl font-bold">{membre.name.charAt(0)}</div>
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{membre.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{membre.role}</p>
                  <p className="text-gray-600 text-sm">{membre.company}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-200 text-center">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Vous aussi, rejoignez-nous !</h3>
            <p className="text-gray-700 mb-6">
              Devenez membre du Club DSI et intégrez notre réseau d'experts.
            </p>
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

 
