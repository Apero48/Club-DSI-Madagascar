// Navbar rendered globally in App.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Handshake, ShieldCheck, Users, BarChart2, Cloud } from "lucide-react";

export default function Partenaires() {
  const partenaires = [
    {
      id: 1,
      name: "Tech Solutions Bénin",
      category: "Technologie",
      description: "Leader en solutions informatiques et services numériques.",
      logo: "/images/partenaires/tech-solutions.png"
    },
    {
      id: 2,
      name: "Digital Innovations",
      category: "Consulting",
      description: "Cabinet de conseil en transformation numérique.",
      logo: "/images/partenaires/digital-innovations.png"
    },
    {
      id: 3,
      name: "Cloud Services Africa",
      category: "Infrastructure Cloud",
      description: "Fournisseur de services cloud pour les entreprises africaines.",
      logo: "/images/partenaires/cloud-africa.png"
    },
    {
      id: 4,
      name: "Cybersecurity Pro",
      category: "Sécurité",
      description: "Experts en cybersécurité et protection des données.",
      logo: "/images/partenaires/cyber-pro.png"
    },
    {
      id: 5,
      name: "Data Analytics Hub",
      category: "Analytics",
      description: "Spécialistes en analyse de données et business intelligence.",
      logo: "/images/partenaires/data-hub.png"
    },
    {
      id: 6,
      name: "Enterprise Solutions",
      category: "ERP & CRM",
      description: "Implémentation de systèmes d'information d'entreprise.",
      logo: "/images/partenaires/enterprise-sol.png"
    },
  ];

  const avantagesPartenariat = [
    {
      icon: <Users className="w-8 h-8 text-[var(--primary)]" />,
      title: "Réseau d'experts",
      description: "Accès à un réseau de décideurs IT influents à Madagascar"
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-[var(--primary)]" />,
      title: "Visibilité",
      description: "Mise en avant de votre marque auprès de la communauté IT"
    },
    {
      icon: <Cloud className="w-8 h-8 text-[var(--primary)]" />,
      title: "Veille techno",
      description: "Accès privilégié aux tendances et innovations du secteur"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[var(--primary)]" />,
      title: "Confiance",
      description: "Association à une marque de référence dans le numérique"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Partenaires Stratégiques</h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90 max-w-4xl mx-auto">
              Découvrez les entreprises qui nous font confiance et accompagnent notre mission de transformation numérique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--header-footer)] bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                Devenir partenaire
              </a>
              <a 
                href="#offres" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
              >
                Voir nos offres
              </a>
            </div>
          </div>
        </div>

        {/* Section Avantages */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Les avantages d'un partenariat</h2>
            <p className="text-[var(--foreground)] max-w-3xl mx-auto">
              Rejoignez notre écosystème et bénéficiez d'une visibilité privilégiée auprès des décideurs IT de Madagascar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {avantagesPartenariat.map((avantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-4">
                  {avantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">
                  {avantage.title}
                </h3>
                <p className="text-[var(--foreground)]">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Partenaires */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Nos Partenaires</h2>
              <p className="text-[var(--foreground)] max-w-3xl mx-auto">
                Découvrez les entreprises qui nous font confiance et soutiennent notre mission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partenaires.map((partenaire) => (
                <Card key={partenaire.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-[var(--border)]">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-[var(--header-footer)]">{partenaire.name}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)] text-[var(--primary)]">
                        {partenaire.category}
                      </span>
                    </div>
                    <p className="text-[var(--foreground)] mb-4">{partenaire.description}</p>
                    <div className="mt-4">
                      <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
                        Voir plus
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section Offres */}
        <section id="offres" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Nos Offres de Partenariat</h2>
              <p className="text-[var(--foreground)] max-w-3xl mx-auto">
                Découvrez nos différentes formules de partenariat adaptées à vos objectifs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Offre Bronze */}
              <Card className="p-6 text-center border-2 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Bronze</h3>
                <div className="text-4xl font-bold mb-6">Gratuit</div>
                <ul className="space-y-3 mb-6">
                  <li>Logo sur notre site web</li>
                  <li>Mention dans nos newsletters</li>
                  <li>Accès aux événements gratuits</li>
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Choisir cette offre</Button>
              </Card>
              
              {/* Offre Argent */}
              <Card className="p-6 text-center border-2 border-gray-300 transform scale-105 shadow-lg">
                <div className="bg-[var(--primary)] text-white py-1 px-3 rounded-full text-sm font-medium inline-block -mt-10 mb-4">
                  Populaire
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Argent</h3>
                <div className="text-4xl font-bold mb-6">À partir de 500€<span className="text-sm font-normal">/an</span></div>
                <ul className="space-y-3 mb-6">
                  <li>Tous les avantages Bronze</li>
                  <li>Espace dédié sur notre site</li>
                  <li>Accès aux événements VIP</li>
                  <li>Article sponsorisé</li>
                </ul>
                <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)]">Choisir cette offre</Button>
              </Card>
              
              {/* Offre Or */}
              <Card className="p-6 text-center border-2 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">Or</h3>
                <div className="text-4xl font-bold mb-6">Sur mesure</div>
                <ul className="space-y-3 mb-6">
                  <li>Tous les avantages Argent</li>
                  <li>Partenariat événementiel</li>
                  <li>Ateliers dédiés</li>
                  <li>Accès privilégié à notre réseau</li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Nous contacter</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Devenez Partenaire</h2>
              <p className="text-[var(--foreground)] max-w-3xl mx-auto">
                Remplissez le formulaire ci-dessous et notre équipe vous recontactera dans les plus brefs délais
              </p>
            </div>
            
            <Card className="p-8 max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                    <input type="text" id="nom" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" required />
                  </div>
                  <div>
                    <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-1">Entreprise *</label>
                    <input type="text" id="entreprise" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" required />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input type="tel" id="telephone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="offre" className="block text-sm font-medium text-gray-700 mb-1">Offre qui vous intéresse</label>
                  <select id="offre" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]">
                    <option value="">Sélectionnez une option</option>
                    <option value="bronze">Bronze (Gratuit)</option>
                    <option value="argent">Argent (500€/an)</option>
                    <option value="or">Or (Sur mesure)</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Votre message *</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]" required></textarea>
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
                  <Button type="submit" className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
                    Envoyer ma demande de partenariat
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </main>
      
      <footer className="bg-[var(--header-footer)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Club des DSI de Madagascar. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

 
