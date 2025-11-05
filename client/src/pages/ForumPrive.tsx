import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForumPrive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Forum Privé</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Discussions Récentes</h2>
            <Button>Nouvelle Discussion</Button>
          </div>

          <div className="space-y-4">
            {/* Liste des discussions */}
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Stratégies de cybersécurité 2026</h3>
                <span className="text-sm text-gray-500">Il y a 2h</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Échange sur les nouvelles menaces et solutions de sécurité...
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>15 réponses</span>
                <span className="mx-2">•</span>
                <span>Par John Doe</span>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Migration vers le Cloud</h3>
                <span className="text-sm text-gray-500">Il y a 1j</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Retours d'expérience sur la migration des infrastructures...
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>23 réponses</span>
                <span className="mx-2">•</span>
                <span>Par Jane Smith</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Catégories</h2>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Stratégie & Innovation</span>
                <span className="text-sm text-gray-500">24</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sécurité & Conformité</span>
                <span className="text-sm text-gray-500">18</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Architecture & Infrastructure</span>
                <span className="text-sm text-gray-500">15</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Top Contributeurs</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                <span>John Doe</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                <span>Jane Smith</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                <span>Robert Johnson</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Rechercher</h2>
            <div className="space-y-4">
              <Input
                type="search"
                placeholder="Rechercher dans le forum..."
              />
              <Button className="w-full">Rechercher</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}