import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Target, BookOpen, Clock, Calendar, Award, UserCheck, MessageSquare, Users2, BarChart2, Zap } from "lucide-react";

type Module = {
  id: number;
  titre: string;
  duree: string;
  objectifs: string[];
  competences: string[];
  icon: React.ReactNode;
  color: string;
};

type Temoignage = {
  id: number;
  auteur: string;
  poste: string;
  entreprise: string;
  photo: string;
  contenu: string;
  note: number;
};

export default function ActualitesDSIFutur() {
  // Données des modules de formation
  const modules: Module[] = [
    {
      id: 1,
      titre: "Vision & Innovation",
      duree: "3 jours",
      objectifs: [
        "Maîtriser les tendances technologiques émergentes",
        "Développer une culture de l'innovation",
        "Mettre en place une veille stratégique efficace"
      ],
      competences: [
        "Tendances technologiques",
        "Gestion de l'innovation",
        "Veille stratégique"
      ],
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      titre: "Leadership Digital",
      duree: "4 jours",
      objectifs: [
        "Renforcer son leadership dans un environnement digital",
        "Manager des équipes IT performantes",
        "Conduire le changement avec agilité"
      ],
      competences: [
        "Management d'équipe",
        "Communication",
        "Gestion du changement"
      ],
      icon: <Users className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      titre: "Excellence Opérationnelle",
      duree: "3 jours",
      objectifs: [
        "Optimiser les processus IT",
        "Mettre en place une gouvernance efficace",
        "Piloter la performance du SI"
      ],
      competences: [
        "Gestion de projet",
        "Gouvernance IT",
        "Pilotage de la performance"
      ],
      icon: <Target className="h-8 w-8" />,
      color: "bg-green-100 text-green-600"
    }
  ];

  // Témoignages des participants
  const temoignages: Temoignage[] = [
    {
      id: 1,
      auteur: "Jean Dupont",
      poste: "DSI",
      entreprise: "Groupe ABC",
      photo: "/images/temoins/jean-dupont.jpg",
      contenu: "Ce programme a totalement transformé ma vision du rôle de DSI. Les échanges avec les autres participants et les experts ont été extrêmement enrichissants.",
      note: 5
    },
    {
      id: 2,
      auteur: "Marie Martin",
      poste: "Directrice des Systèmes d'Information",
      entreprise: "Entreprise XYZ",
      photo: "/images/temoins/marie-martin.jpg",
      contenu: "L'accompagnement personnalisé m'a permis de résoudre des défis concrets que je rencontrais dans mon entreprise. Je recommande vivement ce programme à tout DSI qui souhaite évoluer.",
      note: 5
    }
  ];

  // Générer les étoiles pour les notes
  const renderStars = (note: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < note ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programme "DSI du Futur"</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Développez votre leadership et vos compétences stratégiques pour devenir un DSI agile et visionnaire
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[var(--primary)] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
              S'inscrire au programme <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
              Découvrir le programme
            </Button>
          </div>
        </div>
      </div>

      {/* Section Chiffres clés */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <Users2 className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Professionnels formés</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Taux de satisfaction</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-gray-600">Modules clés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos du programme */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Un programme complet pour les leaders IT de demain</h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Développez votre potentiel de leader IT</h3>
              <p className="text-gray-600 mb-6">
                Le programme "DSI du Futur" est une formation exclusive conçue pour les professionnels de l'informatique qui aspirent à des postes de direction ou qui occupent déjà des postes de DSI et souhaitent renforcer leurs compétences stratégiques.
              </p>
              <p className="text-gray-600 mb-6">
                À travers une approche pratique et interactive, ce programme vous permettra d'acquérir les compétences clés nécessaires pour piloter la transformation numérique de votre organisation et devenir un acteur incontournable de la stratégie d'entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
                  Télécharger la brochure <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Pour qui ?</h4>
                    <p className="text-gray-600 text-sm">DSI, Directeurs Informatiques, Responsables de projets IT et tout professionnel IT visant des responsabilités stratégiques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Durée</h4>
                    <p className="text-gray-600 text-sm">10 jours répartis sur 3 mois (3 sessions de 3-4 jours).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    <BarChart2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Méthodologie</h4>
                    <p className="text-gray-600 text-sm">Alternance d'apports théoriques, d'études de cas, d'ateliers pratiques et de retours d'expérience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Modules de formation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Notre programme en détail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Un parcours complet structuré en 3 modules complémentaires</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className={`${module.color} p-6 text-center`}>
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 mb-4">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{module.titre}</h3>
                  <p className="text-sm text-gray-700 mt-1">Durée : {module.duree}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Objectifs :</h4>
                  <ul className="space-y-2 mb-6">
                    {module.objectifs.map((objectif, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{objectif}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-semibold text-gray-900 mb-3">Compétences visées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.competences.map((competence, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {competence}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Ils ont suivi le programme</h2>
            <p className="text-xl text-gray-600">Découvrez les retours de nos participants</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {temoignages.map((temoignage) => (
              <div key={temoignage.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src={temoignage.photo} 
                      alt={temoignage.auteur}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{temoignage.auteur}</h4>
                    <p className="text-sm text-gray-600">{temoignage.poste}, {temoignage.entreprise}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(temoignage.note)}
                </div>
                <blockquote className="text-gray-600 italic">"{temoignage.contenu}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à devenir un DSI de référence ?</h2>
          <p className="text-xl mb-8 text-white/90">
            Rejoignez la prochaine promotion du programme "DSI du Futur" et donnez une nouvelle dimension à votre carrière.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[var(--primary)] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
              S'inscrire maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}