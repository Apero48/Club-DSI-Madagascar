import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function EvenementsProposer() {
  const [data, setData] = useState({ titre: "", type: "Conférence", description: "", date: "", contact: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Proposition envoyée. Merci !");
    setData({ titre: "", type: "Conférence", description: "", date: "", contact: "" });
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Proposer un événement</h1>
            <p className="text-lg mt-2">Soumettez une proposition d'événement</p>
          </div>
        </div>
        <section className="max-w-3xl mx-auto px-4 py-12">
          <Card className="p-6">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Titre</label>
                <input className="w-full border rounded px-3 py-2" value={data.titre} onChange={(e)=>setData({...data, titre:e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type d'événement</label>
                <select className="w-full border rounded px-3 py-2" value={data.type} onChange={(e)=>setData({...data, type:e.target.value})}>
                  <option>Conférence</option>
                  <option>Atelier</option>
                  <option>Webinaire</option>
                  <option>Meetup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea className="w-full border rounded px-3 py-2" rows={5} value={data.description} onChange={(e)=>setData({...data, description:e.target.value})} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input type="date" className="w-full border rounded px-3 py-2" value={data.date} onChange={(e)=>setData({...data, date:e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contact</label>
                  <input className="w-full border rounded px-3 py-2" placeholder="email ou téléphone" value={data.contact} onChange={(e)=>setData({...data, contact:e.target.value})} />
                </div>
              </div>
              <Button className="bg-blue-700 hover:bg-blue-800">Envoyer la proposition</Button>
            </form>
          </Card>
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
