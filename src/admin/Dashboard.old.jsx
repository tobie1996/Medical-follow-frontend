import React, { useState, useEffect } from 'react';
import { 
  Home, Users, Calendar, Pill, Baby, Hospital, Bell, Search, Plus, 
  Eye, Edit, Trash2, LogOut, X, Menu 
} from 'lucide-react';
import { 
  LoginForm, 
  Header, 
  Sidebar, 
  Modal,
  DashboardSection,
  PatientsSection,
  RendezVousSection
} from './components';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
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

  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patient: 'Ndongo Marie', date: '2024-09-15', medicaments: 'Fer + Acide folique', dosage: '1 comprimé/jour' },
    { id: 2, patient: 'Essomba Grace', date: '2024-09-20', medicaments: 'Vitamines postnatales', dosage: '2 comprimés/jour' },
  ]);

  const [visitesPrenatales, setVisitesPrenatales] = useState([
    { id: 1, patient: 'Ndongo Marie', dateVisite: '2024-09-15', semaines: 24, poids: '68 kg', tension: '120/80', remarques: 'Tout va bien' },
    { id: 2, patient: 'Mballa Sylvie', dateVisite: '2024-09-22', semaines: 12, poids: '58 kg', tension: '115/75', remarques: 'Début de grossesse normal' },
  ]);

  const [hopitaux, setHopitaux] = useState([
    { id: 1, nom: 'Centre Médical Mère-Enfant Yaoundé', adresse: 'Avenue Kennedy, Yaoundé', telephone: '+237 222 345 678', type: 'Privé', services: 'Maternité, Pédiatrie, Gynécologie' },
    { id: 2, nom: 'Hôpital Central de Yaoundé', adresse: 'Centre-ville, Yaoundé', telephone: '+237 222 234 567', type: 'Public', services: 'Maternité, Urgences' },
    { id: 3, nom: 'Clinique de la Femme et de lEnfant', adresse: 'Bastos, Yaoundé', telephone: '+237 222 456 789', type: 'Privé', services: 'Maternité, Gynécologie, Échographie' },
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

  // Modal générique
  const Modal = ({ onClose, children }) => (
    <div className="fixed inset-0  flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">
              {currentItem ? 'Modifier' : 'Ajouter'} {modalType}
            </h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );

  // Page de connexion
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Baby size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Administration</h1>
            <p className="text-gray-600">Santé Maternelle & Infantile</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="admin@exemple.com"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="••••••••"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition duration-300 shadow-lg"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard principal
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-pink-600 to-purple-700 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h2 className="text-xl font-bold">Admin Panel</h2>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-2">
          {[
            { id: 'dashboard', icon: Home, label: 'Tableau de bord' },
            { id: 'patients', icon: Users, label: 'Patients' },
            { id: 'rendezvous', icon: Calendar, label: 'Rendez-vous' },
            { id: 'prescriptions', icon: Pill, label: 'Prescriptions' },
            { id: 'prenatales', icon: Baby, label: 'Visites prénatales' },
            { id: 'hopitaux', icon: Hospital, label: 'Hôpitaux' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activeSection === item.id ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        
        <button
          onClick={handleLogout}
          className="mx-2 mb-4 flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
        >
          <LogOut size={20} />
          {sidebarOpen && <span>Déconnexion</span>}
        </button>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {activeSection === 'dashboard' && 'Tableau de bord'}
            {activeSection === 'patients' && 'Gestion des Patients'}
            {activeSection === 'rendezvous' && 'Gestion des Rendez-vous'}
            {activeSection === 'prescriptions' && 'Gestion des Prescriptions'}
            {activeSection === 'prenatales' && 'Visites Prénatales'}
            {activeSection === 'hopitaux' && 'Gestion des Hôpitaux'}
          </h1>
        </header>

        <div className="p-6">
          {/* Dashboard - Vue d'ensemble */}
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Patients</p>
                      <p className="text-3xl font-bold text-gray-800">{patients.length}</p>
                    </div>
                    <Users size={40} className="text-pink-500" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Rendez-vous</p>
                      <p className="text-3xl font-bold text-gray-800">{rendezvous.length}</p>
                    </div>
                    <Calendar size={40} className="text-purple-500" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Prescriptions</p>
                      <p className="text-3xl font-bold text-gray-800">{prescriptions.length}</p>
                    </div>
                    <Pill size={40} className="text-blue-500" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Visites prénatales</p>
                      <p className="text-3xl font-bold text-gray-800">{visitesPrenatales.length}</p>
                    </div>
                    <Baby size={40} className="text-green-500" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Hôpitaux</p>
                      <p className="text-3xl font-bold text-gray-800">{hopitaux.length}</p>
                    </div>
                    <Hospital size={40} className="text-teal-500" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Prochains rendez-vous</h3>
                  <div className="space-y-3">
                    {rendezvous.slice(0, 3).map((rdv) => (
                      <div key={rdv.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">{rdv.patient}</p>
                          <p className="text-sm text-gray-600">{rdv.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-800">{rdv.date}</p>
                          <p className="text-sm text-gray-600">{rdv.heure}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Hôpitaux partenaires</h3>
                  <div className="space-y-3">
                    {hopitaux.slice(0, 3).map((hopital) => (
                      <div key={hopital.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">{hopital.nom}</p>
                            <p className="text-sm text-gray-600 mt-1">{hopital.adresse}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                hopital.type === 'Privé' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                              }`}>
                                {hopital.type}
                              </span>
                              <p className="text-xs text-gray-500">{hopital.telephone}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gestion des Patients */}
          {activeSection === 'patients' && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Search className="text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Rechercher un patient..."
                    className="border-none focus:outline-none text-gray-700"
                  />
                </div>
                <button
                  onClick={() => openModal('Patient')}
                  className="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                >
                  <Plus size={20} />
                  <span>Nouveau Patient</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Âge</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernière visite</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Niveau CPN</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {patients.map((patient) => (
                      <tr key={patient.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.nom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.age} ans</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.telephone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.derniereVisite}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {patient.statut}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {patient.niveauCPN ? (
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {patient.niveauCPN}
                            </span>
                          ) : (
                            <span className="text-gray-400">Non défini</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                            <button onClick={() => openModal('Patient', patient)} className="text-green-600 hover:text-green-800"><Edit size={18} /></button>
                            <button className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Gestion des Rendez-vous */}
          {activeSection === 'rendezvous' && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Liste des rendez-vous</h3>
                <button
                  onClick={() => openModal('Rendez-vous')}
                  className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition cursor-pointer"
                >
                  <Plus size={20} />
                  <span>Nouveau Rendez-vous</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {rendezvous.map((rdv) => (
                      <tr key={rdv.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rdv.patient}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rdv.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rdv.heure}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rdv.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            rdv.statut === 'Confirmé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {rdv.statut}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button onClick={() => openModal('Rendez-vous', rdv)} className="text-green-600 hover:text-green-800"><Edit size={18} /></button>
                            <button className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Gestion des Prescriptions */}
          {activeSection === 'prescriptions' && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Liste des prescriptions</h3>
                <button
                  onClick={() => openModal('Prescription')}
                  className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  <Plus size={20} />
                  <span>Nouvelle Prescription</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Médicaments</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {prescriptions.map((prescription) => (
                      <tr key={prescription.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prescription.patient}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.medicaments}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.dosage}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                            <button onClick={() => openModal('Prescription', prescription)} className="text-green-600 hover:text-green-800"><Edit size={18} /></button>
                            <button className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Visites Prénatales */}
          {activeSection === 'prenatales' && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Suivi des visites prénatales</h3>
                <button
                  onClick={() => openModal('Visite prénatale')}
                  className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  <Plus size={20} />
                  <span>Nouvelle Visite</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date visite</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semaines</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poids</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tension</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarques</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {visitesPrenatales.map((visite) => (
                      <tr key={visite.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{visite.patient}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visite.dateVisite}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visite.semaines} SA</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visite.poids}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visite.tension}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{visite.remarques}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button onClick={() => openModal('Visite prénatale', visite)} className="text-green-600 hover:text-green-800"><Edit size={18} /></button>
                            <button className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Hôpitaux */}
          {activeSection === 'hopitaux' && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Search className="text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Rechercher un hôpital..."
                    className="border-none focus:outline-none text-gray-700"
                  />
                </div>
                <button
                  onClick={() => openModal('Hôpital')}
                  className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                >
                  <Plus size={20} />
                  <span>Nouvel Hôpital</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {hopitaux.map((hopital) => (
                      <tr key={hopital.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{hopital.nom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hopital.adresse}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hopital.telephone}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            hopital.type === 'Privé' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {hopital.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{hopital.services}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                            <button onClick={() => openModal('Hôpital', hopital)} className="text-green-600 hover:text-green-800"><Edit size={18} /></button>
                            <button className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {modalType === 'Patient' && (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    defaultValue={currentItem?.nom || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Nom et prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
                  <input
                    type="number"
                    defaultValue={currentItem?.age || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Âge"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input
                  type="tel"
                  defaultValue={currentItem?.telephone || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="+237 6XX XXX XXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                <select
                  defaultValue={currentItem?.statut || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Sélectionner un statut</option>
                  <option value="Enceinte - 1 mois">Enceinte - 1 mois</option>
                  <option value="Enceinte - 2 mois">Enceinte - 2 mois</option>
                  <option value="Enceinte - 3 mois">Enceinte - 3 mois</option>
                  <option value="Enceinte - 4 mois">Enceinte - 4 mois</option>
                  <option value="Enceinte - 5 mois">Enceinte - 5 mois</option>
                  <option value="Enceinte - 6 mois">Enceinte - 6 mois</option>
                  <option value="Enceinte - 7 mois">Enceinte - 7 mois</option>
                  <option value="Enceinte - 8 mois">Enceinte - 8 mois</option>
                  <option value="Enceinte - 9 mois">Enceinte - 9 mois</option>
                  <option value="Suivi post-natal">Suivi post-natal</option>
                  <option value="Consultation générale">Consultation générale</option>
                </select>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                >
                  {currentItem ? 'Mettre à jour' : 'Ajouter'}
                </button>
              </div>
            </form>
          )}

          {modalType === 'Rendez-vous' && (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                <select
                  defaultValue={currentItem?.patient || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Sélectionner un patient</option>
                  {patients.map(p => (
                    <option key={p.id} value={p.nom}>{p.nom}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    defaultValue={currentItem?.date || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Heure</label>
                  <input
                    type="time"
                    defaultValue={currentItem?.heure || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type de consultation</label>
                <select
                  defaultValue={currentItem?.type || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Sélectionner un type</option>
                  <option value="Consultation prénatale">Consultation prénatale</option>
                  <option value="Échographie">Échographie</option>
                  <option value="Vaccination bébé">Vaccination bébé</option>
                  <option value="Suivi post-natal">Suivi post-natal</option>
                  <option value="Consultation générale">Consultation générale</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                <select
                  defaultValue={currentItem?.statut || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="En attente">En attente</option>
                  <option value="Confirmé">Confirmé</option>
                  <option value="Annulé">Annulé</option>
                  <option value="Terminé">Terminé</option>
                </select>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                >
                  {currentItem ? 'Mettre à jour' : 'Ajouter'}
                </button>
              </div>
            </form>
          )}

          {modalType === 'Prescription' && (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                <select
                  defaultValue={currentItem?.patient || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionner un patient</option>
                  {patients.map(p => (
                    <option key={p.id} value={p.nom}>{p.nom}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  defaultValue={currentItem?.date || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Médicaments</label>
                <input
                  type="text"
                  defaultValue={currentItem?.medicaments || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: Fer + Acide folique"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dosage / Instructions</label>
                <textarea
                  defaultValue={currentItem?.dosage || ''}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 1 comprimé par jour après le repas"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  {currentItem ? 'Mettre à jour' : 'Ajouter'}
                </button>
              </div>
            </form>
          )}

          {modalType === 'Visite prénatale' && (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                <select
                  defaultValue={currentItem?.patient || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Sélectionner une patiente</option>
                  {patients.filter(p => p.statut.includes('Enceinte')).map(p => (
                    <option key={p.id} value={p.nom}>{p.nom}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date de visite</label>
                  <input
                    type="date"
                    defaultValue={currentItem?.dateVisite || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Semaines d'aménorrhée</label>
                  <input
                    type="number"
                    defaultValue={currentItem?.semaines || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ex: 24"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Poids</label>
                  <input
                    type="text"
                    defaultValue={currentItem?.poids || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ex: 68 kg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tension artérielle</label>
                  <input
                    type="text"
                    defaultValue={currentItem?.tension || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ex: 120/80"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Remarques / Observations</label>
                <textarea
                  defaultValue={currentItem?.remarques || ''}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Observations médicales..."
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  {currentItem ? 'Mettre à jour' : 'Ajouter'}
                </button>
              </div>
            </form>
          )}

          {modalType === 'Hôpital' && (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'hôpital</label>
                <input
                  type="text"
                  defaultValue={currentItem?.nom || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Ex: Centre Médical Mère-Enfant"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                <input
                  type="text"
                  defaultValue={currentItem?.adresse || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Ex: Avenue Kennedy, Yaoundé"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    defaultValue={currentItem?.telephone || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="+237 222 XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    defaultValue={currentItem?.type || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner un type</option>
                    <option value="Public">Public</option>
                    <option value="Privé">Privé</option>
                    <option value="Confessionnel">Confessionnel</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Services offerts</label>
                <textarea
                  defaultValue={currentItem?.services || ''}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Ex: Maternité, Pédiatrie, Gynécologie, Échographie..."
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
                >
                  {currentItem ? 'Mettre à jour' : 'Ajouter'}
                </button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
}