// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import paraglide from '@inlang/paraglide-astro';

import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';

// https://astro.build/config
export default defineConfig({
  // Use astro's i18n routing for deciding which language to use
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
  integrations: [
    tailwind(),
    paraglide({
      // recommended settings
      project: './project.inlang',
      outdir: './src/paraglide', //where your files should be
    }),
    jopSoftwarecookieconsent({
      onFirstConsent: ({ cookie }) => {
        // do something
        console.log('First consent given');
        // console.log(cookie);
      },

      guiOptions: {
        consentModal: {
          layout: 'bar inline',
          position: 'bottom',
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: false,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          readOnly: true,
        },
        functionality: {},
        analytics: {},
        marketing: {},
      },
      language: {
        default: 'en',
        autoDetect: 'document',
        translations: {
          de: {
            consentModal: {
              title: 'Verwalten Sie Ihre Cookie-Einstellungen',
              description:
                'Hallo, diese Website verwendet essentielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, sowie Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt. Sie helfen uns sehr unsere Kunden besser zu verstehen, wenn Sie uns die Zustimmung geben. Hierdurch können wir passendere Leistung anbieten. Vielen Dank!',
              acceptAllBtn: 'Alle akzeptieren ❤️',
              acceptNecessaryBtn: 'Alle ablehnen',
              showPreferencesBtn: 'Einstellungen verwalten',
              footer:
                '<a href="/de/data-privacy">Datenschutz</a>\n<a href="/de/imprint">Impressum</a>',
            },
            preferencesModal: {
              title: 'Präferenzen für die Zustimmung',
              acceptAllBtn: 'Alle akzeptieren ❤️',
              acceptNecessaryBtn: 'Alle ablehnen',
              savePreferencesBtn: 'Einstellungen speichern',
              closeIconLabel: 'Modal schließen',
              serviceCounterLabel: 'Dienstleistungen',
              sections: [
                {
                  title: 'Verwendung von Cookies',
                  description:
                    'Unsere Website verwendet Cookies, um Ihr Browser-Erlebnis zu verbessern, den Website-Verkehr zu analysieren und personalisierte Inhalte und Werbung bereitzustellen. Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, speichern Einstellungen wie Sprache oder Region und ermöglichen wichtige Funktionen wie sicheren Zugriff und Sitzungsverwaltung. Einige Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich, während andere uns helfen, unsere Dienste zu verbessern oder gezieltes Marketing zu betreiben. Sie können Ihre Cookie-Einstellungen jederzeit über Ihre Browsereinstellungen verwalten. Das Deaktivieren von Cookies kann jedoch bestimmte Funktionen der Website beeinträchtigen.',
                },
                {
                  title: 'Streng Notwendige Cookies <span class="pm__badge">Immer Aktiviert</span>',
                  description:
                    'Für das ordnungsgemäße Funktionieren unserer Website sind unbedingt erforderliche Cookies unerlässlich. Diese Cookies ermöglichen Kernfunktionen wie die Seitennavigation, die sichere Anmeldung und den Zugriff auf geschützte Bereiche der Website. Sie speichern keine personenbezogenen Daten und werden nur zur Erbringung der von Ihnen angeforderten Dienste verwendet. Ohne diese Cookies funktionieren bestimmte Teile der Website möglicherweise nicht wie vorgesehen.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Funktionalitäts Cookies',
                  description:
                    'Mithilfe von Funktionscookies kann unsere Website Ihre Präferenzen und Auswahlmöglichkeiten speichern und so ein persönlicheres und nahtloseres Erlebnis bieten. Diese Cookies ermöglichen Funktionen wie das Speichern Ihrer Spracheinstellungen, Region oder anderer von Ihnen vorgenommener Anpassungen. Obwohl sie Ihr Erlebnis verbessern, sind sie für die Grundfunktionalität der Website nicht unbedingt erforderlich. Das Deaktivieren dieser Cookies kann einige der Ihnen zur Verfügung stehenden Personalisierungsfunktionen einschränken.',
                  linkedCategory: 'functionality',
                },
                {
                  title: 'Analytische Cookies',
                  description:
                    'Analyse-Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Diese Cookies geben Einblicke in Bereiche wie Seitenaufrufe, Verweildauer auf der Website und Navigationsmuster. Die gesammelten Daten werden verwendet, um die Leistung der Website zu verbessern, Inhalte zu optimieren und ein besseres Benutzererlebnis zu gewährleisten. Das Deaktivieren dieser Cookies kann unsere Fähigkeit einschränken, die Funktionalität der Website wirksam zu überwachen und zu verbessern.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Werbung Cookies',
                  description:
                    'Werbe-Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen und die Wirksamkeit unserer Marketingkampagnen zu messen. Diese Cookies verfolgen Ihr Surfverhalten auf unserer Website und anderen Websites und ermöglichen es uns und unseren Werbepartnern, personalisierte Werbung basierend auf Ihren Interessen anzuzeigen. Sie helfen auch dabei, die Häufigkeit zu begrenzen, mit der Sie dieselbe Anzeige sehen, und sicherzustellen, dass der Werbeinhalt ansprechend ist. Das Deaktivieren dieser Cookies kann zu weniger maßgeschneiderten Werbeerlebnissen führen.',
                  linkedCategory: 'marketing',
                },
                {
                  title: 'Weitere Informationen',
                  description:
                    'Bei Fragen zu meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten wenden Sie sich bitte an <a class="cc__link" href="/de/contact">kontaktiere uns</a>.',
                },
              ],
            },
          },
          en: {
            consentModal: {
              title: 'Manage your cookie preferences',
              description:
                'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. You help us to understand our customers better when you give us your consent. This enables us, to improve our offers. Thank you very much!',
              acceptAllBtn: 'Accept all ❤️',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage preferences',
              footer:
                '<a href="/en/data-privacy">Privacy Policy</a>\n<a href="/en/imprint">Imprint</a>',
            },
            preferencesModal: {
              title: 'Consent Preferences Center',
              acceptAllBtn: 'Accept all ❤️',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Save preferences',
              closeIconLabel: 'Close modal',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title: 'Cookie Usage',
                  description:
                    'Our website uses cookies to enhance your browsing experience, analyze site traffic, and provide personalized content and advertisements. Cookies help us understand how visitors interact with our site, remember preferences such as language or region, and enable essential features like secure access and session management. Some cookies are necessary for the website to function properly, while others help us improve our services or deliver targeted marketing. You can manage your cookie preferences at any time through your browser settings, though disabling cookies may impact certain features of the website.',
                },
                {
                  title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                  description:
                    'Strictly necessary cookies are essential for the proper functioning of our website. These cookies enable core features such as page navigation, secure login, and access to protected areas of the site. They do not store any personal data and are only used to provide the services you request. Without these cookies, certain parts of the website may not work as intended.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Functionality Cookies',
                  description:
                    'Functionality cookies enable our website to remember your preferences and choices, providing a more personalized and seamless experience. These cookies allow features such as remembering your language settings, region, or other customizations you’ve made. While they enhance your experience, they are not essential for the website’s basic functionality. Disabling these cookies may limit some of the personalization features available to you.',
                  linkedCategory: 'functionality',
                },
                {
                  title: 'Analytics Cookies',
                  description:
                    'Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. These cookies provide insights into areas such as page visits, time spent on the site, and navigation patterns. The data collected is used to improve the website’s performance, optimize content, and ensure a better user experience. Disabling these cookies may limit our ability to monitor and enhance the site’s functionality effectively.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Advertisement Cookies',
                  description:
                    'Advertisement cookies are used to deliver relevant advertisements to you and measure the effectiveness of our marketing campaigns. These cookies track your browsing habits across our website and other sites, allowing us and our advertising partners to show personalized ads based on your interests. They also help limit the number of times you see the same ad and ensure that the advertising content is engaging. Disabling these cookies may result in less tailored advertising experiences.',
                  linkedCategory: 'marketing',
                },
                {
                  title: 'More information',
                  description:
                    'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="/en/contact">contact us</a>.',
                },
              ],
            },
          },
        },
      },
    }),
  ],
});
