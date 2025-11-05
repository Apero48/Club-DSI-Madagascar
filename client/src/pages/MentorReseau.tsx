import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MentorReseau() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mentorat & Réseau</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Programme de Mentorat</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Le programme de mentorat du Club des DSI permet aux membres expérimentés de 
              partager leurs connaissances et leur expérience avec les nouveaux DSI ou 
              ceux qui souhaitent développer leurs compétences.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Comment ça marche ?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Matching mentor-mentoré basé sur les profils et objectifs</li>
              <li>Sessions régulières de coaching personnalisé</li>
              <li>Suivi des progrès et objectifs</li>
              <li>Évaluation et feedback continus</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <Button>Devenir Mentor</Button>
              <Button variant="outline">Rechercher un Mentor</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Réseau Professionnel</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Notre réseau professionnel offre des opportunités uniques de connexion et 
              d'échange entre les DSI de Madagascar.
            </p>

            <h3 className="text-xl font-semibold mb-3">Avantages du Réseau</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Pour les Membres</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accès à un réseau d'experts</li>
                  <li>Partage d'expériences</li>
                  <li>Opportunités professionnelles</li>
                  <li>Collaboration sur des projets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pour les Entreprises</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visibilité accrue</li>
                  <li>Partenariats stratégiques</li>
                  <li>Accès aux talents</li>
                  <li>Veille technologique</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Événements de Networking</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">Petits-déjeuners DSI</h3>
              <p className="text-sm text-gray-600">Rencontres informelles mensuelles pour échanger sur les actualités du secteur</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">Afterworks Thématiques</h3>
              <p className="text-sm text-gray-600">Soirées networking autour de thématiques spécifiques</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">Speed Networking</h3>
              <p className="text-sm text-gray-600">Sessions de rencontres rapides entre professionnels</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}