#!/bin/bash

set -e

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "Node.js is not installed. Please install Node.js to run this application."
  exit 1
fi

# Check if Node version is at least 20
NODE_VERSION=$(node -v | cut -d. -f1 | sed 's/[^0-9]*//g')

if [ "$NODE_VERSION" -lt 20 ]; then
  echo "Node.js version 20 or greater is required to run this application."
  exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
  echo "pnpm is not installed. Installing pnpm..."
  curl -fsSL https://get.pnpm.io/install.sh | sh -
fi

# Check if pnpm version is at least 9
PNPM_VERSION=$(pnpm -v | cut -d. -f1 | sed 's/[^0-9]*//g')

if [ "$PNPM_VERSION" -lt 9 ]; then
  echo "pnpm version 9 or greater is required to run this application. Updating pnpm..."
  pnpm add -g pnpm@latest
fi

# Check if another package manager is being used
LOCKFILES=$(find . -type f -name "yarn.lock" -o -name "package-lock.json" -o -name "bun.lockb")

if [ -n "$LOCKFILES" ]; then
  echo "Another package manager is being used. Cleaning up lock files..."
  rm -rf $LOCKFILES node_modules
fi

# Create the .env file if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file..."
  cp .env.example .env
fi

# Install dependencies
pnpm install --frozen-lockfile

# Build the application
pnpm run build

# Ask the user if they want to start the application in development mode or production mode
echo "Do you want to start the application in development mode or production mode? (default: development)"
read -p "Enter 'dev or 'prod': " MODE

if [ "$MODE" == "prod" ]; then
  # Start the application in production mode
  pnpm run start
else
  # Start the application in development mode
  pnpm run dev
fi
