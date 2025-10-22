import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Baby,
  Navigation,
  Star,
  ExternalLink,
  Search
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [userLocation, setUserLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [nearestClinic, setNearestClinic] = useState(null);
  const [clinics, setClinics] = useState([]);

  // Liste des cliniques avec leurs coordonnées
  const clinicsData = [
    {
      id: 1,
      name: "Centre Médical Mère-Enfant Yaoundé",
      address: "123 Avenue de la Santé, Yaoundé Centre",
      phone: "+237 6XX XX XX XX",
      email: "yaounde@clinique-mere-enfant.cm",
      hours: { weekdays: "08:00 - 18:00", saturday: "09:00 - 13:00", sunday: "Urgences uniquement" },
      coordinates: { lat: 3.8480, lng: 11.5021 },
      distance: null
    },
    {
      id: 2,
      name: "Clinique Mère-Enfant Douala",
      address: "456 Boulevard du Littoral, Douala",
      phone: "+237 6XX XX XX XY",
      email: "douala@clinique-mere-enfant.cm",
      hours: { weekdays: "07:30 - 19:00", saturday: "08:00 - 14:00", sunday: "Urgences uniquement" },
      coordinates: { lat: 4.0511, lng: 9.7679 },
      distance: null
    },
    {
      id: 3,
      name: "Centre Périnatal Garoua",
      address: "789 Avenue des Martyrs, Garoua",
      phone: "+237 6XX XX XX XZ",
      email: "garoua@clinique-mere-enfant.cm",
      hours: { weekdays: "08:00 - 17:30", saturday: "08:30 - 12:30", sunday: "Fermé" },
      coordinates: { lat: 9.3018, lng: 13.3723 },
      distance: null
    },
    {
      id: 4,
      name: "Hôpital Maternité Bafoussam",
      address: "321 Rue du Marché, Bafoussam",
      phone: "+237 6XX XX XX XW",
      email: "bafoussam@clinique-mere-enfant.cm",
      hours: { weekdays: "07:00 - 18:30", saturday: "07:30 - 13:00", sunday: "Urgences 24h/24" },
      coordinates: { lat: 5.4778, lng: 10.4176 },
      distance: null
    }
  ];

  // Fonction pour calculer la distance entre deux points
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Trouver la clinique la plus proche
  const findNearestClinic = (userLat, userLng) => {
    const clinicsWithDistance = clinicsData.map(clinic => {
      const distance = calculateDistance(
        userLat,
        userLng,
        clinic.coordinates.lat,
        clinic.coordinates.lng
      );
      return { ...clinic, distance };
    });

    // Trier par distance
    clinicsWithDistance.sort((a, b) => a.distance - b.distance);
    
    setClinics(clinicsWithDistance);
    setNearestClinic(clinicsWithDistance[0]);
  };

  // Obtenir la localisation de l'utilisateur
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("La géolocalisation n'est pas supportée par votre navigateur");
      return;
    }

    setIsLocating(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLoc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(userLoc);
        findNearestClinic(userLoc.lat, userLoc.lng);
        setIsLocating(false);
      },
      (error) => {
        console.error("Erreur de géolocalisation:", error);
        setIsLocating(false);
        alert("Impossible d'obtenir votre position. Vérifiez les permissions de localisation.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Ouvrir Google Maps avec l'itinéraire
  const openGoogleMaps = (clinic = null) => {
    const targetClinic = clinic || nearestClinic;
    if (!targetClinic) return;

    const { lat, lng } = targetClinic.coordinates;
    const url = userLocation 
      ? `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${lat},${lng}`
      : `https://www.google.com/maps?q=${lat},${lng}`;
    
    window.open(url, '_blank');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    alert('Message envoyé avec succès !');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Carte intégrée Google Maps
  const MapEmbed = ({ clinic }) => (
    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.432345678901!2d${clinic.coordinates.lng}!3d${clinic.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTAnNTIuOCJOIDExwrAzMCcwNy42IkU!5e0!3m2!1sfr!2scm!4v1234567890`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Localisation de ${clinic.name}`}
      />
    </div>
  );

  return (
  <div className="mx-[15px] min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Baby className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
            Trouvez la Clinique la Plus Proche
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Localisez-vous pour trouver notre centre médical le plus proche de vous
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carte de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Cliniques Disponibles
              </h2>

              {/* Bouton de localisation principale */}
              <div className="mb-8">
                <motion.button
                  onClick={getUserLocation}
                  disabled={isLocating}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-5 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Search className="w-6 h-6" />
                  {isLocating ? 'Recherche des cliniques...' : 'Trouver la clinique la plus proche'}
                </motion.button>
              </div>

              {/* Affichage de la clinique la plus proche */}
              {nearestClinic && (
                <motion.div 
                  className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800 text-lg">Clinique la plus proche</h3>
                      <p className="text-green-600">
                        À {nearestClinic.distance.toFixed(1)} km de votre position
                      </p>
                    </div>
                  </div>

                  {/* Carte de la clinique la plus proche */}
                  <MapEmbed clinic={nearestClinic} />

                  {/* Informations de la clinique */}
                  <div className="mt-4 space-y-3">
                    <h4 className="font-bold text-gray-800 text-xl">{nearestClinic.name}</h4>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{nearestClinic.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{nearestClinic.phone}</span>
                    </div>
                    
                    <motion.button
                      onClick={() => openGoogleMaps(nearestClinic)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Navigation className="w-5 h-5" />
                      Itinéraire vers cette clinique
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Liste de toutes les cliniques */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 text-lg mb-4">Toutes nos cliniques</h3>
                {clinicsData.map((clinic, index) => (
                  <motion.div
                    key={clinic.id}
                    className="p-4 bg-green-50 rounded-xl border border-green-200 hover:border-emerald-300 transition-all"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{clinic.name}</h4>
                        <p className="text-gray-600 text-sm mt-1">{clinic.address}</p>
                        <p className="text-gray-500 text-sm">{clinic.phone}</p>
                      </div>
                      {clinics.find(c => c.id === clinic.id)?.distance && (
                        <div className="text-right">
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm font-medium">
                            {clinics.find(c => c.id === clinic.id).distance.toFixed(1)} km
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Contactez-Nous
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 text-lg border-2 border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 text-lg border-2 border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 text-lg border-2 border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="+237 6XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 text-lg border-2 border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="consultation">Demande de consultation</option>
                      <option value="urgence">Urgence médicale</option>
                      <option value="information">Information générale</option>
                      <option value="rendezvous">Prise de rendez-vous</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-4 text-lg border-2 border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;