import { Card } from "@/components/ui/card";

export default function ActualitesWebinaires() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Webinaires & Masterclass</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Prochains Webinaires</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Upcoming Webinars */}
            <div className="border rounded-lg p-4">
              <span className="text-sm font-semibold text-blue-600">15 Nov 2025</span>
              <h3 className="text-xl font-semibold mt-2">Intelligence Artificielle pour les DSI</h3>
              <p className="text-gray-600 mt-2">
                Découvrez les applications pratiques de l'IA dans la gestion des SI.
              </p>
              <div className="mt-4">
                <button className="text-blue-600 font-semibold">S'inscrire →</button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <span className="text-sm font-semibold text-blue-600">22 Nov 2025</span>
              <h3 className="text-xl font-semibold mt-2">Cybersécurité : Tendances 2026</h3>
              <p className="text-gray-600 mt-2">
                Les nouvelles menaces et solutions de sécurité à considérer.
              </p>
              <div className="mt-4">
                <button className="text-blue-600 font-semibold">S'inscrire →</button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Masterclass</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Masterclass Sessions */}
            <div className="border rounded-lg p-4">
              <span className="text-sm font-semibold text-green-600">En cours</span>
              <h3 className="text-xl font-semibold mt-2">Leadership Digital</h3>
              <p className="text-gray-600 mt-2">
                Programme de 6 semaines sur le leadership à l'ère du digital.
              </p>
              <div className="mt-4">
                <button className="text-green-600 font-semibold">En savoir plus →</button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <span className="text-sm font-semibold text-orange-600">Bientôt</span>
              <h3 className="text-xl font-semibold mt-2">Transformation Cloud</h3>
              <p className="text-gray-600 mt-2">
                Stratégies de migration et gestion des infrastructures cloud.
              </p>
              <div className="mt-4">
                <button className="text-orange-600 font-semibold">Liste d'attente →</button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Webinaires Enregistrés</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Past Webinars */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Gouvernance des Données</h3>
              <p className="text-sm text-gray-600 mt-2">
                Best practices et réglementation
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Agilité à l'échelle</h3>
              <p className="text-sm text-gray-600 mt-2">
                Transformation des grandes organisations
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Innovation IT</h3>
              <p className="text-sm text-gray-600 mt-2">
                Technologies émergentes
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}