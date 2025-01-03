## Installation

To run the full NALUM project (frontend + backend) locally, follow these steps:

### Clone the repository
```bash
git clone https://github.com/srishtayal/nalum-round2.git


### Install dependencies for both frontend and backend

1. **Navigate to the `frontend` directory** and install dependencies:
   ```bash
   cd nalum/frontend
   npm install
   ```

2. **Navigate to the `backend` directory** and install dependencies:
   ```bash
   cd ../backend
   npm install
   ```

## Frontend Setup

The frontend of NALUM is built using React.js, Tailwind CSS, and other modern frontend technologies.

### Running the Frontend

1. **Navigate to the `frontend` directory**:
   ```bash
   cd nalum/frontend
   ```

2. **Run the frontend**:
   ```bash
   npm start
   ```

This will start the frontend server on `http://localhost:3000`.

## Backend Setup

The backend of NALUM is built using Node.js, Express, and MySQL. It handles user authentication, event management, and other functionalities.

### Running the Backend

1. **Navigate to the `backend` directory**:
   ```bash
   cd nalum/backend
   ```

2. **Create a `.env` file** in the `backend` directory and add your database and API configurations:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=nalum_database
   JWT_SECRET=your-jwt-secret-key
   ```

3. **Run the backend**:
   ```bash
   node server.js
   ```

This will start the backend server on `http://localhost:5000`.

### Database Setup

Make sure to set up the database and tables as required for the backend. You can import the necessary database schema from the provided SQL files (if any).
