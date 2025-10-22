import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const FormInput = ({ 
  label, 
  name, 
  type = "text", 
  value, 
  onChange, 
  error, 
  placeholder, 
  required = false, 
  icon: Icon,
  iconColor = "text-emerald-600",
  focusColor = "focus:ring-emerald-500 focus:border-emerald-500",
  rows,
  options = [],
  min,
  ...props 
}) => {
  const baseClasses = `w-full px-3 md:px-4 py-3 md:py-4 text-base md:text-lg border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
    error ? 'border-red-500' : `border-gray-300 ${focusColor}`
  }`;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows || 3}
          className={baseClasses}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      );
    }

    if (type === 'select') {
      return (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={baseClasses}
          required={required}
          {...props}
        >
          <option value="">Sélectionnez</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={baseClasses}
        placeholder={placeholder}
        required={required}
        min={min}
        {...props}
      />
    );
  };

  return (
    <div>
      <label className={`flex items-center gap-2 text-base md:text-lg font-semibold text-gray-700 mb-2 md:mb-3`}>
        {Icon && <Icon className={`w-4 h-4 md:w-5 md:h-5 ${iconColor}`} />}
        {label} {required && '*'}
      </label>
      {renderInput()}
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs md:text-sm mt-2 flex items-center gap-1"
        >
          <AlertCircle className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="leading-tight">{error}</span>
        </motion.p>
      )}
    </div>
  );
};

export default FormInput;