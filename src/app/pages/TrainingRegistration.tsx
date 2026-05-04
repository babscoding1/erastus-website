import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";


export default function TrainingRegistration() {
    
    
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    
    const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    formation: "",
    niveau: "",
    disponibilite: "",
    message: "",
    prix: "",
    mensualite: "",
    dateDebut: "",
  });
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const formation = searchParams.get("formation");
    if (formation) {
        setFormData((prev) => ({
        ...prev,
        formation: decodeURIComponent(formation), // 👈 sécurise le décodage
        }));
    }
    }, [searchParams]);
  const formations = [
    "Marketing Digital",
    "Développement Web, Mobile & Maintenance",
    "Design Graphique",
    "Intelligence Artificielle",
    "Secrétariat Bureautique",
    "Informatique",
    "Gestion de Projet",
    "E-commerce",
    "Comptabilité & Gestion de Caisse",
  ];
  const formationsData: any = {
    "Marketing Digital": {
        prix: "35 000 FCFA",
        mensualite: "25 000 FCFA",
        dateDebut: "2026-05-11",
    },
    "Développement Web, Mobile & Maintenance": {
        prix: "40 000 FCFA",
        mensualite: "30 000 FCFA",
        dateDebut: "2026-06-04",
    },
    "Design Graphique": {
        prix: "35 000 FCFA",
        mensualite: "25 000 FCFA",
        dateDebut: "2026-05-20",
    },
    "Intelligence Artificielle": {
        prix: "35 000 FCFA",
        mensualite: "25 000 FCFA",
        dateDebut: "2026-05-20",
    },
    "Secrétariat Bureautique": {
        prix: "35 000 FCFA",
        mensualite: "25 000 FCFA",
        dateDebut: "2026-05-11",
    },
    "Informatique": {
        prix: "35 000 FCFA",
        mensualite: "25 000 FCFA",
        dateDebut: "2026-05-11",
    },
    "Gestion de Projet": {
        prix: "40 000 FCFA",
        mensualite: "20 000 FCFA",
        dateDebut: "2026-06-04",
    },
    "E-commerce": {
        prix: "20 000 FCFA",
        mensualite: "-",
        dateDebut: "2026-05-12",
    },
    "Comptabilité & Gestion de Caisse": {
        prix: "35 000 FCFA",
        mensualite: "25 000 FCFA",
        dateDebut: "2026-05-11",
    },
    };
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
  if (formData.formation && formationsData[formData.formation]) {
    const data = formationsData[formData.formation];

    setFormData((prev) => ({
      ...prev,
      prix: data.prix,
      mensualite: data.mensualite,
      dateDebut: data.dateDebut,
    }));
  }
}, [formData.formation]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
        const response = await fetch("https://formspree.io/f/mrejpnpe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
        setSuccess(true);

        setFormData({
            nom: "",
            email: "",
            telephone: "",
            formation: "",
            niveau: "",
            disponibilite: "",
            message: "",
            prix: "",
            mensualite: "",
            dateDebut: "",
        });
        } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
        }
    } catch (err) {
        setError("Impossible d'envoyer le formulaire. Vérifiez votre connexion.");
    }

    setLoading(false);
    };

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Inscription à une formation
        </h2>
        {success && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
            ✅ Votre inscription a été envoyée avec succès !
        </div>
        )}

        {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            ❌ {error}
        </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Nom */}
          <input
            type="text"
            name="nom"
            placeholder="Nom complet"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Téléphone */}
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Formation */}
          <select
            name="formation"
            value={formData.formation}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Choisir une formation</option>
            {formations.map((f, i) => (
              <option key={i} value={f}>
                {f}
              </option>
            ))}
          </select>

          {/* Niveau */}
          <select
            name="niveau"
            value={formData.niveau}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Niveau</option>
            <option>Débutant</option>
            <option>Intermédiaire</option>
            <option>Avancé</option>
          </select>

          {/* Disponibilité */}
          <select
            name="disponibilite"
            value={formData.disponibilite}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Disponibilité</option>
            <option>Matin</option>
            <option>Soir</option>
            <option>Week-end</option>
          </select>
          {/* Prix d'inscription */}
            <input
            type="text"
            value={formData.prix}
            placeholder="Frais d'inscription"
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
            />

            {/* Mensualité */}
            <input
            type="text"
            value={formData.mensualite}
            placeholder="Mensualité"
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
            />

            {/* Date de début */}
            <input
            type="text"
            value={formData.dateDebut ? formatDate(formData.dateDebut) : ""}
            placeholder="Date de début"
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
            />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Motivation ou informations supplémentaires"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          {/* Bouton */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white transition ${
                loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#F59E0B] hover:bg-[#D97706]"
            }`}
            >
            {loading ? "Envoi en cours..." : "Envoyer mon inscription"}
            </button>

        </form>
      </div>
    </section>
  );
}