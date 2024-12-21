// CookieUtils.ts
import * as CookieConsent from 'vanilla-cookieconsent';

// Import the CookieConsent library

/**
 * Logs user consent details.
 */
export function logConsent() {
  // Retrieve all the fields
  const cookie = CookieConsent.getCookie();
  const preferences = CookieConsent.getUserPreferences();

  // Collect user consent data
  const userConsent = {
    consentId: cookie.consentId,
    acceptType: preferences.acceptType,
    acceptedCategories: preferences.acceptedCategories,
    rejectedCategories: preferences.rejectedCategories,
  };

  return userConsent;
}
