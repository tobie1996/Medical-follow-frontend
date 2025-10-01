import React from 'react';
import { Baby } from 'lucide-react';

const LoginForm = ({ loginData, setLoginData, handleLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Baby size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Administration</h1>
          <p className="text-gray-600">Santé Maternelle & Infantile</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="admin@prenacare.cm"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 text-white py-3 px-6 rounded-lg font-semibold  transition-all duration-200 transform hover:scale-105 cursor-pointer"
          >
            Se connecter
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Version démo - Utilisez n'importe quel email/mot de passe</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;