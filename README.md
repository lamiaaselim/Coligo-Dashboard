# Coligo Dashboard

A fullstack application for managing student quizzes and announcements. It has two main parts:

- **Frontend**: Built with React, Redux, and TypeScript, styled using Material UI.
- **Backend**: Built with Express.js and MongoDB, with APIs for announcements, quizzes, and user authentication.

## Contents

- [Coligo Dashboard](#coligo-dashboard)
  - [Contents](#contents)
  - [Overview](#overview)
    - [Frontend Features](#frontend-features)
    - [Backend Features](#backend-features)
  - [Tech Stack](#tech-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Project Structure](#project-structure)
    - [Frontend Structure](#frontend-structure)
    - [Backend Structure](#backend-structure)
  - [Getting Started](#getting-started)
    - [Frontend configuration](#frontend-configuration)
  - [Future Plans](#future-plans)
  - [License](#license)

## Overview

### Frontend Features

- **Login System**: Users can log in and log out. Only logged-in users can access the dashboard.
- **Responsive Design**: Adapts to different screen sizes.
- **Reusable Components**: Easy to maintain and extend.
- **Material UI**: Provides a modern look.
- **Hover Effects**: Sidebar links highlight on hover.
- **Ready for Translations**: Internationalization setup included.
- **Testing**: Includes unit and integration tests.

### Backend Features

- **Announcements**: Create, read, update, and delete announcements.
- **Quizzes**: Full management of quizzes.
- **User Accounts**: Authentication and profile management.
- **Real-Time Updates**: Socket.io for live announcements.
- **CRUD Operations**: Supports all standard database actions.

## Tech Stack

### Frontend

- React
- Redux
- TypeScript
- Material UI
- React Router
- Axios
- Jest & React Testing Library

### Backend

- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT
- Multer

## Project Structure

### Frontend Structure

```bash
coligo-dashboard/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page-level components
│   ├── store/               # Redux store setup
│   ├── styles/              # Global styles and themes
│   ├── utils/               # Helper functions
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
└── README.md                # Project info
```

### Backend Structure

```bash
coligo-backend/
├── src/
│   ├── config/              # Config files (e.g., database, sockets)
│   ├── controllers/         # Request handlers
│   ├── middlewares/         # Middleware functions
│   ├── models/              # Database schemas
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   ├── sockets/             # Real-time logic
│   ├── uploads/             # File uploads
│   ├── app.js               # App setup
│   └── server.js            # Server entry point
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
└── README.md                # Project info
```

## Getting Started

### Frontend configuration

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/coligo-dashboard.git
    cd coligo-dashboard/frontend
    ```

2. Install dependencies:

    ```bash
   npm install
   ```

3. Add environment variables in `.env`:

    ```bash
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000).

### Backend configuration

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/coligo-backend.git
   cd coligo-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add environment variables in `.env`:

   ```env
   PORT=5000
   DB_URI=your-database-uri
   JWT_SECRET=your-jwt-secret
   SOCKET_PORT=your-socket-port
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Future Plans

- Improve accessibility for better usability.
- Increase test coverage.
- Optimize performance.

## License

This project is licensed under the MIT License.
