import { Card } from "@/components/ui/card";

export default function Historique() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Historique & Contexte</h1>
      <Card className="p-6">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Notre Histoire</h2>
          <p className="mb-4">
            Le Club des DSI de Madagascar a été fondé avec la vision de créer une communauté dynamique
            de dirigeants des systèmes d'information, unis pour relever les défis de la transformation
            numérique à Madagascar.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Contexte</h2>
          <p className="mb-4">
            Dans un environnement technologique en constante évolution, le besoin de collaboration et
            de partage d'expériences entre les DSI est devenu crucial pour le développement du
            secteur numérique à Madagascar.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Dates clés</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>2020 : Création du Club des DSI</li>
              <li>2021 : Premier forum annuel des DSI</li>
              <li>2022 : Lancement des programmes de mentorat</li>
              <li>2023 : Expansion des partenariats internationaux</li>
              <li>2024 : Mise en place de la plateforme collaborative</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}