// Navbar rendered globally in App.tsx
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Video, Album, Calendar, MapPin, ChevronLeft, ChevronRight, X, Download, Share2 } from "lucide-react";
import { Link } from "wouter";

type MediaType = 'all' | 'photos' | 'videos' | 'albums';

interface GalleryItem {
  id: number;
  title: string;
  type: 'photo' | 'video' | 'album';
  thumbnail: string;
  event: string;
  date: string;
  location: string;
  count?: number;
}

const EvenementsGalerie: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<MediaType>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Forum Annuel 2024',
      type: 'album',
      thumbnail: '/images/events/forum-2024.jpg',
      event: 'Forum Annuel des DSI',
      date: '15-16 Novembre 2024',
      location: 'Hôtel Carlton, Antananarivo',
      count: 124
    },
    {
      id: 2,
      title: 'Atelier Cybersécurité',
      type: 'album',
      thumbnail: '/images/events/cybersecurite.jpg',
      event: 'Atelier Pratique',
      date: '22 Novembre 2024',
      location: 'Espace DSI, Antananarivo',
      count: 87
    },
    {
      id: 3,
      title: 'Conférence Cloud',
      type: 'album',
      thumbnail: '/images/events/cloud-seminar.jpg',
      event: 'Séminaire Technologique',
      date: '6 Décembre 2024',
      location: 'Hôtel Colbert, Antananarivo',
      count: 56
    },
    {
      id: 4,
      title: 'Afterwork Networking',
      type: 'photo',
      thumbnail: '/images/events/afterwork.jpg',
      event: 'Rencontre des membres',
      date: '29 Novembre 2024',
      location: 'Le Louvre, Antananarivo'
    },
    {
      id: 5,
      title: 'Keynote Transformation Numérique',
      type: 'video',
      thumbnail: '/images/events/conference-transformation.jpg',
      event: 'Conférence Annuelle',
      date: '15 Novembre 2024',
      location: 'Hôtel Carlton, Antananarivo'
    },
    {
      id: 6,
      title: 'Remise des Prix',
      type: 'photo',
      thumbnail: '/images/events/remise-prix.jpg',
      event: 'Gala des Trophées IT',
      date: '16 Novembre 2024',
      location: 'Hôtel Carlton, Antananarivo'
    },
    {
      id: 7,
      title: 'Workshop Agile',
      type: 'album',
      thumbnail: '/images/events/agile.jpg',
      event: 'Formation Méthodologies Agiles',
      date: '13 Décembre 2024',
      location: 'Espace DSI, Antananarivo',
      count: 42
    },
    {
      id: 8,
      title: 'Table Ronde IA',
      type: 'video',
      thumbnail: '/images/events/ia.jpg',
      event: 'Conférence sur l\'IA',
      date: '20 Décembre 2024',
      location: 'En ligne'
    },
    {
      id: 9,
      title: 'Atelier Data',
      type: 'album',
      thumbnail: '/images/events/data-management.jpg',
      event: 'Gestion des Données',
      date: '29 Novembre 2024',
      location: 'Espace DSI, Antananarivo',
      count: 63
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'photo';
    if (activeFilter === 'videos') return item.type === 'video';
    if (activeFilter === 'albums') return item.type === 'album';
    return true;
  });

  const openLightbox = (item: GalleryItem) => {
    const index = galleryItems.findIndex(i => i.id === item.id);
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigate = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    setCurrentIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  const getItemTypeIcon = (type: string) => {
    switch (type) {
      case 'album':
        return <Album className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      default:
        return <ImageIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-[var(--header-footer)] to-[var(--primary)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerie Médias</h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
              Revivez les moments forts de nos événements passés
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Button 
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                onClick={() => setActiveFilter('all')}
              >
                Tous
              </Button>
              <Button 
                variant={activeFilter === 'photos' ? 'default' : 'outline'}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                onClick={() => setActiveFilter('photos')}
              >
                <ImageIcon className="w-4 h-4 mr-2" /> Photos
              </Button>
              <Button 
                variant={activeFilter === 'videos' ? 'default' : 'outline'}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                onClick={() => setActiveFilter('videos')}
              >
                <Video className="w-4 h-4 mr-2" /> Vidéos
              </Button>
              <Button 
                variant={activeFilter === 'albums' ? 'default' : 'outline'}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                onClick={() => setActiveFilter('albums')}
              >
                <Album className="w-4 h-4 mr-2" /> Albums
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-lg transition-shadow border border-[var(--border)] cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" 
                       style={{ backgroundImage: `url(${item.thumbnail})` }}>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <div className="flex items-center text-white/80 text-sm mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-3">{item.date}</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-1.5">
                    {getItemTypeIcon(item.type)}
                  </div>
                  {item.type === 'album' && (
                    <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                      <ImageIcon className="w-3 h-3 mr-1" /> {item.count} photos
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-[var(--header-footer)] line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-[var(--foreground)]">{item.event}</p>
                    </div>
                    <div className="text-xs text-[var(--foreground)] flex items-center">
                      {getItemTypeIcon(item.type)}
                      <span className="ml-1 capitalize">{item.type}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mb-4">
                <ImageIcon className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-medium text-[var(--header-footer)]">Aucun élément trouvé</h3>
              <p className="text-[var(--foreground)] mt-1">Aucun média ne correspond à votre sélection.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)]"
                onClick={() => setActiveFilter('all')}
              >
                Afficher tous les médias
              </Button>
            </div>
          )}
        </section>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={() => navigate('prev')}
              className="absolute left-4 md:left-8 text-white hover:text-gray-300 p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="max-w-4xl w-full mx-auto">
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                <img 
                  src={selectedItem.thumbnail} 
                  alt={selectedItem.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {selectedItem.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
                    <p className="text-gray-300">{selectedItem.event}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                      <Download className="w-4 h-4 mr-2" /> Télécharger
                    </Button>
                    <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                      <Share2 className="w-4 h-4 mr-2" /> Partager
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-400 mt-2">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{selectedItem.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{selectedItem.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('next')}
              className="absolute right-4 md:right-8 text-white hover:text-gray-300 p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Vous avez des photos ou vidéos de nos événements ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Partagez-les avec nous en utilisant le hashtag #ClubDSIMadagascar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-gray-100 hover:text-[var(--primary)]">
                Voir plus sur Instagram
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Partager mes photos
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EvenementsGalerie;
