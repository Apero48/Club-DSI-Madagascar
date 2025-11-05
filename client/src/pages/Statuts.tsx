import { Card } from "@/components/ui/card";

export default function Statuts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Statuts & Charte du membre</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Statuts de l'Association</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Les statuts du Club des DSI définissent le cadre légal et organisationnel 
              de notre association. Ils précisent nos objectifs, notre structure et nos 
              modalités de fonctionnement.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Points clés des statuts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Forme juridique de l'association</li>
              <li>Objectifs et missions</li>
              <li>Conditions d'adhésion</li>
              <li>Structure de gouvernance</li>
              <li>Modalités de prise de décision</li>
              <li>Gestion financière</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Charte du Membre (PDP)</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              La Charte du Membre définit les droits, devoirs et responsabilités de chaque 
              membre du Club des DSI. Elle incarne nos valeurs et guide notre comportement 
              professionnel.
            </p>

            <h3 className="text-xl font-semibold mb-3">Engagements des membres</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respect des valeurs du Club</li>
              <li>Participation active aux activités</li>
              <li>Partage d'expérience et d'expertise</li>
              <li>Confidentialité des informations partagées</li>
              <li>Contribution au développement du réseau</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-3">Droits des membres</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accès aux ressources et événements</li>
              <li>Participation aux décisions</li>
              <li>Bénéfice des services du Club</li>
              <li>Accès à l'espace membre</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Téléchargeables</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="#" className="block p-4 border rounded hover:bg-gray-50">
              <h3 className="font-semibold">Statuts complets (PDF)</h3>
              <p className="text-sm text-gray-600">Version à jour des statuts de l'association</p>
            </a>
            <a href="#" className="block p-4 border rounded hover:bg-gray-50">
              <h3 className="font-semibold">Charte du membre (PDF)</h3>
              <p className="text-sm text-gray-600">Charte détaillée des droits et devoirs</p>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}