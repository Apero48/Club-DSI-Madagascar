import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Download, FileText, BookOpen, Video } from "lucide-react";

export default function Ressources() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Ressources</h1>
            <p className="text-lg mt-2">Accédez à nos documents, guides et outils exclusifs</p>
          </div>
        </div>

        {/* Livres Blancs */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">📚 Livres Blancs & Guides Pratiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titre: "Guide de Gouvernance SI", desc: "Bonnes pratiques et recommandations" },
              { titre: "Manuel de la PSSI", desc: "Pour les institutions publiques" },
              { titre: "Livre Blanc Cybersécurité", desc: "Enjeux et stratégies" }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition">
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <h3 className="font-bold text-lg text-gray-800">{item.titre}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger (PDF)
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Modèles & Templates */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">📋 Modèles & Templates</h2>
            <p className="text-gray-700 mb-6">Téléchargement de modèles prêts à l'emploi :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Cahier des charges MOA/MOE",
                "Schémas d'architecture",
                "Fiches projet et fiches RACI",
                "Modèles de contrats SLA"
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <span className="font-semibold text-gray-800">{item}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Études & Rapports */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">📊 Études & Rapports</h2>
          <div className="space-y-4">
            {[
              "État des lieux des SI à Madagascar",
              "Indice de maturité numérique des institutions",
              "Benchmark des pratiques DSI à Madagascar",
              "Étude sectorielle : Transformation digitale en Afrique de l'Est"
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Vidéothèque */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">🎥 Vidéothèque & Podcasts</h2>
            <p className="text-gray-700 mb-6">
              Replay des webinaires, interviews de DSI, podcasts thématiques et contenus vidéo exclusifs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition">
                  <div className="h-40 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white">
                    <Video className="w-12 h-12" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Vidéo {item}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Contenu vidéo exclusif du Club DSI Madagascar.
                    </p>
                    <Button variant="outline" className="w-full">Regarder</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Liens Utiles */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">🔗 Liens Utiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { titre: "Ministère du Numérique", url: "#" },
              { titre: "AFD Digital Africa", url: "#" },
              { titre: "Réseau Francophone des DSI", url: "#" },
              { titre: "Portail e-Gov Madagascar", url: "#" }
            ].map((item, index) => (
              <a key={index} href={item.url} className="p-4 border border-gray-300 rounded hover:border-blue-600 hover:bg-blue-50 transition">
                <p className="font-semibold text-blue-700">{item.titre}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2025 Club des DSI de Madagascar. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

 
