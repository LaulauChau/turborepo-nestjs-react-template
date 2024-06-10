FROM node:20.14.0-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PNPM_VERSION=9.2.0
ENV PATH="$PNPM_HOME:$PATH"
ENV TURBO_TELEMETRY_DISABLED=1

RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable

FROM base AS builder
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add -g turbo
COPY . .
RUN turbo prune client --docker

FROM base AS installer
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm turbo build --filter=client...

FROM nginx:stable-alpine AS runner
COPY --from=installer /app/apps/client/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY apps/client/docker/production/nginx.conf /etc/nginx/nginx.conf

CMD [ "nginx", "-g", "daemon off;" ]