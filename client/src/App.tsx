import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Membres from "./pages/Membres";
import Adhesion from "./pages/Adhesion";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";
import Partenaires from "./pages/Partenaires";
import Formations from "./pages/Formations";
import Ressources from "./pages/Ressources";
import Contact from "./pages/Contact";
import EvenementsAgenda from "./pages/EvenementsAgenda";
import EvenementsForumAnnuel from "./pages/EvenementsForumAnnuel";
import EvenementsGalerie from "./pages/EvenementsGalerie";
import EvenementsProposer from "./pages/EvenementsProposer";
import ActualitesClub from "./pages/ActualitesClub";
import ArticlesTribunes from "./pages/ArticlesTribunes";
import VeilleTechnologique from "./pages/VeilleTechnologique";
import RevuePresse from "./pages/RevuePresse";
import ProjetsCollaboratifs from "./pages/ProjetsCollaboratifs";
import GroupesTravail from "./pages/GroupesTravail";
import InnovationTransformation from "./pages/InnovationTransformation";
import PublicationsBenchmarks from "./pages/PublicationsBenchmarks";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/apropos" component={Apropos} />
      <Route path="/membres" component={Membres} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/actualites" component={Actualites} />
      <Route path="/evenements" component={Evenements} />
      <Route path="/evenements/agenda" component={EvenementsAgenda} />
      <Route path="/evenements/forum-annuel" component={EvenementsForumAnnuel} />
      <Route path="/evenements/galerie" component={EvenementsGalerie} />
      <Route path="/evenements/proposer" component={EvenementsProposer} />
      <Route path="/partenaires" component={Partenaires} />
      <Route path="/formations" component={Formations} />
      <Route path="/ressources" component={Ressources} />
      <Route path="/actualites/club" component={ActualitesClub} />
      <Route path="/actualites/articles" component={ArticlesTribunes} />
      <Route path="/actualites/veille" component={VeilleTechnologique} />
      <Route path="/actualites/revue-presse" component={RevuePresse} />
      <Route path="/projets/collaboratifs" component={ProjetsCollaboratifs} />
      <Route path="/projets/groupes-travail" component={GroupesTravail} />
      <Route path="/projets/innovation" component={InnovationTransformation} />
      <Route path="/projets/publications" component={PublicationsBenchmarks} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
