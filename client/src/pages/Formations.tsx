import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Award } from "lucide-react";

export default function Formations() {
  const formations = [
    {
      id: 1,
      title: "Gouvernance et Stratégie SI",
      duration: "3 jours",
      level: "Avancé",
      participants: 25,
      description: "Maîtrisez les principes de gouvernance IT et l'alignement stratégique."
    },
    {
      id: 2,
      title: "Cybersécurité et PSSI",
      duration: "4 jours",
      level: "Intermédiaire",
      participants: 20,
      description: "Politique de Sécurité des Systèmes d'Information et meilleures pratiques."
    },
    {
      id: 3,
      title: "Leadership Numérique",
      duration: "3 jours",
      level: "Avancé",
      participants: 30,
      description: "Développez votre leadership dans un contexte de transformation digitale."
    },
    {
      id: 4,
      title: "Data Management & Interopérabilité",
      duration: "5 jours",
      level: "Intermédiaire",
      participants: 15,
      description: "Gestion des données et interopérabilité des systèmes de l'État."
    },
    {
      id: 5,
      title: "Maîtrise d'Ouvrage et Conduite de Projet",
      duration: "4 jours",
      level: "Intermédiaire",
      participants: 35,
      description: "Méthodologies et outils pour la conduite de projets informatiques."
    },
    {
      id: 6,
      title: "Cloud Computing et Infrastructure",
      duration: "4 jours",
      level: "Intermédiaire",
      participants: 28,
      description: "Architecture cloud, migration et gestion de l'infrastructure IT."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Formations & Ateliers</h1>
            <p className="text-lg mt-2">Catalogue de formations pour le développement professionnel des DSI</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation) => (
              <Card key={formation.id} className="overflow-hidden hover:shadow-lg transition flex flex-col">
                <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                  <span className="text-center font-bold text-lg px-4">{formation.title}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-700 mb-4 flex-1">{formation.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span>{formation.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      <span>Niveau: {formation.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>{formation.participants} places disponibles</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">
                    S'inscrire
                  </Button>
                </div>
              </Card>
            ))}
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

 
