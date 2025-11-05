import { Card } from "@/components/ui/card";

export default function Vision() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Vision, Mission & Objectifs</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Notre Vision</h2>
          <p className="mb-4">
            Être le catalyseur de l'excellence numérique à Madagascar, en fédérant les DSI pour 
            créer un écosystème digital innovant et performant.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
          <p className="mb-4">
            Accompagner les DSI dans leur rôle de leaders de la transformation numérique en :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Favorisant le partage d'expériences et de bonnes pratiques</li>
            <li>Développant les compétences et l'expertise</li>
            <li>Promouvant l'innovation et la collaboration</li>
            <li>Représentant la profession auprès des instances décisionnelles</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Nos Objectifs</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3">Objectifs Stratégiques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Renforcer la position des DSI dans la gouvernance des entreprises</li>
                <li>Développer un réseau d'influence national et international</li>
                <li>Promouvoir l'innovation technologique à Madagascar</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Objectifs Opérationnels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Organiser des événements et formations de qualité</li>
                <li>Faciliter le partage de ressources et d'expertises</li>
                <li>Créer des opportunités de networking et de collaboration</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}