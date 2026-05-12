from gtts import gTTS
import os

phrases = {
    "airport": [
        {"en": "Where is my gate?", "es": "¿Dónde está mi puerta de embarque?", "fr": "Ou est ma porte d'embarquement?", "de": "Wo ist mein Gate?"},
        {"en": "I have a luggage", "es": "Tengo una maleta", "fr": "J'ai une valise", "de": "Ich habe ein Gepaeckstueck"},
    ],
    "hotel": [
        {"en": "I have a reservation", "es": "Tengo una reserva", "fr": "J'ai une reservation", "de": "Ich habe eine Reservierung"},
        {"en": "Can I check in?", "es": "¿Puedo hacer el check-in?", "fr": "Puis-je m'enregistrer?", "de": "Kann ich einchecken?"},
    ],
    "restaurant": [
        {"en": "I would like a table for two", "es": "Quisiera una mesa para dos", "fr": "Je voudrais une table pour deux", "de": "Ich moechte einen Tisch fuer zwei"},
        {"en": "Can I see the menu?", "es": "¿Puedo ver el menu?", "fr": "Puis-je voir le menu?", "de": "Kann ich die Speisekarte sehen?"},
    ],
    "emergency": [
        {"en": "I need help", "es": "Necesito ayuda", "fr": "J'ai besoin d'aide", "de": "Ich brauche Hilfe"},
        {"en": "Call the police", "es": "Llame a la policia", "fr": "Appelez la police", "de": "Rufen Sie die Polizei"},
    ],
}

lang_codes = {"en": "en", "es": "es", "fr": "fr", "de": "de"}
output_dir = "client/public/audio"
os.makedirs(output_dir, exist_ok=True)

total = 0
for category, phrase_list in phrases.items():
    for i, phrase in enumerate(phrase_list):
        for lang, code in lang_codes.items():
            text = phrase[lang]
            filename = f"{category}_{i+1}_{lang}.mp3"
            filepath = os.path.join(output_dir, filename)
            print(f"Generando: {filepath} -> {text}")
            tts = gTTS(text=text, lang=code)
            tts.save(filepath)
            total += 1

print(f"\n{total} audios generados en {output_dir}/")
