import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';

const Header = ({ setSidebarOpen, activeSection }) => {
  const getSectionTitle = (section) => {
    const titles = {
      dashboard: 'Tableau de bord',
      patients: 'Gestion des Patients',
      rendezvous: 'Rendez-vous',
      analytics: 'Analyses & Statistiques',
      prescriptions: 'Prescriptions',
      visites: 'Visites Prénatales',
      annonces: 'Annonces'
    };
    return titles[section] || 'Administration';
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={24} className="text-gray-600" />
          </button>
          
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {getSectionTitle(activeSection)}
            </h1>
            <p className="text-sm text-gray-500">
              {new Date().toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Barre de recherche */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-transparent border-none outline-none text-gray-600 placeholder-gray-400"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;