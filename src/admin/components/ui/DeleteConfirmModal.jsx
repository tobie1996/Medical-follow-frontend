import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Trash2 } from 'lucide-react';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, title, message, itemName }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Contenu de la modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-200"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.3 
            }}
          >
            {/* Header avec gradient rouge */}
            <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{title || 'Confirmer la suppression'}</h3>
                </div>
                <motion.button 
                  onClick={onClose} 
                  className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>
            
            {/* Contenu */}
            <div className="p-6">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4">
                  <Trash2 className="w-6 h-6 text-red-600" />
                </div>
                
                <p className="text-gray-600 mb-2">
                  {message || 'Êtes-vous sûr de vouloir supprimer cet élément ?'}
                </p>
                
                {itemName && (
                  <p className="text-lg font-semibold text-gray-800 mb-4">
                    "{itemName}"
                  </p>
                )}
                
                <p className="text-sm text-red-600 font-medium">
                  Cette action est irréversible.
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex justify-center gap-3 mt-6">
                <motion.button
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Annuler
                </motion.button>
                <motion.button
                  onClick={onConfirm}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-lg hover:from-red-600 hover:via-red-700 hover:to-red-800 transition-all font-medium shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Supprimer
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DeleteConfirmModal;