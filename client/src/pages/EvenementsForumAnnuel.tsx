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
        <div className="w-full bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Forum Annuel des DSI</h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
              L'événement phare du Club des DSI de Madagascar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[var(--header-footer)] hover:bg-gray-100 hover:text-[var(--header-footer)]">
                S'inscrire à la prochaine édition
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Voir le programme
              </Button>
            </div>
          </div>
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

        {/* Prochaine édition */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[var(--header-footer)] mb-12">Prochaine Édition 2025</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-[var(--border)] overflow-hidden max-w-4xl mx-auto">
              <div className="h-64 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold mb-2">À venir</div>
                  <p className="text-xl">Informations à venir prochainement</p>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-4">Informations pratiques</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Calendar className="w-5 h-5 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Date:</span> À annoncer
                        </div>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="w-5 h-5 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Lieu:</span> À annoncer
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-5 h-5 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Participants attendus:</span> 400+
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-4">Thématique 2025</h3>
                    <div className="bg-[var(--accent)] p-4 rounded-lg">
                      <p className="text-lg font-medium text-[var(--header-footer)]">À annoncer</p>
                      <p className="text-[var(--foreground)] mt-2">Restez à l'écoute pour découvrir le thème de l'édition 2025 !</p>
                    </div>
                    <Button className="mt-6 w-full" size="lg">
                      Être informé du programme
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
