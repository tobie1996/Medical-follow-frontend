import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Calendar, 
  Pill, 
  Bell,
  Edit3,
  Clock,
  MapPin,
  Stethoscope,
  Baby,
  Heart,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import AppointmentsComponent from './profilComponent/AppointmentsComponent';

const Profil = () => {
  const [activeSection, setActiveSection] = useState('profil');
  const [isEditing, setIsEditing] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Données de la patiente
  const [patientData, setPatientData] = useState({
    personalInfo: {
      fullName: "Marie Kamga",
      email: "marie.kamga@email.com",
      phone: "+237 6XX XX XX XX",
      birthDate: "1992-05-15",
      address: "123 Avenue de la Santé, Yaoundé",
      bloodType: "A+",
      emergencyContact: "Jean Kamga - +237 6YY YY YY YY"
    },
    pregnancyInfo: {
      lastPeriodDate: "2024-01-10",
      expectedDueDate: "2024-10-17",
      currentWeek: 28,
      doctor: "Dr. Sophie Mbarga",
      hospital: "Centre Médical Mère-Enfant Yaoundé"
    },
    appointments: [
      {
        id: 1,
        date: "2024-07-15",
        time: "10:00",
        type: "Consultation mensuelle",
        doctor: "Dr. Sophie Mbarga",
        status: "confirmé"
      },
      {
        id: 2,
        date: "2024-07-22",
        time: "14:30",
        type: "Échographie",
        doctor: "Dr. Alain Fotso",
        status: "confirmé"
      },
      {
        id: 3,
        date: "2024-08-05",
        time: "09:15",
        type: "Consultation prénatale",
        doctor: "Dr. Sophie Mbarga",
        status: "en attente"
      }
    ],
    medications: [
      {
        id: 1,
        name: "Acide Folique",
        dosage: "400μg",
        frequency: "1 fois par jour",
        time: "Matin",
        instructions: "À prendre avec un verre d'eau",
        status: "actif"
      },
      {
        id: 2,
        name: "Fer",
        dosage: "65mg",
        frequency: "1 fois par jour",
        time: "Soir",
        instructions: "À distance des repas",
        status: "actif"
      },
      {
        id: 3,
        name: "Vitamine D",
        dosage: "1000 UI",
        frequency: "1 fois par semaine",
        time: "Lundi matin",
        instructions: "",
        status: "actif"
      }
    ],
    medicalInstructions: [
      {
        id: 1,
        title: "Activité physique",
        description: "Marche quotidienne de 30 minutes. Éviter les sports à impact.",
        icon: "activity",
        important: true
      },
      {
        id: 2,
        title: "Alimentation",
        description: "Repas équilibrés riches en fer et calcium. Éviter les aliments crus.",
        icon: "nutrition",
        important: true
      },
      {
        id: 3,
        title: "Repos",
        description: "8 heures de sommeil par nuit. Sieste si nécessaire.",
        icon: "rest",
        important: false
      }
    ]
  });

  const menuItems = [
    { id: 'profil', label: 'Mon Profil', icon: User },
    { id: 'rendezvous', label: 'Mes Rendez-vous', icon: Calendar },
    { id: 'medicaments', label: 'Traitements', icon: Pill },
    { id: 'instructions', label: 'Instructions', icon: Bell }
  ];

  const handleInputChange = (section, field, value) => {
    setPatientData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Effet pour remonter en haut de la page lors du changement de section
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'profil':
        return <ProfileSection data={patientData} isEditing={isEditing} onEdit={setIsEditing} onChange={handleInputChange} />;
      case 'rendezvous':
        return <AppointmentsComponent appointments={patientData.appointments} />;
      case 'medicaments':
        return <MedicationsSection medications={patientData.medications} />;
      case 'instructions':
        return <InstructionsSection instructions={patientData.medicalInstructions} />;
      default:
        return <ProfileSection data={patientData} isEditing={isEditing} onEdit={setIsEditing} onChange={handleInputChange} />;
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50/30 py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
        </motion.div>

        {/* Bouton flottant pour ouvrir/fermer la sidebar */}
        <motion.button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed md:bottom-6 bottom-20 right-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {isSidebarOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <User className="w-5 h-5 sm:w-6 sm:h-6" />}
        </motion.button>

        {/* Overlay pour toutes les tailles d'écran */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              className="fixed inset-0  z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          {/* Sidebar universelle (mobile, tablette et desktop) */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div
                className="fixed top-0 left-0 h-full w-80 sm:w-96 bg-white shadow-2xl z-50"
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <div className="p-4 sm:p-6 h-full overflow-y-auto">
                  {/* Bouton de fermeture */}
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">Menu</h2>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Profil rapide */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">{patientData.personalInfo.fullName}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">Semaine {patientData.pregnancyInfo.currentWeek} de grossesse</p>
                    <div className="mt-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium inline-block">
                      {patientData.pregnancyInfo.expectedDueDate}
                    </div>
                  </div>

                  {/* Menu */}
                  <nav className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSection(item.id);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all text-sm sm:text-base ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="flex-1 text-left font-medium">{item.label}</span>
                        {activeSection === item.id && <ChevronRight className="w-4 h-4" />}
                      </button>
                    ))}
                  </nav>

                  {/* Contact info */}
                  <div className="pt-4 sm:pt-6 border-t border-gray-100">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{patientData.personalInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{patientData.personalInfo.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contenu principal */}
          <motion.div 
            className="flex-1 min-w-0 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            key={activeSection}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8">
              {renderSection()}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Section Profil
const ProfileSection = ({ data, isEditing, onEdit, onChange }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Mon Profil</h2>
        <motion.button
          onClick={() => onEdit(!isEditing)}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Edit3 className="w-4 h-4" />
          {isEditing ? 'Sauvegarder' : 'Modifier'}
        </motion.button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
        {/* Informations personnelles */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            Informations Personnelles
          </h3>
          
          <div className="space-y-3 sm:space-y-4">
            <InfoField 
              label="Nom complet" 
              value={data.personalInfo.fullName}
              editing={isEditing}
              onChange={(value) => onChange('personalInfo', 'fullName', value)}
            />
            <InfoField 
              label="Email" 
              value={data.personalInfo.email}
              editing={isEditing}
              type="email"
              onChange={(value) => onChange('personalInfo', 'email', value)}
            />
            <InfoField 
              label="Téléphone" 
              value={data.personalInfo.phone}
              editing={isEditing}
              onChange={(value) => onChange('personalInfo', 'phone', value)}
            />
            <InfoField 
              label="Date de naissance" 
              value={data.personalInfo.birthDate}
              editing={isEditing}
              type="date"
              onChange={(value) => onChange('personalInfo', 'birthDate', value)}
            />
            <InfoField 
              label="Adresse" 
              value={data.personalInfo.address}
              editing={isEditing}
              textarea
              onChange={(value) => onChange('personalInfo', 'address', value)}
            />
          </div>
        </div>

        {/* Informations médicales */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            <Baby className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            Suivi de Grossesse
          </h3>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">
                {data.pregnancyInfo.currentWeek} semaines
              </div>
              <p className="text-sm sm:text-base text-gray-600">Terme actuel</p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <InfoField 
              label="Date dernières règles" 
              value={data.pregnancyInfo.lastPeriodDate}
              editing={isEditing}
              type="date"
              onChange={(value) => onChange('pregnancyInfo', 'lastPeriodDate', value)}
            />
            <InfoField 
              label="Date prévue d'accouchement" 
              value={data.pregnancyInfo.expectedDueDate}
              editing={isEditing}
              type="date"
              onChange={(value) => onChange('pregnancyInfo', 'expectedDueDate', value)}
            />
            <InfoField 
              label="Groupe sanguin" 
              value={data.personalInfo.bloodType}
              editing={isEditing}
              onChange={(value) => onChange('personalInfo', 'bloodType', value)}
            />
            <InfoField 
              label="Contact d'urgence" 
              value={data.personalInfo.emergencyContact}
              editing={isEditing}
              onChange={(value) => onChange('personalInfo', 'emergencyContact', value)}
            />
          </div>

          {/* Équipe médicale */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-xl sm:rounded-2xl">
            <h4 className="font-semibold text-teal-800 mb-2 text-sm sm:text-base">Équipe médicale</h4>
            <p className="text-teal-700 text-sm sm:text-base">👩‍⚕️ {data.pregnancyInfo.doctor}</p>
            <p className="text-teal-700 text-sm sm:text-base">🏥 {data.pregnancyInfo.hospital}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section Médicaments
const MedicationsSection = ({ medications }) => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Pill className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
        Mes Traitements
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {medications.map((med) => (
          <motion.div
            key={med.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm"
          >
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex-1 min-w-0 pr-2">{med.name}</h3>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                {med.status}
              </span>
            </div>
            
            <div className="space-y-2 text-gray-600 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Dosage:</span>
                <span className="font-semibold">{med.dosage}</span>
              </div>
              <div className="flex justify-between">
                <span>Fréquence:</span>
                <span className="font-semibold">{med.frequency}</span>
              </div>
              <div className="flex justify-between">
                <span>Horaire:</span>
                <span className="font-semibold">{med.time}</span>
              </div>
              {med.instructions && (
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500">{med.instructions}</p>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-3 sm:mt-4">
              <motion.button
                className="flex-1 py-2 bg-green-500 text-white rounded-xl font-semibold text-xs sm:text-sm hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pris aujourd'hui
              </motion.button>
              <motion.button
                className="px-3 sm:px-4 py-2 border border-gray-300 text-gray-600 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rappel
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Section Instructions
const InstructionsSection = ({ instructions }) => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Bell className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
        Instructions Médicales
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {instructions.map((instruction) => (
          <motion.div
            key={instruction.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
              instruction.important 
                ? 'bg-orange-50 border-orange-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              {instruction.important ? (
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" />
              ) : (
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-1" />
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {instruction.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {instruction.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Composants réutilisables
const InfoField = ({ label, value, editing, type = 'text', textarea = false, onChange }) => {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">{label}</label>
      {editing ? (
        textarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-sm sm:text-base"
            rows="3"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-sm sm:text-base"
          />
        )
      ) : (
        <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl text-gray-800 text-sm sm:text-base">{value}</p>
      )}
    </div>
  );
};

export default Profil;