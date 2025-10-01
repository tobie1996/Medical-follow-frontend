import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, Menu, X, User, Calendar, BookOpen, Phone, Home, UserPlus } from 'lucide-react';
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
              className="bg-gradient-to-r from-teal-500 to-blue-500 p-2 md:p-3 rounded-lg"
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
                      ? 'text-teal-600 bg-teal-50 border-2 border-teal-200'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
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
                  className={`flex items-center justify-center transition-colors py-3 px-3 rounded-lg relative group ${
                    location.pathname === item.path
                      ? 'text-teal-600 bg-teal-50 border-2 border-teal-200'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
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
                className="flex items-center space-x-1 md:space-x-2 lg:space-x-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-xs md:text-sm lg:text-base px-2 md:px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-colors shadow-lg"
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

          {/* Bouton menu mobile et tablette petite */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 transition-colors p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Menu mobile avec Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div 
                className="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-5 space-y-2 bg-gradient-to-br from-gray-50 to-teal-50 rounded-lg mb-4 sm:mb-6 shadow-lg"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={menuItemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      backgroundColor: "rgba(255, 255, 255, 0.8)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => handleItemClick(item.label)}
                      className={`flex items-center space-x-3 sm:space-x-4 text-sm sm:text-base transition-all duration-200 px-3 sm:px-4 py-2 sm:py-3 rounded-md ${
                        location.pathname === item.path
                          ? 'text-teal-600 bg-white border-l-4 border-teal-500 shadow-sm'
                          : 'text-gray-700 hover:text-teal-600 hover:bg-white'
                      }`}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="border-t border-gray-200 pt-3 mt-3"
                  variants={menuItemVariants}
                >
                  <Link to="/login">
                    <motion.button 
                      className="flex items-center space-x-3 sm:space-x-4 text-sm sm:text-base text-gray-700 hover:text-teal-600 hover:bg-white transition-all duration-200 px-3 sm:px-4 py-2 sm:py-3 rounded-md w-full"
                      whileHover={{ 
                        scale: 1.02,
                        x: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.8)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="whitespace-nowrap">Se connecter</span>
                    </motion.button>
                  </Link>
                  <Link to="/register">
                    <motion.button 
                      className="flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:from-teal-600 hover:to-blue-600 transition-all duration-200 w-full mt-2 shadow-md"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.15)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">S'inscrire</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;