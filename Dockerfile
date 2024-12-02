# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /src/app

# Clean cache and remove any pre-existing node_modules and package-lock.json
RUN rm -rf /src/app/node_modules /src/app/package-lock.json && npm cache clean --force

# Copy package files for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev"]
