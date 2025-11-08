import { APP_LOGO } from "@/const";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { useState } from "react";

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

  const isActive = (href?: string) => {
    if (!href) return false;
    return location === href || location.startsWith(`${href}/`);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <div
        key={index}
        className="relative group"
        onMouseEnter={() => setActiveMenu(item.title)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {item.href ? (
          <Link
            href={item.href}
            className={`flex items-center px-4 py-2 text-sm font-medium ${isActive(item.href) ? 'text-[var(--primary)]' : 'text-gray-700 hover:text-[var(--primary)]'}`}
          >
            {item.title}
          </Link>
        ) : (
          <button
            className={`flex items-center px-4 py-2 text-sm font-medium ${activeMenu === item.title ? 'text-[var(--primary)]' : 'text-gray-700 hover:text-[var(--primary)]'}`}
          >
            {item.title}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        )}

        {item.submenu && (
          <div
            className={`absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 ${activeMenu === item.title ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          >
            {item.submenu.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={subItem.href}
                className={`block px-4 py-2 text-sm ${isActive(subItem.href) ? 'bg-[var(--accent)] text-[var(--primary)]' : 'text-[var(--foreground)] hover:bg-[var(--accent)]'}`}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <header className="fixed w-full bg-white text-white z-50 shadow-md h-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <div className="w-[150px] h-[120px] flex items-center justify-center overflow-hidden">
                <img
                  src={APP_LOGO}
                  alt="DSI Madagascar"
                  className="w-[140px] h-[140px] object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
            {renderMenuItems()}
            
            {/* User Icon */}
            <div className="ml-4 flex items-center">
              <button
                className="p-1 rounded-full text-[var(--header-footer-foreground)] hover:text-[var(--primary)] focus:outline-none"
              >
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--header-footer-foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary)]"
            >
              {mobileOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                {item.href ? (
                  <Link
                    href={item.href || "#"}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(item.href)
                        ? "text-[var(--primary-foreground)] bg-[var(--primary)]"
                        : "text-[var(--header-footer-foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        activeMenu === item.title
                          ? "text-[var(--primary-foreground)] bg-[var(--primary)]"
                          : "text-[var(--header-footer-foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20"
                      }`}
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transform ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMenu === item.title && item.submenu && (
                      <div className="pl-6">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[var(--header-footer-foreground)] hover:bg-[var(--primary)] hover:bg-opacity-10"
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
      )}
    </header>
  );
}
