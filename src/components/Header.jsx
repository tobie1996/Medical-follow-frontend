import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, Menu, X, User, Calendar, BookOpen, Phone, Home, UserPlus } from 'lucide-react';
const MotionLink = motion(Link);
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Accueil");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (itemLabel) => {
    setActiveItem(itemLabel);
    setIsMenuOpen(false); // Fermer le menu mobile après clic
  };

  // Navigation items avec leurs routes
  const navigationItems = [
    { icon: Home, label: "Accueil", path: "/" },
    { icon: Calendar, label: "Consultation", path: "/rendez-vous" },
    { icon: BookOpen, label: "Guide de Grossesse", path: "/pregnancyguide" },
    { icon: User, label: "Mon Profil", path: "/profil" },
    { icon: Phone, label: "Contact", path: "/contact" }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 ">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center py-2 md:py-1">
          {/* Logo et nom */}
          <motion.div 
            className="flex items-center space-x-3 md:space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-emerald-500 to-green-500 p-2 md:p-3 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Baby className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 ">PrenaCare</h1>
              <span className="text-xs md:text-sm lg:text-base text-gray-500">Consultation Prénatale</span>
            </div>
          </motion.div>

          {/* Navigation desktop et tablette */}
          <motion.nav 
            className="hidden lg:flex space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  to={item.path}
                  onClick={() => handleItemClick(item.label)}
                  className={`flex flex-col items-center space-y-1 text-sm transition-colors py-2 px-3 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-emerald-600 bg-emerald-50 border-2 border-emerald-200'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-center leading-tight">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Navigation tablette - Icônes uniquement */}
          <motion.nav 
            className="hidden md:flex lg:hidden space-x-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  to={item.path}
                  onClick={() => handleItemClick(item.label)}
                  className={`flex items-center space-x-2 text-base transition-colors py-2 px-3 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-emerald-600 bg-emerald-50 border-2 border-emerald-200'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {/* Tooltip pour tablette */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {item.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Boutons d'authentification */}
          <motion.div 
            className="hidden md:flex items-center space-x-2 lg:space-x-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/register">
              <motion.button 
                className="flex items-center space-x-1 md:space-x-2 lg:space-x-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs md:text-sm lg:text-base px-2 md:px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-colors shadow-lg"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <span className="hidden md:inline lg:inline">S'inscrire</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile: we hide the top navbar and replace with bottom navigation (see bottom nav component) */}
          <div className="md:hidden" aria-hidden="true">
            {/* Empty placeholder to keep layout spacing on small devices */}
          </div>
        </div>

        {/* Menu mobile avec Framer Motion */}
        {/* Bottom navigation for mobile (enhanced) */}
        <nav
          className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg md:hidden z-40"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="max-w-6xl mx-auto px-2">
            <div className="flex justify-between items-center py-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <MotionLink
                    key={item.label}
                    to={item.path}
                    onClick={() => handleItemClick(item.label)}
                    whileTap={{ scale: 0.92 }}
                    animate={{ y: isActive ? -4 : 0, scale: isActive ? 1.06 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`flex-1 flex flex-col items-center justify-center py-2 px-1 transition-colors ${
                      isActive ? 'text-emerald-600' : 'text-gray-600'
                    }`}
                  >
                    <item.icon className={`w-6 h-6 mb-0.5 ${isActive ? 'opacity-100' : 'opacity-80'}`} />
                    <span className="text-[11px] mt-0.5">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="bottom-indicator"
                        className="mt-1 h-1 w-7 bg-emerald-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      />
                    )}
                  </MotionLink>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;