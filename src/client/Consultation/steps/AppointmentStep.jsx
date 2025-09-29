import React from 'react';
import { Calendar, User, Phone, AlertCircle } from 'lucide-react';
import FormInput from '../components/FormInput';

const AppointmentStep = ({ formData, onChange, errors }) => {
  const timeSlotOptions = [
    { value: '08:00', label: '08:00 - 09:00' },
    { value: '09:00', label: '09:00 - 10:00' },
    { value: '10:00', label: '10:00 - 11:00' },
    { value: '11:00', label: '11:00 - 12:00' },
    { value: '14:00', label: '14:00 - 15:00' },
    { value: '15:00', label: '15:00 - 16:00' },
    { value: '16:00', label: '16:00 - 17:00' }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <FormInput
          label="Date préférée"
          name="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={onChange}
          error={errors.preferredDate}
          required
          icon={Calendar}
          iconColor="text-orange-600"
          focusColor="focus:ring-orange-500 focus:border-orange-500"
        />

        <FormInput
          label="Heure préférée"
          name="preferredTime"
          type="select"
          value={formData.preferredTime}
          onChange={onChange}
          error={errors.preferredTime}
          required
          icon={Calendar}
          iconColor="text-orange-600"
          focusColor="focus:ring-orange-500 focus:border-orange-500"
          options={timeSlotOptions}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <FormInput
          label="Contact d'urgence"
          name="emergencyContact"
          type="text"
          value={formData.emergencyContact}
          onChange={onChange}
          error={errors.emergencyContact}
          placeholder="Nom du contact"
          required
          icon={User}
          iconColor="text-orange-600"
          focusColor="focus:ring-orange-500 focus:border-orange-500"
        />

        <FormInput
          label="Téléphone d'urgence"
          name="emergencyPhone"
          type="tel"
          value={formData.emergencyPhone}
          onChange={onChange}
          error={errors.emergencyPhone}
          placeholder="+237 6XX XX XX XX"
          required
          icon={Phone}
          iconColor="text-orange-600"
          focusColor="focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <FormInput
        label="Notes supplémentaires"
        name="notes"
        type="textarea"
        value={formData.notes}
        onChange={onChange}
        placeholder="Informations supplémentaires, questions, préoccupations..."
        icon={AlertCircle}
        iconColor="text-orange-600"
        focusColor="focus:ring-orange-500 focus:border-orange-500"
        rows={4}
      />
    </div>
  );
};

export default AppointmentStep;