import {useTranslations} from 'next-intl';
 
export default function NotFound() {
  const t = useTranslations('NotFound');
 
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="text-lg text-muted-foreground">{t('description')}</p>
    </div>
  );
}