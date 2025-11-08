import { Card } from "@/components/ui/card";

export default function Statuts() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Héro */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Statuts & Charte du Membre</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Les fondements juridiques et éthiques de notre association
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 py-16">
          {/* Section Statuts */}
          <Card className="p-8 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow mb-16">
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Statuts de l'Association</h2>
              <p className="text-lg text-[var(--foreground)] max-w-3xl mx-auto">
                Le cadre légal et organisationnel qui définit notre fonctionnement
              </p>
            </div>

            <div className="prose max-w-4xl mx-auto">
              <p className="mb-6 text-[var(--foreground)] text-center">
                Les statuts du Club des DSI définissent le cadre légal et organisationnel 
                de notre association. Ils précisent nos objectifs, notre structure et nos 
                modalités de fonctionnement.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[var(--header-footer)] text-center">
                    Points clés des statuts
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Forme juridique de l\'association',
                      'Objectifs et missions',
                      'Conditions d\'adhésion',
                      'Structure de gouvernance',
                      'Modalités de prise de décision',
                      'Gestion financière'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center mr-3 mt-1">
                          {index + 1}
                        </div>
                        <span className="text-[var(--foreground)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg h-full flex items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[var(--header-footer)] text-center">
                      Télécharger les statuts
                    </h3>
                    <p className="text-[var(--foreground)] mb-6 text-center">
                      Consultez le document complet des statuts de l'association.
                    </p>
                    <div className="flex justify-center">
                      <button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-2 rounded-md transition-colors">
                        Télécharger (PDF)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Section Charte du Membre */}
          <Card className="p-8 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Charte du Membre (PDP)</h2>
              <p className="text-lg text-[var(--foreground)] max-w-3xl mx-auto">
                Les engagements et valeurs qui unissent notre communauté
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[var(--header-footer)] text-center">
                  Engagements des membres
                </h3>
                <ul className="space-y-4">
                  {[
                    'Respect des valeurs du Club',
                    'Participation active aux activités',
                    'Partage d\'expérience et d\'expertise',
                    'Confidentialité des informations partagées',
                    'Contribution au développement du réseau'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--primary)] flex items-center justify-center mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[var(--foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[var(--header-footer)] text-center">
                  Droits des membres
                </h3>
                <ul className="space-y-4">
                  {[
                    'Accès aux ressources et événements',
                    'Participation aux instances décisionnelles',
                    'Bénéfice des services du Club',
                    'Accès au réseau professionnel',
                    'Expression et proposition d\'initiatives'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--primary)] flex items-center justify-center mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[var(--foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-[var(--header-footer)] text-center">
                Protection des Données Personnelles (PDP)
              </h3>
              <p className="text-[var(--foreground)] mb-4 text-center">
                Nous nous engageons à protéger vos données personnelles conformément au RGPD.
              </p>
              <ul className="space-y-2 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-[var(--foreground)]">
                    Vos données sont collectées et traitées de manière sécurisée et confidentielle.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[var(--foreground)]">
                    Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Section Documents Téléchargeables */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--header-footer)] mb-4">Documents Téléchargeables</h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
              <p className="text-lg text-[var(--foreground)] max-w-3xl mx-auto">
                Téléchargez nos documents officiels au format PDF
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--header-footer)]">Statuts Complets</h3>
                  <p className="text-[var(--foreground)] mb-6 flex-grow">
                    Version intégrale des statuts de l'association avec tous les articles et dispositions légales.
                  </p>
                  <div className="mt-auto">
                    <button className="text-[var(--primary)] hover:underline font-medium">
                      Télécharger le PDF
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--header-footer)]">Charte du Membre</h3>
                  <p className="text-[var(--foreground)] mb-6 flex-grow">
                    Document détaillé présentant les droits et devoirs de chaque membre du Club des DSI.
                  </p>
                  <div className="mt-auto">
                    <button className="text-[var(--primary)] hover:underline font-medium">
                      Télécharger le PDF
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}