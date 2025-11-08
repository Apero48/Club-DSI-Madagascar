import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FileText, Download, Clock, Folder, BarChart2, Upload, Plus, FileUp, FileSpreadsheet, FileCheck2, FileArchive, FileCode2, FileDigit, FileKey2, FileLock, FileSearch, FileX, FileWarning, FileJson, FilePieChart, FileScan, FileSignature, FileSymlink, FileTerminal, FileType2, FileUpIcon, FileVolume2, FileVideo, FileType } from "lucide-react";

type Document = {
  id: number;
  titre: string;
  description: string;
  categorie: string;
  type: string;
  taille: string;
  dateAjout: string;
  telechargements: number;
  auteur: string;
  tags: string[];
  icon: React.ReactNode;
};

type Categorie = {
  id: string;
  nom: string;
  nombre: number;
  icon: React.ReactNode;
};

const getFileIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'pdf':
      return <FileText className="h-5 w-5 text-red-500" />;
    case 'docx':
    case 'doc':
      return <FileText className="h-5 w-5 text-blue-500" />;
    case 'xlsx':
    case 'xls':
      return <FileSpreadsheet className="h-5 w-5 text-green-500" />;
    case 'pptx':
    case 'ppt':
      return <FileType className="h-5 w-5 text-orange-500" />;
    case 'zip':
    case 'rar':
      return <FileArchive className="h-5 w-5 text-yellow-500" />;
    default:
      return <FileText className="h-5 w-5 text-gray-500" />;
  }
};

export default function DocumentsInternes() {
  // Données des catégories
  const categories: Categorie[] = [
    { id: 'tous', nom: 'Tous les documents', nombre: 45, icon: <Folder className="h-5 w-5" /> },
    { id: 'templates', nom: 'Templates', nombre: 12, icon: <FileCheck2 className="h-5 w-5" /> },
    { id: 'guides', nom: 'Guides', nombre: 8, icon: <FileSearch className="h-5 w-5" /> },
    { id: 'rapports', nom: 'Rapports', nombre: 15, icon: <FilePieChart className="h-5 w-5" /> },
    { id: 'presentations', nom: 'Présentations', nombre: 10, icon: <FileType className="h-5 w-5" /> },
  ];

  // Données des documents
  const documents: Document[] = [
    {
      id: 1,
      titre: "PSSI Template 2025",
      description: "Politique de sécurité des systèmes d'information pour les entreprises",
      categorie: "templates",
      type: "pdf",
      taille: "2.4 Mo",
      dateAjout: "Il y a 2 jours",
      telechargements: 24,
      auteur: "Équipe Cybersécurité",
      tags: ["sécurité", "modèle", "conformité"],
      icon: getFileIcon('pdf')
    },
    {
      id: 2,
      titre: "Guide de migration Cloud",
      description: "Stratégie complète pour la migration vers le cloud hybride",
      categorie: "guides",
      type: "docx",
      taille: "1.8 Mo",
      dateAjout: "Il y a 1 semaine",
      telechargements: 42,
      auteur: "Cloud Team",
      tags: ["cloud", "migration", "stratégie"],
      icon: getFileIcon('docx')
    },
    {
      id: 3,
      titre: "Rapport trimestriel Q3 2025",
      description: "Analyse des performances et indicateurs clés du département IT",
      categorie: "rapports",
      type: "xlsx",
      taille: "3.2 Mo",
      dateAjout: "Il y a 3 semaines",
      telechargements: 18,
      auteur: "Direction IT",
      tags: ["rapport", "analyse", "performance"],
      icon: getFileIcon('xlsx')
    },
    {
      id: 4,
      titre: "Présentation stratégie digitale 2026",
      description: "Feuille de route et objectifs pour la transformation digitale",
      categorie: "presentations",
      type: "pptx",
      taille: "5.7 Mo",
      dateAjout: "Il y a 1 mois",
      telechargements: 36,
      auteur: "CDO Office",
      tags: ["stratégie", "transformation", "présentation"],
      icon: getFileIcon('pptx')
    },
    {
      id: 5,
      titre: "Modèle de cahier des charges",
      description: "Template pour la rédaction de cahiers des charges projets IT",
      categorie: "templates",
      type: "docx",
      taille: "1.2 Mo",
      dateAjout: "Il y a 2 mois",
      telechargements: 29,
      auteur: "PMO IT",
      tags: ["template", "projet", "documentation"],
      icon: getFileIcon('docx')
    },
    {
      id: 6,
      titre: "Guide des bonnes pratiques DevOps",
      description: "Méthodologies et outils pour une intégration continue efficace",
      categorie: "guides",
      type: "pdf",
      taille: "4.1 Mo",
      dateAjout: "Il y a 3 mois",
      telechargements: 51,
      auteur: "Équipe DevOps",
      tags: ["devops", "méthodologie", "intégration"],
      icon: getFileIcon('pdf')
    },
  ];

  // Statistiques
  const stats = [
    { name: 'Documents au total', value: '45', icon: Folder },
    { name: 'Ajoutés ce mois', value: '8', icon: FileUp },
    { name: 'Téléchargements', value: '234', icon: Download },
    { name: 'Espace utilisé', value: '156 Mo', icon: BarChart2 },
  ];

  // Documents récemment mis à jour
  const recentDocuments = documents
    .sort((a, b) => new Date(b.dateAjout).getTime() - new Date(a.dateAjout).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* En-tête avec titre et actions */}
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Documents Internes</h1>
              <p className="text-lg text-white/90">Accédez à tous les documents partagés par l'équipe</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-white text-[var(--primary)] hover:bg-gray-100 px-6 py-6 text-base font-medium">
              <Upload className="h-5 w-5 mr-2" />
              Nouveau document
            </Button>
          </div>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-2xl w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Rechercher un document..."
                className="pl-10 w-full"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-sm w-full md:w-auto">
                <option value="">Tous les types</option>
                <option value="pdf">PDF</option>
                <option value="docx">Word</option>
                <option value="xlsx">Excel</option>
                <option value="pptx">PowerPoint</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-sm w-full md:w-auto">
                <option value="">Trier par</option>
                <option value="recent">Plus récent</option>
                <option value="ancien">Plus ancien</option>
                <option value="nom">Nom (A-Z)</option>
                <option value="telechargements">Téléchargements</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Barre latérale avec catégories */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <Folder className="h-5 w-5 mr-2 text-gray-500" />
                  Catégories
                </h2>
                <ul className="space-y-2">
                  {categories.map((categorie) => (
                    <li key={categorie.id}>
                      <button className="w-full flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                        <span className="flex items-center">
                          <span className="text-gray-500 mr-2">{categorie.icon}</span>
                          {categorie.nom}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {categorie.nombre}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <BarChart2 className="h-5 w-5 mr-2 text-gray-500" />
                  Statistiques
                </h2>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <stat.icon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{stat.name}</span>
                      </div>
                      <span className="text-sm font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-500" />
                  Récents
                </h2>
                <ul className="space-y-3">
                  {recentDocuments.map((doc) => (
                    <li key={doc.id} className="text-sm">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          {doc.icon}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900 line-clamp-1">{doc.titre}</p>
                          <p className="text-gray-500 text-xs">{doc.dateAjout}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Contenu principal */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Tous les documents</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10">
                    <Download className="h-4 w-4 mr-2" />
                    Exporter la liste
                  </Button>
                  <Button size="sm" className="bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter un document
                  </Button>
                </div>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom du document
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Catégorie
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ajouté le
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Taille
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {documents.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                                {doc.icon}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{doc.titre}</div>
                                <div className="text-sm text-gray-500">{doc.description}</div>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {doc.tags.map((tag, index) => (
                                    <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {categories.find(c => c.id === doc.categorie)?.nom}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {doc.dateAjout}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {doc.taille}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[var(--primary)]">
                                <Download className="h-4 w-4 mr-1" />
                                Télécharger
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[var(--primary)]">
                                <FileSearch className="h-4 w-4 mr-1" />
                                Détails
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-white px-6 py-3 flex items-center justify-between border-t border-gray-200">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Précédent
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Suivant
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Affichage de <span className="font-medium">1</span> à <span className="font-medium">6</span> sur <span className="font-medium">45</span> documents
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Précédent</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button aria-current="page" className="z-10 bg-[var(--primary)] border-[var(--primary)] text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                          1
                        </button>
                        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                          2
                        </button>
                        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                          3
                        </button>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Suivant</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}