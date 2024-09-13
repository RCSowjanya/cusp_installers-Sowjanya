# Use an official Node.js runtime as a parent image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies


RUN npm install

# Copy the application code into the container
COPY . .

ENV NODE_OPTIONS="--unhandled-rejections=strict"

# Build the Next.js application
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
