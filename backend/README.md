# Coligo Backend

This is the backend repository for the Coligo application. It provides the necessary APIs and services to support the frontend and manage data for announcements, quizzes, and users.

## Table of Contents

- [Coligo Backend](#coligo-backend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Folder Structure](#folder-structure)
  - [Setup](#setup)

## Features

- **Announcements**: Manage and retrieve announcements.
- **Quizzes**: Create, update, and manage quizzes.
- **Users**: Handle user authentication and profiles.
- **Sockets**: Real-time communication for announcements.

## Folder Structure

backend/
src
│
├── config/ # Configuration files for database and sockets
│ ├── db.config.js
│ └── socket.config.js
│
├── controllers/ # Controllers for handling request logic
│ ├── announce.controller.js
│ ├── quiz.controller.js
│ └── user.controller.js
│
├── middlewares/ # Custom middleware for authentication and error handling
│ ├── authenticateMW.js
│ ├── ErrorMW.js
│ ├── NotFoundMW.js
│ └── upload.middleware.js
│
├── models/ # Data models for announcements, quizzes, and users
│ ├── announce.model.js
│ ├── quiz.model.js
│ └── user.model.js
│
├── routes/ # Route definitions for the API
│ ├── announce.routes.js
│ ├── quiz.routes.js
│ └── user.routes.js
│
├── services/ # Business logic and service layers
│ ├── announce.service.js
│ ├── quiz.service.js
│ └── user.service.js
│
├── sockets/ # Socket-related logic for real-time communication
│ └── announce.socket.js
│
├── uploads/ # Directory for uploaded files
│
├── app.js # Main application file
└── server.js # Server entry point

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/backend-project.git
   cd backend-project
    ```

2. **Install dependencies:**

   ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a .env file in the root directory and define the necessary environment variables. Below is an example of the variables to include:

    ```bash
    PORT=3000
    DB_URI=your-database-uri
    JWT_SECRET=your-jwt-secret
    SOCKET_PORT=your-socket-port
    ```

4. **Run the server:**

    ```bash
    npm start
    ```
