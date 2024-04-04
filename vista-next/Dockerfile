# Start with a base node image
FROM node:20-alpine AS base

# Set the working directory in the Docker image
WORKDIR /app

# Install global dependencies
RUN apk add --no-cache libc6-compat
RUN npm install -g nx

# Copy the package.json and package-lock.json from the local Nx workspace into the Docker image
COPY package.json package-lock.json* ./

# Install local dependencies for the application
RUN npm ci

# Copy the entire Nx workspace into the Docker image
COPY . .

# Add a debugging step to list the contents of /app
RUN ls -la

## Use the Nx CLI to build the application, targeting app-1
#RUN nx build app-1

# Expose port 3000 for the application
EXPOSE 3000


CMD ["npx", "nx", "start", "app-1"]

## Start a new stage for the production environment
#FROM node:20-alpine AS production
#
## Set the working directory in the Docker image
#WORKDIR /app
#
## Set the NODE_ENV environment variable to production
#ENV NODE_ENV production
#
## Copy over the build output for app-1 from the base stage to the production stage
#COPY --from=base dist/apps/app-1 ./
#
## Copy over the necessary runtime configuration files for app-1
#COPY --from=base /app/package.json ./
#COPY --from=base /app/node_modules ./node_modules
#
## If you have any environment-specific configuration files or other files needed at runtime, copy them here
## COPY --from=base /app/some-config.json ./
#
## Expose port 3000 for the application
#EXPOSE 3000
#
#
#CMD ["npx", "nx", "start", "app-1"]
