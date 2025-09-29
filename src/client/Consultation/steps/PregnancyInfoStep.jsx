import React from 'react';
import { Calendar, Baby, Heart } from 'lucide-react';
import FormInput from '../components/FormInput';

const PregnancyInfoStep = ({ formData, onChange, errors }) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <FormInput
          label="Date des dernières règles"
          name="lastPeriodDate"
          type="date"
          value={formData.lastPeriodDate}
          onChange={onChange}
          error={errors.lastPeriodDate}
          required
          icon={Calendar}
          iconColor="text-purple-600"
          focusColor="focus:ring-purple-500 focus:border-purple-500"
        />

        <FormInput
          label="Nombre de grossesses antérieures"
          name="previousPregnancies"
          type="number"
          value={formData.previousPregnancies}
          onChange={onChange}
          placeholder="0"
          min="0"
          icon={Baby}
          iconColor="text-purple-600"
          focusColor="focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <FormInput
        label="Complications lors de grossesses précédentes"
        name="complications"
        type="textarea"
        value={formData.complications}
        onChange={onChange}
        placeholder="Si applicable, décrivez les complications..."
        icon={Heart}
        iconColor="text-purple-600"
        focusColor="focus:ring-purple-500 focus:border-purple-500"
        rows={3}
      />

      <FormInput
        label="Date prévue d'accouchement"
        name="expectedDueDate"
        type="date"
        value={formData.expectedDueDate}
        onChange={onChange}
        icon={Calendar}
        iconColor="text-purple-600"
        focusColor="focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
};

export default PregnancyInfoStep;