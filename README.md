# User Auth System

This is a basic User Authorization system app which provide protect routes which includes user data . This doc divided into two section

## 1. Backend Side

### 1.1 Technologies Used:
  - Node.js
  - Express.js
  - MongoDB (or your preferred database)
  - jsonwebToken (generate unique token for user to get protected routes data)
  - Nodemon (use in development mode)
  - bcrypt (for protecting user password)
  
### 1.2 Getting Started:
#### 1.2.1 Clone the repository:
 ```
      git clone https://github.com/gagandeepsingh101/User-Auth-System
      cd User-Auth-Sytstem
      cd ./backend
``` 
#### 1.2.2 Install dependencies:
```
   npm install
```   

#### 1.2.3 Set up the database:

Create a MongoDB database.
Update the database configuration in config.js or .env file.

#### 1.2.4 Run the server:
```
  npm start
```
The backend server will be running at http://localhost:8080.

### 1.3 API Endpoints:
- POST /api/users/register : Add new user data in mongodb with protected password
- POST /api/users/login: Login a user with unique token .
- GET /api/users/userData: It is protected routes with provide user detail verify by user specific token .
- GET /api/users/logout: Logout a user with deleting its unique token .


## 2. Frontend Side

### 2.1 Technologies Used:
- Vite React Js
- Axios (or your preferred HTTP client)
- Tailwind CSS (or any preferred styling framework)

### 2.2 Getting Started:

#### 2.2.1 Navigate to the frontend directory:
```
cd ./frontend
```
#### 2.2.2 Install dependencies:
```
npm install
```

### 2.2.3 Run the application:
```
npm run dev
```
The frontend will be accessible at http://localhost:5173.

### 2.3 Features:
- View User Detail on on login specific user .
- Register user with valid register form field and unique user.
- Login user with validate password with login form and then adding unique token cookie
- Logout user and then deleteing unique token cookie
## 3. Contributing:
Feel free to contribute to the project by opening issues or creating pull requests. Contributions are welcome!

