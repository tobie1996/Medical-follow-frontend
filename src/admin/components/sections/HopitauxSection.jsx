import React, { useState } from 'react';
import { Search, Plus, Eye, Edit, Trash2, Hospital, Phone, MapPin } from 'lucide-react';
import Modal from '../ui/Modal';

// Composant formulaire pour hôpital
const HopitalForm = ({ hopital, onSubmit, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const hopitalData = {
      id: hopital ? hopital.id : Date.now(),
      nom: formData.get('nom'),
      localisation: formData.get('localisation'),
      contact: formData.get('contact'),
      type: formData.get('type'),
      services: formData.get('services')
    };
    onSubmit(hopitalData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom de l'hôpital *
          </label>
          <input
            type="text"
            name="nom"
            defaultValue={hopital?.nom || ''}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            placeholder="Ex: Centre Médical Mère-Enfant"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Localisation *
          </label>
          <input
            type="text"
            name="localisation"
            defaultValue={hopital?.localisation || ''}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            placeholder="Ex: Avenue Kennedy, Yaoundé"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact *
            </label>
            <input
              type="tel"
              name="contact"
              defaultValue={hopital?.contact || ''}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              placeholder="+237 222 XXX XXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type *
            </label>
            <select
              name="type"
              defaultValue={hopital?.type || ''}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            >
              <option value="">Sélectionner un type</option>
              <option value="Public">Public</option>
              <option value="Privé">Privé</option>
              <option value="Confessionnel">Confessionnel</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Services offerts
          </label>
          <textarea
            name="services"
            defaultValue={hopital?.services || ''}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
            placeholder="Ex: Maternité, Pédiatrie, Gynécologie, Échographie..."
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
        >
          {hopital ? 'Mettre à jour' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
};

const HopitauxSection = () => {
  const [hopitaux, setHopitaux] = useState([
    { 
      id: 1, 
      nom: 'Centre Médical Mère-Enfant Yaoundé', 
      localisation: 'Avenue Kennedy, Yaoundé', 
      contact: '+237 222 345 678',
      type: 'Privé', 
      services: 'Maternité, Pédiatrie, Gynécologie' 
    },
    { 
      id: 2, 
      nom: 'Hôpital Central de Yaoundé', 
      localisation: 'Centre-ville, Yaoundé', 
      contact: '+237 222 234 567',
      type: 'Public', 
      services: 'Maternité, Urgences' 
    },
    { 
      id: 3, 
      nom: 'Clinique de la Femme et de l\'Enfant', 
      localisation: 'Bastos, Yaoundé', 
      contact: '+237 222 456 789',
      type: 'Privé', 
      services: 'Maternité, Gynécologie, Échographie' 
    },
    { 
      id: 4, 
      nom: 'Hôpital Général de Douala', 
      localisation: 'Bonanjo, Douala', 
      contact: '+237 233 123 456',
      type: 'Public', 
      services: 'Maternité, Pédiatrie, Urgences' 
    },
    { 
      id: 5, 
      nom: 'Clinique des Spécialités', 
      localisation: 'Akwa, Douala', 
      contact: '+237 233 654 321',
      type: 'Privé', 
      services: 'Gynécologie, Obstétrique, Échographie' 
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHopital, setSelectedHopital] = useState(null);
  const [modalAction, setModalAction] = useState('');

  // Filtrer les hôpitaux selon le terme de recherche
  const filteredHopitaux = hopitaux.filter(hopital =>
    hopital.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hopital.localisation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hopital.contact.includes(searchTerm)
  );

  const handleAddHopital = () => {
    setSelectedHopital(null);
    setModalAction('add');
    setIsModalOpen(true);
  };

  const handleEditHopital = (hopital) => {
    setSelectedHopital(hopital);
    setModalAction('edit');
    setIsModalOpen(true);
  };

  const handleSubmitHopital = (hopitalData) => {
    if (modalAction === 'add') {
      setHopitaux([...hopitaux, hopitalData]);
    } else {
      setHopitaux(hopitaux.map(h => h.id === hopitalData.id ? hopitalData : h));
    }
    setIsModalOpen(false);
    setSelectedHopital(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet hôpital ?')) {
      setHopitaux(hopitaux.filter(h => h.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* En-tête avec recherche et bouton d'ajout */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher par nom, localisation ou contact..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={handleAddHopital}
            className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
          >
            <Plus size={20} />
            <span>Nouvel Hôpital</span>
          </button>
        </div>
      </div>

      {/* Liste des hôpitaux */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <Hospital className="mr-2 text-teal-500" size={24} />
            Liste des Hôpitaux ({filteredHopitaux.length})
          </h3>
        </div>

        {filteredHopitaux.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Hospital size={48} className="mx-auto mb-4 text-gray-300" />
            <p>Aucun hôpital trouvé</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {filteredHopitaux.map((hopital) => (
              <div key={hopital.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800 text-sm leading-tight">{hopital.nom}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    hopital.type === 'Privé' ? 'bg-blue-100 text-blue-800' : 
                    hopital.type === 'Public' ? 'bg-green-100 text-green-800' : 
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {hopital.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin size={16} className="mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                    <span className="leading-tight">{hopital.localisation}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={16} className="mr-2 text-gray-400 flex-shrink-0" />
                    <span>{hopital.contact}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Services:</p>
                  <p className="text-sm text-gray-700 leading-tight">{hopital.services}</p>
                </div>

                <div className="flex justify-end space-x-2 pt-2 border-t">
                  <button 
                    onClick={() => handleEditHopital(hopital)}
                    className="text-green-600 hover:text-green-800 p-1"
                    title="Modifier"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(hopital.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                    title="Supprimer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal pour ajouter/modifier un hôpital */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalAction === 'add' ? 'Nouvel Hôpital' : 'Modifier Hôpital'}
      >
        <HopitalForm
          hopital={selectedHopital}
          onSubmit={handleSubmitHopital}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default HopitauxSection;