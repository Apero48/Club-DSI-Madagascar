import { Card } from "@/components/ui/card";

export default function ActualitesDSIFutur() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Programme "DSI du futur"</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">À propos du Programme</h2>
          <p className="mb-6">
            Le programme "DSI du futur" est conçu pour préparer les dirigeants IT aux défis 
            de demain à travers un parcours complet de formation et d'accompagnement.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Innovation</h3>
              <p className="text-sm text-gray-600 mt-2">
                Anticipation des tendances technologiques
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Leadership</h3>
              <p className="text-sm text-gray-600 mt-2">
                Développement des compétences managériales
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Stratégie</h3>
              <p className="text-sm text-gray-600 mt-2">
                Alignement business et technologie
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Parcours de Formation</h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold">Module 1: Vision & Innovation</h3>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-gray-600">• Tendances technologiques émergentes</li>
                <li className="text-sm text-gray-600">• Innovation et transformation digitale</li>
                <li className="text-sm text-gray-600">• Veille stratégique</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold">Module 2: Leadership Digital</h3>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-gray-600">• Management des équipes IT</li>
                <li className="text-sm text-gray-600">• Communication et influence</li>
                <li className="text-sm text-gray-600">• Gestion du changement</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold">Module 3: Excellence Opérationnelle</h3>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-gray-600">• Agilité à l'échelle</li>
                <li className="text-sm text-gray-600">• Performance et optimisation</li>
                <li className="text-sm text-gray-600">• Gouvernance IT</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Accompagnement Personnalisé</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Mentorat</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">• Sessions individuelles avec des DSI expérimentés</li>
                <li className="text-sm text-gray-600">• Retours d'expérience personnalisés</li>
                <li className="text-sm text-gray-600">• Conseils pratiques et stratégiques</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Networking</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">• Échanges entre pairs</li>
                <li className="text-sm text-gray-600">• Événements exclusifs</li>
                <li className="text-sm text-gray-600">• Communauté de pratique</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}