// Navbar is provided globally in App.tsx
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
      <main className="flex-1 pt-32">
        <div className="bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Formations & Ateliers</h1>
            <p className="text-lg mt-2 text-white/90">Catalogue de formations pour le développement professionnel des DSI</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation) => (
              <Card key={formation.id} className="overflow-hidden hover:shadow-lg transition flex flex-col border border-[var(--border)]">
                <div className="h-32 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white p-4">
                  <span className="text-center font-bold text-lg px-4">{formation.title}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[var(--foreground)] mb-4 flex-1">{formation.description}</p>
                  
                  <div className="space-y-2 mb-6 text-sm text-[var(--foreground)]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[var(--primary)]" />
                      <span>{formation.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[var(--primary)]" />
                      <span>Niveau: {formation.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[var(--primary)]" />
                      <span>{formation.participants} places disponibles</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 mt-auto">
                    S'inscrire
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[var(--header-footer)] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Club DSI Bénin. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

 
