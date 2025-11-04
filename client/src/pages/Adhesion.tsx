import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { useState } from "react";

export default function Adhesion() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    fonction: "",
    organisation: "",
    email: "",
    domaine: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Envoyer les données par email et ajouter au tableau en backoffice
    alert("Merci pour votre demande d'adhésion ! Nous vous recontacterons sous peu.");
    setFormData({ nom: "", prenom: "", fonction: "", organisation: "", email: "", domaine: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Adhésion au Club</h1>
            <p className="text-lg mt-2">Rejoignez notre communauté d'experts</p>
          </div>
        </div>

        {/* Avantages */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Avantages de l'adhésion</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Réseau & Partage", desc: "Accédez à un réseau national de pairs et partagez vos expériences en confiance." },
              { title: "Développement Professionnel", desc: "Formations, webinaires et masterclass animés par des experts reconnus." },
              { title: "Influence & Plaidoyer", desc: "Portez collectivement les enjeux de la communauté DSI auprès des institutions." },
              { title: "Ressources Opérationnelles", desc: "Bibliothèque de ressources exclusives : modèles, études, benchmarks." },
              { title: "Mentorat & Visibilité", desc: "Programme de mentorat et tribune pour publier votre expertise." },
              { title: "Réduction des Coûts", desc: "Retours d'expérience et pouvoir de négociation accrue avec les fournisseurs." }
            ].map((avantage, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-blue-700 mb-2">{avantage.title}</h3>
                    <p className="text-gray-700">{avantage.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Critères d'éligibilité */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Critères d'Éligibilité</h2>
            <div className="bg-white p-8 rounded-lg border border-blue-200">
              <ul className="space-y-4">
                {[
                  "Avoir une responsabilité au sein de la DSI d'une entreprise œuvrant sur le territoire Malgache",
                  "L'activité principale ne doit pas être fournisseur dans le domaine des TICs",
                  "Avoir la nationalité Malgache ou de nationalité étrangère résident à Madagascar",
                  "Être âgé(e) de 25 ans au minimum",
                  "Approuver le Statut et le Règlement Intérieur de l'association",
                  "Payer la cotisation annuelle"
                ].map((critere, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{critere}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Politique de cotisation */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Politique de Cotisation</h2>
          
          <div className="space-y-6">
            {/* Droits d'adhésion */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">1. Droits d'Adhésion (une seule fois)</h3>
              <p className="text-gray-700 mb-2"><strong>Montant :</strong> 100 000 à 200 000 MGA</p>
              <p className="text-gray-600">Couvre les frais administratifs, la création du compte membre et l'accès initial aux ressources.</p>
            </Card>

            {/* Cotisation annuelle */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">2. Cotisation Annuelle (renouvelable)</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Membres Institutionnels</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Grandes entreprises / ministères : 800 000 à 1 200 000 MGA / an</li>
                    <li>• PME / établissements publics : 400 000 à 700 000 MGA / an</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Membres Individuels</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• DSI / RSSI / CTO : 200 000 à 400 000 MGA / an</li>
                    <li>• Jeunes DSI ou membres associés : 100 000 à 200 000 MGA / an</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Membres bienfaiteurs */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">3. Membres Bienfaiteurs ou Sponsors</h3>
              <p className="text-gray-700 mb-3"><strong>Cotisation libre :</strong> À partir de 2 000 000 MGA / an</p>
              <p className="text-gray-600 mb-3">Avec contreparties de visibilité :</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>✓ Logo sur le site et les supports du Club</li>
                <li>✓ Priorité pour les événements</li>
                <li>✓ Invitations VIP aux forums et ateliers</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Formulaire d'adhésion */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Formulaire d'Adhésion</h2>
            
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fonction / Poste *</label>
                  <input
                    type="text"
                    name="fonction"
                    value={formData.fonction}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    placeholder="Ex: Directeur des Systèmes d'Information"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Organisation / Entreprise *</label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    placeholder="Votre entreprise ou institution"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Professionnel *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    placeholder="votre.email@entreprise.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Domaine d'Intérêt</label>
                  <select
                    name="domaine"
                    value={formData.domaine}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Sélectionnez un domaine</option>
                    <option value="cybersecurite">Cybersécurité</option>
                    <option value="cloud">Cloud & Infrastructure</option>
                    <option value="data">Data & Analytics</option>
                    <option value="ia">Intelligence Artificielle</option>
                    <option value="gouvernance">Gouvernance IT</option>
                    <option value="transformation">Transformation Digitale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message de Motivation</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    placeholder="Dites-nous pourquoi vous souhaitez rejoindre le Club DSI..."
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="conditions"
                    required
                    className="w-4 h-4 border border-gray-300 rounded"
                  />
                  <label htmlFor="conditions" className="text-sm text-gray-700">
                    J'approuve le Statut et le Règlement Intérieur du Club *
                  </label>
                </div>

                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 font-semibold">
                  Soumettre ma demande d'adhésion
                </Button>
              </form>
            </Card>
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

 
