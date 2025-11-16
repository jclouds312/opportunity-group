import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  try {
    const messages = (await import(`../locales/${locale}.json`)).default;
    return { messages };
  } catch (error) {
    const messages = (await import(`../locales/en.json`)).default;
    return { messages };
  }
});
