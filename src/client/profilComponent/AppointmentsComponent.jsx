import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Stethoscope, 
  X,
  Phone,
  Mail
} from 'lucide-react';

// Fonction utilitaire pour les couleurs de statut
const getStatusColor = (status) => {
  switch (status) {
    case 'Confirmé':
      return 'bg-green-100 text-green-800';
    case 'En attente':
      return 'bg-yellow-100 text-yellow-800';
    case 'Annulé':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Données d'exemple pour les rendez-vous
const sampleAppointments = [
  {
    id: 1,
    type: 'Consultation prénatale',
    date: '2025-10-05',
    time: '14:30',
    doctor: 'Dr. Marie Dubois',
    location: 'Cabinet Médical Central',
    status: 'Confirmé',
    notes: 'Échographie de contrôle du 7ème mois',
    phone: '01 23 45 67 89',
    email: 'marie.dubois@cabinet-medical.fr'
  },
  {
    id: 2,
    type: 'Échographie morphologique',
    date: '2025-10-12',
    time: '10:00',
    doctor: 'Dr. Jean Martin',
    location: 'Centre Imagerie Médicale',
    status: 'En attente',
    notes: 'Échographie détaillée - Prévoir 45 minutes',
    phone: '01 98 76 54 32',
    email: 'j.martin@imagerie-centre.fr'
  },
  {
    id: 3,
    type: 'Consultation sage-femme',
    date: '2025-10-18',
    time: '16:00',
    doctor: 'Mme. Sophie Laurent',
    location: 'Maternité Saint-Antoine',
    status: 'Confirmé',
    notes: 'Préparation à l\'accouchement - Séance 3/8',
    phone: '01 45 67 89 12',
    email: 'sophie.laurent@maternite-sa.fr'
  }
];

const AppointmentsComponent = ({ appointments = sampleAppointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Composant pour les détails d'un rendez-vous
  const AppointmentDetails = ({ appointment, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-gray-800">{appointment.type}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">{appointment.date}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-green-600" />
            <span>{appointment.time}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Stethoscope className="w-5 h-5 text-purple-600" />
            <span>{appointment.doctor}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-red-600" />
            <span>{appointment.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-teal-600" />
            <span>{appointment.phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-orange-600" />
            <span className="text-sm">{appointment.email}</span>
          </div>

          {appointment.notes && (
            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-2">Notes importantes :</h4>
              <p className="text-blue-700 text-sm">{appointment.notes}</p>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="font-semibold">Statut :</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
              {appointment.status}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
      {/* Sidebar - Informations */}
      <div className="lg:w-80 xl:w-96">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100 sticky top-4">
          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            Informations Rendez-vous
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Statistiques</h4>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-green-50 rounded-lg p-2">
                  <div className="text-lg sm:text-xl font-bold text-green-600">
                    {appointments.filter(apt => apt.status === 'Confirmé').length}
                  </div>
                  <div className="text-xs text-green-700">Confirmés</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-2">
                  <div className="text-lg sm:text-xl font-bold text-yellow-600">
                    {appointments.filter(apt => apt.status === 'En attente').length}
                  </div>
                  <div className="text-xs text-yellow-700">En attente</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Prochain RDV</h4>
              {appointments.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-sm font-medium text-blue-600">
                    {appointments[0].type}
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {appointments[0].date} à {appointments[0].time}
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <Stethoscope className="w-3 h-3" />
                    {appointments[0].doctor}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500">Aucun rendez-vous programmé</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Conseils</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Arrivez 15 minutes avant votre RDV
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Apportez votre carte vitale et mutuelle
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Préparez vos questions à l'avance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Contact Urgence</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-red-600">
                  <Phone className="w-3 h-3" />
                  <span className="font-medium">15 - SAMU</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Phone className="w-3 h-3" />
                  <span>Maternité: 01 42 75 43 21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal - Liste des rendez-vous */}
      <div className="flex-1 min-w-0">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            Mes Rendez-vous
          </h2>
        </div>

        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <motion.div
              key={appointment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedAppointment(appointment)}
            >
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {appointment.type}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap self-start sm:self-auto ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 text-gray-600 text-sm sm:text-base">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{appointment.date} à {appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Stethoscope className="w-4 h-4 flex-shrink-0" />
                      <span>{appointment.doctor}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{appointment.location}</span>
                    </div>
                  </div>

                  {appointment.notes && (
                    <p className="text-sm text-gray-500 mt-2 italic">
                      {appointment.notes}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {appointments.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              Aucun rendez-vous programmé
            </h3>
            <p className="text-gray-400">
              Contactez votre médecin pour planifier un rendez-vous
            </p>
          </div>
        )}

        {/* Modale des détails */}
        <AnimatePresence>
          {selectedAppointment && (
            <AppointmentDetails
              appointment={selectedAppointment}
              onClose={() => setSelectedAppointment(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppointmentsComponent;