# Language Travel Planner

Aplicación web para ayudar a viajeros a comunicarse en inglés, español, francés y alemán.

Demo: https://language-travel-planner-xux4.vercel.app

---

## Sobre el proyecto

Esto es un prototipo. Empecé con 4 idiomas para tener control sobre el resultado y ver si la idea era viable antes de intentar escalar. Me encantaría añadir más idiomas en el futuro, pero quería asegurarme de que funcionaba bien con estos primero.

Voy a seguir mejorándolo y experimentando con él. Tengo ganas de mejorar el quiz para que tenga más utilidad real, cambiar el diseño y añadir más contenido.

---

## Qué tiene ahora

- Frases de viaje organizadas por categoría: aeropuerto, hotel, restaurante y emergencias
- Pronunciación en audio de cada frase en los 4 idiomas
- Quiz para practicar vocabulario, eligiendo el idioma nativo para aprender español
- Login con Firebase

## Lo que quiero mejorar

- Añadir más idiomas
- Mejorar el quiz con más tipos de preguntas
- Cambiar el diseño
- Más frases y categorías

---

## Tecnologías

- React 19 con TypeScript
- Vite
- Firebase Authentication
- Tailwind CSS
- React Router v7
- Desplegado en Vercel

---

## Cómo se generaron los audios

## Cómo se generaron los audios

Los audios se generaron con un script de Python usando la librería gTTS (Google Text-to-Speech), que es gratuita.

Primero instalé Python desde python.org y luego instalé la librería:

```bash
py -m pip install gtts
```

Creé el script generate_audio.py en la raíz del proyecto con todas las frases y ejecuté:

```bash
py generate_audio.py
```

El script recorre cada frase, categoría e idioma automáticamente y genera un archivo MP3 por cada combinación. En total generó 32 archivos MP3 guardados en client/public/audio/ con nombres como airport_1_es.mp3.

## Ejecutar en local

```bash
cd client
npm install
npm run dev
```

Necesitas un archivo client/.env con las credenciales de Firebase:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```
