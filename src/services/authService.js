// ---------------------------------------------------------------
// Prototype auth service (Module 1).
// Nothing here talks to a server. Every function is async on purpose,
// so a later module can swap the bodies for real API calls
// (e.g. fetch('/api/auth/login')) without touching the pages.
// ---------------------------------------------------------------

export async function login(role, credentials) {
  // TODO (backend module): POST credentials to the API and return the user + token.
  return { ok: true, role, email: credentials.email };
}

export async function registerStudent(details) {
  // TODO (backend module): POST details to the API.
  // The prototype does NOT create an account.
  return { ok: true, email: details.email };
}

export async function logout() {
  // TODO (backend module): clear the session / token.
  return { ok: true };
}
