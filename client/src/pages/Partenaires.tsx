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
              <Button size="lg" className="bg-white text-[var(--header-footer)] hover:bg-gray-100 hover:text-[var(--header-footer)]">
                Devenir partenaire
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Voir nos offres
              </Button>
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

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Devenez partenaire du Club DSI Madagascar</h2>
            <p className="text-xl mb-8 text-white/90">
              Rejoignez notre réseau d'entreprises engagées dans la transformation numérique à Madagascar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-gray-100 hover:text-[var(--primary)]">
                Devenir partenaire
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Nous contacter
              </Button>
            </div>
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

 
