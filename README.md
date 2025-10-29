
# UniVerse-portal

Unified university portal (frontend + backend). This repository contains a Django REST backend and a Next.js + TypeScript frontend for a university portal called "UniVerse-portal". The backend exposes REST endpoints (the `core` Django app includes models, serializers and views) and the frontend is a modern Next.js app that consumes the API.

## Table of contents

- [Project structure](#project-structure)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Backend (Django) — setup & run](#backend-django-—-setup--run)
- [Frontend (Next.js) — setup & run](#frontend-nextjs-—-setup--run)
- [Environment variables](#environment-variables)
- [Database](#database)
- [Running tests](#running-tests)
- [Development notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)

## Project structure

Top-level layout (important folders/files):

- `backend/` — Django project and `core` app.
	- `manage.py` — Django management script.
	- `db.sqlite3` — development SQLite database (included).
	- `backend/` — Django project settings & routing (`settings.py`, `urls.py`, `wsgi.py`, `asgi.py`).
	- `core/` — main Django app (models, serializers, views, migrations).

- `frontend/` — Next.js application (TypeScript).
	- `app/` — Next.js app directory (pages/components/layouts).
	- `public/` — static assets.
	- `package.json`, `tsconfig.json`, `eslint.config.mjs`, `next.config.ts` — frontend config & scripts.

- `LICENSE` — repository license.

## Tech stack

- Backend: Python + Django (Django REST patterns visible via `core/serializers.py` and `core/views.py`).
- Frontend: Next.js (TypeScript) — located in the `frontend/` folder.
- Database (dev): SQLite (`backend/db.sqlite3`).

## Prerequisites

- Python 3.10+ (3.8+ may work, but 3.10+ recommended)
- Node.js 16+ / npm 8+ or Node 18+ (for Next.js)
- Git (to clone or manage the repo)

Note: The repository does not include an explicit `backend/requirements.txt` in the attached listing. If you don't have it, install core packages manually (see Backend setup). You may want to create `backend/requirements.txt` from your environment using `pip freeze > backend/requirements.txt` after installing packages.

## Backend (Django) — setup & run

Open a terminal (the project was developed with a Windows `bash.exe` shell environment in mind). From the repository root:

1. Create and activate a Python virtual environment

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate
```

2. Install dependencies

If a `requirements.txt` exists in `backend/`:

```bash
pip install -r requirements.txt
```

If not, install the common packages (example):

```bash
pip install django djangorestframework
# add other packages your project needs (e.g. django-environ, psycopg2-binary for Postgres, etc.)
```

3. Apply migrations and create a superuser

```bash
python manage.py migrate
python manage.py createsuperuser
```

4. Run the development server

```bash
python manage.py runserver 8000
```

The API will be available at `http://127.0.0.1:8000/` (check `backend/backend/urls.py` and `backend/core/urls.py` for exact routes).

## Frontend (Next.js) — setup & run

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

This starts the Next.js dev server (usually at `http://localhost:3000`). The frontend expects to talk to the backend API — configure `NEXT_PUBLIC_API_URL` (see Environment variables below) if needed.

If you prefer pnpm or yarn, use those package managers instead.

## Environment variables

Backend (common variables — add a `.env` or use your OS environment):

- `SECRET_KEY` — Django secret key (do not commit).
- `DEBUG` — `True`/`False`.
- `ALLOWED_HOSTS` — comma-separated list of hosts.
- `DATABASE_URL` — optional (if you configure external DBs).

Frontend (example):

- `NEXT_PUBLIC_API_URL` — base URL for the backend API (e.g. `http://localhost:8000/api/`).

Place environment variables in a `.env` file (backend) or `.env.local` (frontend) depending on your setup and keep secrets out of version control.

## Database

This repo includes a development SQLite DB at `backend/db.sqlite3`. SQLite is convenient for development but not recommended for production. To switch to Postgres/MySQL, update `backend/backend/settings.py` and provide appropriate `DATABASE_URL` and drivers (e.g., `psycopg2-binary` for Postgres).

## Running tests

Backend (Django tests):

```bash
cd backend
source .venv/Scripts/activate
python manage.py test
```

There is a `core/tests.py` file in the `core` app — run tests for the whole project or for that app specifically.

Frontend tests: none were detected in the attached listing. If you add tests, run them using your chosen test runner (Jest, Testing Library, etc.).

## Development notes

- API: The `core` Django app contains models, serializers, and views. Inspect `backend/core/serializers.py`, `backend/core/views.py` and `backend/core/urls.py` to understand available endpoints.
- Frontend configuration: see `frontend/next.config.ts` and `frontend/eslint.config.mjs` for linting / build settings.
- Static/media: `public/` in the frontend is the place for public assets.

## Contributing

Contributions are welcome. A suggested workflow:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Make changes and add tests where appropriate.
4. Run the backend and frontend locally and ensure everything works.
5. Open a pull request describing your changes.

Please follow existing code style and add/adjust `requirements.txt` and `package.json` scripts as needed.

## License

This project includes a `LICENSE` file at the repository root. See that file for license details.

## Where to look next

- Backend URL configuration: `backend/backend/urls.py`
- Django app `core`: `backend/core/` (models, serializers, views, migrations)
- Frontend entry: `frontend/app/` and `frontend/package.json`

---

If you'd like, I can also:

- Detect and add a `backend/requirements.txt` by scanning imported modules.
- Add example `.env` templates for backend/frontend.
- Add quick-start scripts to `package.json` to start both dev servers concurrently.

Tell me which of those you'd like next and I'll prepare them.

