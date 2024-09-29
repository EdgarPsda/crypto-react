# Stage 1 Compile project
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependencies files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project
COPY . .

# Compile project
RUN npm run build

# Stage 2 Serve compiled files with nginx
FROM nginx:alpine

# Delete default nginx configuration
RUN rm -rf /usr/share/nginx/html/*

# Copy compiled files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Initialize nginx
CMD [ "nginx", "-g", "daemon off;" ]