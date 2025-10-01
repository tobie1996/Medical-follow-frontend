import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Phone, MapPin, Heart, AlertCircle, FileText } from 'lucide-react';

const PatientForm = ({ patient, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    nom: patient?.nom || '',
    age: patient?.age || '',
    telephone: patient?.telephone || '',
    adresse: patient?.adresse || '',
    dateNaissance: patient?.dateNaissance || '',
    situationMatrimoniale: patient?.situationMatrimoniale || '',
    profession: patient?.profession || '',
    urgenceContact: patient?.urgenceContact || '',
    urgenceTelephone: patient?.urgenceTelephone || '',
    groupeSanguin: patient?.groupeSanguin || '',
    allergies: patient?.allergies || '',
    maladiesChroniques: patient?.maladiesChroniques || '',
    medicamentsActuels: patient?.medicamentsActuels || '',
    antecedentsMedicaux: patient?.antecedentsMedicaux || '',
    grossessesPrecedentes: patient?.grossessesPrecedentes || '',
    complications: patient?.complications || '',
    notes: patient?.notes || ''
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

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      {/* Informations personnelles */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-teal-600" />
          Informations Personnelles
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4" />
              Nom complet *
            </label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder="Nom et prénom"
              required
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Âge *
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder="Âge en années"
              min="12"
              max="60"
              required
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Date de naissance *
            </label>
            <input
              type="date"
              name="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4" />
              Téléphone *
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder="+237 6XX XXX XXX"
              required
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Situation matrimoniale
            </label>
            <select
              name="situationMatrimoniale"
              value={formData.situationMatrimoniale}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            >
              <option value="">Sélectionner</option>
              <option value="Célibataire">Célibataire</option>
              <option value="Mariée">Mariée</option>
              <option value="Concubinage">Concubinage</option>
              <option value="Divorcée">Divorcée</option>
              <option value="Veuve">Veuve</option>
            </select>
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder="Profession actuelle"
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4" />
              Adresse complète *
            </label>
            <textarea
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
              placeholder="Adresse résidentielle complète"
              required
            />
          </motion.div>
        </div>
      </div>

      {/* Contact d'urgence */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          Contact d'Urgence
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du contact d'urgence *
            </label>
            <input
              type="text"
              name="urgenceContact"
              value={formData.urgenceContact}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder="Nom complet"
              required
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone d'urgence *
            </label>
            <input
              type="tel"
              name="urgenceTelephone"
              value={formData.urgenceTelephone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder="+237 6XX XXX XXX"
              required
            />
          </motion.div>
        </div>
      </div>

      {/* Informations médicales */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          Informations Médicales
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Groupe sanguin
            </label>
            <select
              name="groupeSanguin"
              value={formData.groupeSanguin}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            >
              <option value="">Sélectionner</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Grossesses précédentes
            </label>
            <input
              type="number"
              name="grossessesPrecedentes"
              value={formData.grossessesPrecedentes}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder="Nombre"
              min="0"
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Allergies connues
            </label>
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
              placeholder="Médicaments, aliments, substances..."
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maladies chroniques
            </label>
            <textarea
              name="maladiesChroniques"
              value={formData.maladiesChroniques}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
              placeholder="Diabète, hypertension, asthme..."
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Médicaments actuels
            </label>
            <textarea
              name="medicamentsActuels"
              value={formData.medicamentsActuels}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
              placeholder="Médicaments pris régulièrement..."
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Antécédents médicaux familiaux
            </label>
            <textarea
              name="antecedentsMedicaux"
              value={formData.antecedentsMedicaux}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
              placeholder="Maladies héréditaires, complications familiales..."
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Complications précédentes
            </label>
            <textarea
              name="complications"
              value={formData.complications}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
              placeholder="Complications lors de grossesses antérieures..."
            />
          </motion.div>
        </div>
      </div>

      {/* Notes supplémentaires */}
      <motion.div variants={inputVariants} whileFocus="focus">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
          <FileText className="w-4 h-4" />
          Notes supplémentaires
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
          placeholder="Informations complémentaires..."
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
          {patient ? 'Modifier' : 'Ajouter'} le patient
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default PatientForm;