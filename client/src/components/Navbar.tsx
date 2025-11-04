import { APP_LOGO } from "@/const";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="inline-flex items-center">
            <img src={APP_LOGO} alt="Logo" className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover" />
          </a>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-4 text-sm">
              <NavigationMenuItem>
                <Link href="/">
                  <a className="px-2 py-2 inline-flex items-center rounded-md hover:bg-accent hover:text-accent-foreground">Accueil</a>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-2">Membres</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border shadow-md z-50">
                  <div className="grid min-w-[220px] gap-1 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/membres"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Annuaire des membres</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/adhesion"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Devenir membre</a></Link>
                    </NavigationMenuLink>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Mentorat & Réseau</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Espace membre sécurisé</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Documents internes</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Forum privé</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-2">Actualités & Publications</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border shadow-md z-50">
                  <div className="grid min-w-[260px] gap-1 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/actualites/club"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Actualités du Club</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/actualites/articles"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Articles & tribunes</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/actualites/veille"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Veille technologique</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/actualites/revue-presse"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Revue de presse</a></Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-2">Formations & Ateliers</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border shadow-md z-50">
                  <div className="grid min-w-[260px] gap-1 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/formations"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Catalogue des formations</a></Link>
                    </NavigationMenuLink>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Webinaires & Masterclass</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Ateliers pratiques</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Galerie photos & vidéos</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-2">Événements</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border shadow-md z-50">
                  <div className="grid min-w-[260px] gap-1 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/evenements/agenda"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Agenda des événements</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/evenements/forum-annuel"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Forum annuel des DSI</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/evenements/galerie"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Galerie photos & vidéos</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/evenements/proposer"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Proposer un événement</a></Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-2">Projets & Initiatives</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border shadow-md z-50">
                  <div className="grid min-w-[260px] gap-1 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/projets/collaboratifs"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Projets collaboratifs</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/projets/groupes-travail"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Groupes de travail thématiques</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/projets/innovation"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Innovation & Transformation</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/projets/publications"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Publications & Benchmarks</a></Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-2">Contact</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border shadow-md z-50">
                  <div className="grid min-w-[200px] gap-1 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/contact"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Formulaire de contact</a></Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/contact"><a className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Coordonnées</a></Link>
                    </NavigationMenuLink>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800">Réseaux sociaux</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Ouvrir le menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-1 text-sm">
            <Link href="/"><a className="px-2 py-2">Accueil</a></Link>
            <div className="px-2 py-2 font-semibold text-gray-500">Membres</div>
            <Link href="/membres"><a className="px-4 py-2">Annuaire des membres</a></Link>
            <Link href="/adhesion"><a className="px-4 py-2">Devenir membre</a></Link>
            <a className="px-4 py-2" href="#">Mentorat & Réseau</a>
            <a className="px-4 py-2" href="#">Espace membre sécurisé</a>
            <a className="px-4 py-2" href="#">Documents internes</a>
            <a className="px-4 py-2" href="#">Forum privé</a>

            <div className="px-2 py-2 font-semibold text-gray-500">Actualités & Publications</div>
            <Link href="/actualites"><a className="px-4 py-2">Catalogue du Club</a></Link>
            <a className="px-4 py-2" href="#">Webinaires & Masterclass</a>
            <a className="px-4 py-2" href="#">Ateliers pratiques</a>
            <a className="px-4 py-2" href="#">Programme "DSI du futur"</a>

            <div className="px-2 py-2 font-semibold text-gray-500">Formations & Ateliers</div>
            <Link href="/formations"><a className="px-4 py-2">Catalogue des formations</a></Link>
            <a className="px-4 py-2" href="#">Webinaires & Masterclass</a>
            <a className="px-4 py-2" href="#">Ateliers pratiques</a>
            <a className="px-4 py-2" href="#">Galerie photos & vidéos</a>

            <div className="px-2 py-2 font-semibold text-gray-500">Événements</div>
            <Link href="/evenements"><a className="px-4 py-2">Agenda des événements</a></Link>
            <a className="px-4 py-2" href="#">Forum annuel des DSI</a>
            <a className="px-4 py-2" href="#">Projets de collaboration</a>
            <a className="px-4 py-2" href="#">Sponsoring & Mécénat</a>
            <a className="px-4 py-2" href="#">Proposer un événement</a>

            <div className="px-2 py-2 font-semibold text-gray-500">Projets & Initiatives</div>
            <Link href="/ressources"><a className="px-4 py-2">Livres blancs & guides pratiques</a></Link>
            <Link href="/ressources"><a className="px-4 py-2">Modèles & templates</a></Link>
            <a className="px-4 py-2" href="#">Inscription à la newsletter</a>
            <Link href="/ressources"><a className="px-4 py-2">Vidéothèque / Podcast</a></Link>
            <Link href="/ressources"><a className="px-4 py-2">Liens utiles</a></Link>

            <div className="px-2 py-2 font-semibold text-gray-500">Contact</div>
            <Link href="/contact"><a className="px-4 py-2">Formulaire de contact</a></Link>
            <Link href="/contact"><a className="px-4 py-2">Coordonnées</a></Link>
            <a className="px-4 py-2" href="#">Réseaux sociaux</a>
          </nav>
        </div>
      )}
    </header>
  );
}
