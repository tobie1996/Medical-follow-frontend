import React from 'react';
import { User, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import FormInput from '../components/FormInput';

const PersonalInfoStep = ({ formData, onChange, errors }) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <FormInput
          label="Nom complet"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={onChange}
          error={errors.fullName}
          placeholder="Entrez votre nom complet"
          required
          icon={User}
          iconColor="text-emerald-600"
          focusColor="focus:ring-emerald-500 focus:border-emerald-500"
        />
        
        <FormInput
          label="Date de naissance"
          name="birthDate"
          type="date"
          value={formData.birthDate}
          onChange={onChange}
          error={errors.birthDate}
          required
          icon={Calendar}
          iconColor="text-emerald-600"
          focusColor="focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      <FormInput
        label="Adresse complète"
        name="address"
        type="textarea"
        value={formData.address}
        onChange={onChange}
        error={errors.address}
        placeholder="Quartier, ville, région..."
        required
        icon={MapPin}
        iconColor="text-emerald-600"
        focusColor="focus:ring-emerald-500 focus:border-emerald-500"
        rows={3}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <FormInput
          label="Téléphone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onChange}
          error={errors.phone}
          placeholder="+237 6XX XX XX XX"
          required
          icon={Phone}
          iconColor="text-emerald-600"
          focusColor="focus:ring-emerald-500 focus:border-emerald-500"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          error={errors.email}
          placeholder="votre.email@example.com"
          icon={Mail}
          iconColor="text-emerald-600"
          focusColor="focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;