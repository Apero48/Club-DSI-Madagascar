import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Calendar, FileText, Users, BookOpen } from "lucide-react";

export default function Actualites() {
  // Données des actualités
  const actualites = [
    { 
      id: 1,
      titre: "Lancement du Forum Annuel 2025", 
      date: "15 Décembre 2024", 
      categorie: "Événement",
      description: "Le Forum Annuel 2025 du Club DSI Madagascar se tiendra le 15 décembre 2024 à Antananarivo. Inscrivez-vous dès maintenant pour réserver votre place.",
      image: "/images/events/forum-2025.jpg"
    },
    { 
      id: 2,
      titre: "Nouveau partenariat avec la Banque Mondiale", 
      date: "10 Novembre 2024", 
      categorie: "Partenariat",
      description: "Le Club DSI Madagascar est fier d'annoncer un nouveau partenariat stratégique avec la Banque Mondiale pour le développement des compétences numériques.",
      image: "/images/partners/world-bank.jpg"
    },
    { 
      id: 3,
      titre: "Publication : État des lieux des SI à Madagascar", 
      date: "25 Octobre 2024", 
      categorie: "Étude",
      description: "Découvrez notre dernière étude sur l'état des systèmes d'information à Madagascar, avec des analyses exclusives et des recommandations clés.",
      image: "/images/publications/etude-si-madagascar.jpg"
    }
  ];

  // Catégories d'actualités
  const categories = [
    { id: 'toutes', label: 'Toutes les actualités', icon: <FileText className="h-4 w-4 mr-2" /> },
    { id: 'evenements', label: 'Événements', icon: <Calendar className="h-4 w-4 mr-2" /> },
    { id: 'publications', label: 'Publications', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { id: 'partenariats', label: 'Partenariats', icon: <Users className="h-4 w-4 mr-2" /> }
  ];

  // Articles récents
  const articlesRecents = [
    { 
      id: 1,
      titre: "IA et Cybersécurité : les nouveaux défis", 
      date: "Cette semaine",
      categorie: "Veille techno"
    },
    { 
      id: 2,
      titre: "Cloud souverain : enjeux pour l'Afrique", 
      date: "Semaine dernière",
      categorie: "Analyse"
    },
    { 
      id: 3,
      titre: "Blockchain et transformation digitale", 
      date: "Il y a 2 semaines",
      categorie: "Technologie"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités & Publications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Restez informé des dernières actualités, événements et publications du Club DSI Madagascar
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Colonne principale */}
            <div className="md:w-2/3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[var(--header-footer)]">Dernières actualités</h2>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {categories.map((categorie) => (
                    <Button 
                      key={categorie.id}
                      variant="outline" 
                      className="flex items-center text-sm whitespace-nowrap"
                    >
                      {categorie.icon}
                      {categorie.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {actualites.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-48 h-48 bg-gray-200">
                        <img 
                          className="w-full h-full object-cover" 
                          src={item.image} 
                          alt={item.titre} 
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)] text-[var(--primary)]">
                            {item.categorie}
                          </span>
                          <span className="ml-3 text-sm text-gray-500">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">
                          {item.titre}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {item.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto text-[var(--primary)] hover:no-underline">
                          Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                  Voir plus d'actualités
                </Button>
              </div>
            </div>

            {/* Barre latérale */}
            <div className="md:w-1/3 space-y-8">
              {/* À propos de la section actualités */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-[var(--header-footer)] mb-4">À propos des actualités</h3>
                <p className="text-gray-600 mb-4">
                  Retrouvez ici toutes les actualités du Club DSI Madagascar, y compris les événements à venir, les annonces importantes et les mises à jour de la communauté.
                </p>
                <Button variant="outline" className="w-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                  Voir le calendrier des événements
                </Button>
              </Card>

              {/* Articles récents */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-[var(--header-footer)] mb-4">Articles récents</h3>
                <div className="space-y-4">
                  {articlesRecents.map((article) => (
                    <div key={article.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{article.categorie}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                      </div>
                      <h4 className="font-medium text-[var(--header-footer)] hover:text-[var(--primary)] transition-colors">
                        <Link href={`/actualites/${article.id}`} className="hover:underline">
                          {article.titre}
                        </Link>
                      </h4>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 p-0 h-auto text-[var(--primary)] hover:no-underline">
                  Voir tous les articles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 bg-[var(--accent)]/10 border-[var(--accent)]/20">
                <h3 className="text-lg font-semibold text-[var(--header-footer)] mb-3">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Recevez nos dernières actualités directement dans votre boîte mail.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  />
                  <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
                    S'abonner
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--primary)] text-white py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Vous avez une actualité à partager ?</h2>
            <p className="text-lg mb-8 text-white/90">
              Le Club DSI Madagascar vous offre une tribune pour partager vos expériences, analyses et points de vue sur l'actualité du numérique à Madagascar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Proposer un article
              </Button>
              <Button variant="outline" className="bg-white text-[var(--primary)] hover:bg-gray-100">
                Devenir membre
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
