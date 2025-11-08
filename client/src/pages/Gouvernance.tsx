import { Card } from "@/components/ui/card";

export default function Gouvernance() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gouvernance & Administration</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez l'organisation et la structure de gouvernance de notre association
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 py-16">
          <Card className="p-8 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Structure de Gouvernance</h2>
              <p className="text-lg text-[var(--foreground)] max-w-3xl mx-auto">
                Le Club des DSI est dirigé par un comité de gouvernance (C-vesel) qui assure
                la direction stratégique et opérationnelle de l'association.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[var(--header-footer)] text-center">
                  Composition du C-vesel
                </h3>
                <ul className="space-y-4">
                  {[
                    { role: 'Président(e)', description: 'Dirige la stratégie et représente le club' },
                    { role: 'Vice-président(e)', description: 'Assiste le président et le remplace si nécessaire' },
                    { role: 'Secrétaire général(e)', description: 'Gère l\'administration et la communication' },
                    { role: 'Trésorier(e)', description: 'Gère les finances et le budget' },
                    { role: 'Responsables des commissions', description: 'Pilote les différents axes stratégiques' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center mr-4 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--header-footer)]">{item.role}</h4>
                        <p className="text-[var(--foreground)] text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[var(--header-footer)] text-center">
                  Notre Mission
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg h-full">
                  <p className="text-[var(--foreground)] mb-4">
                    La gouvernance du Club des DSI s'articule autour de valeurs clés :
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Transparence dans la gestion',
                      'Collaboration entre les membres',
                      'Innovation continue',
                      'Représentation des intérêts des DSI',
                      'Développement du numérique à Madagascar'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--foreground)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Commissions Thématiques</h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
            <p className="text-lg text-[var(--foreground)] max-w-3xl mx-auto">
              Nos commissions travaillent sur des domaines clés pour répondre aux enjeux des DSI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--header-footer)]">Commission Formation</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
                <li>Développement des programmes</li>
                <li>Coordination des formateurs</li>
                <li>Évaluation des besoins</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--header-footer)]">Commission Événements</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
                <li>Organisation du forum annuel</li>
                <li>Coordination des rencontres</li>
                <li>Gestion des partenariats</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Administration</h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
              <p className="text-lg text-[var(--foreground)] max-w-3xl mx-auto">
                Notre équipe administrative assure le bon fonctionnement quotidien du Club
              </p>
            </div>

            <Card className="p-8 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[var(--header-footer)]">Services administratifs</h3>
                  <ul className="space-y-4">
                    {[
                      'Secrétariat permanent',
                      'Gestion des adhésions',
                      'Communication interne et externe',
                      'Support technique et logistique',
                      'Gestion des partenariats'
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--primary)] flex items-center justify-center mr-3 mt-1">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[var(--foreground)]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[var(--header-footer)]">Contact</h3>
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <p className="text-[var(--foreground)] mb-6">
                      Notre équipe est à votre disposition pour toute question ou information complémentaire.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[var(--foreground)]">contact@clubdsi-mg.mg</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-[var(--foreground)]">+261 XX XX XXX XX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}