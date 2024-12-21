import { defineMiddleware } from 'astro:middleware';
import { languageTag, setLanguageTag, type AvailableLanguageTag } from '../paraglide/runtime';

// Valid language tags
const VALID_LANGUAGES = ['en', 'de'] as const;

// Type guard for valid language tags
function isValidLanguageTag(tag: string): tag is AvailableLanguageTag {
  return VALID_LANGUAGES.includes(tag as AvailableLanguageTag);
}

// Static assets and paths to exclude
const EXCLUDED_PATHS = [
  '/images/',
  '/fonts/',
  '/assets/',
  '/favicon',
  '.svg',
  '.png',
  '.jpg',
  '.ico',
  '/404',
  '/robots.txt',
];

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Skip middleware for static assets or excluded paths
  if (EXCLUDED_PATHS.some((path) => url.pathname.includes(path))) {
    return next();
  }

  // Check if the path starts with a valid language tag
  const pathSegments = url.pathname.split('/');
  const lang = pathSegments[1]; // Extract the first path segment

  // If no language is present, redirect to default language
  if (!isValidLanguageTag(lang)) {
    const defaultLang = 'en';
    url.pathname = `/${defaultLang}${url.pathname}`;
    return context.redirect(url.toString());
  }

  // Prevent recursive language prefixing
  const remainingPath = pathSegments.slice(2).join('/');
  if (remainingPath.startsWith(lang)) {
    return next(); // Let Astro handle already-prefixed paths
  }

  // Update language tag if valid
  if (lang !== languageTag() && isValidLanguageTag(lang)) {
    setLanguageTag(lang);
  }

  // Let Astro handle the routing and check for 404 status
  const response = await next();
  if (response.status === 404) {
    // Redirect to the language-specific 404 page
    url.pathname = `/${lang}/404`;
    return context.redirect(url.toString());
  }

  return response;
});
