# Contact Manager Application

A **full-stack contact management** web application built using **React.js** for the frontend and **Node.js, Express.js, MongoDB** for the backend. The app allows users to sign up, log in, and perform CRUD (Create, Read, Update, Delete) operations on their contacts. It also supports the functionality of marking contacts as favourites.

## Features

- **User Authentication**: Users can sign up, log in, and receive access tokens for authenticated actions. Uses **JWT** for access and refresh tokens.
- **Contact Management**: Add, edit, delete, and view detailed information for each contact.
- **Favourites**: Toggle favourite status for each contact, and view favourite contacts separately.
- **Responsive UI**: User-friendly, responsive design for an enhanced user experience across devices.
- **State Management**: Uses **Redux Toolkit** for state management and **Redux Persist** for state persistence.
- **Protected Routes**: Certain features are only accessible to authenticated users.
- **Backend API**: A RESTful API built with Node.js and Express for handling contact data and user authentication.
- **Database**: MongoDB is used to store contact information and user details.

## Tech Stack

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **Redux Toolkit**: For managing the application state.
- **Redux Thunk**: For handling asynchronous actions (e.g., API calls).
- **Axios**: For making HTTP requests to the backend.
- **CSS**: For styling the application.

### Backend
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Framework for building APIs.
- **MongoDB**: NoSQL database for storing contacts and user information.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: For user authentication via access and refresh tokens.

## Project Structure


## Getting Started

### Prerequisites

- **Node.js** (v14.x or later)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-manager-app.git
   
2. Install frontend dependencies:
    cd frontend
    npm install

## Configure Frontend to Use Hosted API

In your `fetch` requests, replace the relative API URLs with the full hosted API URL. For example, in your components, you can set the base URL like this:

```javascript
const API_BASE_URL = 'https://api.yourdomain.com';

fetch(`${API_BASE_URL}/api/contacts`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

# Running the Application
Start the frontend (React app):
npm run dev

The frontend will be accessible at http://localhost:5173.

### API Endpoints

| Method | Endpoint                   | Description                          |
|--------|----------------------------|--------------------------------------|
| POST   | `/api/users/register`       | Register a new user                 |
| POST   | `/api/users/login`          | Log in a user                      |
| GET    | `/api/contacts`             | Get all contacts for a user         |
| GET    | `/api/contacts/:id`         | Get contact with id             |
| POST   | `/api/contacts`             | Create a new contact                |
| PUT    | `/api/contacts/:id`         | Update an existing contact          |
| DELETE | `/api/contacts/:id`         | Delete a contact                    |
| POST   | `/api/token/refresh`        | Refresh the access token            |


# Cookies
Access Token: Stored in local storage after login.
Refresh Token: Stored in HTTP-only cookies for secure token refreshing.

# Known Issues
Ensure that cookies are properly configured for local development (using localhost) and production (over HTTPS).
Some issues with CORS or cookie handling may arise depending on browser settings.

# Future Enhancements
Implement sorting and filtering options for contacts.
Add search functionality to easily find contacts.
Improve the overall design with more modern UI components.
Optimize backend performance with caching.

# Contributing
Contributions are welcome! Feel free to submit issues or pull requests to improve this project.
