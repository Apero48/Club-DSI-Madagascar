import { APP_LOGO } from "@/const";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { useState, useEffect } from "react";

type MenuItem = {
  title: string;
  href?: string;
  submenu?: {
    title: string;
    href: string;
  }[];
};

const menuItems: MenuItem[] = [
  { title: "Accueil", href: "/" },
  {
    title: "Membres",
    submenu: [
      { title: "Historique & Contexte", href: "/membres/historique" },
      { title: "Gouvernance", href: "/membres/gouvernance" },
      { title: "Statut & Charte du membre", href: "/membres/statut" },
      { title: "Partenaires & Sponsors", href: "/membres/partenaires" },
    ],
  },
  {
    title: "Événements",
    submenu: [
      { title: "Agenda", href: "/evenements/agenda" },
      { title: "Forum annuel", href: "/evenements/forum-annuel" },
      { title: "Galerie", href: "/evenements/galerie" },
      { title: "Proposer un événement", href: "/evenements/proposer" },
    ],
  },
  {
    title: "Actualités & Publication",
    submenu: [
      { title: "Actualités du Club", href: "/actualites" },
      { title: "Articles & Tribunes", href: "/actualites/articles" },
      { title: "Veille technologique", href: "/actualites/veille" },
      { title: "Revue de presse", href: "/actualites/revue-presse" },
    ],
  },
  {
    title: "Projets & Initiatives",
    submenu: [
      { title: "Projets collaboratifs", href: "/projets" },
      { title: "Groupes de travail", href: "/projets/groupes" },
      { title: "Innovation & Transformation", href: "/projets/innovation" },
    ],
  },
  {
    title: "Ressources",
    submenu: [
      { title: "Bibliothèque", href: "/ressources" },
      { title: "Documentation", href: "/ressources/docs" },
      { title: "Outils", href: "/ressources/outils" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location] = useLocation();
  
  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location]);

  const isActive = (href?: string) => {
    if (!href) return false;
    return location === href || location.startsWith(`${href}/`);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <img
                src={APP_LOGO}
                alt="DSI Madagascar"
                className="h-20 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium ${
                      isActive(item.href)
                        ? 'text-[var(--primary)]'
                        : 'text-gray-700 hover:text-[var(--primary)]'
                    }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--primary)] flex items-center"
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeMenu === item.title && (
                      <div 
                        className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50"
                        onMouseLeave={() => setActiveMenu(null)}
                      >
                        {item.submenu?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            
            {/* User Icon */}
            <div className="ml-4">
              <Link
                href="/espace-membre"
                className="p-1 text-gray-700 hover:text-[var(--primary)]"
              >
                <User className="h-6 w-6" />
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Link href="/espace-membre" className="p-2 mr-2 text-gray-700 hover:text-[var(--primary)]">
              <User className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 hover:text-[var(--primary)] focus:outline-none"
              aria-label="Menu principal"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                    className={`w-full flex justify-between items-center px-3 py-2 text-base font-medium ${
                      activeMenu === item.title
                        ? 'bg-[var(--primary)] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.title}
                    <ChevronDown 
                      className={`h-5 w-5 transform transition-transform ${
                        activeMenu === item.title ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {activeMenu === item.title && item.submenu && (
                    <div className="pl-4 bg-gray-50">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setMobileOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
