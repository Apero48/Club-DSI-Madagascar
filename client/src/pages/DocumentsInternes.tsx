import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function DocumentsInternes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Documents Internes</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Bibliothèque de Documents</h2>
            <Input
              type="search"
              placeholder="Rechercher un document..."
              className="max-w-xs"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Templates et Modèles */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Templates et Modèles</h3>
              
              <div className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">PSSI Template 2025</h4>
                    <p className="text-sm text-gray-600">Politique de sécurité des systèmes d'information</p>
                  </div>
                  <a href="#" className="text-blue-600 text-sm">Télécharger</a>
                </div>
              </div>

              <div className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Cahier des Charges Type</h4>
                    <p className="text-sm text-gray-600">Pour projets de transformation digitale</p>
                  </div>
                  <a href="#" className="text-blue-600 text-sm">Télécharger</a>
                </div>
              </div>
            </div>

            {/* Guides Pratiques */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Guides Pratiques</h3>
              
              <div className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Guide Cloud First</h4>
                    <p className="text-sm text-gray-600">Stratégie de migration vers le cloud</p>
                  </div>
                  <a href="#" className="text-blue-600 text-sm">Télécharger</a>
                </div>
              </div>

              <div className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Guide DevSecOps</h4>
                    <p className="text-sm text-gray-600">Mise en place des pratiques DevSecOps</p>
                  </div>
                  <a href="#" className="text-blue-600 text-sm">Télécharger</a>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Documents Récents</h2>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="block font-semibold">Rapport Annuel 2024</span>
                <span className="text-gray-500">Mis à jour il y a 2 jours</span>
              </li>
              <li className="text-sm">
                <span className="block font-semibold">Budget IT 2025</span>
                <span className="text-gray-500">Mis à jour il y a 5 jours</span>
              </li>
              <li className="text-sm">
                <span className="block font-semibold">Plan Stratégique 2026</span>
                <span className="text-gray-500">Mis à jour il y a 1 semaine</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Catégories</h2>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Templates</span>
                <span className="text-sm text-gray-500">12</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Guides</span>
                <span className="text-sm text-gray-500">8</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Rapports</span>
                <span className="text-sm text-gray-500">15</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Présentations</span>
                <span className="text-sm text-gray-500">10</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Total Documents</span>
                <span className="font-semibold">45</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Ajoutés ce mois</span>
                <span className="font-semibold">8</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Téléchargements</span>
                <span className="font-semibold">234</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}