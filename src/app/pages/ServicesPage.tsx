import { motion } from 'motion/react';
import { BarChart3, FileText, Scale, GraduationCap, Lightbulb, Users, CheckCircle, ArrowRight } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: BarChart3,
      title: 'Études de Marché',
      description: 'Analyses approfondies pour comprendre votre marché, vos concurrents et identifier les opportunités de croissance.',
      features: [
        'Analyse de la concurrence',
        'Étude de faisabilité',
        'Analyse des tendances du marché',
        'Segmentation client',
        'Recommandations stratégiques'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Accompagnement Business',
      description: 'Support complet pour développer votre entreprise, de l\'idée au lancement et à la croissance.',
      features: [
        'Développement de business plan',
        'Stratégie de croissance',
        'Mentorat entrepreneurial',
        'Pitch deck et présentation',
        'Recherche de financement'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Scale,
      title: 'Support Juridique',
      description: 'Assistance juridique pour assurer la conformité et protéger vos intérêts commerciaux.',
      features: [
        'Création d\'entreprise',
        'Rédaction de contrats',
        'Propriété intellectuelle',
        'Conformité réglementaire',
        'Conseil juridique'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Formation Entreprise',
      description: 'Programmes de formation sur mesure pour développer les compétences de vos équipes.',
      features: [
        'Formation digitale',
        'Leadership et management',
        'Innovation et créativité',
        'Marketing digital',
        'Transformation numérique'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: 'Conseil en Innovation',
      description: 'Accompagnement dans vos projets d\'innovation et de transformation digitale.',
      features: [
        'Stratégie d\'innovation',
        'Design thinking',
        'Prototypage rapide',
        'Digitalisation des processus',
        'Intégration technologique'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Élaboration de Projets',
      description: 'Aide à la conception et à la rédaction de projets pour obtenir des financements.',
      features: [
        'Rédaction de propositions',
        'Budget et planification',
        'Recherche de partenaires',
        'Suivi et évaluation',
        'Rapports d\'activité'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Nous écoutons vos besoins et analysons votre situation actuelle.'
    },
    {
      step: '02',
      title: 'Proposition',
      description: 'Nous élaborons une stratégie personnalisée adaptée à vos objectifs.'
    },
    {
      step: '03',
      title: 'Mise en œuvre',
      description: 'Nous travaillons ensemble pour implémenter les solutions.'
    },
    {
      step: '04',
      title: 'Suivi',
      description: 'Nous assurons un accompagnement continu pour garantir votre succès.'
    }
  ];

  const clients = [
    {
      name: 'Startups',
      description: 'De l\'idée au lancement et à la croissance',
      image: 'https://images.unsplash.com/photo-1739298061751-d233df973afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZW50cmVwcmVuZXVycyUyMHN0YXJ0dXAlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzYxNzIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'PME',
      description: 'Croissance et transformation digitale',
      image: 'https://images.unsplash.com/photo-1739300293396-9ad79111c8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxBZnJpY2FuJTIwZW50cmVwcmVuZXVycyUyMHN0YXJ0dXAlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzYxNzIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'ONGs',
      description: 'Gestion de projets et impact social',
      image: 'https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBZnJpY2FuJTIwc3R1ZGVudHMlMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzYxNzIxODF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Institutions',
      description: 'Formation et renforcement de capacités',
      image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIweW91dGglMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzYxNzIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
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
              <span className="text-[#F59E0B] font-medium text-sm">Services de Consultance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Accélérez votre<br />
              <span className="text-[#F59E0B]">croissance business</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Des services de conseil sur mesure pour accompagner votre entreprise à chaque étape de son développement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
                Nos Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Comment nous pouvons vous aider
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Une gamme complète de services pour soutenir votre réussite
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
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#F59E0B] hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-[#F59E0B] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                Notre Approche
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Comment nous travaillons
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#F59E0B] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
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
                Nos Clients
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Qui nous accompagnons
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous travaillons avec différents types d'organisations
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
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
                    src={client.image}
                    alt={client.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {client.name}
                      </h3>
                      <p className="text-sm text-gray-300">{client.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-orange-100 text-[#F59E0B] rounded-full mb-6 font-medium text-sm">
                Pourquoi Nous
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ce qui nous distingue
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expertise locale',
                    description: 'Connaissance approfondie du marché sénégalais et ouest-africain'
                  },
                  {
                    title: 'Approche personnalisée',
                    description: 'Solutions sur mesure adaptées à vos besoins spécifiques'
                  },
                  {
                    title: 'Réseau solide',
                    description: 'Accès à un écosystème de partenaires et d\'experts'
                  },
                  {
                    title: 'Résultats concrets',
                    description: 'Focus sur l\'impact mesurable et la création de valeur'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                      <CheckCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A2540] mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1739292774739-ee38cd9a5735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBZnJpY2FuJTIwZW50cmVwcmVuZXVycyUyMHN0YXJ0dXAlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzYxNzIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Why choose us"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Prêt à faire passer votre entreprise au niveau supérieur?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#F59E0B] rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              Demander une consultation
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
