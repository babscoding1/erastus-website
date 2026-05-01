import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0A2540] to-[#1e3a5f] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-32 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-[#F59E0B]/20 border border-[#F59E0B] rounded-full mb-6">
              <span className="text-[#F59E0B] font-medium text-sm">Contactez-nous</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Parlons de votre<br />
              <span className="text-[#F59E0B]">projet ensemble</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Notre équipe est prête à répondre à vos questions et à vous accompagner dans votre parcours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-orange-100 text-[#F59E0B] rounded-full mb-6 font-medium text-sm">
                Coordonnées
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nos informations de contact
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                N'hésitez pas à nous contacter par téléphone, email ou en visitant nos bureaux à Ziguinchor.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] mb-1">Téléphone</h3>
                    <p className="text-gray-600">+221 70 966 39 39</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] mb-1">Email</h3>
                    <p className="text-gray-600">erastusgroup@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] mb-1">Adresse</h3>
                    <p className="text-gray-600">Keur Innovation, Tilène</p>
                    <p className="text-gray-600">Ziguinchor, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] mb-1">Horaires</h3>
                    <p className="text-gray-600">Du Lundi au Vendredi, de 09h à 17h</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-[#0A2540] mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/p/Erastus-Group-SAS-100076244468038/"
                    className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center hover:bg-[#D97706] transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="text-white" size={20} />
                  </a>
                  <a
                    href="http://www.youtube.com/@erastusgrouptv86"
                    className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center hover:bg-[#D97706] transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="text-white" size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/erastus-group-sas"
                    className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center hover:bg-[#D97706] transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Envoyez-nous un message
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#0A2540] mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#0A2540] mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0A2540] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0A2540] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#0A2540] mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                  >
                    <option>Sélectionnez un sujet</option>
                    <option>Inscription Formation</option>
                    <option>Consultance</option>
                    <option>Partenariat</option>
                    <option>Événement</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0A2540] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#F59E0B] text-white rounded-lg font-medium hover:bg-[#D97706] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Envoyer le message
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-orange-100 text-[#F59E0B] rounded-full mb-4 font-medium text-sm">
                Localisation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Trouvez-nous à Ziguinchor
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Google Maps Placeholder */}
            <div className="relative h-96 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-[#F59E0B] mb-4" size={48} />
                  <p className="text-gray-600 font-medium">Keur Innovation, Tilène</p>
                  <p className="text-gray-500 text-sm">Ziguinchor, Sénégal</p>
                  <p className="text-gray-400 text-xs mt-4">
                    Intégration Google Maps disponible
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <MessageSquare className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                WhatsApp
              </h3>
              <p className="mb-6 text-white/90">
                Contactez-nous directement sur WhatsApp
              </p>
              <a
                href="https://wa.me/221709663939"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-[#F59E0B] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Ouvrir WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0A2540] to-[#1e3a5f] rounded-2xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Phone className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Appelez-nous
              </h3>
              <p className="mb-6 text-gray-300">
                Parlez directement avec notre équipe
              </p>
              <a
                href="tel:+221709663939"
                className="inline-block px-6 py-3 bg-[#F59E0B] text-white rounded-lg font-medium hover:bg-[#D97706] transition-colors"
              >
                +221 70 966 39 39
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Mail className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Email
              </h3>
              <p className="mb-6 text-white/90">
                Envoyez-nous un email détaillé
              </p>
              <a
                href="mailto:erastusgroup@gmail.com"
                className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Envoyer un email
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}