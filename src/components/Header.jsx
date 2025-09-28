import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, Menu, X, User, Calendar, BookOpen, Phone, Home, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Accueil");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (itemLabel) => {
    setActiveItem(itemLabel);
  };

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
    <header className="bg-white shadow-lg sticky top-0 z-50 mx-[15px]">
      <div className="mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-6">
          {/* Logo et nom */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Baby className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">PrenaCare</h1>
              <p className="text-sm md:text-base text-gray-500">Consultation Prénatale</p>
            </div>
          </motion.div>

          {/* Navigation desktop */}
          <motion.nav 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { icon: Home, label: "Accueil" },
              { icon: Calendar, label: "Mes Rendez-vous" },
              { icon: BookOpen, label: "Guide de Grossesse" },
              { icon: User, label: "Mon Profil" },
              { icon: Phone, label: "Contact" }
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href="#"
                onClick={() => handleItemClick(item.label)}
                className={`flex flex-col items-center space-y-1 text-xs md:text-sm transition-colors py-2 px-10 md:px-3 rounded-lg ${
                  activeItem === item.label
                    ? 'text-teal-600 bg-teal-50 border-2 border-teal-200'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-center leading-tight">{item.label}</span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Boutons d'authentification */}
          <motion.div 
            className="hidden md:flex items-center space-x-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button 
              className="flex items-center space-x-2 md:space-x-3 text-sm md:text-base text-gray-700 hover:text-teal-600 transition-colors px-3 md:px-4 py-2 md:py-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
            </motion.button>
            <motion.button 
              className="flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-colors shadow-lg"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <UserPlus className="w-5 h-5 md:w-6 md:h-6" />
              <span>S'inscrire</span>
            </motion.button>
          </motion.div>

          {/* Bouton menu mobile avec animation */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
                className="px-4 pt-4 pb-5 space-y-2 bg-gradient-to-br from-gray-50 to-teal-50 rounded-lg mb-6 shadow-lg"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {[
                  { icon: Home, label: "Accueil" },
                  { icon: Calendar, label: "Mes Rendez-vous" },
                  { icon: BookOpen, label: "Guide de Grossesse" },
                  { icon: User, label: "Mon Profil" },
                  { icon: Phone, label: "Contact" }
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href="#"
                    onClick={() => handleItemClick(item.label)}
                    className={`flex items-center space-x-3 md:space-x-4 text-sm md:text-base transition-all duration-200 px-3 md:px-4 py-2 md:py-3 rounded-md ${
                      activeItem === item.label
                        ? 'text-teal-600 bg-white border-l-4 border-teal-500 shadow-sm'
                        : 'text-gray-700 hover:text-teal-600 hover:bg-white'
                    }`}
                    variants={menuItemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      backgroundColor: "rgba(255, 255, 255, 0.8)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </motion.a>
                ))}
                
                <motion.div 
                  className="border-t border-gray-200 pt-3 mt-3"
                  variants={menuItemVariants}
                >
                  <motion.button 
                    className="flex items-center space-x-3 md:space-x-4 text-sm md:text-base text-gray-700 hover:text-teal-600 hover:bg-white transition-all duration-200 px-3 md:px-4 py-2 md:py-3 rounded-md w-full"
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      backgroundColor: "rgba(255, 255, 255, 0.8)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >

                  </motion.button>
                  <motion.button 
                    className="flex items-center space-x-3 md:space-x-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm md:text-base px-3 md:px-4 py-2 md:py-3 rounded-md hover:from-teal-600 hover:to-blue-600 transition-all duration-200 w-full mt-2 shadow-md"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <UserPlus className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    <span className="whitespace-nowrap">S'inscrire</span>
                  </motion.button>
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