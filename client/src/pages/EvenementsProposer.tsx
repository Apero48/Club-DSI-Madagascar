import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, User, Mail, Info, ArrowRight } from "lucide-react";

type EventType = 'conference' | 'workshop' | 'webinar' | 'meetup' | 'other';

interface EventFormData {
  title: string;
  type: EventType;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  maxParticipants: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  additionalInfo: string;
  termsAccepted: boolean;
}

const EvenementsProposer: React.FC = () => {
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    type: 'conference',
    description: '',
    date: '',
    time: '',
    duration: '2',
    location: '',
    maxParticipants: 20,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    additionalInfo: '',
    termsAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simuler un envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Afficher le message de succès
      setSubmitSuccess(true);
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({
          title: '',
          type: 'conference',
          description: '',
          date: '',
          time: '',
          duration: '2',
          location: '',
          maxParticipants: 20,
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          additionalInfo: '',
          termsAccepted: false
        });
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypes = [
    { value: 'conference', label: 'Conférence' },
    { value: 'workshop', label: 'Atelier pratique' },
    { value: 'webinar', label: 'Webinaire' },
    { value: 'meetup', label: 'Rencontre' },
    { value: 'other', label: 'Autre type d\'événement' },
  ];

  const durationOptions = [
    { value: '0.5', label: '30 minutes' },
    { value: '1', label: '1 heure' },
    { value: '1.5', label: '1h30' },
    { value: '2', label: '2 heures' },
    { value: '3', label: '3 heures' },
    { value: '4', label: '4 heures' },
    { value: '8', label: 'Journée complète' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Proposer un événement</h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
              Soumettez votre proposition d'événement au Club DSI Madagascar
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Voir les directives
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Critères de sélection
              </Button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          {submitSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-8 flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-medium">Merci pour votre proposition !</p>
                <p className="text-sm mt-1">Votre événement a été soumis avec succès. Notre équipe l'examinera et vous recontactera sous peu.</p>
              </div>
            </div>
          )}

          <Card className="border border-[var(--border)] overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-6 py-4">
              <h2 className="text-xl font-semibold flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Informations sur l'événement
              </h2>
              <p className="text-sm text-white/90 mt-1">Remplissez les détails de votre proposition d'événement</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-8">
                {/* Titre et Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Titre de l'événement *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        placeholder="Ex: Atelier sur la cybersécurité"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Type d'événement *
                    </label>
                    <div className="relative">
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent appearance-none"
                        required
                      >
                        {eventTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                    Description détaillée *
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    Décrivez en détail le contenu de l'événement, les objectifs et les bénéfices pour les participants
                  </p>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border border-[var(--border)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Décrivez votre événement en détail..."
                    required
                  />
                </div>

                {/* Date, Heure et Durée */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Date prévue *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-[var(--border)] rounded-lg pl-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Heure de début *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] rounded-lg pl-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Durée estimée *
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full border border-[var(--border)] rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      required
                    >
                      {durationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Lieu et Participants */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Lieu prévu *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] rounded-lg pl-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        placeholder="Adresse complète ou en ligne"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="maxParticipants" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Nombre maximum de participants
                    </label>
                    <input
                      type="number"
                      id="maxParticipants"
                      name="maxParticipants"
                      min="1"
                      max="1000"
                      value={formData.maxParticipants}
                      onChange={handleChange}
                      className="w-full border border-[var(--border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="50"
                    />
                  </div>
                </div>

                {/* Informations de contact */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-[var(--header-footer)] mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-[var(--primary)]" />
                    Votre contact
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                        Votre nom complet *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contactEmail" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                        Adresse email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="contactEmail"
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleChange}
                          className="w-full border border-[var(--border)] rounded-lg pl-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Téléphone (recommandé)
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className="w-full md:w-1/2 border border-[var(--border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="+261 34 00 000 00"
                    />
                  </div>
                </div>

                {/* Informations supplémentaires */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-[var(--header-footer)] mb-4">
                    Informations complémentaires
                  </h3>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-[var(--header-footer)] mb-2">
                      Autres détails ou exigences particulières
                    </label>
                    <p className="text-xs text-gray-500 mb-2">
                      Équipements nécessaires, prérequis pour les participants, format de l'événement, etc.
                    </p>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full border border-[var(--border)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="Décrivez toute information supplémentaire..."
                    />
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="termsAccepted"
                          name="termsAccepted"
                          type="checkbox"
                          checked={formData.termsAccepted}
                          onChange={handleChange}
                          className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="termsAccepted" className="font-medium text-[var(--header-footer)]">
                          Je certifie que les informations fournies sont exactes
                        </label>
                        <p className="text-gray-500">
                          En soumettant ce formulaire, vous acceptez que le Club DSI Madagascar traite vos informations conformément à notre politique de confidentialité.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boutons de soumission */}
                <div className="pt-6 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]"
                    onClick={() => {
                      // Réinitialiser le formulaire
                      setFormData({
                        title: '',
                        type: 'conference',
                        description: '',
                        date: '',
                        time: '',
                        duration: '2',
                        location: '',
                        maxParticipants: 20,
                        contactName: '',
                        contactEmail: '',
                        contactPhone: '',
                        additionalInfo: '',
                        termsAccepted: false
                      });
                    }}
                  >
                    Réinitialiser
                  </Button>
                  
                  <Button
                    type="submit"
                    className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <span>Soumettre la proposition</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent)] py-12 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[var(--header-footer)] mb-4">Vous avez des questions ?</h2>
            <p className="text-[var(--header-footer)]/90 mb-6">
              Notre équipe est là pour vous aider à finaliser votre proposition d'événement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-white/90">
                Consulter les FAQ
              </Button>
              <Button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white">
                Nous contacter
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EvenementsProposer;
