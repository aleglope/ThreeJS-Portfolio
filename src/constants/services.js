const servicesOrigin = (import.meta.env.VITE_SERVICES_URL || "https://alewences.es").replace(/\/+$/, "");

export const servicesUrl = (path = "/") => `${servicesOrigin}${path}`;
