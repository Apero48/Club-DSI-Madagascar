import Navbar from "@/components/Navbar";

export default function EvenementsForumAnnuel() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Forum annuel des DSI</h1>
            <p className="text-lg mt-2">L'événement phare du Club</p>
          </div>
        </div>
        <section className="max-w-7xl mx-auto px-4 py-12 prose max-w-none">
          <h2>Concept</h2>
          <p>
            L'événement phare du Club, réunissant les DSI pour des conférences de haut niveau, des panels d'experts,
            une exposition technologique, du networking et des remises de prix.
          </p>
          <h2>Prochaine édition</h2>
          <ul>
            <li>Date: À annoncer</li>
            <li>Lieu: À annoncer</li>
            <li>Thème: À annoncer</li>
          </ul>
          <h2>Éditions précédentes</h2>
          <ul className="list-disc list-inside">
            <li>2024: Innovation et souveraineté numérique</li>
            <li>2023: Cybersécurité et résilience</li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Club des DSI de Madagascar. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
