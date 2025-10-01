import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Baby, Shield, Users, TrendingUp, Calendar, CheckCircle, Phone, ArrowRight, Sparkles, Star } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 mx-2 sm:mx-4 md:mx-[15px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 text-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 rounded-2xl md:rounded-3xl my-3 sm:my-4 md:my-6 shadow-2xl">
        {/* Image Slider Background */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
          {[1, 2, 3, 4, 5, 6].map((imageNum, index) => (
            <motion.div
              key={imageNum}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [1.1, 1, 1, 1.05]
              }}
              transition={{
                duration: 4,
                delay: index * 4,
                repeat: Infinity,
                repeatDelay: 20, // 6 images * 4 seconds each - 4 seconds = 20 seconds delay
                ease: "easeInOut"
              }}
            >
              <img 
                src={`/images/slider${imageNum}.jpg`}
                alt={`Slider ${imageNum}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60 sm:from-black/60 sm:via-black/40 sm:to-black/50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center px-2 sm:px-4">
          <motion.div 
            className="flex justify-center mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          >
            <div className="relative bg-white/20 p-4 sm:p-6 md:p-8 rounded-full backdrop-blur-lg border border-white/30 shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-[#0b935e] rounded-full p-1"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Votre Grossesse,
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-white to-blue-100 bg-clip-text text-transparent">
              Notre Priorité
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto font-light leading-relaxed text-blue-50 px-2 sm:px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Plateforme de consultation prénatale pour un suivi médical complet, sécurisé et personnalisé
          </motion.p>
          
          <motion.div 
            className="flex flex-col gap-4 sm:gap-6 md:gap-8 sm:flex-row justify-center px-2 sm:px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button 
              onClick={() => navigate('/consultation')}
              className="group relative bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                <span className="hidden sm:inline">Commencer mon suivi</span>
                <span className="sm:hidden">Commencer</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
            <motion.button 
              onClick={() => navigate('/pregnancyguide')}
              className="group border-2 sm:border-3 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg backdrop-blur-sm hover:bg-white hover:text-teal-600 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              En savoir plus
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Statistiques importantes */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white rounded-2xl md:rounded-3xl my-4 sm:my-6 md:my-8 shadow-xl border border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            {...fadeInUp}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent px-2 sm:px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Des Résultats qui Comptent
            </motion.h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Notre engagement pour la santé maternelle et infantile se reflète dans nos statistiques exceptionnelles
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: TrendingUp, 
                value: "98.5%", 
                label: "Taux de réussite", 
                desc: "Accouchements sécurisés", 
                gradient: "from-emerald-500 via-green-500 to-teal-600",
                iconBg: "from-emerald-100 to-green-50" 
              },
              { 
                icon: Baby, 
                value: "0.2%", 
                label: "Taux de mortalité", 
                desc: "Mortalité infantile", 
                gradient: "from-blue-500 via-cyan-500 to-sky-600",
                iconBg: "from-blue-100 to-cyan-50" 
              },
              { 
                icon: Heart, 
                value: "99.1%", 
                label: "Satisfaction", 
                desc: "Patientes satisfaites", 
                gradient: "from-purple-500 via-violet-500 to-indigo-600",
                iconBg: "from-purple-100 to-violet-50" 
              },
              { 
                icon: Users, 
                value: "15,000+", 
                label: "Cette année", 
                desc: "Naissances suivies", 
                gradient: "from-orange-500 via-amber-500 to-red-500",
                iconBg: "from-orange-100 to-amber-50" 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${stat.gradient} text-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden group cursor-pointer`}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {/* Background decoration */}
                <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5 w-20 h-20 md:w-32 md:h-32 bg-black/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <motion.div
                      className={`bg-gradient-to-br ${stat.iconBg} p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-gray-700" />
                    </motion.div>
                    <div className="text-right">
                      <motion.div 
                        className="text-2xl md:text-3xl lg:text-4xl font-black leading-none"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs md:text-sm lg:text-base opacity-90 font-medium mt-1">{stat.label}</div>
                    </div>
                  </div>
                  <h3 className="font-bold text-sm md:text-base lg:text-lg leading-tight">{stat.desc}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Importance du suivi prénatal */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-teal-50/50 via-blue-50/30 to-purple-50/50 rounded-2xl md:rounded-3xl my-4 sm:my-6 md:my-8 border border-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Pourquoi le Suivi Prénatal est Essentiel ?
              </motion.h2>
              
              <motion.div 
                className="space-y-6 sm:space-y-8 md:space-y-10"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { 
                    icon: Shield, 
                    title: "Prévention des complications", 
                    desc: "Détection précoce des problèmes pour une intervention rapide et efficace", 
                    color: "emerald",
                    iconBg: "from-emerald-100 to-green-50"
                  },
                  { 
                    icon: Heart, 
                    title: "Santé optimale mère-enfant", 
                    desc: "Surveillance continue pour assurer le bien-être optimal de la mère et du bébé", 
                    color: "blue",
                    iconBg: "from-blue-100 to-cyan-50"
                  },
                  { 
                    icon: CheckCircle, 
                    title: "Préparation à l'accouchement", 
                    desc: "Accompagnement personnalisé tout au long du parcours de grossesse", 
                    color: "purple",
                    iconBg: "from-purple-100 to-violet-50"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 group cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ x: 15, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br ${item.iconBg} p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-lg border border-white group-hover:shadow-xl transition-all duration-300 shrink-0`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-${item.color}-600`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-base sm:text-lg md:text-xl mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 backdrop-blur-sm"
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                Calendrier de Suivi Recommandé
              </h3>
              
              <motion.div 
                className="space-y-5 sm:space-y-6 md:space-y-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { period: "1er Trimestre", desc: "CPN1 - Consultation initiale", color: "teal", iconBg: "from-teal-100 to-cyan-50" },
                  { period: "2ème Trimestre", desc: "CPN2-3 - Suivi régulier", color: "blue", iconBg: "from-blue-100 to-sky-50" },
                  { period: "3ème Trimestre", desc: "CPN4+ - Préparation accouchement", color: "purple", iconBg: "from-purple-100 to-violet-50" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`flex flex-col sm:flex-row items-center gap-5 sm:gap-6 p-6 sm:p-5 md:p-6 bg-gradient-to-r ${item.iconBg} rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer w-full`}
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`bg-gradient-to-br from-white to-${item.color}-50 p-4 sm:p-4 rounded-xl sm:rounded-2xl shadow-md shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Calendar className={`w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-${item.color}-600`} />
                    </motion.div>
                    <div className="text-center sm:text-left flex-1">
                      <div className="font-bold text-lg sm:text-lg md:text-xl text-gray-800">{item.period}</div>
                      <div className="text-gray-600 text-base sm:text-base md:text-lg">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services offerts */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 bg-white rounded-2xl md:rounded-3xl my-4 sm:my-6 md:my-8 shadow-xl border border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nos Services de Consultation
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Un accompagnement médical complet et personnalisé adapté à chaque étape de votre grossesse
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: Shield, 
                title: "Examens Médicaux", 
                items: ["Échographies de contrôle", "Analyses sanguines", "Tests de dépistage", "Surveillance fœtale"], 
                gradient: "from-teal-500 via-cyan-500 to-blue-500",
                iconBg: "from-teal-100 to-cyan-50" 
              },
              { 
                icon: Heart, 
                title: "Suivi Personnalisé", 
                items: ["Consultations régulières", "Plan de soins individualisé", "Conseils nutritionnels", "Soutien psychologique"], 
                gradient: "from-blue-500 via-indigo-500 to-purple-600",
                iconBg: "from-blue-100 to-indigo-50"
              },
              { 
                icon: Baby, 
                title: "Préparation", 
                items: ["Cours de préparation", "Techniques de relaxation", "Information allaitement", "Suivi post-natal"], 
                gradient: "from-purple-500 via-pink-500 to-rose-500",
                iconBg: "from-purple-100 to-pink-50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${service.gradient} text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden group cursor-pointer`}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50
                }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {/* Background effects */}
                <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-10 md:-right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-5 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-black/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <motion.div
                    className={`bg-gradient-to-br ${service.iconBg} p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg mb-6 sm:mb-7 md:mb-8 inline-block`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gray-700" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">{service.title}</h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
                    {service.items.map((item, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center gap-2 sm:gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full shrink-0"></div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 text-white rounded-2xl md:rounded-3xl my-4 sm:my-6 md:my-8 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        
        {/* Animated background - Hidden on small screens */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="hidden sm:block absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 opacity-20"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
          </motion.div>
          <motion.div
            className="hidden sm:block absolute bottom-10 sm:bottom-16 md:bottom-20 left-10 sm:left-16 md:left-20 opacity-15"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 45, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
          </motion.div>
        </div>
        
        <motion.div 
          className="relative max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight px-2 sm:px-4">
            Prête à Commencer Votre Suivi ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 font-light max-w-3xl mx-auto text-blue-50 leading-relaxed px-2 sm:px-4">
            Rejoignez des milliers de mamans qui ont fait confiance à notre expertise médicale de pointe
          </p>
          
          <motion.div 
            className="flex flex-col gap-4 sm:gap-6 md:gap-8 sm:flex-row justify-center px-2 sm:px-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={() => navigate('/consultation')}
              className="group relative bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl overflow-hidden w-full sm:w-auto"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                <span className="hidden sm:inline">Commencer mon suivi</span>
                <span className="sm:hidden">Commencer</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
            <motion.button 
              onClick={() => navigate('/pregnancyguide')}
              className="group border-2 sm:border-3 border-white/60 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg backdrop-blur-sm hover:bg-white hover:text-teal-600 transition-all duration-300 w-full sm:w-auto"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                y: -8 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                En savoir plus
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;