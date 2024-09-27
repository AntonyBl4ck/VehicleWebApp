
# Vehicle App

## Overview

The Vehicle App is a simple web application where users can browse a collection of vehicles, view details for each vehicle, and search through available listings. The frontend is built using React, React Router for navigation, Framer Motion for animations, and other dependencies for smooth functionality and UI components.

## Features

- **Landing Page:** A welcoming screen with a button to explore vehicles.
- **Vehicle List:** Displays a list of vehicles with a search bar to filter results.
- **Vehicle Details:** Displays detailed information about a selected vehicle.
- **Smooth Animations:** Leveraging Framer Motion for enhanced user experience.

## Getting Started

Follow these instructions to set up and run the project locally.

### 1. Install Dependencies

Once you're in the project directory, install all required dependencies by running

```bash
cd backend
npm install
```

### 2. Setup PostgreSQL

Make sure PostgreSQL is installed and running. You should create a database called Vehicle

```bash
psql -U postgres
CREATE DATABASE Vehicle;
```
Update the .env file located in the backend directory with your database credentials

### 3. Migrate Database Schema

Use Prisma to migrate your database schema

```bash
npx prisma migrate dev
```

### 4. Run the Backend

```bash
npm start
```

The backend will now be running on http://localhost:5000

### 5. Navigate to the Frontend Directory

```bash
cd  frontend
npm install
```

### 6. Run the Frontend

```bash
npm start
```

The frontend will be available on http://localhost:3000

## Usage

- Navigate to http://localhost:3000 to view the landing page.
- Use the "Explore Vehicles" button to navigate to the list of vehicles.
- Search for vehicles by make, model, or year.
- Click on a vehicle to see more detailed information.         

## API Endpoints

- GET /api/vehicles: Fetches a list of all vehicles.
- GET /api/vehicles/:id: Fetches details for a single vehicle by ID.

## Technologies Used
Backend:

- Node.js for the server.
- Express for handling routes.
- Prisma for database interaction.
- PostgreSQL as the database.
- dotenv for environment variables.

Frontend:

- React for the UI.
- React Router DOM for navigation.
- Material UI for styling.
- Framer Motion for animations.
- Tailwind CSS for custom styling.


