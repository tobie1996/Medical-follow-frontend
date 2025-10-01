import React from 'react';
import { Home, Users, Calendar, FileText, Pill, Bell, LogOut, Menu, X, BarChart3 } from 'lucide-react';

const Sidebar = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  activeSection, 
  setActiveSection, 
  handleLogout 
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'rendezvous', label: 'Rendez-vous', icon: Calendar },
    { id: 'analytics', label: 'Analyses & Statistiques', icon: BarChart3 },
    { id: 'prescriptions', label: 'Prescriptions', icon: Pill },
    { id: 'visites', label: 'Visites prénatales', icon: FileText },
    { id: 'annonces', label: 'Annonces', icon: Bell },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-teal-600 via-teal-800 to-teal-700 text-white transform transition-transform duration-300 ease-in-out z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`} style={{ width: '280px' }}>
        
        {/* Header */}
        <div className="p-6 border-b border-teal-600">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">PrenaCare Admin</h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden hover:bg-teal-600 hover:bg-opacity-30 p-2 rounded"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-8 px-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false); // Fermer sur mobile
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeSection === item.id
                  ? 'bg-white bg-opacity-20 text-black hover:text-black'
                  : 'text-teal-100 hover:bg-white hover:bg-opacity-10 hover:text-black'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bouton déconnexion */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-teal-100 hover:bg-red-500 hover:text-white transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;