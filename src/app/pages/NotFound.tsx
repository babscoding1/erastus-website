import { Link } from 'react-router';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2540] to-[#1e3a5f] px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-9xl md:text-[200px] font-bold text-[#F59E0B] leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
              404
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Page introuvable
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F59E0B] text-white rounded-lg font-medium hover:bg-[#D97706] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1"
              >
                <Home size={20} />
                Retour à l'accueil
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <Search size={20} />
                Explorer le site
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12"
          >
            <p className="text-gray-400 text-sm">
              Besoin d'aide? <Link to="/contact" className="text-[#F59E0B] hover:underline">Contactez-nous</Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
