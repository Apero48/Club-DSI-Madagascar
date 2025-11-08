import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, MapPin, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

type Atelier = {
  id: number;
  titre: string;
  date: string;
  heure: string;
  duree: string;
  format: 'Présentiel' | 'En ligne' | 'Hybride';
  lieu: string;
  places: number;
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé';
  description: string;
  image: string;
  formateur: {
    nom: string;
    entreprise: string;
    photo: string;
  };
};

export default function ActualitesAteliers() {
  // Données des ateliers à venir
  const ateliers: Atelier[] = [
    {
      id: 1,
      titre: "Architecture Cloud Native",
      date: "25 Novembre 2025",
      heure: "09:00 - 13:00",
      duree: "4 heures",
      format: "Présentiel",
      lieu: "Espace Coworking Ivandry, Antananarivo",
      places: 15,
      niveau: "Intermédiaire",
      description: "Découvrez comment concevoir et implémenter des architectures cloud natives évolutives et résilientes. Cet atelier pratique vous guidera à travers les bonnes pratiques et les outils essentiels.",
      image: "/images/ateliers/cloud-native.jpg",
      formateur: {
        nom: "Jean Dupont",
        entreprise: "Cloud Solutions Inc.",
        photo: "/images/formateurs/jean-dupont.jpg"
      }
    },
    {
      id: 2,
      titre: "Sécurité DevOps",
      date: "2 Décembre 2025",
      heure: "13:30 - 19:30",
      duree: "6 heures",
      format: "Hybride",
      lieu: "En ligne & Espace Coworking Ivandry",
      places: 20,
      niveau: "Avancé",
      description: "Apprenez à intégrer la sécurité dans votre pipeline CI/CD. Cet atelier couvrira les outils et techniques pour sécuriser vos applications tout au long du cycle de développement.",
      image: "/images/ateliers/devops-security.jpg",
      formateur: {
        nom: "Sophie Martin",
        entreprise: "SecureIT",
        photo: "/images/formateurs/sophie-martin.jpg"
      }
    },
    {
      id: 3,
      titre: "Introduction à l'IA Générative",
      date: "10 Décembre 2025",
      heure: "09:00 - 12:00",
      duree: "3 heures",
      format: "En ligne",
      lieu: "Plateforme Zoom",
      places: 50,
      niveau: "Débutant",
      description: "Découvrez les bases de l'IA générative et comment l'utiliser dans vos projets. Aucune expérience préalable en IA n'est requise.",
      image: "/images/ateliers/ia-generative.jpg",
      formateur: {
        nom: "Thomas Leroy",
        entreprise: "AI Innovations",
        photo: "/images/formateurs/thomas-leroy.jpg"
      }
    }
  ];

  // Catégories de filtrage
  const categories = [
    { id: 'tous', label: 'Tous les ateliers', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { id: 'presentiel', label: 'Présentiel', icon: <MapPin className="h-4 w-4 mr-2" /> },
    { id: 'en-ligne', label: 'En ligne', icon: <Users className="h-4 w-4 mr-2" /> },
    { id: 'hybride', label: 'Hybride', icon: <Users className="h-4 w-4 mr-2" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ateliers Pratiques</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Développez vos compétences grâce à nos ateliers pratiques animés par des experts du secteur
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Colonne principale */}
            <div className="lg:w-2/3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-2xl font-bold text-[var(--header-footer)] mb-4 md:mb-0">
                  Prochains Ateliers
                </h2>
                <div className="flex flex-wrap gap-2">
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

              <div className="space-y-6">
                {ateliers.map((atelier) => (
                  <Card key={atelier.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-64 h-48 bg-gray-200 relative">
                        <img 
                          className="w-full h-full object-cover" 
                          src={atelier.image} 
                          alt={atelier.titre} 
                        />
                        <div className="absolute top-2 right-2 bg-white/90 text-xs font-semibold px-2 py-1 rounded">
                          {atelier.places} places restantes
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)] text-[var(--primary)]">
                            {atelier.niveau}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" /> {atelier.date}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1" /> {atelier.heure}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" /> {atelier.format}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">
                          {atelier.titre}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {atelier.description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                              <img 
                                src={atelier.formateur.photo} 
                                alt={atelier.formateur.nom}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{atelier.formateur.nom}</p>
                              <p className="text-xs text-gray-500">{atelier.formateur.entreprise}</p>
                            </div>
                          </div>
                          <Button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
                            S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                  Voir tous les ateliers
                </Button>
              </div>
            </div>

            {/* Barre latérale */}
            <div className="lg:w-1/3 space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-[var(--header-footer)] mb-4">Pourquoi participer ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-[var(--primary)] mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Apprentissage pratique avec des experts du secteur</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-[var(--primary)] mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Groupes à taille humaine pour un accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-[var(--primary)] mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Support et ressources après l'atelier</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-[var(--primary)] mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Certificat de participation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-[var(--accent)]/10 border-[var(--accent)]/20">
                <h3 className="text-lg font-semibold text-[var(--header-footer)] mb-3">Restez informé</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Soyez les premiers informés des nouveaux ateliers et bénéficiez de tarifs préférentiels en vous inscrivant à notre newsletter.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  />
                  <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
                    M'inscrire à la newsletter
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-[var(--header-footer)] mb-4">Vous souhaitez animer un atelier ?</h3>
                <p className="text-gray-600 mb-4">
                  Partagez votre expertise avec notre communauté en proposant un atelier pratique.
                </p>
                <Button variant="outline" className="w-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                  Proposer un atelier
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--primary)] text-white py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Des ateliers sur mesure pour votre entreprise</h2>
            <p className="text-lg mb-8 text-white/90">
              Nous proposons des ateliers personnalisés pour répondre aux besoins spécifiques de votre équipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                En savoir plus
              </Button>
              <Button variant="outline" className="bg-white text-[var(--primary)] hover:bg-gray-100">
                Nous contacter
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
