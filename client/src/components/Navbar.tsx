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
            className={`flex items-center px-4 py-2 text-sm font-medium ${isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
          >
            {item.title}
          </Link>
        ) : (
          <button
            className={`flex items-center px-4 py-2 text-sm font-medium ${activeMenu === item.title ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
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
                className={`block px-4 py-2 text-sm ${isActive(subItem.href) ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
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
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                className="h-28 w-auto"
                src={APP_LOGO}
                alt="Club DSI Madagascar"
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
            {renderMenuItems()}
            
            {/* User Icon */}
            <div className="ml-4 flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
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
                    href={item.href}
                    className={`block pl-3 pr-4 py-2 text-base font-medium ${isActive(item.href) ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                      className="w-full flex justify-between items-center pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
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
                            className="block pl-3 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
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
    </nav>
  );
}
