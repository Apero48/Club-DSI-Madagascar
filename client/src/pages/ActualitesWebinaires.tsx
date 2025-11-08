import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, PlayCircle, Users, Search, Filter, ArrowRight, CheckCircle, Clock as ClockIcon, Loader2 } from "lucide-react";

type Webinaire = {
  id: number;
  titre: string;
  date: string;
  heure: string;
  duree: string;
  intervenant: {
    nom: string;
    entreprise: string;
    photo: string;
  };
  description: string;
  image: string;
  placesDisponibles: number;
  statut: 'bientot' | 'ouvert' | 'complet' | 'passe';
  type: 'webinaire' | 'masterclass' | 'atelier';
  categories: string[];
};

export default function ActualitesWebinaires() {
  // Données des webinaires à venir
  const webinaires: Webinaire[] = [
    {
      id: 1,
      titre: "Intelligence Artificielle pour les DSI",
      date: "15 Novembre 2025",
      heure: "14:00 - 15:30",
      duree: "1h30",
      intervenant: {
        nom: "Sophie Martin",
        entreprise: "AI Solutions",
        photo: "/images/intervenants/sophie-martin.jpg"
      },
      description: "Découvrez comment l'IA transforme la gestion des systèmes d'information et comment les DSI peuvent tirer parti de ces avancées pour optimiser leurs opérations et créer de la valeur.",
      image: "/images/webinaires/ia-dsi.jpg",
      placesDisponibles: 45,
      statut: 'ouvert',
      type: 'webinaire',
      categories: ["IA", "Transformation Digitale"]
    },
    {
      id: 2,
      titre: "Cybersécurité : Tendances 2026",
      date: "22 Novembre 2025",
      heure: "10:00 - 11:30",
      duree: "1h30",
      intervenant: {
        nom: "Thomas Dubois",
        entreprise: "CyberShield",
        photo: "/images/intervenants/thomas-dubois.jpg"
      },
      description: "Un aperçu complet des nouvelles menaces de cybersécurité et des stratégies de protection innovantes pour sécuriser votre entreprise en 2026.",
      image: "/images/webinaires/cybersecurite.jpg",
      placesDisponibles: 0,
      statut: 'complet',
      type: 'webinaire',
      categories: ["Sécurité", "Risques IT"]
    },
    {
      id: 3,
      titre: "Leadership Digital - Session Intensive",
      date: "5 Décembre 2025",
      heure: "09:00 - 17:00",
      duree: "2 jours",
      intervenant: {
        nom: "Émilie Laurent",
        entreprise: "Digital Leaders Academy",
        photo: "/images/intervenants/emilie-laurent.jpg"
      },
      description: "Un programme intensif pour développer vos compétences de leadership à l'ère numérique et mener efficacement la transformation de votre organisation.",
      image: "/images/webinaires/leadership-digital.jpg",
      placesDisponibles: 12,
      statut: 'bientot',
      type: 'masterclass',
      categories: ["Leadership", "Management", "Transformation"]
    },
    {
      id: 4,
      titre: "Transformation Cloud : Stratégies Gagnantes",
      date: "10 Janvier 2026",
      heure: "11:00 - 12:30",
      duree: "1h30",
      intervenant: {
        nom: "Nicolas Leroy",
        entreprise: "CloudScale",
        photo: "/images/intervenants/nicolas-leroy.jpg"
      },
      description: "Découvrez les meilleures pratiques pour réussir votre migration vers le cloud et optimiser vos infrastructures pour plus d'agilité et d'efficacité.",
      image: "/images/webinaires/cloud-transformation.jpg",
      placesDisponibles: 28,
      statut: 'bientot',
      type: 'webinaire',
      categories: ["Cloud", "Infrastructure", "Migration"]
    }
  ];

  // Webinaires passés
  const webinairesPasses = [
    {
      id: 101,
      titre: "Gouvernance des Données",
      date: "12 Octobre 2025",
      type: 'webinaire',
      categories: ["Données", "Conformité"],
      intervenant: "Marie Dupont (DataGovernance Corp)",
      image: "/images/webinaires/gouvernance-donnees.jpg"
    },
    {
      id: 102,
      titre: "Agilité à l'échelle",
      date: "28 Septembre 2025",
      type: 'atelier',
      categories: ["Agilité", "Transformation"],
      intervenant: "Alexandre Martin (AgileScale)",
      image: "/images/webinaires/agilite-echelle.jpg"
    },
    {
      id: 103,
      titre: "Innovation IT & Technologies Émergentes",
      date: "15 Septembre 2025",
      type: 'webinaire',
      categories: ["Innovation", "Technologies"],
      intervenant: "Sarah Benoit (TechVision)",
      image: "/images/webinaires/innovation-it.jpg"
    }
  ];

  // Catégories uniques pour les filtres
  const categoriesUniques = Array.from(
    new Set(webinaires.flatMap(w => w.categories))
  );

  // Fonction pour obtenir la classe de style en fonction du statut
  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'ouvert':
        return 'bg-green-100 text-green-800';
      case 'complet':
        return 'bg-red-100 text-red-800';
      case 'bientot':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Fonction pour obtenir le texte du statut
  const getStatusText = (statut: string) => {
    switch (statut) {
      case 'ouvert':
        return 'Inscriptions ouvertes';
      case 'complet':
        return 'Complet';
      case 'bientot':
        return 'Bientôt disponible';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Webinaires & Masterclass</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Formations en ligne interactives animées par des experts pour développer vos compétences et rester à la pointe des dernières tendances IT
          </p>
          <div className="mt-8">
            <Button className="bg-white text-[var(--primary)] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
              Voir le calendrier <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Section Filtres et Recherche */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Nos prochains événements</h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Rechercher un webinaire..."
                  />
                </div>
                <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent">
                  <option value="">Tous les types</option>
                  <option value="webinaire">Webinaires</option>
                  <option value="masterclass">Masterclass</option>
                  <option value="atelier">Ateliers</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                Tous
              </Button>
              {categoriesUniques.map((categorie, index) => (
                <Button key={index} variant="ghost" className="text-gray-700 hover:bg-gray-100">
                  {categorie}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Webinaires à venir */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {webinaires.map((webinaire) => (
              <Card key={webinaire.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto relative">
                    <img 
                      src={webinaire.image} 
                      alt={webinaire.titre}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(webinaire.statut)}`}>
                        {webinaire.statut === 'complet' ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            {getStatusText(webinaire.statut)}
                          </>
                        ) : webinaire.statut === 'bientot' ? (
                          <>
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {getStatusText(webinaire.statut)}
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            {getStatusText(webinaire.statut)}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {webinaire.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {webinaire.heure} ({webinaire.duree})
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {webinaire.placesDisponibles} places restantes
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{webinaire.titre}</h3>
                    <p className="text-gray-600 mb-4">{webinaire.description}</p>
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                        <img 
                          src={webinaire.intervenant.photo} 
                          alt={webinaire.intervenant.nom}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{webinaire.intervenant.nom}</p>
                        <p className="text-xs text-gray-500">{webinaire.intervenant.entreprise}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webinaire.categories.map((categorie, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {categorie}
                        </span>
                      ))}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {webinaire.type === 'webinaire' ? 'Webinaire' : webinaire.type === 'masterclass' ? 'Masterclass' : 'Atelier'}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className={`${webinaire.statut === 'complet' ? 'bg-gray-400 hover:bg-gray-500' : 'bg-[var(--primary)] hover:bg-[var(--primary-dark)]'}`}
                        disabled={webinaire.statut === 'complet'}
                      >
                        {webinaire.statut === 'complet' ? 'Complet' : 'S\'inscrire maintenant'}
                      </Button>
                      <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                        En savoir plus
                      </Button>
                      {webinaire.statut === 'complet' && (
                        <Button variant="ghost" className="text-gray-700">
                          <Clock className="h-4 w-4 mr-2" />
                          Être alerté de la prochaine session
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Webinaires Passés */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Replay des webinaires passés</h2>
            <p className="text-xl text-gray-600">Revivez nos précédentes sessions à tout moment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinairesPasses.map((webinaire) => (
              <Card key={webinaire.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={webinaire.image} 
                    alt={webinaire.titre}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="bg-white/90 text-[var(--primary)] rounded-full p-3 hover:bg-white transition-colors">
                      <PlayCircle className="h-10 w-10" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {webinaire.date}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinaire.titre}</h3>
                  <p className="text-sm text-gray-600 mb-4">Par {webinaire.intervenant}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinaire.categories.map((categorie, index) => (
                      <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {categorie}
                      </span>
                    ))}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {webinaire.type === 'webinaire' ? 'Webinaire' : webinaire.type === 'masterclass' ? 'Masterclass' : 'Atelier'}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Voir le replay
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
              Voir tous les replis
            </Button>
          </div>
        </div>
      </section>

      {/* Section CTA Newsletter */}
      <section className="py-16 bg-[var(--primary)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ne manquez aucun événement</h2>
          <p className="text-xl mb-8 text-white/90">
            Inscrivez-vous à notre newsletter pour être informé des prochains webinaires et événements
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--primary)]"
            />
            <Button className="bg-white text-[var(--primary)] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
              S'abonner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}