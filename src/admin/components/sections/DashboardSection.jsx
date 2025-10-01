import React from 'react';
import { Users, Calendar, FileText, Bell } from 'lucide-react';

const DashboardSection = ({ patients, rendezvous, prescriptions, annonces }) => {
  const stats = [
    {
      title: 'Total Patients',
      value: patients.length,
      icon: Users,
      color: 'bg-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      title: 'Rendez-vous Aujourd\'hui',
      value: rendezvous.filter(rdv => rdv.date === new Date().toISOString().split('T')[0]).length,
      icon: Calendar,
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Visites Prénatales',
      value: prescriptions.length,
      icon: FileText,
      color: 'bg-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Annonces',
      value: annonces.length,
      icon: Bell,
      color: 'bg-teal-500',
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-xl p-6 border border-gray-200`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon size={24} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aperçu des rendez-vous du jour */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Rendez-vous du jour
          </h3>
          <div className="space-y-3">
            {rendezvous.slice(0, 3).map((rdv) => (
              <div key={rdv.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">{rdv.patient}</p>
                  <p className="text-sm text-gray-600">{rdv.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{rdv.heure}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    rdv.statut === 'Confirmé' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rdv.statut}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dernières annonces */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Dernières annonces
          </h3>
          <div className="space-y-3">
            {annonces.slice(0, 3).map((annonce) => (
              <div key={annonce.id} className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">{annonce.titre}</h4>
                <p className="text-sm text-gray-600 mb-2">{annonce.contenu}</p>
                <p className="text-xs text-gray-500">{annonce.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;