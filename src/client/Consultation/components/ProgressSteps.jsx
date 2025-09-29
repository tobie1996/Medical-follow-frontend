import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ProgressSteps = ({ steps, currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8 md:mb-12">
      {/* Version Desktop */}
      <div className="hidden md:flex justify-between items-center mb-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                  currentStep >= step.id 
                    ? `bg-gradient-to-r ${step.color} text-white shadow-lg` 
                    : 'bg-gray-200 text-gray-400'
                } transition-all duration-300`}
                whileHover={{ scale: 1.1 }}
              >
                {currentStep > step.id ? (
                  <CheckCircle className="w-8 h-8" />
                ) : (
                  <step.icon className="w-8 h-8" />
                )}
              </motion.div>
              <span className={`text-sm mt-2 font-medium ${
                currentStep >= step.id ? 'text-gray-800' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
            </motion.div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full bg-gradient-to-r ${step.color}`}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: currentStep > step.id ? '100%' : '0%' 
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Version Mobile - Plus compacte */}
      <div className="md:hidden">
        <div className="flex justify-center items-center mb-4 space-x-2">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.id 
                      ? `bg-gradient-to-r ${step.color} text-white shadow-md` 
                      : 'bg-gray-200 text-gray-400'
                  } transition-all duration-300`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </motion.div>
                {currentStep === step.id && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs mt-1 font-medium text-gray-800 text-center max-w-16"
                  >
                    {step.title}
                  </motion.span>
                )}
              </motion.div>
              {index < steps.length - 1 && (
                <div className="w-6 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${step.color}`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: currentStep > step.id ? '100%' : '0%' 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 md:h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-center text-xs md:text-sm text-gray-600 mt-2">
        Étape {currentStep} sur {totalSteps}
      </p>
    </div>
  );
};

export default ProgressSteps;