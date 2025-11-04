import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

export default function ActualitesClub() {
  const news = [
    { title: "Nouveau partenariat stratégique", date: "10/10/2025" },
    { title: "Nomination au sein du bureau", date: "05/10/2025" },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Actualités du Club</h1>
            <p className="text-lg mt-2">Communiqués officiels et annonces</p>
          </div>
        </div>
        <section className="max-w-7xl mx-auto px-4 py-12 grid gap-4">
          {news.map((n, i)=> (
            <Card key={i} className="p-6 hover:shadow-md transition">
              <h3 className="font-bold text-lg">{n.title}</h3>
              <p className="text-gray-600 text-sm">{n.date}</p>
            </Card>
          ))}
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
