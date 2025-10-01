import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calendar, Heart, Stethoscope, Baby } from 'lucide-react';

// Import des composants
import { 
  ProgressSteps, 
  StepHeader, 
  NavigationButtons, 
  SuccessScreen 
} from './components';

// Import des étapes
import { 
  PersonalInfoStep, 
  MedicalHistoryStep, 
  PregnancyInfoStep, 
  AppointmentStep 
} from './steps';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Étape 1: Informations personnelles
    fullName: '',
    birthDate: '',
    address: '',
    phone: '',
    email: '',
    
    // Étape 2: Informations médicales
    bloodType: '',
    allergies: '',
    chronicDiseases: '',
    medications: '',
    
    // Étape 3: Informations de grossesse
    lastPeriodDate: '',
    previousPregnancies: '',
    complications: '',
    expectedDueDate: '',
    
    // Étape 4: Préférences de consultation
    preferredDate: '',
    preferredTime: '',
    hospital: '',
    emergencyContact: '',
    emergencyPhone: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const totalSteps = 4;

  // Fonction pour faire défiler vers le haut à chaque changement d'étape
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Animation douce pour une meilleure UX
    });
  }, [currentStep]);

  const steps = [
    {
      id: 1,
      title: "Informations Personnelles",
      icon: User,
      color: "from-teal-500 to-blue-600",
      illustration: "👤"
    },
    {
      id: 2,
      title: "Antécédents Médicaux",
      icon: Stethoscope,
      color: "from-teal-500 to-blue-600",
      illustration: "🏥"
    },
    {
      id: 3,
      title: "Informations de Grossesse",
      icon: Heart,
      color: "from-teal-500 to-blue-600",
      illustration: "💝"
    },
    {
      id: 4,
      title: "Rendez-vous",
      icon: Calendar,
      color: "from-teal-500 to-blue-600",
      illustration: "📅"
    }
  ];

  const validateStep = (step) => {
    const newErrors = {};

    // Tous les champs sont maintenant optionnels
    // Validation uniquement du format email si renseigné
    if (step === 1) {
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "L'email n'est pas valide";
      }
    }

    // Aucune validation obligatoire pour les autres étapes
    // Les utilisateurs peuvent passer même avec des champs vides

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      // Le scroll sera automatiquement géré par useEffect
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Le scroll sera automatiquement géré par useEffect
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Scroll vers le haut avant d'afficher la page de succès
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Petite temporisation pour permettre le scroll avant de changer l'état
      setTimeout(() => {
        setIsSubmitted(true);
      }, 300);
      
      // Ici vous pouvez ajouter l'envoi des données vers votre API
      console.log('Données du formulaire:', formData);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            onChange={handleInputChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <MedicalHistoryStep
            formData={formData}
            onChange={handleInputChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <PregnancyInfoStep
            formData={formData}
            onChange={handleInputChange}
            errors={errors}
          />
        );
      case 4:
        return (
          <AppointmentStep
            formData={formData}
            onChange={handleInputChange}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return <SuccessScreen />;
  }

  return (
    <div className="mx-[10px] md:mx-[15px] min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-6 md:py-12 px-2 md:px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-4 md:mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Baby className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
            Première Consultation Prénatale
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Remplissez ce formulaire pour planifier votre suivi médical personnalisé
          </p>
        </motion.div>

        {/* Progress Steps */}
        <ProgressSteps 
          steps={steps}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />

        {/* Form Card */}
        <motion.div 
          className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <StepHeader step={steps[currentStep - 1]} />

          <form onSubmit={handleSubmit} className="p-4 md:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                custom={1}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <NavigationButtons
              currentStep={currentStep}
              totalSteps={totalSteps}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onSubmit={handleSubmit}
            />
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-8 md:mt-12 text-gray-600 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs md:text-sm leading-relaxed">
            Vos informations sont sécurisées et confidentielles. 
            <span className="text-teal-600 font-semibold"> Protégé par chiffrement SSL</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiStepForm;