import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const NavigationButtons = ({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext, 
  onSubmit 
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 gap-4 sm:gap-0">
      <motion.button
        type="button"
        onClick={onPrevious}
        className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all ${
          currentStep === 1 
            ? 'text-gray-400 cursor-not-allowed bg-gray-100' 
            : 'text-gray-700 hover:bg-gray-100 bg-white border border-gray-300'
        } order-2 sm:order-1`}
        whileHover={currentStep > 1 ? { scale: 1.02, x: -2 } : {}}
        whileTap={currentStep > 1 ? { scale: 0.98 } : {}}
        disabled={currentStep === 1}
      >
        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-sm md:text-base">Précédent</span>
      </motion.button>

      {currentStep < totalSteps ? (
        <motion.button
          type="button"
          onClick={onNext}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg order-1 sm:order-2"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Suivant</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>
      ) : (
        <motion.button
          type="submit"
          onClick={onSubmit}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg order-1 sm:order-2"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">Soumettre la demande</span>
          <span className="sm:hidden">Soumettre</span>
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButtons;