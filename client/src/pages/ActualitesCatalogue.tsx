import { Card } from "@/components/ui/card";

export default function ActualitesCatalogue() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Catalogue du Club</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Nos Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Dernières Actualités</h3>
              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <h4 className="font-semibold">Forum Annuel 2025</h4>
                  <p className="text-sm text-gray-600">Retour sur les moments forts de l'événement</p>
                </li>
                <li className="border-b pb-4">
                  <h4 className="font-semibold">Innovation Digitale</h4>
                  <p className="text-sm text-gray-600">Les tendances à suivre en 2026</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Publications Populaires</h3>
              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <h4 className="font-semibold">Guide de la Transformation Digitale</h4>
                  <p className="text-sm text-gray-600">Bonnes pratiques et méthodologies</p>
                </li>
                <li className="border-b pb-4">
                  <h4 className="font-semibold">Sécurité des SI</h4>
                  <p className="text-sm text-gray-600">État des lieux et recommandations</p>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}