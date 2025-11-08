import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight, Search, Filter, Bookmark, Share2 } from "lucide-react";

type Actualite = {
  id: number;
  titre: string;
  date: string;
  auteur: string;
  resume: string;
  contenu: string;
  image: string;
  categories: string[];
  dureeLecture: number;
  vues: number;
};

export default function ActualitesClub() {
  // Données des actualités
  const actualites: Actualite[] = [
    {
      id: 1,
      titre: "Nouveau partenariat stratégique avec TechMad Solutions",
      date: "10 Novembre 2025",
      auteur: "Équipe du Club DSI",
      resume: "Le Club DSI Madagascar est fier d'annoncer un nouveau partenariat stratégique avec TechMad Solutions pour promouvoir l'innovation technologique à Madagascar.",
      contenu: "Contenu détaillé de l'actualité...",
      image: "/images/actualites/partenariat-techmad.jpg",
      categories: ["Partenariats", "Innovation"],
      dureeLecture: 4,
      vues: 124
    },
    {
      id: 2,
      titre: "Nomination de Sarah Rakoto au poste de Vice-Présidente",
      date: "5 Novembre 2025",
      auteur: "Bureau du Club DSI",
      resume: "Nous avons le plaisir d'annoncer la nomination de Sarah Rakoto au poste de Vice-Présidente du Club DSI Madagascar.",
      contenu: "Contenu détaillé de l'actualité...",
      image: "/images/actualites/nomination-vice-presidente.jpg",
      categories: ["Gouvernance", "Équipe"],
      dureeLecture: 3,
      vues: 98
    },
    {
      id: 3,
      titre: "Retour sur le Forum Annuel 2025 du Club DSI",
      date: "25 Octobre 2025",
      auteur: "Équipe Communication",
      resume: "Découvrez les temps forts de notre Forum Annuel 2025 qui a réuni plus de 300 professionnels du numérique à Antananarivo.",
      contenu: "Contenu détaillé de l'actualité...",
      image: "/images/actualites/forum-annuel-2025.jpg",
      categories: ["Événements", "Réseautage"],
      dureeLecture: 5,
      vues: 215
    },
    {
      id: 4,
      titre: "Lancement du Programme Mentorat 2025-2026",
      date: "15 Octobre 2025",
      auteur: "Commission Formation",
      resume: "Inscrivez-vous dès maintenant à notre programme de mentorat et bénéficiez d'un accompagnement personnalisé par des experts du secteur.",
      contenu: "Contenu détaillé de l'actualité...",
      image: "/images/actualites/programme-mentorat.jpg",
      categories: ["Formation", "Mentorat"],
      dureeLecture: 3,
      vues: 176
    }
  ];

  // Catégories uniques pour les filtres
  const allCategories = Array.from(
    new Set(actualites.flatMap(actu => actu.categories))
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités du Club</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Restez informé des dernières nouvelles, annonces et événements du Club DSI Madagascar
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
                placeholder="Rechercher une actualité..."
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" /> Toutes les actualités
              </Button>
              <Button variant="outline" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" /> Derniers 30 jours
              </Button>
              <Button variant="outline" className="flex items-center">
                <Users className="h-4 w-4 mr-2" /> Membres
              </Button>
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

          {/* Liste des actualités */}
          <div className="grid gap-8">
            {actualites.map((actu) => (
              <Card key={actu.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-80 h-56 bg-gray-200 relative">
                    <img 
                      className="w-full h-full object-cover" 
                      src={actu.image} 
                      alt={actu.titre} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center text-white/90 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{actu.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{actu.dureeLecture} min de lecture</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {actu.categories.map((categorie) => (
                          <span 
                            key={categorie}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {categorie}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--header-footer)] mb-3">
                        {actu.titre}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {actu.resume}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                            <img 
                              src="/images/logo-club-dsi.png" 
                              alt="Logo Club DSI"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{actu.auteur}</p>
                            <p className="text-xs text-gray-500">{actu.vues} vues</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100">
                            <Bookmark className="h-5 w-5" />
                            <span className="sr-only">Enregistrer</span>
                          </Button>
                          <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100">
                            <Share2 className="h-5 w-5" />
                            <span className="sr-only">Partager</span>
                          </Button>
                          <Button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
                            Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
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

        {/* Newsletter */}
        <section className="bg-gray-50 py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[var(--header-footer)]">Restez informé</h2>
            <p className="text-lg mb-8 text-gray-600">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités et événements directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
              <Button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] whitespace-nowrap">
                S'abonner
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
