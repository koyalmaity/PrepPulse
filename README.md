# PrepPulse - Module 1 (Frontend only)

React + JavaScript + Vite + React Router. No backend, database, real auth or AI.

## Run
```bash
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).

## Routes
/ , /student/login , /student/register , /student/dashboard,
/company/login , /company/dashboard , /tp/login , /tp/dashboard

## Where the backend plugs in later
- `src/services/authService.js`: replace the stub bodies with real API calls.
- `src/utils/validators.js`: reuse for client-side checks before calling the API.
- Pages never call fetch directly, so they should not need rewriting.
