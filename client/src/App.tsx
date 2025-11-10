import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import Footer from "./components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "@/pages/Login";
import ForumPrive from "@/pages/ForumPrive";
import DocumentsInternes from "@/pages/DocumentsInternes";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@/pages/Home";
import Historique from "@/pages/Historique";
import Vision from "@/pages/Vision";
import Gouvernance from "@/pages/Gouvernance";
import Statuts from "@/pages/Statuts";
import Partenaires from "@/pages/Partenaires";
import Membres from "@/pages/Membres";
import Adhesion from "@/pages/Adhesion";
import MentorReseau from "@/pages/MentorReseau";
import EspaceMembre from "@/pages/EspaceMembre";
import Actualites from "@/pages/Actualites";
import Evenements from "@/pages/Evenements";
import Formations from "@/pages/Formations";
import Contact from "@/pages/Contact";

// Events
import EvenementsAgenda from "./pages/EvenementsAgenda";
import EvenementsForumAnnuel from "./pages/EvenementsForumAnnuel";
import EvenementsGalerie from "./pages/EvenementsGalerie";
import EvenementsProposer from "./pages/EvenementsProposer";
import Ressources from "./pages/Ressources";

// Publications
import ActualitesCatalogue from "./pages/ActualitesCatalogue";
import ActualitesWebinaires from "./pages/ActualitesWebinaires";
import ActualitesAteliers from "./pages/ActualitesAteliers";
import ActualitesDSIFutur from "./pages/ActualitesDSIFutur";
import GroupesTravail from "./pages/GroupesTravail";
import InnovationTransformation from "./pages/InnovationTransformation";
import Apropos from "./pages/Apropos";

function Router() {
  return (
    <Switch>
      {/* Pages principales */}
      <Route path="/" component={Home} />
      <Route path="/historique" component={Historique} />
      <Route path="/vision" component={Vision} />
      <Route path="/gouvernance" component={Gouvernance} />
      <Route path="/statuts" component={Statuts} />
      <Route path="/partenaires" component={Partenaires} />
      
      {/* Routes pour le menu Membres */}
      <Route path="/membres/historique" component={Historique} />
      <Route path="/membres/gouvernance" component={Gouvernance} />
      <Route path="/membres/statut" component={Statuts} />
      <Route path="/membres/partenaires" component={Partenaires} />
      
      {/* Routes pour le menu Événements */}
      <Route path="/evenements/agenda" component={EvenementsAgenda} />
      <Route path="/evenements/forum-annuel" component={EvenementsForumAnnuel} />
      <Route path="/evenements/galerie" component={EvenementsGalerie} />
      <Route path="/evenements/proposer" component={EvenementsProposer} />
      
      {/* Routes pour le menu Actualités & Publication */}
      <Route path="/actualites" component={Actualites} />
      <Route path="/actualites/articles" component={ActualitesCatalogue} />
      <Route path="/actualites/veille" component={ActualitesWebinaires} />
      <Route path="/actualites/revue-presse" component={ActualitesDSIFutur} />
      
      {/* Routes pour le menu Projets & Initiatives */}
      <Route path="/projets" component={Formations} />
      <Route path="/projets/groupes" component={Formations} />
      <Route path="/projets/innovation" component={Formations} />
      
      {/* Routes pour le menu Ressources */}
      <Route path="/ressources" component={Ressources} />
      <Route path="/ressources/docs" component={DocumentsInternes} />
      <Route path="/ressources/outils" component={DocumentsInternes} />
      
      {/* Autres routes */}
      <Route path="/contact" component={Contact} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/mentor-reseau" component={MentorReseau} />
      <Route path="/mentorat" component={MentorReseau} />
      <Route path="/apropos" component={Apropos} />
      <Route path="/membres" component={Membres} />
      <Route path="/evenements" component={Evenements} />
      
      {/* Routes protégées */}
      <Route path="/espace-membre">
        <ProtectedRoute>
          <EspaceMembre />
        </ProtectedRoute>
      </Route>
      <Route path="/documents">
        <ProtectedRoute>
          <DocumentsInternes />
        </ProtectedRoute>
      </Route>
      <Route path="/forum">
        <ProtectedRoute>
          <ForumPrive />
        </ProtectedRoute>
      </Route>
      
      {/* Route 404 - Doit être la dernière */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <AuthProvider>
            <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
              <ErrorBoundary>
                <Navbar />
                <div className="flex-1 pt-32">
                  <Router />
                </div>
                <Footer />
                <Toaster />
              </ErrorBoundary>
            </div>
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
