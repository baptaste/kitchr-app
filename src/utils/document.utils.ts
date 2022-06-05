import { document } from "./constants.utils";

function getCurrentRoute(): string {
  let route: string = document.title.homeSuffix;

  if (typeof window !== 'undefined') {
    const { pathname } = window.location;
    if (pathname === '/') return route;

    const cleanPath = window.location.pathname.replace('/', '');
    route = cleanPath[0].toUpperCase() + cleanPath.slice(1);
  }
  return route;
}

export function getFullDocumentTitle(): string {
  const currentPageTitle: string = getCurrentRoute();
  return document.title.prefix + currentPageTitle;
}