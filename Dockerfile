# Stage 1: Builder
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install all dependencies (including dev dependencies for compilation)
RUN npm ci
RUN npm install typescript

# Copy source code and TypeScript config
COPY main.ts tsconfig.json ./

# Compile TypeScript to JavaScript
RUN npm run build


# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

# Copy only dependency files
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy compiled JavaScript from builder stage
COPY --from=builder /app/main.js .

# Expose port
EXPOSE 4000

# Run the compiled JavaScript
CMD ["npm", "start"]