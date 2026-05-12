export type LangKey = "en" | "es" | "fr" | "de"

export type Phrase = {
  en: string
  es: string
  fr: string
  de: string
  category: string
}

export const phrases: Phrase[] = [
  // BASICS
  { en: "Hello", es: "Hola", fr: "Bonjour", de: "Hallo", category: "Basics" },
  { en: "Goodbye", es: "Adiós", fr: "Au revoir", de: "Tschüss", category: "Basics" },
  { en: "Please", es: "Por favor", fr: "S'il vous plaît", de: "Bitte", category: "Basics" },
  { en: "Thank you", es: "Gracias", fr: "Merci", de: "Danke", category: "Basics" },
  { en: "Yes", es: "Sí", fr: "Oui", de: "Ja", category: "Basics" },
  { en: "No", es: "No", fr: "Non", de: "Nein", category: "Basics" },
  { en: "I don't understand", es: "No entiendo", fr: "Je ne comprends pas", de: "Ich verstehe nicht", category: "Basics" },
  { en: "Do you speak English?", es: "¿Hablas inglés?", fr: "Parlez-vous anglais?", de: "Sprechen Sie Englisch?", category: "Basics" },

  // TRAVEL
  { en: "Airport", es: "Aeropuerto", fr: "Aéroport", de: "Flughafen", category: "Travel" },
  { en: "Train station", es: "Estación de tren", fr: "Gare", de: "Bahnhof", category: "Travel" },
  { en: "Hotel", es: "Hotel", fr: "Hôtel", de: "Hotel", category: "Travel" },
  { en: "Reservation", es: "Reserva", fr: "Réservation", de: "Reservierung", category: "Travel" },
  { en: "Ticket", es: "Billete", fr: "Billet", de: "Ticket", category: "Travel" },
  { en: "Where is my gate?", es: "¿Dónde está mi puerta de embarque?", fr: "Où est ma porte d'embarquement?", de: "Wo ist mein Gate?", category: "Travel" },
  { en: "I have a reservation", es: "Tengo una reserva", fr: "J'ai une réservation", de: "Ich habe eine Reservierung", category: "Travel" },
  { en: "Can I check in?", es: "¿Puedo hacer el check-in?", fr: "Puis-je m'enregistrer?", de: "Kann ich einchecken?", category: "Travel" },

  // FOOD
  { en: "Water", es: "Agua", fr: "Eau", de: "Wasser", category: "Food" },
  { en: "Menu", es: "Menú", fr: "Menu", de: "Speisekarte", category: "Food" },
  { en: "Breakfast", es: "Desayuno", fr: "Petit déjeuner", de: "Frühstück", category: "Food" },
  { en: "Restaurant", es: "Restaurante", fr: "Restaurant", de: "Restaurant", category: "Food" },
  { en: "I would like a table for two", es: "Quisiera una mesa para dos", fr: "Je voudrais une table pour deux", de: "Ich möchte einen Tisch für zwei", category: "Food" },
  { en: "Can I see the menu?", es: "¿Puedo ver el menú?", fr: "Puis-je voir le menu?", de: "Kann ich die Speisekarte sehen?", category: "Food" },

  // CITY
  { en: "Map", es: "Mapa", fr: "Carte", de: "Karte", category: "City" },
  { en: "Street", es: "Calle", fr: "Rue", de: "Straße", category: "City" },
  { en: "Hospital", es: "Hospital", fr: "Hôpital", de: "Krankenhaus", category: "City" },
  { en: "Police", es: "Policía", fr: "Police", de: "Polizei", category: "City" },
  { en: "How much is it?", es: "¿Cuánto cuesta?", fr: "Combien ça coûte?", de: "Wie viel kostet das?", category: "City" },
  { en: "Where is...?", es: "¿Dónde está...?", fr: "Où est...?", de: "Wo ist...?", category: "City" },

  // EMERGENCY
  { en: "I need help", es: "Necesito ayuda", fr: "J'ai besoin d'aide", de: "Ich brauche Hilfe", category: "Emergency" },
  { en: "Call the police", es: "Llame a la policía", fr: "Appelez la police", de: "Rufen Sie die Polizei", category: "Emergency" },
]