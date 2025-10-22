import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp,
  BookOpen,
  Star,
  CheckCircle,
  AlertTriangle,
  Stethoscope
} from 'lucide-react';

const PregnancyGuide = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const guideSections = [
    {
      id: 'first-trimester',
      image: '/images/FAQ/Premier Trimestre  Les Fondations.jpg',
      title: "Premier Trimestre : Les Fondations",
      questions: [
        {
          id: 'q1-1',
          question: "Quels sont les premiers symptômes de grossesse ?",
          answer: "Les premiers signes incluent généralement l'absence de règles, des nausées matinales, une fatigue intense, une sensibilité des seins et des envies fréquentes d'uriner. Ces symptômes varient d'une femme à l'autre.",
          tips: ["Test de grossesse après retard de règles", "Consultation médicale précoce", "Repos adapté"]
        },
        {
          id: 'q1-2',
          question: "Quelle alimentation privilégier ?",
          answer: "Focus sur l'acide folique (légumes verts), le fer (viandes, lentilles), le calcium (produits laitiers) et les protéines. Évitez les aliments crus et l'alcool.",
          warning: "Attention à la toxoplasmose et la listériose"
        }
      ]
    },
    {
      id: 'second-trimester',
      image: '/images/FAQ/Deuxième Trimestre  L\'Épanouissement.jpg',
      title: "Deuxième Trimestre : L'Épanouissement",
      questions: [
        {
          id: 'q2-1',
          question: "Quand sentir les premiers mouvements du bébé ?",
          answer: "Entre 18 et 22 semaines, vous sentirez comme des bulles ou papillons. Ces sensations deviendront plus nettes avec le temps.",
          tips: ["Position allongée sur le côté", "Moment calme après les repas"]
        },
        {
          id: 'q2-2',
          question: "Comment gérer les changements physiques ?",
          answer: "Votre ventre s'arrondit, la poitrine augmente. Privilégiez des vêtements amples et confortables, et des soins hydratants pour la peau.",
          important: "Échographie morphologique vers 22 semaines"
        }
      ]
    },
    {
      id: 'third-trimester',
      image: '/images/FAQ/Troisième Trimestre  La Préparation.jpg',
      title: "Troisième Trimestre : La Préparation",
      questions: [
        {
          id: 'q3-1',
          question: "Comment préparer la valise de maternité ?",
          answer: "Préparez 2 valises : une pour le travail et l'accouchement, une pour le séjour. Incluez des affaires confortables, des produits de toilette et les premiers vêtements de bébé.",
          checklist: ["Papiers d'identité", "Dossier médical", "Vêtements confortables", "Affaires bébé"]
        },
        {
          id: 'q3-2',
          question: "Quels sont les signes annonciateurs de l'accouchement ?",
          answer: "La descente du bébé, les contractions régulières, la perte du bouchon muqueux et éventuellement la perte des eaux.",
          warning: "Contacter la maternité en cas de perte des eaux ou contractions régulières"
        }
      ]
    },
    {
      id: 'nutrition',
      image: '/images/FAQ/Nutrition & Bien-être.jpg',
      title: "Nutrition & Bien-être",
      questions: [
        {
          id: 'q4-1',
          question: "Quels aliments sont à éviter absolument ?",
          answer: "Fromages au lait cru, charcuterie, poissons crus, œufs crus, alcool. Cuire suffisamment viandes et œufs.",
          important: "Respecter les règles d'hygiène alimentaire"
        },
        {
          id: 'q4-2',
          question: "Comment gérer les nausées et fringales ?",
          answer: "Petits repas fréquents, aliments secs le matin, gingembre pour les nausées. Privilégier les en-cas sains.",
          tips: ["Biscottes au réveil", "Fruits frais", "Amandes et noix"]
        }
      ]
    },
    {
      id: 'health',
      image: '/images/FAQ/Santé & Activité Physique.jpg',
      title: "Santé & Activité Physique",
      questions: [
        {
          id: 'q5-1',
          question: "Quels sports pratiquer pendant la grossesse ?",
          answer: "Marche, natation, yoga prénatal, Pilates. Éviter les sports à impact ou risque de chute.",
          tips: ["30 minutes d'activité modérée par jour", "Écouter son corps"]
        },
        {
          id: 'q5-2',
          question: "Quand consulter en urgence ?",
          answer: "Saignements, perte de liquide, absence de mouvements fœtaux, contractions avant terme, douleurs intenses.",
          warning: "En cas de doute, consulter immédiatement"
        }
      ]
    },
    {
      id: 'postpartum',
      image: '/images/FAQ/Post-partum & Allaitement.jpg',
      title: "Post-partum & Allaitement",
      questions: [
        {
          id: 'q6-1',
          question: "Comment se passe la récupération après l'accouchement ?",
          answer: "Les lochies durent plusieurs semaines, la fatigue est importante. Le corps met 6-8 semaines à commencer sa récupération.",
          tips: ["Repos impératif", "Accepter l'aide", "Alimentation équilibrée"]
        },
        {
          id: 'q6-2',
          question: "Quels sont les bienfaits de l'allaitement ?",
          answer: "Protection immunitaire pour bébé, renforcement du lien mère-enfant, bénéfices pour la santé de la mère et réduction des risques de cancer.",
          important: "Allaitement à la demande les premières semaines"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50/30 py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Header avec slider d'arrière-plan */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 md:mb-16 shadow-2xl">
          {/* Image Slider Background */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
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
                  alt={`Guide grossesse ${imageNum}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </motion.div>
            ))}
          </div>

          {/* Gradient overlay pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/70 via-green-600/70 to-teal-700/70"></div>
          
          {/* Effets d'arrière-plan animés */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"
              animate={{
                x: [0, 80, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-80 h-80 bg-green-200/10 rounded-full blur-3xl"
              animate={{
                x: [0, -60, 0],
                y: [0, 60, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
          </div>

          {/* Indicateurs de slider */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-white/40 rounded-full"
                animate={{
                  backgroundColor: ["rgba(255,255,255,0.4)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0.4)"],
                  scale: [1, 1.3, 1.3, 1]
                }}
                transition={{
                  duration: 4,
                  delay: index * 4,
                  repeat: Infinity,
                  repeatDelay: 20,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Contenu du header */}
          <motion.div 
            className="relative z-10 text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-5 md:mb-6 border border-white/30 shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <BookOpen className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 px-2 leading-tight drop-shadow-lg">
              Guide Complet de Grossesse
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-2 leading-relaxed drop-shadow">
              Découvrez chaque étape de votre grossesse avec des conseils pratiques et des informations essentielles
            </p>
          </motion.div>
        </div>

        {/* Guide Sections */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {guideSections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-stretch`}
            >
              {/* Image Container - Dimensions fixes */}
              <div className="flex-1 min-w-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96"
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover object-center"
                    style={{ 
                      aspectRatio: '16/10',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                      {section.title}
                    </h2>
                  </div>
                </motion.div>
              </div>

              {/* Questions Container */}
              <div className="flex-1 min-w-0 space-y-3 sm:space-y-4 md:space-y-6">
                {section.questions.map((question, qIndex) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: qIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(question.id)}
                      className="w-full p-3 sm:p-4 md:p-6 text-left flex items-start sm:items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 pr-2 sm:pr-3 md:pr-4 leading-tight flex-1">
                        {question.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openItems[question.id] ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 mt-0.5 sm:mt-0"
                      >
                        {openItems[question.id] ? (
                          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                        )}
                      </motion.div>
                    </button>

                    {openItems[question.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                            {question.answer}
                          </p>

                          {/* Tips */}
                          {question.tips && (
                            <div className="p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                                <span className="font-semibold text-green-800 text-sm sm:text-base">Conseils pratiques</span>
                              </div>
                              <div className="space-y-1 sm:space-y-2">
                                {question.tips.map((tip, tipIndex) => (
                                  <div key={tipIndex} className="flex items-start gap-2">
                                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-green-700 text-xs sm:text-sm md:text-base leading-relaxed">{tip}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Important */}
                          {question.important && (
                            <div className="p-3 sm:p-4 bg-teal-50 rounded-lg sm:rounded-xl">
                              <div className="flex items-start gap-2">
                                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-teal-800 text-sm sm:text-base">Important</span>
                                  <p className="text-teal-700 mt-1 text-xs sm:text-sm md:text-base leading-relaxed">{question.important}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Warning */}
                          {question.warning && (
                            <div className="p-3 sm:p-4 bg-orange-50 rounded-lg sm:rounded-xl">
                              <div className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-orange-800 text-sm sm:text-base">Attention</span>
                                  <p className="text-orange-700 mt-1 text-xs sm:text-sm md:text-base leading-relaxed">{question.warning}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Checklist */}
                          {question.checklist && (
                            <div className="p-3 sm:p-4 bg-emerald-50 rounded-lg sm:rounded-xl">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                                <span className="font-semibold text-emerald-800 text-sm sm:text-base">Checklist</span>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                                {question.checklist.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                    <span className="text-emerald-700 text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Un accompagnement personnalisé
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2">
              Notre équipe médicale vous accompagne à chaque étape de votre grossesse 
              avec des conseils adaptés à votre situation.
            </p>
            <motion.button
              className="bg-white text-emerald-600 px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/rendez-vous'}
            >
              Prendre rendez-vous
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PregnancyGuide;