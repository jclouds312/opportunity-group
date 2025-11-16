import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for
  // - …
  // - …
  // - …
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};