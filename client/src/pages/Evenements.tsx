// Navbar rendered globally in App.tsx
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, MapPin, Users, UserPlus, Image as ImageIcon, MessageSquare } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
  image: string;
}

interface QuickLink {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const Evenements: React.FC = () => {
  const evenements: Event[] = [
    {
      id: 1,
      title: "Conférence: Transformation Numérique",
      date: "15 Novembre 2024",
      location: "Antananarivo, Madagascar",
      attendees: 150,
      description: "Une conférence sur les enjeux de la transformation numérique à Madagascar.",
      image: "/images/events/conference-transformation.jpg"
    },
    {
      id: 2,
      title: "Atelier: Cybersécurité et Protection des données",
      date: "22 Novembre 2024",
      location: "Antananarivo, Madagascar",
      attendees: 80,
      description: "Apprenez les meilleures pratiques en matière de cybersécurité et protection des données.",
      image: "/images/events/cybersecurite.jpg"
    },
    {
      id: 3,
      title: "Networking: Afterwork DSI",
      date: "29 Novembre 2024",
      location: "Antananarivo, Madagascar",
      attendees: 200,
      description: "Un moment de détente et de networking entre les membres du club.",
      image: "/images/events/afterwork.jpg"
    },
    {
      id: 4,
      title: "Séminaire: Cloud Computing et Infrastructure",
      date: "6 Décembre 2024",
      location: "Antananarivo, Madagascar",
      attendees: 120,
      description: "Explorez les dernières tendances du cloud computing et de l'infrastructure IT.",
      image: "/images/events/cloud-seminar.jpg"
    },
  ];

  const quickLinks: QuickLink[] = [
    {
      title: "Agenda Complet",
      description: "Consultez tous nos événements à venir",
      icon: <Calendar className="w-6 h-6" />,
      link: "/evenements/agenda"
    },
    {
      title: "Forum Annuel",
      description: "Notre événement phare de l'année",
      icon: <MessageSquare className="w-6 h-6" />,
      link: "/evenements/forum-annuel"
    },
    {
      title: "Galerie Photos",
      description: "Revivez nos événements passés",
      icon: <ImageIcon className="w-6 h-6" />,
      link: "/evenements/galerie"
    },
    {
      title: "Proposer un Événement",
      description: "Soumettez votre idée d'événement",
      icon: <UserPlus className="w-6 h-6" />,
      link: "/evenements/proposer"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Événements du Club DSI</h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
              Découvrez nos conférences, ateliers et rencontres pour les professionnels du numérique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evenements/agenda">
                <Button size="lg" className="bg-white text-[var(--header-footer)] hover:bg-gray-100 hover:text-[var(--header-footer)]">
                  Voir l'agenda complet
                </Button>
              </Link>
              <Link href="/evenements/proposer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  Proposer un événement
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, index) => (
              <Link key={index} href={item.link}>
                <Card className="p-6 hover:shadow-md transition-shadow h-full flex flex-col items-center text-center border border-[var(--border)] cursor-pointer">
                  <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center mb-4 text-[var(--primary)]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">{item.title}</h3>
                  <p className="text-[var(--foreground)]">{item.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Prochains Événements */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[var(--header-footer)]">Prochains Événements</h2>
            <p className="text-[var(--foreground)] mt-2">Découvrez nos prochaines rencontres et inscrivez-vous</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evenements.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-[var(--border)]">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--primary)] mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">{event.title}</h3>
                  <p className="text-[var(--foreground)] mb-4">{event.description}</p>
                  <div className="flex items-center justify-between text-sm text-[var(--foreground)]">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} participants</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]"
                  >
                    En savoir plus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Vous organisez un événement ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Proposez-nous votre événement et bénéficiez de notre réseau de professionnels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evenements/proposer">
                <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-gray-100 hover:text-[var(--primary)]">
                  Proposer un événement
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Evenements;
