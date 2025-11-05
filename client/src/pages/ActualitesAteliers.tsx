import { Card } from "@/components/ui/card";

export default function ActualitesAteliers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ateliers Pratiques</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Ateliers à Venir</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Upcoming Workshops */}
            <div className="border rounded-lg p-4">
              <span className="text-sm font-semibold text-blue-600">25 Nov 2025</span>
              <h3 className="text-xl font-semibold mt-2">Architecture Cloud Native</h3>
              <p className="text-gray-600 mt-2">
                Atelier pratique sur la conception d'architectures cloud natives.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                <li>• Durée : 4 heures</li>
                <li>• Format : Présentiel</li>
                <li>• Niveau : Intermédiaire</li>
              </ul>
              <div className="mt-4">
                <button className="text-blue-600 font-semibold">Réserver sa place →</button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <span className="text-sm font-semibold text-blue-600">2 Déc 2025</span>
              <h3 className="text-xl font-semibold mt-2">Sécurité DevOps</h3>
              <p className="text-gray-600 mt-2">
                Implémentation de la sécurité dans un pipeline CI/CD.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                <li>• Durée : 6 heures</li>
                <li>• Format : Hybride</li>
                <li>• Niveau : Avancé</li>
              </ul>
              <div className="mt-4">
                <button className="text-blue-600 font-semibold">Réserver sa place →</button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Formats des Ateliers</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Hands-on Labs</h3>
              <p className="text-sm text-gray-600 mt-2">
                Exercices pratiques sur des environnements réels
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Design Thinking</h3>
              <p className="text-sm text-gray-600 mt-2">
                Sessions collaboratives de résolution de problèmes
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Tech Deep Dive</h3>
              <p className="text-sm text-gray-600 mt-2">
                Exploration approfondie des technologies
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Ressources des Ateliers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Guides pratiques</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Code samples</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Présentations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Outils</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Environnements de lab</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Templates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Boîte à outils</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}