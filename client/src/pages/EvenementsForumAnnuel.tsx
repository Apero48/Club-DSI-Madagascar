// Navbar rendered globally in App.tsx
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Clock, Award, Mic, Users2, BookOpen, Image as ImageIcon } from "lucide-react";
import { Link } from "wouter";

const EvenementsForumAnnuel: React.FC = () => {
  const previousEditions = [
    {
      year: 2024,
      theme: "Innovation et Souveraineté Numérique",
      date: "15-16 Novembre 2024",
      location: "Hôtel Carlton, Antananarivo",
      attendees: 350,
      description: "Exploration des enjeux de l'innovation technologique et de la souveraineté numérique à Madagascar.",
      image: "/images/events/forum-2024.jpg",
      highlights: [
        "Keynote sur l'IA et l'avenir du numérique en Afrique",
        "Table ronde sur la transformation digitale des entreprises malgaches",
        "Ateliers pratiques sur les nouvelles technologies"
      ]
    },
    {
      year: 2023,
      theme: "Cybersécurité et Résilience Numérique",
      date: "17-18 Novembre 2023",
      location: "Hôtel Colbert, Antananarivo",
      attendees: 280,
      description: "Renforcement des compétences en cybersécurité et stratégies de résilience pour les entreprises.",
      image: "/images/events/forum-2023.jpg",
      highlights: [
        "Conférences sur les dernières menaces cybernétiques",
        "Retours d'expérience de grands groupes internationaux",
        "Ateliers de mise en situation"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-24 overflow-hidden">
          {/* Effet de fond animé */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
              <span className="text-sm font-medium text-white/90">Événement à venir • 15-16 Novembre 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Forum Annuel des DSI
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
              L'événement phare du Club des DSI de Madagascar réunissant les acteurs majeurs du numérique
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#inscription" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--header-footer)] hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                S'inscrire à la prochaine édition
              </a>
              
              <a 
                href="#programme" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Voir le programme
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Users2 className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm opacity-80">Participants</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Mic className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">30+</p>
                <p className="text-sm opacity-80">Intervenants</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm opacity-80">Partenaires</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm opacity-80">Jours d'échanges</p>
              </div>
            </div>
          </div>
          
          {/* Vague décorative en bas de la section héro */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white [mask-image:linear-gradient(to_right,transparent,white,transparent)]"></div>
        </div>

        {/* À propos du Forum */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Le Forum Annuel des DSI</h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-6"></div>
            <p className="text-xl text-[var(--foreground)] max-w-4xl mx-auto">
              L'événement incontournable qui réunit chaque année l'écosystème numérique malgache autour de thématiques stratégiques pour la transformation digitale du pays.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-[var(--primary)] mb-4">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">Conférences</h3>
              <p className="text-[var(--foreground)]">Des interventions de haut niveau par des experts internationaux et locaux.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-[var(--primary)] mb-4">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">Networking</h3>
              <p className="text-[var(--foreground)]">Rencontrez les acteurs clés du numérique à Madagascar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-[var(--primary)] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">Prix & Reconnaissance</h3>
              <p className="text-[var(--foreground)]">Mise en avant des meilleures initiatives numériques du pays.</p>
            </div>
          </div>
        </section>

        {/* Section Inscription */}
        <section id="inscription" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Inscription au Forum 2025</h2>
              <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-6"></div>
              <p className="text-xl text-[var(--foreground)] max-w-3xl mx-auto">
                Réservez dès maintenant votre place pour le plus grand événement du numérique à Madagascar
              </p>
            </div>
            
            <Card className="p-8 max-w-3xl mx-auto">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                    <input type="text" id="nom" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" />
                  </div>
                  <div>
                    <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-1">Entreprise *</label>
                    <input type="text" id="entreprise" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email professionnel *</label>
                    <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                    <input type="tel" id="telephone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="type-participation" className="block text-sm font-medium text-gray-700 mb-1">Type de participation *</label>
                  <select id="type-participation" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]">
                    <option value="">Sélectionnez une option</option>
                    <option value="individuel">Participation individuelle (200 000 Ar)</option>
                    <option value="entreprise-5">Pack Entreprise - 5 personnes (800 000 Ar)</option>
                    <option value="etudiant">Tarif Étudiant (100 000 Ar)</option>
                    <option value="orateur">Intervenant/Conférencier</option>
                  </select>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="newsletter" type="checkbox" className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="font-medium text-gray-700">Je souhaite recevoir la newsletter du Club DSI</label>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] py-6 text-lg">
                    Valider mon inscription
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  Pour toute demande spécifique, contactez-nous à <a href="mailto:forum@clubdsi.mg" className="text-[var(--primary)] hover:underline">forum@clubdsi.mg</a>
                </p>
              </form>
            </Card>
          </div>
        </section>
        
        {/* Section Programme */}
        <section id="programme" className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Programme du Forum 2025</h2>
              <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-6"></div>
              <p className="text-xl text-[var(--foreground)] max-w-3xl mx-auto">
                Découvrez le programme détaillé des deux jours de conférences et d'ateliers
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-[var(--border)] overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px" aria-label="Tabs">
                  <button className="w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm border-[var(--primary)] text-[var(--primary)]">
                    Jour 1 - 15 Novembre 2024
                  </button>
                  <button className="w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Jour 2 - 16 Novembre 2024
                  </button>
                </nav>
              </div>
              
              <div className="p-6">
                <div className="space-y-8">
                  {/* Événement 1 */}
                  <div className="flex">
                    <div className="flex-shrink-0 w-32">
                      <div className="text-lg font-bold text-[var(--primary)]">08:30</div>
                      <div className="text-sm text-gray-500">- 09:15</div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold text-[var(--header-footer)]">Accueil des participants</h3>
                      <p className="text-gray-600">Café d'accueil et enregistrement</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        Hall principal
                      </div>
                    </div>
                  </div>
                  
                  {/* Événement 2 */}
                  <div className="flex">
                    <div className="flex-shrink-0 w-32">
                      <div className="text-lg font-bold text-[var(--primary)]">09:30</div>
                      <div className="text-sm text-gray-500">- 10:30</div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold text-[var(--header-footer)]">Cérémonie d'ouverture</h3>
                      <p className="text-gray-600">Discours d'ouverture et mot des officiels</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        Salle plénière
                      </div>
                    </div>
                  </div>
                  
                  {/* Événement 3 */}
                  <div className="flex">
                    <div className="flex-shrink-0 w-32">
                      <div className="text-lg font-bold text-[var(--primary)]">10:45</div>
                      <div className="text-sm text-gray-500">- 12:15</div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold text-[var(--header-footer)]">Table ronde : L'IA au service de la transformation numérique</h3>
                      <p className="text-gray-600">Avec des experts internationaux et locaux du domaine de l'IA</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        Salle plénière
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-10">
                    <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
                      Télécharger le programme complet (PDF)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Éditions précédentes */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-[var(--header-footer)] mb-12">Éditions Précédentes</h2>
          
          <div className="space-y-12">
            {previousEditions.map((edition, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-[var(--border)] overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-[var(--header-footer)]">Édition {edition.year}</h3>
                      <span className="bg-[var(--accent)] text-[var(--primary)] text-sm font-medium px-3 py-1 rounded-full">
                        {edition.attendees} participants
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-[var(--primary)] mb-3">{edition.theme}</h4>
                    <div className="flex items-center text-sm text-[var(--foreground)] mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{edition.date}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edition.location}</span>
                    </div>
                    <p className="text-[var(--foreground)] mb-4">{edition.description}</p>
                    <div className="mb-6">
                      <h5 className="font-medium text-[var(--header-footer)] mb-2">Points forts :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--foreground)]">
                        {edition.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
                        Voir les photos
                      </Button>
                      <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
                        Télécharger les actes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Vous souhaitez participer au prochain forum ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Inscrivez-vous dès maintenant pour ne pas manquer les prochaines informations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-gray-100 hover:text-[var(--primary)]">
                S'inscrire à la newsletter
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Devenir partenaire
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EvenementsForumAnnuel;
