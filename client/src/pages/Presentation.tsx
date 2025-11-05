// Navbar rendered globally in App.tsx
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Presentation() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
  <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Présentation du Club DSI</h1>
            <p className="text-lg mt-2">Découvrez notre association et sa mission</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Qui sommes-nous ?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Le Club des Décideurs des Systèmes d'Information du Bénin (Club DSI) est une association professionnelle regroupant les experts et décideurs du secteur numérique. Notre mission est de promouvoir l'innovation, le partage de connaissances et le réseautage entre professionnels.
            </p>

            <h2 className="text-3xl font-bold text-blue-700 mb-6 mt-12">Notre mission</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>Promouvoir le numérique et l'innovation au Bénin</li>
              <li>Valoriser la fonction DSI dans l'administration et l'entreprise</li>
              <li>Créer un réseau dynamique d'experts et de décideurs</li>
              <li>Organiser des formations et des événements de qualité</li>
              <li>Développer des études et recommandations innovantes</li>
              <li>Renforcer les partenariats stratégiques</li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-700 mb-6 mt-12">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Service</h3>
                <p className="text-gray-700">Nous nous engageons à servir nos membres et la communauté numérique avec excellence.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Solidarité</h3>
                <p className="text-gray-700">Nous travaillons ensemble pour soutenir le développement de l'écosystème numérique.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Succès</h3>
                <p className="text-gray-700">Nous visons l'excellence et la réussite collective de nos initiatives.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-700 mb-6 mt-12">Nos objectifs pour cette année</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>Redynamiser les fondements de notre association</li>
              <li>Élargir le cercle des membres</li>
              <li>Étendre les DSI Awards à une portée internationale</li>
              <li>Dynamiser nos commissions de production intellectuelle</li>
              <li>Élargir notre catalogue de formations</li>
              <li>Renforcer notre réseau de partenariats</li>
            </ul>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Rejoignez-nous</h3>
            <p className="text-gray-700 mb-6">
              Vous êtes un décideur ou expert en systèmes d'information ? Rejoignez notre communauté et bénéficiez de nos services exclusifs.
            </p>
            <Button className="bg-blue-700 hover:bg-blue-800">Devenir membre</Button>
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

 
