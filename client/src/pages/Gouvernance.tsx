import { Card } from "@/components/ui/card";

export default function Gouvernance() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouvernance (C-vesel) & Administration</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Structure de Gouvernance</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Le Club des DSI est dirigé par un comité de gouvernance (C-vesel) qui assure
              la direction stratégique et opérationnelle de l'association.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Composition du C-vesel</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Président(e)</li>
              <li>Vice-président(e)</li>
              <li>Secrétaire général(e)</li>
              <li>Trésorier(e)</li>
              <li>Responsables des commissions thématiques</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Commissions Thématiques</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3">Commission Formation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Développement des programmes</li>
                <li>Coordination des formateurs</li>
                <li>Évaluation des besoins</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Commission Événements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Organisation du forum annuel</li>
                <li>Coordination des rencontres</li>
                <li>Gestion des partenariats</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Administration</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              L'équipe administrative assure le bon fonctionnement quotidien du Club et
              la mise en œuvre des décisions du C-vesel.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Services administratifs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secrétariat permanent</li>
              <li>Gestion des adhésions</li>
              <li>Communication</li>
              <li>Support technique</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}