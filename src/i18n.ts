import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import en from '../locales/en.json';
import es from '../locales/es.json';

const messages = {en, es};
const locales = ['en', 'es'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }
 
  return {
    messages: messages[locale]
  };
});