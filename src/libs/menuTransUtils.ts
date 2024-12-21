import * as m from '../paraglide/messages.js';

export default function menuTrans(menu: any[]): NavigationLink[] {
  return menu.map((item) => {
    // Transform items (if any) into children
    let children: ChildNavigationLink[] | undefined;
    let hasChildren: boolean | undefined;
    let url: string = item.url || '#'; // Default URL if not provided

    if (item.hasChildren) {
      children = item.children.map((child: any) => ({
        name: getTranslatedName(child.name),
        url: child.url,
      }));
      hasChildren = true;
    }

    const translatedName = getTranslatedName(item.name);

    return {
      name: translatedName,
      url,
      hasChildren,
      children,
    };
  });
}

function getTranslatedName(menuItem: any) {
  return typeof m[menuItem as keyof typeof m] === 'function'
    ? (m[menuItem as keyof typeof m] as () => string)()
    : menuItem;
}

export interface ChildNavigationLink {
  name: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}
