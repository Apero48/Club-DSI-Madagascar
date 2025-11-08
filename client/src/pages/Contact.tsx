// Navbar rendered globally in App.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Clock } from "lucide-react";
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
      <main className="flex-1 pt-32">
        <div className="bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Nous Contacter</h1>
            <p className="text-lg mt-2 text-white/90">Nous sommes à votre écoute pour toute question ou demande</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <Card className="p-6 text-center border border-[var(--border)] hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-[var(--header-footer)] mb-2">Email</h3>
              <a href="mailto:contact@club-dsi.mg" className="text-[var(--primary)] hover:underline">
                contact@club-dsi.mg
              </a>
            </Card>

            {/* Téléphone */}
            <Card className="p-6 text-center border border-[var(--border)] hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-[var(--header-footer)] mb-2">Téléphone</h3>
              <p className="text-[var(--foreground)]">+261 (0)32 00 000 00</p>
            </Card>

            {/* Localisation */}
            <Card className="p-6 text-center border border-[var(--border)] hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--primary)]" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-[var(--header-footer)] mb-2">Adresse</h3>
              <p className="text-[var(--foreground)]">Antananarivo<br />Madagascar</p>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--header-footer)] mb-6">Formulaire de Contact</h2>
              <Card className="p-6 border border-[var(--border)]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--header-footer)] mb-2">Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--header-footer)] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--header-footer)] mb-2">Objet *</label>
                    <input
                      type="text"
                      name="objet"
                      value={formData.objet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--header-footer)] mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="Votre message..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 mt-2 py-2.5 text-base">
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Informations supplémentaires */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--header-footer)] mb-6">Nos Réseaux Sociaux</h2>
              <Card className="p-6 border border-[var(--border)]">
                <p className="text-[var(--foreground)] mb-6">
                  Suivez-nous sur les réseaux sociaux pour rester informé de nos actualités et événements.
                </p>
                <div className="flex gap-4 justify-center">
                  <a href="#" className="w-10 h-10 bg-[var(--accent)]/20 rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-[var(--accent)]/40 transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[var(--accent)]/20 rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-[var(--accent)]/40 transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </Card>

              <Card className="p-6 mt-6 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[var(--accent)]/20 rounded-lg">
                    <Clock className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--header-footer)]">Horaires de Bureau</h3>
                </div>
                <div className="space-y-2 text-[var(--foreground)]">
                  <p><strong>Lundi - Vendredi :</strong> 08:00 - 17:00</p>
                  <p><strong>Samedi - Dimanche :</strong> Fermé</p>
                  <p className="text-sm text-[var(--foreground)] mt-4">
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
    <footer className="bg-[var(--header-footer)] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2025 Club des DSI de Madagascar. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

 
