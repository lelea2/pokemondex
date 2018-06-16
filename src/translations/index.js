import en from './en';

const localeData = {
  en
};

const language = (navigator.languages && navigator.languages[0]) || navigator.language;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const t = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

export default t;
