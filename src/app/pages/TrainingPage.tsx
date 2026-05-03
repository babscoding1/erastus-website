import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Code, Palette, TrendingUp, Brain, Clock, Award, CheckCircle, ArrowRight, Users } from 'lucide-react';
import { images } from "../../assets/images";

export function TrainingPage() {
  const programs = [
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      duration: '3 mois',
      description: 'Maîtrisez les stratégies marketing modernes, SEO, réseaux sociaux, publicité en ligne et analyse de données.',
      modules: ['SEO & SEM', 'Social Media Marketing', 'Google Analytics', 'Email Marketing', 'Content Marketing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Développement Web & Mobile',
      duration: '6 mois',
      description: 'Créez des applications web et mobile professionnelles avec les technologies les plus demandées.',
      modules: ['HTML/CSS/JavaScript', 'React & React Native', 'Node.js', 'Bases de données', 'API Development'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Design Graphique',
      duration: '2 mois',
      description: 'Apprenez à créer des visuels impactants avec les outils professionnels de l\'industrie.',
      modules: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'UI/UX Design', 'Branding'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      duration: '4 mois',
      description: 'Découvrez le monde de l\'IA, du machine learning et des applications pratiques.',
      modules: ['Python pour l\'IA', 'Machine Learning', 'Deep Learning', 'ChatGPT & Prompting', 'Projets pratiques'],
      color: 'from-green-500 to-teal-500'
    },
    {
    icon: Users,
    title: 'Secrétariat Bureautique',
    duration: '3 mois',
    description: 'Maîtrisez les outils bureautiques et les techniques administratives modernes.',
    modules: ['Word', 'Excel', 'PowerPoint', 'Gestion administrative', 'Communication professionnelle'],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Code,
    title: 'Informatique',
    duration: '3 mois',
    description: 'Apprenez les bases essentielles de l’informatique et des outils numériques.',
    modules: ['Systèmes informatiques', 'Internet & Email', 'Maintenance', 'Initiation au code'],
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: TrendingUp,
    title: 'Gestion de Projet',
    duration: '2 mois',
    description: 'Planifiez, organisez et pilotez des projets efficacement.',
    modules: ['Méthodes Agile', 'Planification', 'Gestion des risques', 'Outils de gestion'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'E-commerce',
    duration: '2 mois',
    description: 'Lancez et gérez votre boutique en ligne avec succès.',
    modules: ['Création boutique', 'Paiement en ligne', 'Marketing digital', 'Logistique'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Brain,
    title: 'Comptabilité & Gestion de Caisse',
    duration: '3 mois',
    description: 'Gérez les finances et la comptabilité d’une entreprise.',
    modules: ['Comptabilité de base', 'Gestion de caisse', 'Facturation', 'Logiciels comptables'],
    color: 'from-yellow-500 to-amber-500'
  }
  ];

  const benefits = [
    'Formation 100% pratique avec des projets réels',
    'Certificat reconnu à la fin du programme',
    'Accès à vie au contenu de formation',
    'Mentorat personnalisé',
    'Aide à la recherche d\'emploi et de stage',
    'Accès au réseau d\'anciens étudiants',
    'Équipements et outils fournis',
    'Classes en présentiel et en ligne'
  ];

  const testimonials = [
    {
      name: 'Fatou Sarr',
      program: 'Marketing Digital',
      content: 'Le Programme Kaay Tagatou a changé ma vie. J\'ai maintenant mon agence de marketing digital et j\'accompagne plusieurs entreprises.',
      image: 'https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxBZnJpY2FuJTIweW91dGglMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzYxNzIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Ibrahima Ndiaye',
      program: 'Développement Web',
      content: 'Après 6 mois de formation intensive, j\'ai décroché un emploi en tant que développeur fullstack. La formation était exceptionnelle.',
      image: 'https://images.unsplash.com/photo-1593910409015-59ae3c6aff04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxBZnJpY2FuJTIweW91dGglMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzYxNzIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Aissatou Diop',
      program: 'Design Graphique',
      content: 'J\'ai toujours voulu être designer mais je ne savais pas par où commencer. ERASTUS m\'a donné toutes les compétences nécessaires.',
      image: 'https://images.unsplash.com/photo-1735530810407-772a61226e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBZnJpY2FuJTIweW91dGglMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzYxNzIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Inscription',
      description: 'Remplissez le formulaire d\'inscription en ligne ou visitez nos bureaux.'
    },
    {
      step: '02',
      title: 'Évaluation',
      description: 'Entretien pour comprendre vos objectifs et choisir le programme adapté.'
    },
    {
      step: '03',
      title: 'Formation',
      description: 'Apprentissage pratique avec projets réels et mentorat personnalisé.'
    },
    {
      step: '04',
      title: 'Certification',
      description: 'Obtenez votre certificat et accédez à notre réseau professionnel.'
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#F59E0B]/20 border border-[#F59E0B] rounded-full mb-6">
                <span className="text-[#F59E0B] font-medium text-sm">Programme Kaay Tagatou</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Transformez votre<br />
                <span className="text-[#F59E0B]">avenir digital</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Des formations pratiques de 2 à 6 mois pour acquérir les compétences les plus demandées sur le marché du travail.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#D97706] hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1"
              >
                S'inscrire maintenant
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <img
                src={images.mendy}
                alt="Training Program"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
                Nos Formations
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Choisissez votre parcours
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des programmes adaptés aux besoins du marché et conçus pour votre succès
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#F59E0B] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="text-white" size={32} />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#0A2540]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#F59E0B]">
                    <Clock size={18} />
                    <span className="font-medium text-sm">{program.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="font-medium text-[#0A2540] mb-3">Modules du programme:</div>
                  {program.modules.map((module, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-[#F59E0B] flex-shrink-0" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#F59E0B] font-medium hover:gap-4 transition-all duration-300"
                >
                  S'inscrire
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Avantages
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Pourquoi choisir notre programme?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#F59E0B] rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={images.formation2}
                alt="Students learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F59E0B] rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 text-white">
                  <Users size={32} />
                  <div>
                    <div className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>1000+</div>
                    <div className="text-sm">Étudiants formés</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                Comment ça marche
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Le processus d'inscription
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

      {/* Testimonials */}
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
                Témoignages
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ils ont réussi avec nous
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#0A2540]">{testimonial.name}</div>
                    <div className="text-sm text-[#F59E0B]">{testimonial.program}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} size={16} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Prêt à démarrer votre formation?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Les inscriptions sont ouvertes. Ne manquez pas cette opportunité de transformer votre carrière.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#F59E0B] rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              S'inscrire maintenant
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
