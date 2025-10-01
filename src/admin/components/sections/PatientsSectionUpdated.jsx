import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, MoreVertical, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import DeleteConfirmModal from '../ui/DeleteConfirmModal';
import { PatientForm } from '../forms';
import PatientVisitesView from './PatientVisitesView';

const PatientsSection = ({ patients = [], openModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [modalAction, setModalAction] = useState('');
  const [currentView, setCurrentView] = useState('list'); // 'list' ou 'visites'
  const [viewingPatient, setViewingPatient] = useState(null);

  // Données d'exemple si aucun patient n'est fourni
  const mockPatients = [
    {
      id: 1,
      nom: 'Marie Dubois',
      age: 28,
      telephone: '+237 6XX XXX XXX',
      statut: 'Enceinte',
      grossesseSemaine: 24,
      dernierRdv: '15/01/2024',
      niveauCPN: 'CPN3'
    },
    {
      id: 2,
      nom: 'Sophie Martin',
      age: 32,
      telephone: '+237 6XX XXX XXX',
      statut: 'Post-partum',
      grossesseSemaine: null,
      dernierRdv: '10/01/2024',
      niveauCPN: 'CPN4'
    },
    {
      id: 3,
      nom: 'Aminata Diallo',
      age: 25,
      telephone: '+237 6XX XXX XXX',
      statut: 'Enceinte',
      grossesseSemaine: 16,
      dernierRdv: '20/01/2024',
      niveauCPN: 'CPN2'
    }
  ];

  const patientsData = patients.length > 0 ? patients : mockPatients;
  const filteredPatients = patientsData.filter(patient =>
    patient.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = () => {
    setSelectedPatient(null);
    setModalAction('add');
    setIsModalOpen(true);
  };

  const handleEditPatient = (patient) => {
    setSelectedPatient(patient);
    setModalAction('edit');
    setIsModalOpen(true);
  };

  const handleSubmitPatient = (formData) => {
    console.log('Patient data:', formData);
    // Ici vous ajouteriez la logique pour sauvegarder
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  const handleDeletePatient = (patient) => {
    setSelectedPatient(patient);
    setIsDeleteModalOpen(true);
  };

  const confirmDeletePatient = () => {
    console.log('Suppression du patient:', selectedPatient);
    // Ici vous ajouteriez la logique pour supprimer
    setIsDeleteModalOpen(false);
    setSelectedPatient(null);
  };

  const handleViewVisites = (patient) => {
    setViewingPatient(patient);
    setCurrentView('visites');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setViewingPatient(null);
  };

  const getStatutColor = (statut) => {
    switch (statut) {
      case 'Enceinte':
        return 'bg-green-100 text-green-800';
      case 'Post-partum':
        return 'bg-blue-100 text-blue-800';
      case 'Suivi':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Rendu conditionnel basé sur la vue actuelle */}
      {currentView === 'list' ? (
        <>
          {/* Header avec bouton d'ajout */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Gestion des Patients</h2>
            <motion.button
              onClick={handleAddPatient}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg hover:from-teal-700 hover:via-teal-700 hover:to-teal-800 transition-all shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="w-4 h-4" />
              Nouveau Patient
            </motion.button>
          </div>

      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un patient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      {/* Tableau des patients */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grossesse
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Niveau CPN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dernier RDV
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <motion.tr
                  key={patient.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{patient.nom}</div>
                      <div className="text-sm text-gray-500">{patient.age} ans • {patient.telephone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatutColor(patient.statut)}`}>
                      {patient.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.grossesseSemaine ? `${patient.grossesseSemaine} semaines` : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {patient.niveauCPN ? (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {patient.niveauCPN}
                      </span>
                    ) : (
                      <span className="text-gray-400">Non défini</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.dernierRdv}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <motion.button
                        className="text-indigo-600 hover:text-indigo-900 p-1"
                        whileHover={{ scale: 1.1 }}
                        title="Voir détails"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleViewVisites(patient)}
                        className="text-blue-600 hover:text-blue-900 p-1"
                        whileHover={{ scale: 1.1 }}
                        title="Visites prénatales"
                      >
                        <Calendar className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleEditPatient(patient)}
                        className="text-teal-600 hover:text-teal-900 p-1"
                        whileHover={{ scale: 1.1 }}
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleDeletePatient(patient)}
                        className="text-red-600 hover:text-red-900 p-1"
                        whileHover={{ scale: 1.1 }}
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPatients.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              {searchTerm ? 'Aucun patient trouvé' : 'Aucun patient enregistré'}
            </div>
          </div>
        )}
      </div>

      {/* Modal pour ajouter/modifier un patient */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalAction === 'add' ? 'Nouveau Patient' : 'Modifier Patient'}
      >
        <PatientForm
          patient={selectedPatient}
          onSubmit={handleSubmitPatient}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      {/* Modal de confirmation de suppression */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeletePatient}
        title="Supprimer Patient"
        message="Êtes-vous sûr de vouloir supprimer ce patient ?"
        itemName={selectedPatient?.nom}
      />
        </>
      ) : (
        /* Vue des visites prénatales */
        <PatientVisitesView
          patient={viewingPatient}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
};

export default PatientsSection;