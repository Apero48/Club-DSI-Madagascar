// Navbar rendered globally in App.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, MapPin, Users } from "lucide-react";

export default function Evenements() {
  const evenements = [
    {
      id: 1,
      title: "Conférence: Transformation Numérique",
      date: "15 Novembre 2024",
      location: "Cotonou, Bénin",
      attendees: 150,
      description: "Une conférence sur les enjeux de la transformation numérique en Afrique de l'Ouest."
    },
    {
      id: 2,
      title: "Atelier: Cybersécurité et Protection des données",
      date: "22 Novembre 2024",
      location: "Cotonou, Bénin",
      attendees: 80,
      description: "Apprenez les meilleures pratiques en matière de cybersécurité et protection des données."
    },
    {
      id: 3,
      title: "Networking: Afterwork DSI",
      date: "29 Novembre 2024",
      location: "Cotonou, Bénin",
      attendees: 200,
      description: "Un moment de détente et de networking entre les membres du club."
    },
    {
      id: 4,
      title: "Séminaire: Cloud Computing et Infrastructure",
      date: "6 Décembre 2024",
      location: "Cotonou, Bénin",
      attendees: 120,
      description: "Explorez les dernières tendances du cloud computing et de l'infrastructure IT."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Agenda des Événements</h1>
            <p className="text-lg mt-2">Calendrier dynamique des événements du Club DSI Madagascar</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="space-y-6">
            {evenements.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                  <div className="md:col-span-2">
                    <h3 className="font-bold text-xl mb-3 text-blue-700">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>{event.attendees} participants attendus</span>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-blue-700 hover:bg-blue-800">
                      S'inscrire
                    </Button>
                  </div>
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

 
