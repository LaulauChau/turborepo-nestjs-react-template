# Turborepo NestJS - React Template

This template serves as a ready-to-use monorepo for full stack development, combining the power of [NestJS](https://nestjs.com/) for backend development and [React](https://reactjs.org/) for frontend development. It's an ideal starting point for developers looking to build scalable full-stack applications with a streamlined setup process.

## Features

### Applications

- `client`: a [React](https://reactjs.org/) application.

  - Uses [Tansctack Router](https://tanstack.com/router/latest) for routing.
  - Uses [Tanstack Query](https://tanstack.com/query/latest) for data fetching.
  - Uses [shadcn/ui](https://ui.shadcn.com/) for styling.

- `server`: a [NestJS](https://nestjs.com/) application.

  - Uses the [Fastify](https://www.fastify.io/) adapter for better performance.

### Packages

- `database`: a [Prisma](https://www.prisma.io/) package for database access.

  - Uses [PostgreSQL](https://www.postgresql.org/) as the database

- `typescript-config`: shared [TypeScript](https://www.typescriptlang.org/) configuration for all applications and packages.

### Tools

- [Biome.js](https://biomejs.dev/): a fast formatter and linter for TypeScript, JavaScript, and JSON files.
- [Commitlint](https://commitlint.js.org/): a tool to lint your commit messages.
- [Husky](https://typicode.github.io/husky/): a tool to run scripts on Git hooks.
- [Lint Staged](https://github.com/lint-staged/lint-staged): a tool to run commands on staged files.
- [Turborepo](https://turbo.build/repo): a tool to manage monorepos with ease.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [Pnpm](https://pnpm.io/) (v9 or higher)
- a [PostgreSQL](https://www.postgresql.org/) database (you can use a local one using [Docker Compose](https://docs.docker.com/compose/) if you don't have one)

### Setup

#### Script

1. Clone the repository:

```bash
git clone https://github.com/LaulauChau/turborepo-nestjs-react-template
```

2. Run the `start-app.sh` script:

```bash
./scripts/start-app.sh
```

#### Manual

1. Clone the repository:

```bash
git clone https://github.com/LaulauChau/turborepo-nestjs-react-template
```

2. Create a `.env` file from the `.env.example` file and update the environment variables if needed:

```bash
cp .env.example .env
```

3. Install the dependencies:

```bash
pnpm install --frozen-lockfile
```

4. Build the project:

```bash
pnpm run build
```

5. Start the project:

```bash
# Start in development mode
pnpm dev

# Start in production mode
pnpm start
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any questions or suggestions.

## Troubleshooting

For common issues related to the setup and usage of this template, refer to the [Turborepo official documentation](https://turbo.build/repo/docs).
