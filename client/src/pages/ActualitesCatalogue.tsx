import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Download, Search, ArrowRight, Calendar, Clock, Users } from "lucide-react";

type Publication = {
  id: number;
  titre: string;
  type: 'Livre Blanc' | 'Rapport' | 'Guide' | 'Étude de cas';
  date: string;
  auteur: string;
  description: string;
  image: string;
  fichier: string;
  pages: number;
  categories: string[];
};

export default function ActualitesCatalogue() {
  // Données des publications
  const publications: Publication[] = [
    {
      id: 1,
      titre: "Guide de la Transformation Digitale 2025",
      type: "Guide",
      date: "15 Octobre 2025",
      auteur: "Équipe du Club DSI",
      description: "Un guide complet pour réussir votre transformation digitale avec des méthodologies éprouvées et des retours d'expérience.",
      image: "/images/publications/transformation-digitale.jpg",
      fichier: "/docs/guide-transformation-digitale-2025.pdf",
      pages: 87,
      categories: ["Transformation digitale", "Stratégie IT", "Innovation"]
    },
    {
      id: 2,
      titre: "Baromètre de la Cybersécurité 2025",
      type: "Rapport",
      date: "5 Novembre 2025",
      auteur: "Observatoire de la Sécurité",
      description: "Analyse complète des menaces actuelles et émergentes dans le domaine de la cybersécurité.",
      image: "/images/publications/cybersecurite-2025.jpg",
      fichier: "/docs/barometre-cybersecurite-2025.pdf",
      pages: 64,
      categories: ["Cybersécurité", "Risques", "Conformité"]
    },
    {
      id: 3,
      titre: "Livre Blanc sur l'IA Générative",
      type: "Livre Blanc",
      date: "20 Septembre 2025",
      auteur: "Pôle Innovation du Club DSI",
      description: "Exploration des opportunités et défis de l'IA générative en entreprise avec des cas d'usage concrets.",
      image: "/images/publications/ia-generative.jpg",
      fichier: "/docs/livre-blanc-ia-generative.pdf",
      pages: 112,
      categories: ["IA", "Innovation", "Technologies émergentes"]
    },
    {
      id: 4,
      titre: "Étude de cas : Transformation Cloud",
      type: "Étude de cas",
      date: "1er Novembre 2025",
      auteur: "Club DSI Cloud",
      description: "Retour d'expérience sur la migration vers le cloud d'une grande entreprise du CAC 40.",
      image: "/images/publications/transformation-cloud.jpg",
      fichier: "/docs/etude-cas-transformation-cloud.pdf",
      pages: 42,
      categories: ["Cloud", "Transformation", "Retour d'expérience"]
    }
  ];

  // Catégories uniques pour les filtres
  const allCategories = Array.from(
    new Set(publications.flatMap(pub => pub.categories))
  );

  // Types de documents
  const typesDocuments = ["Tous", "Livre Blanc", "Rapport", "Guide", "Étude de cas"];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catalogue des Publications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Accédez à l'ensemble de nos ressources documentaires et publications exclusives
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* Barre de recherche et filtres */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                placeholder="Rechercher une publication..."
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {typesDocuments.map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  className="flex items-center text-sm"
                >
                  {type === "Tous" ? "Tous les documents" : type}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {allCategories.map((categorie) => (
                <Button
                  key={categorie}
                  variant="ghost"
                  size="sm"
                  className="text-sm"
                >
                  {categorie}
                </Button>
              ))}
            </div>
          </div>

          {/* Liste des publications */}
          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub) => (
              <Card key={pub.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-48 h-48 bg-gray-200 relative">
                    <img 
                      className="w-full h-full object-cover" 
                      src={pub.image} 
                      alt={pub.titre} 
                    />
                    <div className="absolute top-2 right-2 bg-white/90 text-xs font-semibold px-2 py-1 rounded">
                      {pub.type}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" /> {pub.date}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" /> {pub.pages} pages
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">
                        {pub.titre}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {pub.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.categories.map((categorie) => (
                          <span 
                            key={categorie}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {categorie}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Par {pub.auteur}</span>
                        <Button variant="outline" size="sm" className="flex items-center">
                          <Download className="h-4 w-4 mr-2" /> Télécharger
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <span className="sr-only">Précédent</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button variant="outline">1</Button>
              <Button variant="ghost">2</Button>
              <Button variant="ghost">3</Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Suivant</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Button>
            </nav>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[var(--header-footer)]">Vous avez une expertise à partager ?</h2>
            <p className="text-lg mb-8 text-gray-600">
              Contribuez à notre catalogue en partageant vos connaissances et expériences avec la communauté des DSI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
                Proposer une publication <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-[var(--primary)] border-[var(--primary)]">
                Voir les directives de soumission
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}