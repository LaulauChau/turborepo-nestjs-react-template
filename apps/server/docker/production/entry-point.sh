#!/bin/sh

# Load environment variables
dotenv -e packages/database/.env -- pnpm run db:push

# Start the server
dotenv -e apps/server/.env -- node apps/server/dist/main.js