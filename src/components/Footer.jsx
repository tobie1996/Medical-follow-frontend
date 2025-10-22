import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Heart, Shield, BookOpen, Calendar } from 'lucide-react';

const Footer = () => {
  return (
  <footer className="bg-black text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-lg">
                <Baby className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">PrenaCare</h3>
                <p className="text-base text-gray-400">Consultation Prénatale</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-base">
              Votre partenaire de confiance pour un suivi médical complet et sécurisé tout au long de votre grossesse.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-400 hover:bg-green-500 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-emerald-700 hover:bg-emerald-800 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-800 p-3 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-emerald-400">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/rendez-vous" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-3 text-base">
                  <Calendar className="w-5 h-5" />
                  <span>Prendre Rendez-vous</span>
                </Link>
              </li>
              <li>
                <Link to="/pregnancyguide" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-3 text-base">
                  <BookOpen className="w-5 h-5" />
                  <span>Guide de Grossesse</span>
                </Link>
              </li>
              <li>
                <Link to="/profil" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-3 text-base">
                  <Heart className="w-5 h-5" />
                  <span>Mon Profil</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-3 text-base">
                  <Shield className="w-5 h-5" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-emerald-400">Nos Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer text-base">
                Consultations CPN1-4
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-base">
                Échographies de contrôle
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-base">
                Préparation à la naissance
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-base">
                Suivi post-natal
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-base">
                Conseils nutritionnels
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-base">
                Soutien psychologique
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-emerald-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-300">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-base">Centre Hospitalier de Yaoundé<br />BP 1234, Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-300">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-base">+237 222 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-300">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-base">contact@prenacare.cm</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-300">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span className="text-base">24h/24 - 7j/7<br />Service d'urgence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section guide de grossesse mise en avant */}
      <div className="border-t border-gray-700">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
        </div>
      </div>

      {/* Pied de page */}
      <div className="border-t border-gray-700">
  <div className="max-w-ful mx-auto px-6 sm:px-8 lg:px-10 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-emerald-300 text-base">
              © 2025 PrenaCare. Tous droits réservés. | Plateforme sécurisée de consultation prénatale
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-8 text-base">
                <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                  Politique de Confidentialité
                </a>
                <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                  Conditions d'Utilisation
                </a>
                <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                  Mentions Légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;