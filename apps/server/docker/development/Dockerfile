FROM node:20.14.0-alpine

ENV PNPM_HOME="/pnpm"
ENV PNPM_VERSION=9.2.0
ENV PATH="$PNPM_HOME:$PATH"
ENV TURBO_TELEMETRY_DISABLED=1

RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm turbo build --filter=server...

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add -g dotenv-cli

CMD [ "sh", "apps/server/docker/development/entry-point.sh" ]