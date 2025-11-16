import { getRequestConfig } from 'next-intl/server';
import en from '../locales/en.json';
import es from '../locales/es.json';

const locales = { en, es };

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (locale !== 'en' && locale !== 'es') {
    return {
      messages: en,
    };
  }

  return {
    messages: locales[locale] || en,
  };
});
