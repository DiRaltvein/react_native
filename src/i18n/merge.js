const fs = require('fs');


(async function() {
  const translationKeys = require('./translations.json');
  const translations = ['en', 'et', 'ru'];

  for (const translation of translations) {
    const filePath = `${__dirname}/translations/${translation}.json`;
    const languageKeys = require(filePath);
    // remove translations that are no longer relevant
    Object.keys(languageKeys).forEach(key => {
      if (!(key in translationKeys)) {
        delete languageKeys[key];
      }
    });
    // add new translation keys
    const extendedLanguageKeys = Object.assign({...translationKeys}, languageKeys);
    // save file
    fs.writeFileSync(filePath, JSON.stringify(extendedLanguageKeys, 0, 2));
  }
})();
