FROM nginx:alpine

# Delete default nginx configuration 
RUN rm -rf /usr/share/nginx/html/*

# Copying compiled files in /dist directory to nginx directory
COPY dist /usr/share/nginx/html

# Expose port 80 to serve application
EXPOSE 80

# Command to start nginx
CMD ["nginx", "-g", "daemon off;"]
