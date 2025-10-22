import React from 'react';
import { Activity, AlertCircle, Stethoscope } from 'lucide-react';
import FormInput from '../components/FormInput';

const MedicalHistoryStep = ({ formData, onChange, errors }) => {
  const bloodTypeOptions = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <FormInput
          label="Groupe sanguin"
          name="bloodType"
          type="select"
          value={formData.bloodType}
          onChange={onChange}
          error={errors.bloodType}
          required
          icon={Activity}
          iconColor="text-green-600"
          focusColor="focus:ring-green-500 focus:border-green-500"
          options={bloodTypeOptions}
        />

        <FormInput
          label="Allergies connues"
          name="allergies"
          type="text"
          value={formData.allergies}
          onChange={onChange}
          placeholder="Médicaments, aliments..."
          icon={AlertCircle}
          iconColor="text-green-600"
          focusColor="focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <FormInput
        label="Maladies chroniques"
        name="chronicDiseases"
        type="textarea"
        value={formData.chronicDiseases}
        onChange={onChange}
        placeholder="Diabète, hypertension, asthme..."
        icon={Stethoscope}
        iconColor="text-green-600"
        focusColor="focus:ring-green-500 focus:border-green-500"
        rows={3}
      />

      <FormInput
        label="Médicaments actuels"
        name="medications"
        type="textarea"
        value={formData.medications}
        onChange={onChange}
        placeholder="Liste des médicaments que vous prenez..."
        icon={Activity}
        iconColor="text-green-600"
        focusColor="focus:ring-green-500 focus:border-green-500"
        rows={3}
      />
    </div>
  );
};

export default MedicalHistoryStep;