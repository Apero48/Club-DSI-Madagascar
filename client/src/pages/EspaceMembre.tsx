import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EspaceMembre() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Espace Membre Sécurisé</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Connexion Requise</h2>
          <p className="mb-6">
            Veuillez vous connecter pour accéder à l'espace membre sécurisé du Club des DSI.
          </p>
          <div className="flex gap-4">
            <Button>Se connecter</Button>
            <Button variant="outline">S'inscrire</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Services Disponibles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">Documents Internes</h3>
              <p className="text-sm text-gray-600">Accédez aux documents réservés aux membres</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">Forum Privé</h3>
              <p className="text-sm text-gray-600">Échangez avec les autres membres du club</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">Ressources Exclusives</h3>
              <p className="text-sm text-gray-600">Téléchargez nos guides et templates</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Avantages Membres</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accès illimité aux ressources du club</li>
            <li>Participation aux événements exclusifs</li>
            <li>Networking avec les autres membres</li>
            <li>Support personnalisé</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}