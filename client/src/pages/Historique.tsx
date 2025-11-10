import { Card } from "@/components/ui/card";

export default function Historique() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Historique & Contexte</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez l'histoire et les fondements du Club des DSI de Madagascar
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-[var(--header-footer)] mb-4">Notre Histoire</h2>
              </div>
              <p className="text-[var(--foreground)] leading-relaxed text-center">
                Le Club des DSI de Madagascar a été fondé avec la vision de créer une communauté dynamique
                de dirigeants des systèmes d'information, unis pour relever les défis de la transformation
                numérique à Madagascar.
              </p>
            </Card>

            <Card className="p-8 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-[var(--header-footer)] mb-4">Notre Contexte</h2>
              </div>
              <p className="text-[var(--foreground)] leading-relaxed text-center">
                Dans un environnement technologique en constante évolution, le besoin de collaboration et
                de partage d'expériences entre les DSI est devenu crucial pour le développement du
                secteur numérique à Madagascar.
              </p>
            </Card>
          </div>

          <div className="mt-16">
            <div className="bg-blue-50 p-6 rounded-lg mb-12 border border-blue-100">
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Notre parcours en quelques dates clés</h3>
              <p className="text-[var(--foreground)]">
                Découvrez les moments forts qui ont marqué l'évolution du Club des DSI de Madagascar depuis sa création en 2025.
                Notre engagement pour l'excellence et l'innovation dans le domaine des systèmes d'information à Madagascar.
              </p>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Notre Parcours</h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
            </div>

            <div className="relative">
              {/* Ligne de temps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -ml-px"></div>
              
              {/* Événements */}
              <div className="space-y-12">
                {[
                  { 
                    year: '2025', 
                    title: 'Création du Club des DSI', 
                    description: 'Lancement officiel du Club des DSI de Madagascar avec 30 membres fondateurs issus des plus grandes entreprises et institutions du pays.' 
                  },
                  { 
                    year: '2025', 
                    title: 'Premier Conseil d\'Administration', 
                    description: 'Élection du premier bureau exécutif et mise en place de la gouvernance du Club.' 
                  },
                  { 
                    year: '2025', 
                    title: 'Premier Forum Annuel', 
                    description: 'Organisation du premier forum national des DSI avec plus de 200 participants, sous le thème "La transformation numérique au service du développement économique de Madagascar".' 
                  },
                  { 
                    year: '2026', 
                    title: 'Lancement des groupes de travail', 
                    description: 'Mise en place des premiers groupes de travail thématiques : Cybersécurité, Cloud & Infrastructures, et Transformation Digitale.' 
                  },
                  { 
                    year: '2026', 
                    title: 'Partenariats stratégiques', 
                    description: 'Signature de conventions de partenariat avec des institutions académiques et des acteurs majeurs du numérique à l\'international.' 
                  },
                  { 
                    year: '2026', 
                    title: 'Deuxième Forum Annuel', 
                    description: 'Deuxième édition du forum avec une participation record et le lancement de la première édition des Trophées de l\'Innovation Numérique.' 
                  }
                ].map((event, index) => (
                  <div key={event.year} className="relative">
                    {/* Point sur la timeline */}
                    <div className={`absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-[var(--primary)] border-4 border-white`}></div>
                    
                    {/* Carte d'événement */}
                    <div className={`md:w-5/12 p-6 rounded-lg shadow-sm border border-[var(--border)] ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                    }`}>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-[var(--primary)] mr-3">{event.year}</span>
                        <h3 className="text-xl font-semibold text-[var(--header-footer)]">{event.title}</h3>
                      </div>
                      <p className="text-[var(--foreground)]">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}