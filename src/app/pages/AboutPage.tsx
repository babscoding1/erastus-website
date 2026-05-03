import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';
import { images } from "../../assets/images";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Appartenance',
      description: 'Créer un environnement inclusif où chaque jeune se sent valorisé et soutenu dans son parcours.'
    },
    {
      icon: Zap,
      title: 'Créativité',
      description: 'Encourager l\'innovation et la pensée créative pour résoudre les défis d\'aujourd\'hui et de demain.'
    },
    {
      icon: Award,
      title: 'Foi',
      description: 'Croire au potentiel de chaque jeune et en leur capacité à transformer le monde.'
    }
  ];

  const team = [
    {
      name: 'Équipe de Direction',
      role: 'Leadership visionnaire',
      image: images.erastus
    },
    {
      name: 'Formateurs',
      role: 'Experts pédagogiques',
      image: images.mendy
    },
    {
      name: 'Mentors',
      role: 'Accompagnement personnalisé',
      image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIweW91dGglMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzYxNzIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Équipe Technique',
      role: 'Innovation et support',
      image: 'https://images.unsplash.com/photo-1620829813573-7c9e1877706f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBZnJpY2FuJTIweW91dGglMjB0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzYxNzIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
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
              <span className="text-[#F59E0B] font-medium text-sm">À Propos de Nous</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Construire l'avenir<br />
              <span className="text-[#F59E0B]">un jeune à la fois</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              ERASTUS GROUP SAS est plus qu'une organisation de formation - nous sommes une communauté dédiée à l'autonomisation des jeunes talents sénégalais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
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
                alt="ERASTUS GROUP Team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-[#F59E0B]" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Qui sommes-nous?
                </h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Basée à Ziguinchor, au cœur de la Casamance, ERASTUS GROUP SAS est une organisation dirigée par des jeunes, pour les jeunes. Nous sommes passionnés par l'idée de créer des opportunités et de développer les compétences qui façonneront le Sénégal de demain.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Depuis notre création, nous avons formé plus de 500 jeunes dans divers domaines technologiques et entrepreneuriaux, soutenu des dizaines de startups et organisé de nombreux événements qui ont transformé notre communauté.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre approche unique combine formation pratique, mentorat personnalisé et accès à un réseau de professionnels et d'opportunités.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Notre Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Former, accompagner et propulser les jeunes talents du Sénégal à travers des programmes de formation pratiques, l'accès à des technologies innovantes, et un écosystème entrepreneurial dynamique. Nous nous engageons à créer des opportunités concrètes qui transforment des vies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Notre Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir la référence en Afrique de l'Ouest pour l'autonomisation des jeunes à travers l'innovation technologique et l'entrepreneuriat. Nous imaginons un avenir où chaque jeune sénégalais a accès aux compétences, ressources et opportunités nécessaires pour réaliser son plein potentiel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
                Nos Valeurs
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ce qui nous guide
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nos valeurs fondamentales définissent qui nous sommes et comment nous travaillons
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                Notre Équipe
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Les visages derrière ERASTUS
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Une équipe passionnée et dévouée à votre succès
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="font-bold text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {member.name}
                      </div>
                      <div className="text-sm text-[#F59E0B]">{member.role}</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-[#0A2540] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Notre impact en chiffres
            </h2>
            <p className="text-gray-300 text-lg">
              Des résultats concrets qui parlent d'eux-mêmes
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Jeunes Formés', delay: 0 },
              { number: '50+', label: 'Projets Accompagnés', delay: 0.1 },
              { number: '5', label: 'Villes Couvertes', delay: 0.2 },
              { number: '10+', label: 'Partenaires Actifs', delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: stat.delay, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold text-[#F59E0B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
