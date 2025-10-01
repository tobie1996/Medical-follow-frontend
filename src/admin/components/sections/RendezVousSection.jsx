import React from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

const RendezVousSection = ({ rendezvous, openModal }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Rendez-vous</h2>
        <button
          onClick={() => openModal('rendez-vous')}
          className="flex items-center gap-2 bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg hover:from-teal-700 hover:via-teal-700 hover:to-teal-800 transition-all cursor-pointer"
        >
          <Plus size={20} />
          Nouveau rendez-vous
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Patient</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Heure</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Type</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Statut</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rendezvous.map((rdv) => (
                <tr key={rdv.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-800">{rdv.patient}</td>
                  <td className="py-4 px-6 text-gray-600">{rdv.date}</td>
                  <td className="py-4 px-6 text-gray-600">{rdv.heure}</td>
                  <td className="py-4 px-6 text-gray-600">{rdv.type}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      rdv.statut === 'Confirmé' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {rdv.statut}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => openModal('rendez-vous', rdv)}
                        className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RendezVousSection;