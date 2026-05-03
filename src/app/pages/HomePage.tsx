import { Link } from 'react-router';
import { ArrowRight, Lightbulb, GraduationCap, Calendar, Users, BarChart3, CheckCircle, Sparkles, MessageSquare, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { images } from "../../assets/images";


export function HomePage() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Fablab d\'innovation',
      description: 'Un espace créatif équipé pour donner vie à vos projets technologiques et innovations.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Académie de formation',
      description: 'Formations pratiques en digital, développement web, design et marketing.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Événementiel tech',
      description: 'Organisation d\'événements tech, hackathons et conférences inspirantes.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Projets et programmes',
      description: 'Initiation à la technologie et au codage pour la jeune génération.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Consultance',
      description: 'Accompagnement stratégique pour entreprises et organisations.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Rocket,
      title: 'Incubation',
      description: 'Support et mentorat pour startups et porteurs de projets, de l\'idée à l\'exécution.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { value: '2000+', label: 'Étudiants formés ' },
    { value: '10+', label: 'Projets soutenus' },
    { value: '6', label: 'Villes couvertes' },
    { value: '3', label: 'Pays' },
    { value: '10+', label: 'Partenaires' }
  ];

    const partners = [
    { name: "SOS Village d'Enfants", logo: images.sos },
    { name: "GIZ", logo: images.giz },
    { name: "CTIC Dakar", logo: images.ctic },
    { name: "Sénégal Numérique", logo: images.senegal_service },
    { name: "UCAO", logo: images.ucao },
    { name: "Conseil Départemental de Bignona", logo: images.conseil_dept_Bign },
    { name: "Senegel", logo: images.senegel },
    { name: "Kanarimagik", logo: images.kanarimagik }
  ];

  const activities = [
    {
      title: 'Week-end numérique',
      description: '48h d\'apprentissage intensif et de networking',
      image: images.week_end,
      tag: 'Événement'
    },
    {
      title: 'Formation CapCut & Illustrator',
      description: 'Maîtrisez les outils créatifs professionnels',
      image: images.formation_illustrator,
      tag: 'Formation'
    },
    {
      title: 'Masterclass Entrepreneurs',
      description: 'Rencontres avec des leaders d\'entreprise',
      image: images.masterclass,
      tag: 'Masterclass'
    }
  ];

  const testimonials = [
    {
      name: 'Aminata Diallo',
      role: 'Développeuse Web',
      content: 'Grâce à ERASTUS GROUP, j\'ai acquis les compétences nécessaires pour lancer ma carrière dans le développement web. L\'accompagnement était exceptionnel.',
      image: 'https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxBZnJpY2FuJTIweW91dGglMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzYxNzIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Mamadou Sow',
      role: 'Entrepreneur',
      content: 'Les formations pratiques et le mentorat m\'ont permis de transformer mon idée en une startup fonctionnelle. Je recommande vivement!',
      image: 'https://images.unsplash.com/photo-1593910409015-59ae3c6aff04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxBZnJpY2FuJTIweW91dGglMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzYxNzIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#1e3a5f] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#F59E0B]/20 border border-[#F59E0B] rounded-full mb-6">
                <span className="text-[#F59E0B] font-medium text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  🌍 Basé à Ziguinchor, Sénégal
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Le service<br />
                <span className="text-[#F59E0B]">avant tout</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Former, accompagner et propulser les jeunes talents du Sénégal vers l'excellence et l'innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/training"
                  className="group px-8 py-4 bg-[#F59E0B] text-white rounded-lg font-medium text-center transition-all duration-300 hover:bg-[#D97706] hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Découvrir nos programmes
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium text-center border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  Nous contacter
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-[#F59E0B] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img
                  src={images.couverture}
                  alt="African youth technology"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#F59E0B] rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-500 rounded-2xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={images.erastus}
                alt="About ERASTUS GROUP"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-orange-100 text-[#F59E0B] rounded-full mb-4 font-medium text-sm">
                À Propos de Nous
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Une organisation dirigée par des jeunes
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ERASTUS GROUP SAS est une organisation basée à Ziguinchor, Sénégal, dédiée à l'autonomisation des jeunes à travers la formation, l'innovation et les opportunités.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nous croyons que chaque jeune possède un potentiel extraordinaire. Notre mission est de transformer ce potentiel en compétences concrètes et en opportunités réelles.
              </p>

              <div className="space-y-4 mb-8">
                {['Appartenance', 'Créativité', 'Foi'].map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                      <CheckCircle size={18} className="text-white" />
                    </div>
                    <span className="font-medium text-[#0A2540]">{value}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#F59E0B] font-medium hover:gap-4 transition-all duration-300"
              >
                En savoir plus
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                Nos Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ce que nous offrons
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des solutions complètes pour accompagner votre développement personnel et professionnel
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
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
                Actualités
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nos activités récentes
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#F59E0B] text-white text-sm rounded-full font-medium">
                      {activity.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2 group-hover:text-[#F59E0B] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {activity.title}
                </h3>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] text-white rounded-lg font-medium hover:bg-[#0A2540]/90 transition-all duration-300 hover:shadow-lg"
            >
              Voir tous les événements
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nos partenaires
            </h2>
            <p className="text-gray-300">
              Ils nous font confiance et collaborent avec nous
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-xl p-6 h-32 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 object-contain group-hover:grayscale-0 transition duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-orange-100 text-[#F59E0B] rounded-full mb-4 font-medium text-sm">
                Témoignages
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ce qu'ils disent de nous
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <MessageSquare className="text-[#F59E0B] mb-4" size={32} />
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#0A2540]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <Sparkles className="mx-auto text-white mb-6" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Prêt à commencer votre parcours?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez des centaines de jeunes qui transforment leur avenir avec ERASTUS GROUP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/training"
                className="px-8 py-4 bg-white text-[#F59E0B] rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                Explorer les formations
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#F59E0B] transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/221709663939"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
      >
        <MessageSquare className="text-white" size={28} />
      </a>
    </div>
  );
}