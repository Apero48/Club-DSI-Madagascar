// Navbar rendered globally in App.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Envoyer par email
    alert("Merci pour votre message ! Nous vous recontacterons sous peu.");
    setFormData({ nom: "", email: "", objet: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Nous Contacter</h1>
            <p className="text-lg mt-2">Nous sommes à votre écoute pour toute question ou demande</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Email</h3>
              <a href="mailto:contact@club-dsi.mg" className="text-blue-600 hover:text-blue-700">
                contact@club-dsi.mg
              </a>
            </Card>

            {/* Téléphone */}
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Téléphone</h3>
              <p className="text-gray-700">+261 (0)32 00 000 00</p>
            </Card>

            {/* Localisation */}
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Adresse</h3>
              <p className="text-gray-700">Antananarivo<br />Madagascar</p>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Formulaire de Contact</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Objet *</label>
                    <input
                      type="text"
                      name="objet"
                      value={formData.objet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                      placeholder="Votre message..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 font-semibold">
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Informations supplémentaires */}
            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Nos Réseaux Sociaux</h2>
              <Card className="p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Suivez-nous</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 p-3 bg-blue-50 rounded hover:bg-blue-100 transition">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">LinkedIn: Club des DSI de Madagascar</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 bg-red-50 rounded hover:bg-red-100 transition">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-gray-700">YouTube: ClubDSI Channel</span>
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Horaires de Bureau</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Lundi - Vendredi :</strong> 08:00 - 17:00</p>
                  <p><strong>Samedi - Dimanche :</strong> Fermé</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Nous répondons généralement aux messages dans les 24 heures ouvrables.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
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

 
