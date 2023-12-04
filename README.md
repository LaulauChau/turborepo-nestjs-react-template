# Turborepo NestJS React Template

This template serves as a ready-to-use monorepo for full stack development, combining the power of [NestJS](https://nestjs.com/) for backend development and [React](https://reactjs.org/) for the frontend. It's an ideal starting point for developers looking to build scalable full-stack applications with a streamlined setup process.

## Features

### Applications

- `api`: a [NestJS](https://nestjs.com/) backend
- `web`: a [React](https://reactjs.org/) bundled with [Vite](https://vitejs.dev/) frontend

The `web` application is served statically by the `api` application thanks to `@nestjs/serve-static`.

```ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'web', 'dist'),
      exclude: ['api/*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

The `api` is proxied by the `web` application thanks to [Vite](https://vitejs.dev/)'s [proxy](https://vitejs.dev/config/#server-proxy) option.

```ts
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { CLIENT_PORT, SERVER_URL } = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: '~', replacement: resolve(__dirname, 'src') }],
    },
    server: {
      port: Number(CLIENT_PORT),
      proxy: {
        '/api': {
          target: SERVER_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
```

### Packages

- `database`: a [Prisma](https://www.prisma.io/) package for database access
- `eslint-config`: shared [ESLint](https://eslint.org/) configuration
- `typescript-config`: shared [TypeScript](https://www.typescriptlang.org/) configuration

Each application and package is 100% type-safe thanks to [TypeScript](https://www.typescriptlang.org/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.9.0 or higher)
- [Pnpm](https://pnpm.io/) (v8.11.0 or higher)
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

3. Create an `.env.local` file from the `.env.example` file and fill in the environment variables

   ```sh
   cp .env.example .env.local
   ```

4. Update the Prisma schema at `packages/database/prisma/schema.prisma` to match your database schema
   <br />
5. Generate the Prisma client

   ```sh
   pnpm run generate
   ```

6. Build the project

   ```sh
   pnpm run build
   ```

7. Run the development server

   ```sh
   pnpm run dev
   ```

8. _(Optional) Run the database in a Docker container_

   ```sh
   docker-compose up -d
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any questions or suggestions.

## Troubleshooting

For common issues related to the setup and usage of this template, refer to the [Turborepo official documentation](https://turbo.build/repo/docs).
