---
# Medical Management System

This project is a Doctor Management System that provides functionality for managing doctor profiles, patient information, appointments, and more. The project is divided into two main parts: the frontend and the backend.

## Table of Contents
- [Medical Management System](#medical-management-system)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Running the Application](#running-the-application)
    - [Running the Backend](#running-the-backend)
    - [Running the Frontend](#running-the-frontend)
  - [Features](#features)
  - [Contributing](#contributing)
  - [License](#license)

## Project Structure

The repository is structured as follows:

```
.
├── frontend
│   ├── public
│   ├── src
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── ...
├── backend
│   ├── src
│   ├── pom.xml
│   ├── .env
│   ├── README.md
│   └── ...
└── README.md
```

- **frontend**: Contains the React application.
- **backend**: Contains the Spring Boot application.

## Technologies Used

- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Spring Boot, MongoDB

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>=20.x)
- npm (>=10.x)
- Java (>=21)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/inzhamed/b-inz.git
   cd b-inz
   ```

2. **Install dependencies for the backend:**

   ```bash
   cd backend
   ./mvnw install
   ```

3. **Install dependencies for the frontend:**

   ```bash
   cd ../frontend/medical-office
   npm install
   ```

## Running the Application

1. **Start the backend server:**

   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

   The backend server should now be running on `http://localhost:8080`.


2. **Start the frontend server:**

   ```bash
   cd frontend/medical-office
   npm start
   ```

   The frontend application should now be running on `http://localhost:5173`.

## Features

- **Doctor Management**: View and update doctor profiles.
- **Patient Management**: View and update patient information.
- **Consultations Management**: View and update consultations.
- **Appointment Scheduling**: View and manage appointments.
- **Authentication**: Secure login and registration for doctors.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.


---
