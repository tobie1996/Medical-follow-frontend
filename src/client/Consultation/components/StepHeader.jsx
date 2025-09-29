import React from 'react';

const StepHeader = ({ step }) => {
  return (
    <div className={`bg-gradient-to-r ${step.color} p-4 md:p-8 text-white`}>
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 truncate">
            {step.title}
          </h2>
          <p className="text-white/90 text-sm md:text-lg leading-tight">
            Veuillez remplir tous les champs requis
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <span className="text-3xl md:text-6xl">{step.illustration}</span>
        </div>
      </div>
    </div>
  );
};

export default StepHeader;