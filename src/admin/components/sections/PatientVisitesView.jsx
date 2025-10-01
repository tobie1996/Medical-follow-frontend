import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus, Edit, Trash2, ArrowLeft, User, Weight, Activity, FileText } from 'lucide-react';
import Modal from '../ui/Modal';
import DeleteConfirmModal from '../ui/DeleteConfirmModal';

const PatientVisitesView = ({ patient, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedVisite, setSelectedVisite] = useState(null);
  const [modalAction, setModalAction] = useState('');

  // Données d'exemple pour les visites prénatales du patient
  const [visites, setVisites] = useState([
    {
      id: 1,
      patientId: patient.id,
      dateVisite: '2024-09-15',
      semaines: 24,
      poids: '68 kg',
      tension: '120/80',
      tailleFoetus: '31 cm',
      battementCoeur: '145 bpm',
      remarques: 'Développement normal, tout va bien',
      prochainRdv: '2024-10-15'
    },
    {
      id: 2,
      patientId: patient.id,
      dateVisite: '2024-08-15',
      semaines: 20,
      poids: '65 kg',
      tension: '118/75',
      tailleFoetus: '25 cm',
      battementCoeur: '150 bpm',
      remarques: 'Échographie réalisée, bébé en bonne santé',
      prochainRdv: '2024-09-15'
    },
    {
      id: 3,
      patientId: patient.id,
      dateVisite: '2024-07-15',
      semaines: 16,
      poids: '62 kg',
      tension: '115/70',
      tailleFoetus: '18 cm',
      battementCoeur: '155 bpm',
      remarques: 'Première échographie, développement conforme',
      prochainRdv: '2024-08-15'
    }
  ]);

  const handleAddVisite = () => {
    setSelectedVisite(null);
    setModalAction('add');
    setIsModalOpen(true);
  };

  const handleEditVisite = (visite) => {
    setSelectedVisite(visite);
    setModalAction('edit');
    setIsModalOpen(true);
  };

  const handleDeleteVisite = (visite) => {
    setSelectedVisite(visite);
    setIsDeleteModalOpen(true);
  };

  const handleSubmitVisite = (formData) => {
    if (modalAction === 'add') {
      const newVisite = {
        ...formData,
        id: Date.now(),
        patientId: patient.id
      };
      setVisites([newVisite, ...visites]);
    } else {
      setVisites(visites.map(v => v.id === selectedVisite.id ? { ...formData, id: selectedVisite.id } : v));
    }
    setIsModalOpen(false);
    setSelectedVisite(null);
  };

  const confirmDeleteVisite = () => {
    setVisites(visites.filter(v => v.id !== selectedVisite.id));
    setIsDeleteModalOpen(false);
    setSelectedVisite(null);
  };

  const VisiteForm = ({ visite, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
      dateVisite: visite?.dateVisite || '',
      semaines: visite?.semaines || '',
      poids: visite?.poids || '',
      tension: visite?.tension || '',
      tailleFoetus: visite?.tailleFoetus || '',
      battementCoeur: visite?.battementCoeur || '',
      remarques: visite?.remarques || '',
      prochainRdv: visite?.prochainRdv || ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    const inputVariants = {
      focus: { scale: 1.02, transition: { duration: 0.2 } },
      blur: { scale: 1, transition: { duration: 0.2 } }
    };

    return (
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {/* Informations de la visite */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-teal-600" />
            Informations de la Visite
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4" />
                Date de visite *
              </label>
              <input
                type="date"
                name="dateVisite"
                value={formData.dateVisite}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Semaines d'aménorrhée *
              </label>
              <input
                type="number"
                name="semaines"
                value={formData.semaines}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Ex: 24"
                min="1"
                max="42"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Weight className="w-4 h-4" />
                Poids *
              </label>
              <input
                type="text"
                name="poids"
                value={formData.poids}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Ex: 68 kg"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Activity className="w-4 h-4" />
                Tension artérielle *
              </label>
              <input
                type="text"
                name="tension"
                value={formData.tension}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Ex: 120/80"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Taille du fœtus
              </label>
              <input
                type="text"
                name="tailleFoetus"
                value={formData.tailleFoetus}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Ex: 31 cm"
              />
            </motion.div>

            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Battements du cœur
              </label>
              <input
                type="text"
                name="battementCoeur"
                value={formData.battementCoeur}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Ex: 145 bpm"
              />
            </motion.div>

            <motion.div variants={inputVariants} whileFocus="focus" className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prochain rendez-vous
              </label>
              <input
                type="date"
                name="prochainRdv"
                value={formData.prochainRdv}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </motion.div>
          </div>
        </div>

        {/* Remarques */}
        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <FileText className="w-4 h-4" />
            Remarques et observations
          </label>
          <textarea
            name="remarques"
            value={formData.remarques}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
            placeholder="Observations médicales, recommandations..."
          />
        </motion.div>

        {/* Boutons d'action */}
        <motion.div 
          className="flex justify-end space-x-3 pt-6 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Annuler
          </motion.button>
          <motion.button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 text-white rounded-lg hover:from-teal-700 hover:via-blue-700 hover:to-indigo-800 transition-all font-medium shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {visite ? 'Modifier' : 'Ajouter'} la visite
          </motion.button>
        </motion.div>
      </motion.form>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header avec retour */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux patients
          </motion.button>
        </div>
      </div>

      {/* Informations du patient */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{patient.nom}</h2>
            <p className="text-gray-600">{patient.age} ans • {patient.telephone}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Statut:</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              {patient.statut}
            </span>
          </div>
          <motion.button
            onClick={handleAddVisite}
            className="flex items-center gap-2 bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg  cursor-pointer transition-all shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-4 h-4" />
            Nouvelle Visite
          </motion.button>
        </div>
      </div>

      {/* Liste des visites */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-800">Historique des Visites Prénatales</h3>
          <p className="text-gray-600 mt-1">{visites.length} visite(s) enregistrée(s)</p>
        </div>

        {visites.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Aucune visite prénatale enregistrée</p>
            <p className="text-gray-400 mt-2">Cliquez sur "Nouvelle Visite" pour commencer</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {visites.map((visite) => (
              <motion.div
                key={visite.id}
                className="p-6 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                        <Calendar className="w-5 h-5 text-teal-600" />
                        {new Date(visite.dateVisite).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                        {visite.semaines} SA
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Weight className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Poids: {visite.poids}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Tension: {visite.tension}</span>
                      </div>
                      {visite.tailleFoetus && (
                        <div className="text-sm text-gray-600">
                          Taille fœtus: {visite.tailleFoetus}
                        </div>
                      )}
                      {visite.battementCoeur && (
                        <div className="text-sm text-gray-600">
                          Battements: {visite.battementCoeur}
                        </div>
                      )}
                    </div>

                    {visite.remarques && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Remarques:</p>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{visite.remarques}</p>
                      </div>
                    )}

                    {visite.prochainRdv && (
                      <div className="text-sm text-blue-600">
                        Prochain RDV: {new Date(visite.prochainRdv).toLocaleDateString('fr-FR')}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <motion.button
                      onClick={() => handleEditVisite(visite)}
                      className="text-teal-600 hover:text-teal-900 p-2"
                      whileHover={{ scale: 1.1 }}
                      title="Modifier"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleDeleteVisite(visite)}
                      className="text-red-600 hover:text-red-900 p-2"
                      whileHover={{ scale: 1.1 }}
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal pour ajouter/modifier une visite */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalAction === 'add' ? 'Nouvelle Visite Prénatale' : 'Modifier Visite Prénatale'}
      >
        <VisiteForm
          visite={selectedVisite}
          onSubmit={handleSubmitVisite}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      {/* Modal de confirmation de suppression */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteVisite}
        title="Supprimer Visite"
        message="Êtes-vous sûr de vouloir supprimer cette visite prénatale ?"
        itemName={selectedVisite ? `Visite du ${new Date(selectedVisite.dateVisite).toLocaleDateString('fr-FR')}` : ''}
      />
    </div>
  );
};

export default PatientVisitesView;