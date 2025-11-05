// Navbar is rendered globally in App.tsx
import { Card } from "@/components/ui/card";

export default function ArticlesTribunes() {
  const posts = [
    { title: "La souveraineté numérique", author: "Membre A" },
    { title: "Vers une gouvernance data", author: "Membre B" },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Articles & tribunes</h1>
            <p className="text-lg mt-2">Analyses et points de vue des membres</p>
          </div>
        </div>
        <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
          {posts.map((p,i)=> (
            <Card key={i} className="p-6 hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">Par {p.author}</p>
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
