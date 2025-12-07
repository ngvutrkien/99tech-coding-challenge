# CRUD Service

A set of CRUD operations to manage a resource.

## Prerequisites

- Node.js.
- npm.
- Docker.

## Installation

Install dependencies:

```bash
npm install
```

## Database Setup

Start the PostgreSQL container:

```bash
docker-compose up -d
```

The database table and example data will be created automatically via the `init.sql` script.

## Development

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Start development server:

```bash
npm run dev
```

When running in non-production mode, Swagger documentation is available at http://localhost:3000/api-docs.

## Cleanup

- Stop the server: `Ctrl + C`.
- Stop the PostgreSQL container:

```bash
docker-compose down

# Remove data volumes
docker-compose down -v
```

## Scripts

- Development: `npm run dev`
- Build: `npm run build`
- Start (production): `npm start`