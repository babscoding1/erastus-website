import { motion } from 'motion/react';
import { Image as ImageIcon, Calendar, Users, Handshake } from 'lucide-react';
import { useState } from 'react';
import { images } from '@/assets/images';

export function MediathequePage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = ['Tous', 'Formations', 'Événements', 'Enfants', 'Partenariats'];

  const galleryImages = [
    {
      src: images.erastus,
      title: 'Formation Web Development',
      category: 'Formations',
      date: 'Mars 2025'
    },
    {
      src: images.couverture,
      title: 'Couverture Activités',
      category: 'Événements',
      date: 'Avril 2025'
    },
    {
      src: 'https://images.unsplash.com/photo-1582638423482-a90640357638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY0MTU3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Atelier Technologie',
      category: 'Formations',
      date: 'Février 2025'
    },
    {
      src: images.sessionCoding,
      title: 'Session Coding',
      category: 'Formations',
      date: 'Janvier 2025'
    },
    {
      src: 'https://images.unsplash.com/photo-1720700126947-a6ba1ebba73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVjaCUyMGV2ZW50JTIwc2VtaW5hcnxlbnwxfHx8fDE3NzY0MTU3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Conférence Tech',
      category: 'Événements',
      date: 'Décembre 2024'
    },
    {
      src: images.enfant_prog,
      title: 'Initiation Programmation Enfants',
      category: 'Enfants',
      date: 'Novembre 2024'
    },
    {
      src: images.partenriat_senegel,
      title: 'Signature Partenariat',
      category: 'Partenariats',
      date: 'Octobre 2024'
    },
    {
      src: images.entrepreneurs,
      title: 'Équipe Innovation',
      category: 'Événements',
      date: 'Septembre 2024'
    },
    {
      src: images.femmeNum,
      title: 'Formation Femmes Tech',
      category: 'Formations',
      date: 'Août 2024'
    },
    {
      src: 'https://images.unsplash.com/photo-1682617367276-bbacadf73747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaGFja2F0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzc2NDE1NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Hackathon 2024',
      category: 'Événements',
      date: 'Juillet 2024'
    }
  ];

  const filteredImages = activeCategory === 'Tous' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const stats = [
    { icon: ImageIcon, value: '100+', label: 'Photos' },
    { icon: Calendar, value: '50+', label: 'Événements' },
    { icon: Users, value: '500+', label: 'Participants' },
    { icon: Handshake, value: '10+', label: 'Partenaires' }
  ];

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
              <span className="text-[#F59E0B] font-medium text-sm">Médiathèque</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Notre<br />
              <span className="text-[#F59E0B]">Médiathèque</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Découvrez nos activités en images : formations, événements, ateliers et moments forts de notre communauté.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-3">
                  <stat.icon className="text-[#F59E0B]" size={24} />
                </div>
                <div className="text-3xl font-bold text-[#0A2540] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#F59E0B] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#F59E0B] text-white text-xs rounded-full font-medium">
                        {image.category}
                      </span>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm">{image.date}</p>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-[#0A2540] mb-1 group-hover:text-[#F59E0B] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-500">{image.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="mx-auto text-gray-400 mb-4" size={64} />
              <p className="text-gray-500">Aucune image dans cette catégorie</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F59E0B] to-[#D97706]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Rejoignez notre prochaine activité
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Participez à nos formations, événements et ateliers pour développer vos compétences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events"
                className="px-8 py-4 bg-white text-[#F59E0B] rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                Voir les événements
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#F59E0B] transition-all duration-300"
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
