import { languageTag } from '../paraglide/runtime';

export const isHomePage = (currentPath: string): boolean => {
  return currentPath === `/${languageTag()}` || currentPath === `/${languageTag()}/`;
};

// export const getHref = (anchor: string, currentPath: string): string => {
//   return isHomePage(currentPath) ? anchor : `/${languageTag()}${anchor}`;
// };
export const getHref = (anchor: string, currentPath: string): string => {
  // Always prepend the current language to the anchor.
  // This ensures that even if you are on the homepage,
  // links remain language-specific.
  return `/${languageTag()}${anchor}`;
};

export const isActiveLink = (currentPath: string, linkUrl: string): boolean => {
  // Exact match for homepage
  if (linkUrl === '/') {
    return currentPath === `/${languageTag()}/` || currentPath === `/${languageTag()}`;
  }
  // Check if current path includes the link URL (for nested routes)
  return currentPath.includes(linkUrl);
};
