import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export function EventsPage() {
  const navigate = useNavigate();
  
  const upcomingEvents = [
    {
      id:1,
      title: 'Pique-Nique',
      date: 'Samedi 16 Mai 2026',
      time: '10:00 - 18:00',
      location: 'Centre de Brin',
      attendees: '100+',
      description: 'Animations, Visites, Partages et Réseautages',
      price: 5000, // en FCFA
      image: images.pique_nique,
      category: 'Tech Event',
      status: 'upcoming'
    },
  ];

  const pastEvents = [
  ];

  const eventTypes = [
    {
      icon: Sparkles,
      title: 'Tech Events',
      description: 'Conférences et salons technologiques',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Workshops',
      description: 'Ateliers pratiques et formations courtes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Masterclass',
      description: 'Sessions avec des experts de l\'industrie',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ArrowRight,
      title: 'Hackathons',
      description: 'Défis et compétitions de programmation',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0A2540] to-[#1e3a5f] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-32 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-[#F59E0B]/20 border border-[#F59E0B] rounded-full mb-6">
              <span className="text-[#F59E0B] font-medium text-sm">Événements</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Connectez, apprenez,<br />
              <span className="text-[#F59E0B]">innovez ensemble</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Participez à nos événements tech, workshops et masterclass pour développer vos compétences et élargir votre réseau.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#F59E0B] hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-[#0A2540] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-orange-100 text-[#F59E0B] rounded-full mb-4 font-medium text-sm">
                À Venir
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Événements à venir
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ne manquez pas nos prochains événements
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: event.id * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative overflow-hidden h-64 md:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#F59E0B] text-white text-sm rounded-full font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4 group-hover:text-[#F59E0B] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar className="text-[#F59E0B]" size={20} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Clock className="text-[#F59E0B]" size={20} />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin className="text-[#F59E0B]" size={20} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Users className="text-[#F59E0B]" size={20} />
                        <span className="text-sm">{event.attendees} participants</span>
                      </div>
                    </div>
                    
                    <a href="/event"
                      
                      className="inline-flex items-center justify-between gap-4 px-6 py-3 bg-[#F59E0B] text-white rounded-lg font-medium hover:bg-[#D97706] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>S'inscrire</span>

                      <span className="text-sm bg-white/20 px-2 py-1 rounded">
                        {event.price === 0 ? "Gratuit" : `${event.price} FCFA`}
                      </span>

                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-orange-100 text-[#F59E0B] rounded-full mb-4 font-medium text-sm">
                Archive
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Événements passés
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Revivez nos événements précédents
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/mediatheque"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] text-white rounded-lg font-medium hover:bg-[#0A2540]/90 transition-all duration-300 hover:shadow-lg"
            >
              Voir tous les événements
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Organisez votre événement avec nous
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Vous avez un projet d'événement tech? Nous pouvons vous aider à le réaliser.
            </p>
            <a href='/contact' className="px-8 py-4 bg-[#F59E0B] text-white rounded-lg font-medium hover:bg-[#D97706] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              Nous contacter
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
