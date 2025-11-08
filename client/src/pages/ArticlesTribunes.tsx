import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "La souveraineté numérique en Afrique : enjeux et perspectives",
    author: "Dr. Jean Kévin Rakotoarivony",
    position: "DSI, Groupe Telma",
    excerpt: "Analyse des défis et opportunités de la souveraineté numérique pour les entreprises africaines à l'ère de la transformation digitale.",
    date: "18 octobre 2025",
    readTime: "8 min",
    category: "Transformation Digitale",
    image: "/images/article-souverainete-numerique.jpg"
  },
  {
    id: 2,
    title: "Vers une gouvernance data responsable en entreprise",
    author: "Sarah Andriamanjato",
    position: "Directrice des Systèmes d'Information, Bank of Africa",
    excerpt: "Comment mettre en place une gouvernance des données efficace tout en respectant les réglementations locales et internationales.",
    date: "12 octobre 2025",
    readTime: "6 min",
    category: "Gouvernance des Données",
    image: "/images/article-gouvernance-data.jpg"
  },
  {
    id: 3,
    title: "L'intelligence artificielle au service du développement durable",
    author: "Dr. Marc Ravalison",
    position: "Responsable Innovation, Orange Madagascar",
    excerpt: "Exploration des cas d'usage de l'IA pour répondre aux enjeux environnementaux et sociaux en Afrique.",
    date: "5 octobre 2025",
    readTime: "7 min",
    category: "IA & Innovation",
    image: "/images/article-ia-developpement-durable.jpg"
  },
  {
    id: 4,
    title: "Cybersécurité : comment protéger son entreprise en 2025",
    author: "Sophie Ranaivo",
    position: "Responsable Cybersécurité, Axian Group",
    excerpt: "Les bonnes pratiques et solutions pour sécuriser les systèmes d'information face aux nouvelles menaces cyber.",
    date: "28 septembre 2025",
    readTime: "9 min",
    category: "Cybersécurité",
    image: "/images/article-cybersecurite-2025.jpg"
  }
];

const categories = [
  { id: 'all', name: 'Tous les sujets' },
  { id: 'transformation', name: 'Transformation Digitale' },
  { id: 'governance', name: 'Gouvernance IT' },
  { id: 'security', name: 'Cybersécurité' },
  { id: 'ia', name: 'IA & Innovation' },
  { id: 'cloud', name: 'Cloud & Infrastructure' },
  { id: 'leadership', name: 'Leadership IT' }
];

export default function ArticlesTribunes() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles & Tribunes</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Points de vue et analyses des experts du Club DSI Madagascar
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* En-tête et filtres */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold text-[var(--header-footer)]">Dernières publications</h2>
                <p className="text-[var(--foreground)]">Découvrez les réflexions de nos membres experts</p>
              </div>
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <select 
                  className="w-full md:w-64 border border-[var(--border)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden border border-[var(--border)] hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5 h-48 md:h-auto">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <span className="inline-block bg-[var(--accent)] text-[var(--primary)] text-xs font-semibold px-2 py-1 rounded-full mb-2">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">{article.title}</h3>
                    <p className="text-sm text-[var(--foreground)] mb-4">{article.excerpt}</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                        <img 
                          src={`/images/avatar-${article.id}.jpg`} 
                          alt={article.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--header-footer)]">{article.author}</p>
                        <p className="text-xs text-gray-500">{article.position}</p>
                      </div>
                      <Button variant="link" className="ml-auto text-[var(--primary)] hover:underline">
                        Lire →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bouton Voir plus */}
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
              Charger plus d'articles
            </Button>
          </div>

          {/* CTA Écrire un article */}
          <div className="mt-20 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Vous souhaitez partager votre expertise ?</h3>
              <p className="mb-6 text-white/90">
                Rejoignez notre communauté d'experts et publiez vos articles sur notre plateforme
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Proposer un article
                </Button>
                <Button className="bg-white text-[var(--primary)] hover:bg-white/90">
                  Devenir membre
                </Button>
              </div>
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
