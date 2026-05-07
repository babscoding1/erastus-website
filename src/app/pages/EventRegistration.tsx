import { useState } from "react";
import {images} from "../../assets/images";

export default function EventRegistration() {

  const events = [
    {
      id: 1,
      title: "Pique-Nique",
      price: 5000,
      image: images.pique_nique
    }
  ];

  const [selectedEventId, setSelectedEventId] = useState<number | "">("");

  const selectedEvent = events.find(
    (e) => e.id === Number(selectedEventId)
  );

  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* IMAGE DYNAMIQUE */}
      <div className="hidden md:block">
        <img
          src={selectedEvent?.image || "/images/default.jpg"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* FORMULAIRE */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">

          <h2 className="text-2xl font-bold mb-6">
            Inscription à un Événement
          </h2>

          <form className="space-y-4">

            {/* SELECT */}
            <select
              value={selectedEventId}
              onChange={(e) => setSelectedEventId(Number(e.target.value))}
              className="w-full border p-3 rounded"
              required
            >
              <option value="">Choisir un événement</option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>

            {/* PRIX */}
            {selectedEvent && selectedEvent.price > 0 && (
              <input
                type="text"
                value={`${selectedEvent.price.toLocaleString()} FCFA`}
                readOnly
                className="w-full border p-3 rounded bg-gray-100"
              />
            )}

            {/* NOM + PRENOM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                className="w-full border p-3 rounded"
                required
              />
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="w-full border p-3 rounded"
                required
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
              required
            />

            {/* TELEPHONE */}
            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              className="w-full border p-3 rounded"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#F59E0B] text-white p-3 rounded"
            >
              Valider l'inscription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}