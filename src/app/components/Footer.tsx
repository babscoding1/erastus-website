import { useState } from 'react';
import { Link } from 'react-router';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';

import logo from '../../imports/LOGO_ERASTUS.png';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('https://formspree.io/f/mlgzpggd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setNewsletterEmail('');
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setError(
        "Impossible d'envoyer le formulaire. Vérifiez votre connexion."
      );
    }

    setLoading(false);
  };

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="ERASTUS GROUP" className="h-12 w-12" />

              <div>
                <div
                  className="font-bold text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  ERASTUS GROUP
                </div>

                <div className="text-xs text-[#F59E0B]">
                  Le service avant tout
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Former, accompagner et propulser les jeunes talents du Sénégal
              vers l'excellence et l'innovation.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/Erastus-Group-SAS-100076244468038/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-[#F59E0B] transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/erastus-group-sas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-[#F59E0B] transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="http://www.youtube.com/@erastusgrouptv86"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-[#F59E0B] transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Liens Rapides
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm"
                >
                  À Propos
                </Link>
              </li>

              <li>
                <Link
                  to="/training"
                  className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm"
                >
                  Formations
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm"
                >
                  Événements
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/mediatheque"
                  className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm"
                >
                  Médiathèque
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nos Services
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Fablab d'innovation</li>
              <li>Académie de formation</li>
              <li>Événementiel tech</li>
              <li>Projets et programmes</li>
              <li>Consultance</li>
              <li>Incubation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin
                  size={18}
                  className="text-[#F59E0B] mt-0.5 flex-shrink-0"
                />

                <span>
                  Keur Innovation, Tilène Ziguinchor, Sénégal
                </span>
              </li>

              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone
                  size={18}
                  className="text-[#F59E0B] flex-shrink-0"
                />

                <span>+221 70 966 39 39</span>
              </li>

              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail
                  size={18}
                  className="text-[#F59E0B] flex-shrink-0"
                />

                <span>erastusgroup@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-2xl">
            <h3
              className="font-bold mb-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Restez Informé
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités
              et opportunités.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F59E0B] transition-colors"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[#F59E0B] text-white rounded-lg font-medium hover:bg-[#D97706] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-70"
              >
                {loading ? 'Envoi...' : "S'inscrire"}
              </button>
            </form>

            {success && (
              <p className="text-green-400 text-sm mt-3">
                Merci ! Vous êtes inscrit à la newsletter.
              </p>
            )}

            {error && (
              <p className="text-red-400 text-sm mt-3">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>
            &copy; 2026 ERASTUS GROUP SAS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}