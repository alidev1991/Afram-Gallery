const INTERNAL_ORIGIN = "https://internal.arfam.invalid";

export function getSafeInternalPath(
  value: string | null | undefined,
  fallback = "/account",
) {
  if (!value) {
    return fallback;
  }

  const candidate = value.trim();

  if (
    !candidate.startsWith("/") ||
    candidate.startsWith("//") ||
    candidate.includes("\\") ||
    /[\u0000-\u001F\u007F]/.test(candidate)
  ) {
    return fallback;
  }

  try {
    const decodedPath = decodeURIComponent(candidate.split(/[?#]/, 1)[0]);

    if (decodedPath.startsWith("//") || decodedPath.includes("\\")) {
      return fallback;
    }

    const url = new URL(candidate, INTERNAL_ORIGIN);

    if (url.origin !== INTERNAL_ORIGIN) {
      return fallback;
    }

    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return fallback;
  }
}

export function getSafeAdminPath(value: string | null | undefined) {
  const path = getSafeInternalPath(value, "/admin");

  if (
    path === "/admin" ||
    (path.startsWith("/admin/") && !path.startsWith("/admin/login"))
  ) {
    return path;
  }

  return "/admin";
}
