import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Calendar, Users, Heart, Baby, Activity } from 'lucide-react';

const AnalyticsSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  // Données simulées pour les graphiques
  const monthlyData = [
    { month: 'Jan', visits: 45, births: 12, mortality: 1 },
    { month: 'Fév', visits: 52, births: 15, mortality: 0 },
    { month: 'Mar', visits: 48, births: 13, mortality: 2 },
    { month: 'Avr', visits: 60, births: 18, mortality: 1 },
    { month: 'Mai', visits: 55, births: 16, mortality: 0 },
    { month: 'Jun', visits: 62, births: 19, mortality: 1 },
  ];

  const weeklyData = [
    { day: 'Lun', visits: 12 },
    { day: 'Mar', visits: 15 },
    { day: 'Mer', visits: 10 },
    { day: 'Jeu', visits: 18 },
    { day: 'Ven', visits: 14 },
    { day: 'Sam', visits: 8 },
    { day: 'Dim', visits: 5 },
  ];

  // Statistiques clés
  const keyStats = [
    {
      title: 'Taux de réussite accouchements',
      value: '98.5%',
      trend: '+2.1%',
      positive: true,
      icon: Baby,
      color: 'bg-green-500'
    },
    {
      title: 'Taux de mortalité maternelle',
      value: '0.8%',
      trend: '-0.3%',
      positive: true,
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      title: 'Visites mensuelles',
      value: '324',
      trend: '+12%',
      positive: true,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Taux de satisfaction',
      value: '96.2%',
      trend: '+1.8%',
      positive: true,
      icon: Activity,
      color: 'bg-purple-500'
    }
  ];

  // Composant de graphique simple (barre)
  const BarChart = ({ data, dataKey, title, color = 'bg-teal-500' }) => {
    const maxValue = Math.max(...data.map(item => item[dataKey]));
    
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="flex items-end justify-between h-40 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex flex-col justify-end h-32">
                <div 
                  className={`${color} rounded-t transition-all duration-500 hover:opacity-80`}
                  style={{ 
                    height: `${(item[dataKey] / maxValue) * 100}%`,
                    minHeight: '4px'
                  }}
                />
              </div>
              <span className="text-xs text-gray-600 mt-2 font-medium">
                {item.month || item.day}
              </span>
              <span className="text-xs text-gray-500">
                {item[dataKey]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Composant de graphique en courbe simple
  const LineChart = ({ data, title }) => {
    const maxValue = Math.max(...data.map(item => item.visits));
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((item.visits / maxValue) * 80);
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="relative h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <polyline
              fill="none"
              stroke="#0891b2"
              strokeWidth="0.5"
              points={points}
            />
            <polygon
              fill="url(#gradient)"
              points={`${points} 100,100 0,100`}
            />
          </svg>
          
          {/* Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 mt-2">
            {data.map((item, index) => (
              <span key={index}>{item.day}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-teal-600" />
          Analyses & Statistiques
        </h2>
        
        {/* Sélecteur de période */}
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedPeriod('weekly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedPeriod === 'weekly'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Hebdomadaire
          </button>
          <button
            onClick={() => setSelectedPeriod('monthly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedPeriod === 'monthly'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Mensuel
          </button>
        </div>
      </div>

      {/* Statistiques clés */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {stat.trend}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {selectedPeriod === 'monthly' ? (
          <>
            <BarChart 
              data={monthlyData} 
              dataKey="visits" 
              title="Visites Mensuelles" 
              color="bg-teal-500"
            />
            <BarChart 
              data={monthlyData} 
              dataKey="births" 
              title="Accouchements Réussis" 
              color="bg-green-500"
            />
          </>
        ) : (
          <>
            <LineChart 
              data={weeklyData} 
              title="Visites Hebdomadaires"
            />
            <BarChart 
              data={weeklyData} 
              dataKey="visits" 
              title="Distribution Journalière" 
              color="bg-blue-500"
            />
          </>
        )}
      </div>

      {/* Graphique de mortalité */}
      {selectedPeriod === 'monthly' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <BarChart 
            data={monthlyData} 
            dataKey="mortality" 
            title="Taux de Mortalité Maternelle" 
            color="bg-red-400"
          />
          
          {/* Tableau de données */}
          <div className="bg-white rounded-xl p-6 shadow-lg border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Données Détaillées</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-medium text-gray-600">Mois</th>
                    <th className="text-right py-2 font-medium text-gray-600">Visites</th>
                    <th className="text-right py-2 font-medium text-gray-600">Naissances</th>
                    <th className="text-right py-2 font-medium text-gray-600">Mortalité</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-800">{row.month}</td>
                      <td className="py-2 text-right text-gray-600">{row.visits}</td>
                      <td className="py-2 text-right text-green-600 font-medium">{row.births}</td>
                      <td className="py-2 text-right text-red-600 font-medium">{row.mortality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Insights */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-teal-600" />
          Insights Clés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">📈 Tendance Positive</h4>
            <p className="text-sm text-gray-600">
              Les visites prénatales ont augmenté de 12% ce mois-ci, indiquant une meilleure sensibilisation.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">🎯 Objectif Atteint</h4>
            <p className="text-sm text-gray-600">
              Taux de réussite des accouchements maintenu au-dessus de 98%, dépassant l'objectif de 95%.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">⚠️ Point d'Attention</h4>
            <p className="text-sm text-gray-600">
              Légère augmentation des visites d'urgence le week-end. Considérer renforcement équipe.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">💡 Recommandation</h4>
            <p className="text-sm text-gray-600">
              Mettre en place des créneaux supplémentaires aux heures de pointe (jeudi-vendredi).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;