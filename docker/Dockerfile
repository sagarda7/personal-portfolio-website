# Shared by development, staging and production (the site has no env-specific build vars).

# Step 1: Build the Vite app
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first so Docker can cache this layer
COPY package.json package-lock.json ./
RUN npm ci

# Build the static site into /app/dist
COPY . .
RUN npm run build

# Step 2: Serve the built site with Nginx
FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
