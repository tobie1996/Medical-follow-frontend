/**
 * Configuration des couleurs du thème PrenaCare
 * Palette centrée sur le dégradé VERT médical
 * Thème médical avec tons verts dominants
 */

export const colors = {
  // VERT MÉDICAL - EMERALD (Couleur principale santé)
  primary: {
    DEFAULT: '#10b981',     // emerald-500 - Couleur principale
    50: '#ecfdf5',          // emerald-50 - Très clair
    100: '#d1fae5',         // emerald-100 - Backgrounds légers
    200: '#a7f3d0',         // emerald-200
    300: '#6ee7b7',         // emerald-300
    400: '#34d399',         // emerald-400
    500: '#10b981',         // emerald-500 - BASE PRINCIPALE
    600: '#059669',         // emerald-600 - Foncé
    700: '#047857',         // emerald-700 - Très foncé
    800: '#065f46',         // emerald-800
    900: '#064e3b',         // emerald-900
  },

  // GREEN (Complément du vert médical pour dégradés)
  green: {
    DEFAULT: '#22c55e',     // green-500
    50: '#f0fdf4',          // green-50 - Arrière-plans
    100: '#dcfce7',         // green-100
    200: '#bbf7d0',         // green-200
    300: '#86efac',         // green-300
    400: '#4ade80',         // green-400
    500: '#22c55e',         // green-500 - Dégradés
    600: '#16a34a',         // green-600
    700: '#15803d',         // green-700
    800: '#166534',         // green-800
    900: '#14532d',         // green-900
  },

  // TEAL (Bleu-vert - Complémentaire)
  teal: {
    DEFAULT: '#14b8a6',     // teal-500
    50: '#f0fdfa',          // teal-50
    100: '#ccfbf1',         // teal-100
    200: '#99f6e4',         // teal-200
    300: '#5eead4',         // teal-300
    400: '#2dd4bf',         // teal-400
    500: '#14b8a6',         // teal-500
    600: '#0d9488',         // teal-600 - Pour dégradés
    700: '#0f766e',         // teal-700
    800: '#115e59',         // teal-800
    900: '#134e4a',         // teal-900
  },



  // Couleurs de statut
  success: {
    DEFAULT: '#10b981',     // emerald-500 (vert médical)
    light: '#d1fae5',       // emerald-100
    dark: '#047857',        // emerald-700
  },

  warning: {
    DEFAULT: '#f59e0b',     // amber-500
    light: '#fef3c7',       // amber-100
    dark: '#d97706',        // amber-600
  },

  error: {
    DEFAULT: '#ef4444',     // red-500
    light: '#fee2e2',       // red-100
    dark: '#dc2626',        // red-600
  },

  info: {
    DEFAULT: '#3b82f6',     // blue-500
    light: '#dbeafe',       // blue-100
    dark: '#2563eb',        // blue-600
  },

  // Couleurs neutres
  neutral: {
    white: '#ffffff',
    black: '#000000',
    50: '#f9fafb',          // gray-50
    100: '#f3f4f6',         // gray-100
    200: '#e5e7eb',         // gray-200
    300: '#d1d5db',         // gray-300
    400: '#9ca3af',         // gray-400
    500: '#6b7280',         // gray-500
    600: '#4b5563',         // gray-600
    700: '#374151',         // gray-700
    800: '#1f2937',         // gray-800
    900: '#111827',         // gray-900
  },

  // Dégradés VERTS pour le thème médical
  gradients: {
    // Dégradé principal - Vert médical
    primary: 'linear-gradient(to bottom right, #10b981 0%, #22c55e 50%, #14b8a6 100%)', // emerald-500 → green-500 → teal-500
    
    // Variations du dégradé vert
    light: 'linear-gradient(to bottom right, #d1fae5 0%, #dcfce7 50%, #ccfbf1 100%)', // emerald-100 → green-100 → teal-100
    medium: 'linear-gradient(to bottom right, #34d399 0%, #4ade80 50%, #2dd4bf 100%)', // emerald-400 → green-400 → teal-400
    dark: 'linear-gradient(to bottom right, #059669 0%, #16a34a 50%, #0d9488 100%)', // emerald-600 → green-600 → teal-600
    
    // Dégradé success (carte de statistique)
    success: 'linear-gradient(to bottom right, #10b981 0%, #22c55e 50%, #14b8a6 100%)', // emerald-500 → green-500 → teal-500
    
    // Backgrounds sections clairs
    sectionLight: 'linear-gradient(to bottom right, rgba(236,253,245,0.5) 0%, rgba(240,253,250,0.3) 50%, rgba(240,253,250,0.5) 100%)', // emerald-50 → green-50 → teal-50
    
    // Icône background vert
    iconGreen: 'linear-gradient(to bottom right, #d1fae5 0%, #f0fdf4 100%)', // emerald-100 → green-50
    iconTeal: 'linear-gradient(to bottom right, #ccfbf1 0%, #f0fdfa 100%)', // teal-100 → teal-50
    
    // Overlay dégradé
    overlay: 'linear-gradient(to right, rgba(16,185,129,0.7) 0%, rgba(34,197,94,0.5) 50%, rgba(20,184,166,0.6) 100%)', // emerald → green → teal
  },

  // Classes Tailwind correspondantes (pour référence rapide)
  tailwind: {
    primary: 'emerald',     // emerald-500 - Vert médical principal
    green: 'green',         // green-500 - Complément
    teal: 'teal',           // teal-500 - Bleu-vert complémentaire
  }
};

// Export des couleurs individuelles pour import sélectif
export const {
  primary,
  green,
  teal,
  success,
  warning,
  error,
  info,
  neutral,
  gradients,
} = colors;

// Fonction utilitaire pour obtenir une couleur avec opacité
export const withOpacity = (color, opacity) => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

// Export par défaut
export default colors;
