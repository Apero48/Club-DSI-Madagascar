// Navbar rendered globally in App.tsx
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface Event {
  id: number;
  type: string;
  color: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  link: string;
}

const EvenementsAgenda: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      type: "Conférence",
      color: "bg-[var(--primary)]",
      title: "Transformation Numérique",
      date: "15 Novembre 2024",
      time: "09:00 - 17:00",
      location: "Hôtel Carlton, Antananarivo",
      description: "Une journée complète dédiée à la transformation numérique des entreprises malgaches.",
      image: "/images/events/conference-transformation.jpg",
      link: "/evenements/transformation-numerique"
    },
    {
      id: 2,
      type: "Atelier",
      color: "bg-[var(--secondary)]",
      title: "Cybersécurité & PSSI",
      date: "22 Novembre 2024",
      time: "14:00 - 18:00",
      location: "Espace DSI, Antananarivo",
      description: "Atelier pratique sur la mise en place d'une Politique de Sécurité des Systèmes d'Information.",
      image: "/images/events/cybersecurite.jpg",
      link: "/evenements/cybersecurite-pssi"
    },
    {
      id: 3,
      type: "Webinaire",
      color: "bg-[#6B46C1]",
      title: "Data Management",
      date: "29 Novembre 2024",
      time: "10:00 - 12:30",
      location: "En ligne",
      description: "Webinaire sur les meilleures pratiques de gestion des données en entreprise.",
      image: "/images/events/data-management.jpg",
      link: "/evenements/data-management"
    },
    {
      id: 4,
      type: "Conférence",
      color: "bg-[var(--primary)]",
      title: "Cloud Computing",
      date: "6 Décembre 2024",
      time: "09:30 - 16:30",
      location: "Hôtel Colbert, Antananarivo",
      description: "Tout savoir sur les solutions cloud pour les entreprises malgaches.",
      image: "/images/events/cloud-computing.jpg",
      link: "/evenements/cloud-computing"
    },
    {
      id: 5,
      type: "Atelier",
      color: "bg-[var(--secondary)]",
      title: "Gestion de Projet Agile",
      date: "13 Décembre 2024",
      time: "09:00 - 17:00",
      location: "Espace DSI, Antananarivo",
      description: "Formation pratique aux méthodologies agiles pour les chefs de projet IT.",
      image: "/images/events/agile.jpg",
      link: "/evenements/gestion-projet-agile"
    },
    {
      id: 6,
      type: "Webinaire",
      color: "bg-[#6B46C1]",
      title: "Intelligence Artificielle",
      date: "20 Décembre 2024",
      time: "14:00 - 16:00",
      location: "En ligne",
      description: "Découvrez comment l'IA transforme les entreprises à Madagascar.",
      image: "/images/events/ia.jpg",
      link: "/evenements/intelligence-artificielle"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Agenda des Événements</h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
              Découvrez tous nos événements à venir et inscrivez-vous dès maintenant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evenements/proposer">
                <Button size="lg" className="bg-white text-[var(--header-footer)] hover:bg-gray-100 hover:text-[var(--header-footer)]">
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
        </div>

        {/* Filtres */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100">
              <span className="w-3 h-3 rounded-full bg-[var(--primary)]"></span>
              <span className="text-sm font-medium">Conférences</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100">
              <span className="w-3 h-3 rounded-full bg-[var(--secondary)]"></span>
              <span className="text-sm font-medium">Ateliers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100">
              <span className="w-3 h-3 rounded-full bg-[#6B46C1]"></span>
              <span className="text-sm font-medium">Webinaires</span>
            </div>
          </div>
        </section>

        {/* Liste des événements */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-[var(--border)]">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={`${event.color} text-white`}>{event.type}</Badge>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--header-footer)] mb-2">{event.title}</h3>
                  <p className="text-[var(--foreground)] text-sm mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-[var(--foreground)] mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--foreground)] mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <Link href={event.link}>
                    <Button variant="outline" className="w-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]">
                      En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Vous souhaitez organiser un événement ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Proposez-nous votre idée et bénéficiez de notre réseau de professionnels
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

export default EvenementsAgenda;
