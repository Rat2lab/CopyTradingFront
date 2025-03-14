import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCookie(name: string | undefined) {
  if (typeof document !== "undefined") {
    const match = document?.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return match ? match[2] : null;
  }
}

export function setCookie(name: string, value: string) {
  if (typeof document !== "undefined")
    document.cookie = name + "=" + value + "; Path=/;";
}
export function deleteCookie(name: string) {
  if (typeof document !== "undefined")
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
