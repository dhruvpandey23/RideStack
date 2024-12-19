<!-- # Backend API Documentation

# `/user/register` Endpoint

## Description
Registers a new user by creating a user account with the provided information.

## HTTP Method
POST

## Request Body
The request body should be in JSON format and include the following fields:

* `fullname` (object):
	+ `firstname` (string, required): User's first name (minimum 3 characters).
	+ `lastname` (string, optional): User's last name (minimum 3 characters).
* `email` (string, required): User's email address (must be a valid email).
* `password` (string, required): User's password (minimum 6 characters).

## Example Response
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "password123"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIjoiMjMwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}.






# `/user/login` Endpoint

### Description
Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method
POST

### Endpoint
/users/login

### Request Body
The request body should be in JSON format and include the following fields:

* `email` (string, required): User's email address (must be a valid email).
* `password` (string, required): User's password (minimum 6 characters).

### Example Response
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "password123",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIjoiMjMwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
} -->

# Backend API Documentation

## Endpoints

### 1. `/user/register`

#### Description
Registers a new user by creating a user account with the provided information.

#### HTTP Method
**POST**

#### Request Body
The request body should be in JSON format and include the following fields:

- **`fullname`** (object, required):
  - **`firstname`** (string, required): User's first name (minimum 3 characters).
  - **`lastname`** (string, optional): User's last name (minimum 3 characters, if provided).
- **`email`** (string, required): User's email address (must be a valid email).
- **`password`** (string, required): User's password (minimum 6 characters).

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Example Response
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### Notes
- Ensure the `firstname` and `lastname` fields adhere to the minimum character requirements.
- The `token` should be securely stored on the client-side.

---

### 2. `/user/login`

#### Description
Authenticates a user using their email and password, returning a JWT token upon successful login.

#### HTTP Method
**POST**

#### Request Body
The request body should be in JSON format and include the following fields:

- **`email`** (string, required): User's email address (must be a valid email).
- **`password`** (string, required): User's password (minimum 6 characters).

#### Example Request
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Example Response
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### Notes
- Validate the `email` and `password` fields before sending the request.
- The `password` field should not be included in the response for security reasons.
- Proper error handling should be implemented for authentication failures.

---

## General Guidelines

1. Use HTTPS to ensure secure communication between the client and server.
2. JWT tokens should be stored securely (e.g., HTTP-only cookies or secure storage).
3. Implement server-side validation for all input fields to ensure data integrity and security.
4. Include appropriate error handling and return descriptive error messages for invalid requests.
