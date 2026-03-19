Authentication API

A Node.js + Express based authentication API using JWT tokens, email verification, refresh tokens, and session handling. This project supports:

✅ User registration with email OTP verification
✅ Login with access & refresh tokens (stored in cookies)
✅ Protected user profile route
✅ Token refresh
✅ Logout (single and all sessions)
✅ Email verification endpoint

📦 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT for token‑based authentication

Cookie parser for storing refresh tokens

🚀 Setup & Run
1. Clone the repository
git clone https://github.com/tamanna-tech-brain/authentication.git
cd authentication
2. Install Dependencies
npm install
3. Create Environment Variables

Add a .env with at least:

MONGO_URI=<your MongoDB connection URI>
JWT_SECRET=<your secret key>
4. Start the Server
npm start

Server will run on:

http://localhost:3000
🛠️ API Endpoints

Base URL: http://localhost:3000/api

🔐 Authentication (under /auth)
Method	Endpoint	Description
POST	/auth/register	Register new user (send OTP to email)
POST	/auth/login	Login (returns access token & cookie refresh token)
GET	/auth/get-me	Get current user (requires Bearer token)
GET	/auth/refresh-token	Refresh access token using cookie refresh token
GET	/auth/logout	Logout from current session
GET	/auth/logout-all	Logout from all devices
GET	/auth/verifyEmail	Verify email with OTP
📮 Testing with Postman

Here’s how to test each endpoint:

1️⃣ Register a New User

POST

POST http://localhost:3000/api/auth/register

Body (JSON)

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "Password123"
}

➡️ Response returns a message telling you to verify the email with OTP.

2️⃣ Verify Email

GET

GET http://localhost:3000/api/auth/verifyEmail

Query parameters

email=john@example.com
otp=123456

If correct OTP, email becomes verified.

3️⃣ Login

POST

POST http://localhost:3000/api/auth/login

Body (JSON)

{
  "email": "john@example.com",
  "password": "Password123"
}

📌 This returns:

accessToken (in JSON response)

refreshToken cookie (set automatically)

4️⃣ Get Authenticated User

GET

GET http://localhost:3000/api/auth/get-me

Headers

Authorization: Bearer <accessToken>
5️⃣ Refresh Access Token

GET

GET http://localhost:3000/api/auth/refresh-token

This uses the refresh token stored in cookie (Postman will send cookie if you enable "Send cookies").

6️⃣ Logout (Current Session)

GET

GET http://localhost:3000/api/auth/logout
7️⃣ Logout All Sessions

GET

GET http://localhost:3000/api/auth/logout-all

Logs out from all devices.
