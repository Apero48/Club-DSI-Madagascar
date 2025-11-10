// Navbar rendered globally in App.tsx
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
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="bg-[var(--header-footer)] text-[var(--header-footer-foreground)] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Adhésion au Club</h1>
            <p className="text-lg mt-2 text-[var(--muted-foreground)]">Rejoignez notre communauté d'experts</p>
          </div>
        </div>
        
        {/* Message de confirmation */}
        {formData.nom && formData.prenom && (
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Merci {formData.prenom} {formData.nom} !</strong>
              <span className="block sm:inline"> Votre demande d'adhésion a été envoyée avec succès.</span>
            </div>
          </div>
        )}

        {/* Avantages */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-3">Avantages de l'adhésion</h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Réseau & Partage", 
                desc: "Accédez à un réseau national de pairs et partagez vos expériences en confiance.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              },
              { 
                title: "Développement Professionnel", 
                desc: "Formations, webinaires et masterclass animés par des experts reconnus.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              },
              { 
                title: "Influence & Plaidoyer", 
                desc: "Portez collectivement les enjeux de la communauté DSI auprès des institutions.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              },
              { 
                title: "Ressources Opérationnelles", 
                desc: "Bibliothèque de ressources exclusives : modèles, études, benchmarks.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              },
              { 
                title: "Mentorat & Visibilité", 
                desc: "Programme de mentorat et tribune pour publier votre expertise.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              },
              { 
                title: "Réduction des Coûts", 
                desc: "Retours d'expérience et pouvoir de négociation accrue avec les fournisseurs.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              }
            ].map((avantage, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow border border-[var(--border)]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-[var(--accent)] text-[var(--primary)]">
                      {avantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--header-footer)]">{avantage.title}</h3>
                  </div>
                  <p className="text-[var(--foreground)] flex-grow">{avantage.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Critères d'éligibilité */}
        <section className="bg-[var(--accent)] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-3">Critères d'Éligibilité</h2>
              <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
            </div>
            <div className="bg-[var(--card)] p-8 rounded-lg border border-[var(--border)] shadow-sm">
              <ul className="space-y-4">
                {[
                  "Avoir une responsabilité au sein de la DSI d'une entreprise œuvrant sur le territoire Malgache",
                  "L'activité principale ne doit pas être fournisseur dans le domaine des TICs",
                  "Avoir la nationalité Malgache ou de nationalité étrangère résident à Madagascar",
                  "Être âgé(e) de 25 ans au minimum",
                  "Approuver le Statut et le Règlement Intérieur de l'association",
                  "Payer la cotisation annuelle"
                ].map((critere, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <span className="text-[var(--foreground)] pt-1.5">{critere}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Button 
                  type="button" 
                  onClick={() => document.getElementById('formulaire-adhesion')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
                >
                  Remplir le formulaire d'adhésion
                </Button>
                <p className="text-sm text-[var(--muted-foreground)] mt-3">
                  En cliquant sur ce bouton, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Politique de cotisation */}
        <section id="formulaire-adhesion" className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-3">Formulaire d'Adhésion</h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
            <p className="text-[var(--foreground)] max-w-3xl mx-auto mb-8">
              Complétez ce formulaire pour soumettre votre demande d'adhésion. Notre équipe vous contactera dans les plus brefs délais.
            </p>
          </div>
          
          <Card className="p-8 border border-[var(--border)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-[var(--foreground)] mb-1">Prénom *</label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-[var(--foreground)] mb-1">Nom *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1">Email professionnel *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="fonction" className="block text-sm font-medium text-[var(--foreground)] mb-1">Fonction *</label>
                  <input
                    type="text"
                    id="fonction"
                    name="fonction"
                    value={formData.fonction}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Votre poste actuel"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organisation" className="block text-sm font-medium text-[var(--foreground)] mb-1">Organisation *</label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Nom de votre entreprise ou organisation"
                />
              </div>

              <div>
                <label htmlFor="domaine" className="block text-sm font-medium text-[var(--foreground)] mb-1">Domaine d'expertise *</label>
                <select
                  id="domaine"
                  name="domaine"
                  value={formData.domaine}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white"
                >
                  <option value="">Sélectionnez un domaine</option>
                  <option value="gouvernance">Gouvernance SI</option>
                  <option value="securite">Sécurité informatique</option>
                  <option value="infrastructure">Infrastructure & Cloud</option>
                  <option value="donnees">Données & Analytics</option>
                  <option value="transformation">Transformation numérique</option>
                  <option value="autre">Autre domaine</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-1">Message (optionnel)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Présentez-vous et expliquez votre intérêt pour le Club DSI Madagascar..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="conditions"
                    name="conditions"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-[var(--border)] rounded"
                  />
                </div>
                <label htmlFor="conditions" className="ml-2 block text-sm text-[var(--foreground)]">
                  J'accepte les <a href="/conditions" className="text-[var(--primary)] hover:underline">conditions générales</a> et la <a href="/confidentialite" className="text-[var(--primary)] hover:underline">politique de confidentialité</a> *
                </label>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white py-3 px-6 rounded-md text-lg font-medium transition-colors"
                >
                  Envoyer ma demande d'adhésion
                </Button>
                <p className="text-sm text-[var(--muted-foreground)] mt-3 text-center">
                  Nous traiterons votre demande dans les plus brefs délais.
                </p>
              </div>
            </form>
          </Card>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-3">Politique de Cotisation</h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {/* Droits d'adhésion */}
            <Card className="p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--accent)] text-[var(--primary)] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--header-footer)] mb-3">1. Droits d'Adhésion (une seule fois)</h3>
                  <p className="text-[var(--foreground)] mb-2"><strong>Montant :</strong> 100 000 à 200 000 MGA</p>
                  <p className="text-[var(--muted-foreground)]">Couvre les frais administratifs, la création du compte membre et l'accès initial aux ressources.</p>
                </div>
              </div>
            </Card>

            {/* Cotisation annuelle */}
            <Card className="p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--accent)] text-[var(--primary)] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--header-footer)] mb-4">2. Cotisation Annuelle (renouvelable)</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-[var(--accent)] p-4 rounded-lg">
                      <h4 className="font-semibold text-[var(--header-footer)] mb-2">Membres Institutionnels</h4>
                      <ul className="space-y-2 text-[var(--foreground)] ml-4">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Grandes entreprises / ministères : <span className="font-semibold">800 000 à 1 200 000 MGA / an</span></span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>PME / établissements publics : <span className="font-semibold">400 000 à 700 000 MGA / an</span></span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[var(--accent)] p-4 rounded-lg">
                      <h4 className="font-semibold text-[var(--header-footer)] mb-2">Membres Individuels</h4>
                      <ul className="space-y-2 text-[var(--foreground)] ml-4">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>DSI / RSSI / CTO : <span className="font-semibold">200 000 à 400 000 MGA / an</span></span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Jeunes DSI ou membres associés : <span className="font-semibold">100 000 à 200 000 MGA / an</span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Membres bienfaiteurs */}
            <Card className="p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--accent)] text-[var(--primary)] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--header-footer)] mb-3">3. Membres Bienfaiteurs ou Sponsors</h3>
                  <p className="text-[var(--foreground)] mb-3"><strong>Cotisation libre :</strong> À partir de 2 000 000 MGA / an</p>
                  <p className="text-[var(--muted-foreground)] mb-4">Avec contreparties de visibilité :</p>
                  <ul className="space-y-2 text-[var(--foreground)] ml-4">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span>Logo sur le site et les supports du Club</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span>Priorité pour les événements</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span>Invitations VIP aux forums et ateliers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
