# Community Service Platform Backend

This is the backend server for the Community Service Platform, built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- Project management
- Volunteer management
- Admin dashboard
- File uploads
- RESTful API

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/community
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Projects
- GET `/api/projects` - Get all projects
- GET `/api/projects/:id` - Get single project
- POST `/api/projects` - Create new project
- PATCH `/api/projects/:id` - Update project
- DELETE `/api/projects/:id` - Delete project
- POST `/api/projects/:id/join` - Join project as volunteer

### Users
- GET `/api/users/profile` - Get user profile
- PATCH `/api/users/profile` - Update user profile

### Volunteers
- GET `/api/volunteers` - Get all volunteers
- GET `/api/volunteers/:id` - Get volunteer details

### Donations
- POST `/api/donations` - Create donation
- GET `/api/donations` - Get all donations

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

## Security

- JWT authentication
- Password hashing
- Input validation
- CORS enabled
- Rate limiting

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 