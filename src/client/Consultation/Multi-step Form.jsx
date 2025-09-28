import React from 'react'

const MultiStepForm = () => {
  return (
    <div className="mx-[15px] min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Consultation Prénatale
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Remplissez ce formulaire pour planifier votre suivi médical personnalisé
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Étape 1 sur 4
              </h2>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-3 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Informations personnelles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Date de naissance *
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Adresse complète *
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Votre adresse complète"
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-between pt-6">
              <button
                className="px-8 py-3 text-lg font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                disabled
              >
                Précédent
              </button>
              <button
                className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-colors"
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiStepForm