# Turborepo NestJS React Template

This template serves as a ready-to-use monorepo for full stack development, combining the power of [NestJS](https://nestjs.com/) for backend development and [React](https://reactjs.org/) for the frontend. It's an ideal starting point for developers looking to build scalable full-stack applications with a streamlined setup process.

## Features

### Applications

- `api`: a [NestJS](https://nestjs.com/) backend with [Fastify](https://www.fastify.io/) as the web server
- `web`: a [React](https://reactjs.org/) bundled with [Vite](https://vitejs.dev/) frontend

The `web` application is served statically by the `api` application thanks to `@nestjs/serve-static`.

```ts
@Module({
  imports: [
    ServeStaticModule.forRoot({
       exclude: ["api/*"],
      rootPath: join(__dirname, "..", "..", "..", "web", "dist"),
    }),
  ],
})
// ...
```

The `api` is proxied by the `web` application thanks to [Vite](https://vitejs.dev/)'s [proxy](https://vitejs.dev/config/#server-proxy) option.

```ts
const config = defineConfig({
  // ...
  server: {
    port: env.CLIENT_PORT,
    proxy: {
      "/api": {
        target: env.SERVER_URL,
        changeOrigin: true,
      },
    },
  },
  // ...
});
```

### Packages

- `database`: a [Prisma](https://www.prisma.io/) package for database access
- `eslint-config`: shared [ESLint](https://eslint.org/) configuration
- `typescript-config`: shared [TypeScript](https://www.typescriptlang.org/) configuration

Each application and package is 100% type-safe thanks to [TypeScript](https://www.typescriptlang.org/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [Pnpm](https://pnpm.io/) (v8.15 or higher)
- _(Optional) [Docker](https://www.docker.com/) (v24.0.6 or higher) (if you don't have a database server)_

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/LaulauChau/turborepo-nestjs-react-template
   ```

2. Install dependencies

   ```sh
   pnpm install
   ```

3. Create an `.env` file from the `.env.example` file and fill in the environment variables

   ```sh
   cp .env.example .env
   ```

4. Update the Prisma schema at `packages/database/prisma/schema.prisma` to match your database schema

5. Generate the Prisma client

   ```sh
   pnpm run db:generate
   ```

6. Build the monorepo

   ```sh
   pnpm run build
   ```

7. _(Optional) Run the database in a Docker container_

   ```sh
   docker-compose up -d
   ```

8. Run in development mode

   ```sh
   pnpm run dev
   ```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any questions or suggestions.

## Troubleshooting

For common issues related to the setup and usage of this template, refer to the [Turborepo official documentation](https://turbo.build/repo/docs).
