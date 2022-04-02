import cookie from 'cookie';

export function parseCookies(req: any) {
  return cookie.parse(req ? req.headers.cookie || '' : '');
}

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const truncate = (str: string, max: number, suffix: string) =>
  str.length < max
    ? str
    : `${str.substring(
        0,
        str.substring(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`;
