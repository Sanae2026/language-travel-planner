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
- Quiz de 10 preguntas para practicar vocabulario, eligiendo el idioma nativo y el que quieres aprender
- Login con Firebase
- Modo oscuro automático

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

Los audios se generaron con un script de Python usando la librería gTTS (Google Text-to-Speech), que es gratuita y funciona bastante bien para esto.

Instalación:

```bash
py -m pip install gtts
```

Ejecución:

```bash
py generate_audio.py
```

El script generó 32 archivos MP3 cubriendo todas las frases en las 4 categorías y los 4 idiomas. Los guarda en client/public/audio/ con nombres como airport_1_es.mp3.

---

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
