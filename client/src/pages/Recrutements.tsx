import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

export default function Recrutements() {
  const offres = [
    {
      id: 1,
      title: "Responsable Infrastructure IT",
      company: "Tech Solutions Bénin",
      location: "Cotonou, Bénin",
      salary: "Selon expérience",
      type: "CDI",
      description: "Nous recherchons un responsable infrastructure expérimenté pour rejoindre notre équipe."
    },
    {
      id: 2,
      title: "Développeur Full Stack",
      company: "Digital Innovations",
      location: "Cotonou, Bénin",
      salary: "Selon expérience",
      type: "CDI",
      description: "Rejoignez notre équipe de développement et travaillez sur des projets innovants."
    },
    {
      id: 3,
      title: "Consultant Cybersécurité",
      company: "Cybersecurity Pro",
      location: "Cotonou, Bénin",
      salary: "Selon expérience",
      type: "CDI",
      description: "Expert en cybersécurité, vous accompagnerez nos clients dans leur transformation."
    },
    {
      id: 4,
      title: "Analyste Data",
      company: "Data Analytics Hub",
      location: "Cotonou, Bénin",
      salary: "Selon expérience",
      type: "CDI",
      description: "Analysez les données et créez des insights pour nos clients."
    },
    {
      id: 5,
      title: "Chef de Projet IT",
      company: "Enterprise Solutions",
      location: "Cotonou, Bénin",
      salary: "Selon expérience",
      type: "CDI",
      description: "Pilotez des projets informatiques complexes et menez vos équipes vers le succès."
    },
    {
      id: 6,
      title: "Administrateur Système",
      company: "Cloud Services Africa",
      location: "Cotonou, Bénin",
      salary: "Selon expérience",
      type: "CDI",
      description: "Gérez et maintenez nos infrastructures cloud et systèmes informatiques."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                DSI
              </div>
              <span className="text-xl font-bold text-blue-600">Club DSI</span>
            </a>
          </Link>
        </div>
        <nav className="bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-start gap-1 py-2">
            <NavLink href="/" label="Accueil" />
            <NavLink href="/presentation" label="Présentation" />
            <NavLink href="/membres" label="Membres" />
            <NavLink href="/evenements" label="Événements" />
            <NavLink href="/partenaires" label="Partenaires" />
            <NavLink href="/formations" label="Formations" />
            <NavLink href="/recrutements" label="Recrutements" />
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Offres d'Emploi</h1>
            <p className="text-lg mt-2">Découvrez les opportunités de carrière dans notre réseau</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="space-y-6">
            {offres.map((offre) => (
              <Card key={offre.id} className="overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-blue-700">{offre.title}</h3>
                      <p className="text-gray-600 font-semibold">{offre.company}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span>{offre.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <span>{offre.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                          {offre.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-end">
                      <Button className="bg-blue-700 hover:bg-blue-800">
                        Postuler
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-700">{offre.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Vous êtes un recruteur ?</h3>
            <p className="text-gray-700 mb-6">
              Vous souhaitez publier une offre d'emploi auprès de nos membres ? Contactez-nous pour en savoir plus.
            </p>
            <Button className="bg-blue-700 hover:bg-blue-800">
              Publier une offre
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Club DSI Bénin. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <a className="px-3 py-2 rounded hover:bg-blue-600 transition whitespace-nowrap text-sm">
        {label}
      </a>
    </Link>
  );
}
