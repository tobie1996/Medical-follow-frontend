import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Stethoscope, Building2, FileText } from 'lucide-react';

const RendezVousForm = ({ rendezVous, patients, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    patient: rendezVous?.patient || '',
    date: rendezVous?.date || '',
    heure: rendezVous?.heure || '',
    type: rendezVous?.type || '',
    medecin: rendezVous?.medecin || '',
    hopital: rendezVous?.hopital || '',
    notes: rendezVous?.notes || '',
    statut: rendezVous?.statut || 'En attente'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  const typesConsultation = [
    'Consultation prénatale',
    'Échographie',
    'Contrôle de routine',
    'Vaccination',
    'Suivi post-natal',
    'Urgence',
    'Consultation spécialisée'
  ];

  const medecins = [
    'Dr. Sophie Mbarga',
    'Dr. Alain Fotso',
    'Dr. Marie Nguyen',
    'Dr. Paul Atangana',
    'Dr. Grace Essomba'
  ];

  const hopitaux = [
    'CHU de Yaoundé',
    'Hôpital Central de Yaoundé',
    'Hôpital Gynéco-Obstétrique de Yaoundé',
    'Centre Médical La Colombe',
    'Clinique de la Cathédrale'
  ];

  const creneauxHoraires = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      {/* Informations du rendez-vous */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-teal-600" />
          Informations du Rendez-vous
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4" />
              Patient *
            </label>
            <select
              name="patient"
              value={formData.patient}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Sélectionner un patient</option>
              {patients?.map((patient) => (
                <option key={patient.id} value={patient.nom}>
                  {patient.nom} - {patient.age} ans
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Stethoscope className="w-4 h-4" />
              Type de consultation *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Sélectionner le type</option>
              {typesConsultation.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4" />
              Heure *
            </label>
            <select
              name="heure"
              value={formData.heure}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Sélectionner l'heure</option>
              {creneauxHoraires.map((heure) => (
                <option key={heure} value={heure}>{heure}</option>
              ))}
            </select>
          </motion.div>
        </div>
      </div>

      {/* Informations médicales */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-600" />
          Équipe & Lieu
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Médecin *
            </label>
            <select
              name="medecin"
              value={formData.medecin}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Sélectionner un médecin</option>
              {medecins.map((medecin) => (
                <option key={medecin} value={medecin}>{medecin}</option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hôpital *
            </label>
            <select
              name="hopital"
              value={formData.hopital}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Sélectionner un hôpital</option>
              {hopitaux.map((hopital) => (
                <option key={hopital} value={hopital}>{hopital}</option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Statut
            </label>
            <select
              name="statut"
              value={formData.statut}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            >
              <option value="En attente">En attente</option>
              <option value="Confirmé">Confirmé</option>
              <option value="Reporté">Reporté</option>
              <option value="Annulé">Annulé</option>
              <option value="Terminé">Terminé</option>
            </select>
          </motion.div>
        </div>
      </div>

      {/* Notes */}
      <motion.div variants={inputVariants} whileFocus="focus">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
          <FileText className="w-4 h-4" />
          Notes supplémentaires
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
          placeholder="Instructions spéciales, préparation nécessaire, etc."
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
          className="px-6 py-3 bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 text-white rounded-lg transition-all font-medium shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {rendezVous ? 'Modifier' : 'Planifier'} le rendez-vous
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default RendezVousForm;