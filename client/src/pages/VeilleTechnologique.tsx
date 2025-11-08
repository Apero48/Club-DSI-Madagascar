import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "L'IA générative et la sécurité : défis et opportunités",
    excerpt: "Analyse des impacts de l'IA générative sur la cybersécurité et les bonnes pratiques à adopter.",
    tag: "IA & Sécurité",
    date: "15 octobre 2025",
    readTime: "5 min",
    image: "/images/veille-ia-securite.jpg"
  },
  {
    id: 2,
    title: "Le cloud souverain en Afrique : état des lieux et perspectives",
    excerpt: "Panorama des solutions de cloud souverain en Afrique et analyse des enjeux de souveraineté numérique.",
    tag: "Cloud",
    date: "8 octobre 2025",
    readTime: "4 min",
    image: "/images/veille-cloud-afrique.jpg"
  },
  {
    id: 3,
    title: "Les métavers d'entreprise : révolution ou effet de mode ?",
    excerpt: "Étude des cas d'usage concrets du métavers dans les entreprises et analyse de sa pérennité.",
    tag: "Métavers",
    date: "1er octobre 2025",
    readTime: "6 min",
    image: "/images/veille-metavers.jpg"
  },
  {
    id: 4,
    title: "Cybersécurité : les nouvelles menaces en 2025",
    excerpt: "Panorama des cybermenaces émergentes et des stratégies de protection pour les entreprises.",
    tag: "Cybersécurité",
    date: "24 septembre 2025",
    readTime: "7 min",
    image: "/images/veille-cybersecurite.jpg"
  },
  {
    id: 5,
    title: "La 5G en Afrique : état des lieux et opportunités",
    excerpt: "Analyse du déploiement de la 5G sur le continent africain et ses implications économiques.",
    tag: "5G",
    date: "17 septembre 2025",
    readTime: "5 min",
    image: "/images/veille-5g-afrique.jpg"
  },
  {
    id: 6,
    title: "L'impact du quantum computing sur la cryptographie",
    excerpt: "Comment l'informatique quantique va révolutionner la cryptographie et quelles solutions post-quantiques envisager.",
    tag: "Quantique",
    date: "10 septembre 2025",
    readTime: "8 min",
    image: "/images/veille-quantum.jpg"
  }
];

const categories = [
  { id: 'all', name: 'Toutes les catégories' },
  { id: 'ia', name: 'IA & Machine Learning' },
  { id: 'cloud', name: 'Cloud Computing' },
  { id: 'security', name: 'Cybersécurité' },
  { id: 'iot', name: 'IoT & 5G' },
  { id: 'quantum', name: 'Informatique Quantique' },
  { id: 'metaverse', name: 'Métavers & Web3' }
];

export default function VeilleTechnologique() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Veille Technologique</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Restez informé des dernières tendances technologiques et innovations
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* Filtres */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold text-[var(--header-footer)]">Dernières publications</h2>
                <p className="text-[var(--foreground)]">Découvrez nos analyses sur les technologies émergentes</p>
              </div>
              <div className="w-full md:w-auto">
                <select 
                  className="w-full md:w-64 border border-[var(--border)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="rounded-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
                Tous
              </Button>
              {categories.slice(1).map((category) => (
                <Button 
                  key={category.id}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Grille d'articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden border border-[var(--border)] hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-[var(--primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-3">{article.title}</h3>
                  <p className="text-[var(--foreground)] mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-[var(--primary)] hover:underline">
                    Lire l'article complet →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" className="border-gray-300">
                Précédent
              </Button>
              <Button className="bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]">
                1
              </Button>
              <Button variant="outline" className="border-gray-300">
                2
              </Button>
              <Button variant="outline" className="border-gray-300">
                3
              </Button>
              <span className="px-4">...</span>
              <Button variant="outline" className="border-gray-300">
                10
              </Button>
              <Button variant="outline" className="border-gray-300">
                Suivant
              </Button>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ne manquez aucune actualité</h3>
              <p className="mb-6 text-white/90">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités technologiques directement dans votre boîte mail
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <Button className="bg-white text-[var(--primary)] hover:bg-white/90 whitespace-nowrap">
                  S'abonner
                </Button>
              </div>
              <p className="text-xs text-white/70 mt-3">
                En vous abonnant, vous acceptez notre politique de confidentialité
              </p>
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
