import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import {
  BarChart3,
  FileText,
  Scale,
  GraduationCap,
  Lightbulb,
  Users,
  CheckCircle,
  ArrowRight,
  X,
} from 'lucide-react';

import { images } from '@/assets/images';

export function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      icon: BarChart3,
      title: 'Études de Marché',
      description:
        'Analyses approfondies pour comprendre votre marché, vos concurrents et identifier les opportunités de croissance.',
      features: [
        'Analyse de la concurrence',
        'Étude de faisabilité',
        'Analyse des tendances du marché',
        'Segmentation client',
        'Recommandations stratégiques',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Accompagnement Business',
      description:
        "Support complet pour développer votre entreprise, de l'idée au lancement et à la croissance.",
      features: [
        'Développement de business plan',
        'Stratégie de croissance',
        'Mentorat entrepreneurial',
        'Pitch deck et présentation',
        'Recherche de financement',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Scale,
      title: 'Support Juridique',
      description:
        'Assistance juridique pour assurer la conformité et protéger vos intérêts commerciaux.',
      features: [
        "Création d'entreprise",
        'Rédaction de contrats',
        'Propriété intellectuelle',
        'Conformité réglementaire',
        'Conseil juridique',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: GraduationCap,
      title: 'Formation Entreprise',
      description:
        'Programmes de formation sur mesure pour développer les compétences de vos équipes.',
      features: [
        'Formation digitale',
        'Leadership et management',
        'Innovation et créativité',
        'Marketing digital',
        'Transformation numérique',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Lightbulb,
      title: 'Conseil en Innovation',
      description:
        "Accompagnement dans vos projets d'innovation et de transformation digitale.",
      features: [
        "Stratégie d'innovation",
        'Design thinking',
        'Prototypage rapide',
        'Digitalisation des processus',
        'Intégration technologique',
      ],
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: FileText,
      title: 'Élaboration de Projets',
      description:
        'Aide à la conception et à la rédaction de projets pour obtenir des financements.',
      features: [
        'Rédaction de propositions',
        'Budget et planification',
        'Recherche de partenaires',
        'Suivi et évaluation',
        "Rapports d'activité",
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description:
        'Nous écoutons vos besoins et analysons votre situation actuelle.',
    },
    {
      step: '02',
      title: 'Proposition',
      description:
        'Nous élaborons une stratégie personnalisée adaptée à vos objectifs.',
    },
    {
      step: '03',
      title: 'Mise en œuvre',
      description:
        'Nous travaillons ensemble pour implémenter les solutions.',
    },
    {
      step: '04',
      title: 'Suivi',
      description:
        'Nous assurons un accompagnement continu pour garantir votre succès.',
    },
  ];

  const clients = [
    {
      name: 'Startups',
      description: "De l'idée au lancement et à la croissance",
      image: images.startup,
    },
    {
      name: 'PME',
      description: 'Croissance et transformation digitale',
      image: images.pme,
    },
    {
      name: 'ONGs',
      description: 'Gestion de projets et impact social',
      image: images.ong,
    },
    {
      name: 'Institutions',
      description: 'Formation et renforcement de capacités',
      image: images.institution,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const [success, setSuccess] = useState(false);

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);
  setError('');
  setSuccess(false);

  try {
    const response = await fetch(
      'https://formspree.io/f/mqenyaoe',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setSuccess(true);

      setFormData({
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setIsModalOpen(false);
        setSuccess(false);
      }, 2500);
    } else {
      setError(
        'Une erreur est survenue. Veuillez réessayer.'
      );
    }
  } catch (err) {
    setError(
      "Impossible d'envoyer le formulaire. Vérifiez votre connexion."
    );
  }

  setLoading(false);
};


  return (
    <div className="overflow-hidden">
      {/* HERO */}
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
              <span className="text-[#F59E0B] font-medium text-sm">
                Services de Consultance
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Accélérez votre
              <br />
              <span className="text-[#F59E0B]">
                croissance business
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Des services de conseil sur mesure pour accompagner votre
              entreprise à chaque étape de son développement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#F59E0B] hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[#F59E0B]"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {client.name}
                      </h3>

                      <p className="text-sm text-gray-300">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#F59E0B] to-[#D97706]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Prêt à faire passer votre entreprise au niveau supérieur?
          </h2>

          <p className="text-xl text-white/90 mb-8">
            Contactez-nous pour une consultation gratuite.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#F59E0B] rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Demander une consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-2xl p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-black"
              >
                <X size={28} />
              </button>

              {!success ? (
                <>
                  <h2 className="text-3xl font-bold text-[#0A2540] mb-2">
                    Demander une consultation
                  </h2>

                  <p className="text-gray-600 mb-8">
                    Remplissez ce formulaire et notre équipe vous contactera rapidement.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="nom"
                        placeholder="Nom complet"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F59E0B]"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Adresse email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="telephone"
                        placeholder="Téléphone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F59E0B]"
                      />

                      <input
                        type="text"
                        name="entreprise"
                        placeholder="Entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F59E0B]"
                    >
                      <option value="">Choisir un service</option>

                      {services.map((service, index) => (
                        <option key={index} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>

                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Décrivez votre besoin..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F59E0B]"
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#F59E0B] hover:bg-[#d97706] text-white py-4 rounded-xl font-semibold transition-all duration-300"
                    >
                      Envoyer la demande
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={42} />
                  </div>

                  <h3 className="text-3xl font-bold text-[#0A2540] mb-3">
                    Demande envoyée !
                  </h3>

                  <p className="text-gray-600">
                    Merci pour votre confiance. Nous vous contacterons très bientôt.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}