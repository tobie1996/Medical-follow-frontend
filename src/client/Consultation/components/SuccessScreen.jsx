import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Baby, Heart, Phone } from 'lucide-react';

const SuccessScreen = () => {
  // Scroll vers le haut quand le composant SuccessScreen se monte
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const successVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div className="mx-[15px] min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 py-6 md:py-12 px-4 flex items-center justify-center">
      <motion.div 
        className="max-w-2xl w-full bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Confetti effect - Réduites sur mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"
              initial={{ 
                top: "50%", 
                left: "50%",
                opacity: 1 
              }}
              animate={{ 
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
                scale: [1, 2, 0]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.02,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <motion.div
          variants={successVariants}
          initial="initial"
          animate="animate"
          className="inline-block mb-6 md:mb-8"
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0.7)",
                  "0 0 0 20px rgba(16, 185, 129, 0)",
                  "0 0 0 0 rgba(16, 185, 129, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
            >
              <CheckCircle className="w-12 h-12 md:w-20 md:h-20 text-white" strokeWidth={3} />
            </motion.div>
            
            {/* Floating elements - Taille adaptée */}
            <motion.div
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            >
              <Baby className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: 0.5
              }}
            >
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2 
          className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Félicitations ! 🎉
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Votre demande de consultation prénatale a été envoyée avec succès
        </motion.p>

        <motion.div
          className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm md:text-lg text-gray-700 mb-3 md:mb-4 leading-relaxed">
            <strong className="text-teal-600">Notre équipe médicale vous contactera dans les 24 heures</strong> pour confirmer votre rendez-vous de première visite prénatale.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-600 text-sm md:text-base">
            <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="text-center">Vérifiez votre téléphone et vos emails</span>
          </div>
        </motion.div>

        <motion.button
          className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          onClick={() => window.location.reload()}
        >
          Retour à l'accueil
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SuccessScreen;