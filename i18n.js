const STORAGE_KEY = 'preferred-language';
const translations = globalThis.siteTranslations;

const isSupportedLanguage = (language) => language === 'en' || language === 'fr';

const readStoredLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLanguage(storedLanguage) ? storedLanguage : null;
  } catch (error) {
    console.warn('Unable to read saved language preference.', error);
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    console.warn('Unable to save language preference.', error);
  }
};

const getBrowserLanguage = () => {
  const browserLanguages =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const language of browserLanguages) {
    if (typeof language !== 'string') {
      continue;
    }

    const normalizedLanguage = language.toLowerCase();

    if (normalizedLanguage.startsWith('fr')) {
      return 'fr';
    }

    if (normalizedLanguage.startsWith('en')) {
      return 'en';
    }
  }

  return 'en';
};

const createRichTranslationNode = (part) => {
  if (typeof part === 'string') {
    return document.createTextNode(part);
  }

  if (part && typeof part.href === 'string' && typeof part.label === 'string') {
    const link = document.createElement('a');
    link.href = part.href;
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    link.textContent = part.label;
    return link;
  }

  return null;
};

const renderRichTranslation = (element, parts) => {
  if (!Array.isArray(parts)) {
    return;
  }

  element.replaceChildren(...parts.map(createRichTranslationNode).filter(Boolean));
};

const applyTranslations = (language) => {
  const translation = translations[language];

  if (!translation) {
    return;
  }

  document.documentElement.lang = translation.documentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');

    if (key && key in translation) {
      element.textContent = translation[key];
    }
  });

  document.querySelectorAll('[data-i18n-rich]').forEach((element) => {
    const key = element.getAttribute('data-i18n-rich');

    if (key && key in translation) {
      renderRichTranslation(element, translation[key]);
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    const attributeMappings = element.getAttribute('data-i18n-attr')?.split(';') ?? [];

    attributeMappings.forEach((mapping) => {
      const [attributeName, key] = mapping.split(':').map((value) => value.trim());

      if (attributeName && key && key in translation) {
        element.setAttribute(attributeName, translation[key]);
      }
    });
  });

  document.querySelectorAll('[data-language-switch]').forEach((button) => {
    const isActive = button.getAttribute('data-language-switch') === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const initializeLanguageSwitcher = () => {
  const switcher = document.querySelector('[data-language-switcher]');

  if (!switcher) {
    return;
  }

  switcher.hidden = false;
  switcher.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const button = target.closest('[data-language-switch]');

    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const language = button.getAttribute('data-language-switch');

    if (!isSupportedLanguage(language)) {
      return;
    }

    saveLanguage(language);
    applyTranslations(language);
  });
};

if (!translations || typeof translations !== 'object') {
  console.error('Translations are unavailable.');
} else {
  applyTranslations(readStoredLanguage() ?? getBrowserLanguage());
  initializeLanguageSwitcher();
}
