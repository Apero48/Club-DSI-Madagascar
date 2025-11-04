import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

export default function EvenementsGalerie() {
  const items = Array.from({ length: 9 }).map((_, i) => i + 1);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Galerie photos & vidéos</h1>
            <p className="text-lg mt-2">Revivez les moments forts des événements</p>
          </div>
        </div>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((n) => (
              <Card key={n} className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
                Album {n}
              </Card>
            ))}
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
