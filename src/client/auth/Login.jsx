import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="mx-[15px] min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Connexion
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600">
            Accédez à votre espace personnel
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-4 text-lg border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Adresse email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-4 text-lg border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Mot de passe"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Se connecter
            </button>
          </div>

          <div className="text-center">
            <Link to="#" className="font-medium text-lg text-teal-600 hover:text-teal-500">
              Mot de passe oublié ?
            </Link>
          </div>

          <div className="text-center">
            <span className="text-lg text-gray-600">Pas encore de compte ? </span>
            <Link to="/register" className="font-medium text-lg text-teal-600 hover:text-teal-500">
              S'inscrire
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login