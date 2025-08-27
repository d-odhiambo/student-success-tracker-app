export const API_BASE = 'http://localhost:3001';
export const STUDENTS_URL = `${API_BASE}/students`;
export const ASSIGNMENTS_URL = `${API_BASE}/assignments`;
export const SUBMISSIONS_URL = `${API_BASE}/submissions`;

export async function jsonFetch(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return res.json();
}
