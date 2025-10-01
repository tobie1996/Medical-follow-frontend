import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Clock, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import DeleteConfirmModal from '../ui/DeleteConfirmModal';
import { RendezVousForm } from '../forms';

const RendezVousSection = ({ rendezvous = [], patients = [], openModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRendezVous, setSelectedRendezVous] = useState(null);
  const [modalAction, setModalAction] = useState('');

  // Données d'exemple si aucun rendez-vous n'est fourni
  const mockRendezVous = [
    {
      id: 1,
      patient: 'Marie Dubois',
      date: '2024-01-25',
      heure: '09:00',
      type: 'Consultation prénatale',
      medecin: 'Dr. Sophie Mbarga',
      hopital: 'CHU de Yaoundé',
      statut: 'Confirmé'
    },
    {
      id: 2,
      patient: 'Sophie Martin',
      date: '2024-01-25',
      heure: '10:30',
      type: 'Échographie',
      medecin: 'Dr. Alain Fotso',
      hopital: 'Hôpital Gynéco-Obstétrique de Yaoundé',
      statut: 'En attente'
    },
    {
      id: 3,
      patient: 'Aminata Diallo',
      date: '2024-01-26',
      heure: '14:00',
      type: 'Contrôle de routine',
      medecin: 'Dr. Marie Nguyen',
      hopital: 'Centre Médical La Colombe',
      statut: 'Confirmé'
    }
  ];

  const mockPatients = [
    { id: 1, nom: 'Marie Dubois', age: 28 },
    { id: 2, nom: 'Sophie Martin', age: 32 },
    { id: 3, nom: 'Aminata Diallo', age: 25 }
  ];

  const rendezVousData = rendezvous.length > 0 ? rendezvous : mockRendezVous;
  const patientsData = patients.length > 0 ? patients : mockPatients;
  
  const filteredRendezVous = rendezVousData.filter(rdv =>
    rdv.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rdv.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddRendezVous = () => {
    setSelectedRendezVous(null);
    setModalAction('add');
    setIsModalOpen(true);
  };

  const handleEditRendezVous = (rdv) => {
    setSelectedRendezVous(rdv);
    setModalAction('edit');
    setIsModalOpen(true);
  };

  const handleSubmitRendezVous = (formData) => {
    console.log('RendezVous data:', formData);
    // Ici vous ajouteriez la logique pour sauvegarder
    setIsModalOpen(false);
    setSelectedRendezVous(null);
  };

  const handleDeleteRendezVous = (rdv) => {
    setSelectedRendezVous(rdv);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteRendezVous = () => {
    console.log('Suppression du rendez-vous:', selectedRendezVous);
    // Ici vous ajouteriez la logique pour supprimer
    setIsDeleteModalOpen(false);
    setSelectedRendezVous(null);
  };

  const getStatutColor = (statut) => {
    switch (statut) {
      case 'Confirmé':
        return 'bg-green-100 text-green-800';
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Reporté':
        return 'bg-orange-100 text-orange-800';
      case 'Annulé':
        return 'bg-red-100 text-red-800';
      case 'Terminé':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header avec bouton d'ajout */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Rendez-vous</h2>
        <motion.button
          onClick={handleAddRendezVous}
          className="flex items-center gap-2 bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-all shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="w-4 h-4" />
          Nouveau Rendez-vous
        </motion.button>
      </div>

      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher par patient ou type de consultation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      {/* Tableau des rendez-vous */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Heure
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Médecin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRendezVous.map((rdv) => (
                <motion.tr
                  key={rdv.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <div className="text-sm font-medium text-gray-900">{rdv.patient}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <div>
                        <div>{formatDate(rdv.date)}</div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {rdv.heure}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {rdv.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{rdv.medecin}</div>
                      <div className="text-xs text-gray-500">{rdv.hopital}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatutColor(rdv.statut)}`}>
                      {rdv.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <motion.button
                        onClick={() => handleEditRendezVous(rdv)}
                        className="text-teal-600 hover:text-teal-900 p-1"
                        whileHover={{ scale: 1.1 }}
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleDeleteRendezVous(rdv)}
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

        {filteredRendezVous.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              {searchTerm ? 'Aucun rendez-vous trouvé' : 'Aucun rendez-vous planifié'}
            </div>
          </div>
        )}
      </div>

      {/* Modal pour ajouter/modifier un rendez-vous */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalAction === 'add' ? 'Nouveau Rendez-vous' : 'Modifier Rendez-vous'}
      >
        <RendezVousForm
          rendezVous={selectedRendezVous}
          patients={patientsData}
          onSubmit={handleSubmitRendezVous}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      {/* Modal de confirmation de suppression */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteRendezVous}
        title="Supprimer Rendez-vous"
        message="Êtes-vous sûr de vouloir supprimer ce rendez-vous ?"
        itemName={selectedRendezVous ? `${selectedRendezVous.patient} - ${selectedRendezVous.type}` : ''}
      />
    </div>
  );
};

export default RendezVousSection;