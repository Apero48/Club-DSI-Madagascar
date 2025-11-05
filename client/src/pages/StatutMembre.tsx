import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatutMembre() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Statut & Charte du Membre</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Conditions d'adhésion</h2>
            <p className="text-gray-700">
              Pour devenir membre du Club des DSI de Madagascar, vous devez :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Être en poste en tant que DSI ou responsable informatique</li>
              <li>Exercer dans une entreprise ou organisation basée à Madagascar</li>
              <li>Partager les valeurs du Club</li>
              <li>S'acquitter de la cotisation annuelle</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Engagements des membres</h2>
            <p className="text-gray-700">
              En tant que membre du Club, vous vous engagez à :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Participer activement aux réunions et événements</li>
              <li>Partager votre expertise et vos expériences</li>
              <li>Respecter la confidentialité des échanges</li>
              <li>Promouvoir les valeurs du Club</li>
              <li>Payer régulièrement votre cotisation</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Avantages des membres</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accès aux événements exclusifs du Club</li>
              <li>Réseautage avec d'autres professionnels du secteur</li>
              <li>Accès aux ressources et documents partagés</li>
              <li>Tarifs préférentiels sur les formations</li>
              <li>Participation aux groupes de travail thématiques</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <a 
              href="/adhesion" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Devenir membre
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
