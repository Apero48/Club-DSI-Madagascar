import { Card } from "@/components/ui/card";

export default function RevuePresse() {
  const items = [
    { source: "Presse Nationale", title: "Transformation digitale: enjeux 2025" },
    { source: "International", title: "Maturité numérique: benchmarks" },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Revue de presse numérique</h1>
            <p className="text-lg mt-2">Sélection mensuelle d'articles pertinents</p>
          </div>
        </div>
        <section className="max-w-7xl mx-auto px-4 py-12 grid gap-4">
          {items.map((it, i)=> (
            <Card key={i} className="p-6 hover:shadow-md transition">
              <div className="text-xs text-gray-500 mb-2">{it.source}</div>
              <h3 className="font-bold text-lg">{it.title}</h3>
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
