import React, { useState, useEffect } from 'react';
import { 
  LoginForm, 
  Header, 
  Sidebar, 
  Modal,
  DashboardSection,
  PatientsSection,
  RendezVousSection,
  AnalyticsSection,
  HopitauxSection
} from './components';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // États pour les données
  const [patients, setPatients] = useState([
    { id: 1, nom: 'Ndongo Marie', age: 28, telephone: '+237 678 901 234', derniereVisite: '2024-09-15', statut: 'Enceinte - 6 mois', niveauCPN: 'CPN3' },
    { id: 2, nom: 'Essomba Grace', age: 32, telephone: '+237 678 901 235', derniereVisite: '2024-09-20', statut: 'Suivi post-natal', niveauCPN: 'CPN4' },
    { id: 3, nom: 'Mballa Sylvie', age: 25, telephone: '+237 678 901 236', derniereVisite: '2024-09-22', statut: 'Enceinte - 3 mois', niveauCPN: 'CPN1' },
  ]);

  const [rendezvous, setRendezvous] = useState([
    { id: 1, patient: 'Ndongo Marie', date: '2024-10-05', heure: '09:00', type: 'Consultation prénatale', statut: 'Confirmé' },
    { id: 2, patient: 'Essomba Grace', date: '2024-10-05', heure: '10:30', type: 'Vaccination bébé', statut: 'Confirmé' },
    { id: 3, patient: 'Mballa Sylvie', date: '2024-10-06', heure: '14:00', type: 'Échographie', statut: 'En attente' },
  ]);

  const [visitesPrenatales, setVisitesPrenatales] = useState([
    { id: 1, patient: 'Ndongo Marie', dateVisite: '2024-09-15', semaines: 24, poids: '68 kg', tension: '120/80', remarques: 'Tout va bien' },
    { id: 2, patient: 'Mballa Sylvie', dateVisite: '2024-09-22', semaines: 12, poids: '58 kg', tension: '115/75', remarques: 'Début de grossesse normal' },
  ]);

  const [annonces, setAnnonces] = useState([
    { id: 1, titre: 'Campagne de vaccination', contenu: 'Vaccination gratuite pour tous les nourrissons du 10 au 15 octobre.', date: '2024-09-25', type: 'info' },
    { id: 2, titre: 'Nouvelle sage-femme', contenu: 'Nous accueillons Dr. Atangana à notre équipe.', date: '2024-09-20', type: 'news' },
  ]);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentItem, setCurrentItem] = useState(null);

  // Fonction de connexion
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
    setActiveSection('dashboard');
  };

  // Ouvrir modal pour ajouter/modifier
  const openModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(item);
    setShowModal(true);
  };

  // Effet pour remonter en haut lors du changement de section
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  // Page de connexion
  if (!isLoggedIn) {
    return (
      <LoginForm 
        loginData={loginData}
        setLoginData={setLoginData}
        handleLogin={handleLogin}
      />
    );
  }

  // Fonction pour rendre le contenu de la section active
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <DashboardSection 
            patients={patients}
            rendezvous={rendezvous}
            visitesPrenatales={visitesPrenatales}
            annonces={annonces}
          />
        );
      case 'patients':
        return (
          <PatientsSection 
            patients={patients}
            openModal={openModal}
          />
        );
      case 'rendezvous':
        return (
          <RendezVousSection 
            rendezvous={rendezvous}
            openModal={openModal}
          />
        );
      case 'analytics':
        return <AnalyticsSection />;
      case 'visites':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Section Visites Prénatales</h2>
            <p className="text-gray-600">Cette section est en cours de développement</p>
          </div>
        );
      case 'hopitaux':
        return <HopitauxSection />;
      case 'annonces':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Section Annonces</h2>
            <p className="text-gray-600">Cette section est en cours de développement</p>
          </div>
        );
      default:
        return (
          <DashboardSection 
            patients={patients}
            rendezvous={rendezvous}
            visitesPrenatales={visitesPrenatales}
            annonces={annonces}
          />
        );
    }
  };

  // Modal content renderer
  const renderModalContent = () => {
    if (modalType === 'patient') {
      return (
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
              <input 
                type="text" 
                defaultValue={currentItem?.nom || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Âge</label>
              <input 
                type="number" 
                defaultValue={currentItem?.age || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
              <input 
                type="tel" 
                defaultValue={currentItem?.telephone || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
              <select 
                defaultValue={currentItem?.statut || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Sélectionner un statut</option>
                <option value="Enceinte - 1er trimestre">Enceinte - 1er trimestre</option>
                <option value="Enceinte - 2ème trimestre">Enceinte - 2ème trimestre</option>
                <option value="Enceinte - 3ème trimestre">Enceinte - 3ème trimestre</option>
                <option value="Suivi post-natal">Suivi post-natal</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button 
              type="button" 
              onClick={() => setShowModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 text-white rounded-lg hover:from-teal-700 hover:via-blue-700 hover:to-indigo-800 transition-all"
            >
              {currentItem ? 'Modifier' : 'Ajouter'}
            </button>
          </div>
        </form>
      );
    }
    return null;
  };

  // Dashboard principal
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleLogout={handleLogout}
      />

      {/* Contenu principal */}
      <main className="flex-1 overflow-hidden flex flex-col lg:ml-0">
        {/* Header */}
        <Header 
          setSidebarOpen={setSidebarOpen}
          activeSection={activeSection}
        />

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto p-6">
          {renderActiveSection()}
        </div>
      </main>

      {/* Modal */}
      <Modal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={`${currentItem ? 'Modifier' : 'Ajouter'} ${modalType}`}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}