# Node.js Native HTTP Server

A simple REST-style API built with **Node.js native HTTP module**, without using Express or any external web framework.

This project was created to practice backend and HTTP fundamentals, including:

* HTTP methods
* Routing
* Request and Response objects
* HTTP status codes
* HTTP headers
* JSON responses
* Dynamic routes
* Basic input validation
* API testing

---

## 🚀 Technologies

* Node.js
* Native `http` module
* JavaScript
* JSON

No frameworks such as Express are used.

---

## 📁 Project Structure

```text
task-1-node-http-server/
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Rahma108/Task-1-Elevvo
```

Navigate to the project:

```bash
cd task-1-node-http-server
```

Install dependencies:

```bash
npm install
```

> This project does not require external packages, but `npm install` can be used to install the dependencies defined in `package.json`.

---

## ▶️ Run the Server

Start the server using:

```bash
node --watch server.js
```

The server will run on:

```text
http://localhost:3000
```

You should see:

```text
Server running on http://localhost:3000 🚀
```

---

# 📡 API Endpoints

## 1. Get All Users

### Request

```http
GET /api/users
```

### Response

**Status:** `200 OK`

```json
[
  {
    "id": 1,
    "name": "Rahma"
  },
  {
    "id": 2,
    "name": "Ahmed"
  }
]
```

---

## 2. Get User by ID

### Request

```http
GET /api/users/:id
```

### Example

```http
GET /api/users/1
```

### Response

**Status:** `200 OK`

```json
{
  "id": 1,
  "name": "Rahma"
}
```

---

## 3. User Not Found

### Request

```http
GET /api/users/999
```

### Response

**Status:** `404 Not Found`

```json
{
  "message": "User not found"
}
```

---

## 4. Invalid User ID

### Request

```http
GET /api/users/abc
```

### Response

**Status:** `400 Bad Request`

```json
{
  "message": "Invalid user ID"
}
```

---

## 5. Method Not Allowed

The users endpoint only supports the `GET` method.

### Request

```http
POST /api/users
```

### Response

**Status:** `405 Method Not Allowed`

```json
{
  "message": "Method not allowed"
}
```

The response also includes:

```http
Allow: GET
```

---

## 6. Route Not Found

### Request

```http
GET /api/products
```

### Response

**Status:** `404 Not Found`

```json
{
  "message": "Route not found"
}
```

---

# ❤️ Health Check

The project also includes a health-check endpoint.

### Request

```http
GET /api/health
```

### Response

**Status:** `200 OK`

Example:

```json
{
  "status": "OK",
  "uptime": 125.42,
  "platform": "win32",
  "timestamp": "2026-08-20T12:00:00.000Z"
}
```

---

# 🧪 Testing

The API can be tested using:

* Browser
* Postman
  // Doc:- https://documenter.getpostman.com/view/56665483/2sBYArUYKY
* cURL

### Example using cURL

Get all users:

```bash
curl http://localhost:3000/api/users
```

Get a specific user:

```bash
curl http://localhost:3000/api/users/1
```

Test an invalid user:

```bash
curl http://localhost:3000/api/users/999
```

Health check:

```bash
curl http://localhost:3000/api/health
```

---

# 📊 HTTP Status Codes

| Status Code | Meaning            | Example                 |
| ----------- | ------------------ | ----------------------- |
| 200         | OK                 | Successful GET request  |
| 400         | Bad Request        | Invalid user ID         |
| 404         | Not Found          | User or route not found |
| 405         | Method Not Allowed | POST on GET-only route  |

---

# 🧠 What I Learned

This task helped me understand how a backend server works without relying on a framework.

Key concepts practiced:

* Creating an HTTP server with Node.js
* Handling incoming requests
* Reading request methods and URLs
* Implementing static and dynamic routes
* Returning JSON responses
* Setting HTTP headers
* Handling HTTP status codes
* Validating route parameters
* Handling errors
* Testing APIs with Postman and cURL

---

## 👩‍💻 Author

**Rahma Salama**

Backend Development Practice — Node.js
