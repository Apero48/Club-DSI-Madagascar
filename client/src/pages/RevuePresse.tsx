import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const articles = [
  {
    id: 1,
    title: "La transformation digitale en 2025 : les tendances à suivre",
    source: "Le Monde Informatique",
    date: "12 octobre 2025",
    category: "Transformation Digitale",
    excerpt: "Analyse des tendances technologiques émergentes qui façonneront le paysage numérique en 2025.",
    image: "/images/presse-transformation-digitale.jpg",
    url: "#"
  },
  {
    id: 2,
    title: "L'IA générative révolutionne les entreprises africaines",
    source: "Jeune Afrique",
    date: "5 octobre 2025",
    category: "Intelligence Artificielle",
    excerpt: "Comment les entreprises africaines s'approprient l'IA générative pour innover et se démarquer.",
    image: "/images/presse-ia-afrique.jpg",
    url: "#"
  },
  {
    id: 3,
    title: "Cybersécurité : les défis des DSI en 2025",
    source: "L'Usine Digitale",
    date: "28 septembre 2025",
    category: "Cybersécurité",
    excerpt: "Les DSI face à la recrudescence des cyberattaques et aux nouvelles réglementations.",
    image: "/images/presse-cybersecurite.jpg",
    url: "#"
  },
  {
    id: 4,
    title: "Le cloud souverain africain prend son envol",
    source: "La Tribune Afrique",
    date: "20 septembre 2025",
    category: "Cloud Computing",
    excerpt: "Développement des infrastructures cloud en Afrique et enjeux de souveraineté numérique.",
    image: "/images/presse-cloud-afrique.jpg",
    url: "#"
  },
  {
    id: 5,
    title: "Les métiers du numérique en pleine mutation",
    source: "Les Échos",
    date: "15 septembre 2025",
    category: "Emploi",
    excerpt: "Comment les compétences numériques évoluent face aux nouvelles technologies émergentes.",
    image: "/images/presse-metiers-numerique.jpg",
    url: "#"
  },
  {
    id: 6,
    title: "L'éthique au cœur de l'intelligence artificielle",
    source: "Le Monde",
    date: "8 septembre 2025",
    category: "Éthique & Technologie",
    excerpt: "Les enjeux éthiques de l'IA et les initiatives pour une intelligence artificielle responsable.",
    image: "/images/presse-ethique-ia.jpg",
    url: "#"
  }
];

const categories = [
  { id: 'all', name: 'Toutes les catégories' },
  { id: 'ai', name: 'Intelligence Artificielle' },
  { id: 'cloud', name: 'Cloud Computing' },
  { id: 'security', name: 'Cybersécurité' },
  { id: 'transformation', name: 'Transformation Digitale' },
  { id: 'ethics', name: 'Éthique & Technologie' },
  { id: 'jobs', name: 'Emploi & Compétences' }
];

export default function RevuePresse() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Revue de Presse Numérique</h1>
          <p className="text-xl max-w-3xl mx-auto">
            L'actualité du numérique décryptée par nos soins
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* Barre de recherche et filtres */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Rechercher un article..." 
                    className="w-full pl-10 pr-4 py-3 border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)]"
                  />
                  <svg 
                    className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <select 
                className="border border-[var(--border)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <Button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] whitespace-nowrap">
                Filtrer
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="rounded-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
                Tous
              </Button>
              {categories.slice(1, 6).map((category) => (
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

          {/* Liste des articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden border border-[var(--border)] hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-4 left-4 bg-[var(--primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{article.source}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
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
              <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
              <p className="mb-6 text-white/90">
                Recevez notre sélection d'articles directement dans votre boîte mail chaque mois
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-1 border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-[var(--primary)] hover:bg-white/90">
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
