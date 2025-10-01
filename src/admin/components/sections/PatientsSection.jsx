import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import { PatientForm } from '../forms';

const PatientsSection = ({ patients = [], openModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [modalAction, setModalAction] = useState('');

  // Données d'exemple si aucun patient n'est fourni
  const mockPatients = [
    {
      id: 1,
      nom: 'Marie Dubois',
      age: 28,
      telephone: '+237 6XX XXX XXX',
      statut: 'Enceinte',
      grossesseSemaine: 24,
      dernierRdv: '15/01/2024'
    },
    {
      id: 2,
      nom: 'Sophie Martin',
      age: 32,
      telephone: '+237 6XX XXX XXX',
      statut: 'Post-partum',
      grossesseSemaine: null,
      dernierRdv: '10/01/2024'
    },
    {
      id: 3,
      nom: 'Aminata Diallo',
      age: 25,
      telephone: '+237 6XX XXX XXX',
      statut: 'Enceinte',
      grossesseSemaine: 16,
      dernierRdv: '20/01/2024'
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
      {/* Header avec bouton d'ajout */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Patients</h2>
        <button
          onClick={() => openModal('patient')}
          className="flex items-center gap-2 bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg  transition-all cursor-pointer"
        >
          <Plus size={20} />
          Ajouter un patient
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="flex items-center bg-white rounded-lg border border-gray-300 px-4 py-3 shadow-sm">
        <Search size={20} className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Rechercher un patient par nom, téléphone..."
          className="flex-1 bg-transparent border-none outline-none text-gray-600"
        />
      </div>

      {/* Table des patients */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Nom</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Âge</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Téléphone</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Dernière visite</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Statut</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-gray-800">{patient.nom}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{patient.age} ans</td>
                  <td className="py-4 px-6 text-gray-600">{patient.telephone}</td>
                  <td className="py-4 px-6 text-gray-600">{patient.derniereVisite}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {patient.statut}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => openModal('patient', patient)}
                        className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientsSection;