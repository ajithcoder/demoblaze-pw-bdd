# Use the official Playwright base image
FROM mcr.microsoft.com/playwright:v1.51.1-noble

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage caching)
COPY package.json package-lock.json ./

# Install dependencies (including Playwright & Playwright-BDD)
RUN npm install

# Copy the entire project into the container
COPY . .

# Set environment variables for Playwright
ENV CI=true

# Generate BDD steps and run tests
CMD ["npm", "run", "test:e2e"]
