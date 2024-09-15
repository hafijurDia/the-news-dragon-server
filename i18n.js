const i18n = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');
const path = require('path');

i18n
  .use(Backend)
  .use(middleware.LanguageDetector) // Detects language from request headers
  .init({
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}/translation.json'), // Path to translation files
    },
    fallbackLng: 'en', // Fallback language if none is detected
    preload: ['en', 'es'], // Preload languages
    detection: {
      order: ['querystring', 'cookie', 'header'], // Detect language from query, cookies, or headers
      caches: ['cookie'], // Cache the language in cookies
    },
    saveMissing: true,
    interpolation: {
      escapeValue: false, // Not needed for node.js
    },
  });

module.exports = i18n;
