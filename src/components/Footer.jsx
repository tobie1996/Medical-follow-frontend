import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Heart, Shield, BookOpen, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 pb-24 md:pb-8">
  <div className="hidden md:flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-md">
              <Baby className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">PrenaCare</h3>
              <p className="text-sm text-emerald-300">Consultation Prénatale</p>
            </div>
          </div>

          {/* Liens rapides simplifiés */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link to="/rendez-vous" className="text-emerald-200 hover:text-white">Prendre Rendez-vous</Link>
            <Link to="/pregnancyguide" className="text-emerald-200 hover:text-white">Guide de Grossesse</Link>
            <Link to="/contact" className="text-emerald-200 hover:text-white">Contact</Link>
          </div>

          {/* Icônes sociales */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-emerald-200 hover:text-white"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-emerald-200 hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-emerald-200 hover:text-white"><Instagram className="w-5 h-5" /></a>
          </div>
          {/* Desktop copyright (visible on md+) */}
          <div className="hidden md:block text-sm text-emerald-300">
            © 2025 PrenaCare. Tous droits réservés.
          </div>
        </div>

        <div className="mt-3 border-t border-gray-800 text-center text-sm text-emerald-200 md:hidden mb-3">
          © 2025 PrenaCare. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;