import { init, changeLanguage } from 'i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

init({
  lng: 'es',
  initImmediate: false
});

requireAll(require.context('..', true, /i18n\.js$/));

export const LANGUAGES = {
  ES: 'es',
  EN: 'en'
};

export function changeLang(lang) {
  if (!Object.values(LANGUAGES).includes(lang)) {
    console.error(`Language ${lang} is not available`); // eslint-disable-line no-console
    return;
  }
  changeLanguage(lang);
  // force browser reload
  location = location; // eslint-disable-line no-global-assign,no-self-assign
}
