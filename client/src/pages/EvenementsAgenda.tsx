import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  { type: "Conférence", color: "bg-blue-600", title: "Transformation Numérique", date: "15/11/2025", lieu: "Antananarivo", link: "#" },
  { type: "Atelier", color: "bg-green-600", title: "Cybersécurité & PSSI", date: "22/11/2025", lieu: "Antananarivo", link: "#" },
  { type: "Webinaire", color: "bg-purple-600", title: "Data Management", date: "29/11/2025", lieu: "En ligne", link: "#" }
];

export default function EvenementsAgenda() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Agenda des événements</h1>
            <p className="text-lg mt-2">Calendrier dynamique des événements à venir</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <Card key={i} className="p-6 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-2 h-2 rounded-full ${e.color}`} />
                  <Badge className={`${e.color} text-white`}>{e.type}</Badge>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{e.title}</h3>
                <p className="text-gray-600 text-sm mb-1">Date: {e.date}</p>
                <p className="text-gray-600 text-sm mb-4">Lieu: {e.lieu}</p>
                <a href={e.link} className="text-blue-700 font-semibold hover:underline">S'inscrire / En savoir plus</a>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-600 inline-block" /> Conférences</span>
              <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-600 inline-block" /> Ateliers</span>
              <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-600 inline-block" /> Webinaires</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Club des DSI de Madagascar. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
