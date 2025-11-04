import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

export default function PublicationsBenchmarks() {
  const rapports = [
    { title: "État des lieux des SI à Madagascar" },
    { title: "Indice de maturité numérique des institutions" },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Publications & Benchmarks</h1>
            <p className="text-lg mt-2">Rapports et études du Club</p>
          </div>
        </div>
        <section className="max-w-7xl mx-auto px-4 py-12 grid gap-4">
          {rapports.map((r,i)=> (
            <Card key={i} className="p-6 hover:shadow-md transition">
              <h3 className="font-bold text-lg">{r.title}</h3>
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
