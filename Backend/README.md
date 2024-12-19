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

### 3. `/users/profile`

#### Description
Retrieves the profile information of the currently authenticated user.

#### HTTP Method
**GET**

#### Authentication
Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <token>
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
  }
}
```

### Notes
- Ensure the JWT token is valid and unexpired.

---

### 4. `/users/logout`

#### Description
Logs out the current user and blacklists the token provided in the cookie or headers.

#### HTTP Method
**GET**

#### Authentication
Requires a valid JWT token in the Authorization header or cookie.

#### Example Response
```json
{
  "message": "Successfully logged out."
}
```

### Notes
- Ensure proper token invalidation to prevent reuse.

---

### 5. `/captains/register`

#### Description
Registers a new captain by creating a captain account with the provided information.

#### HTTP Method
**POST**

#### Request Body
The request body should be in JSON format and include the following fields:

- **`fullname`** (object, required):
  - **`firstname`** (string, required): Captain's first name (minimum 3 characters).
  - **`lastname`** (string, optional): Captain's last name.
- **`email`** (string, required): Captain's email address (must be a valid email).
- **`password`** (string, required): Captain's password (minimum 6 characters).
- **`vehicle`** (object, required):
  - **`color`** (string, required): Vehicle color (minimum 3 characters).
  - **`plate`** (string, required): Vehicle plate number (minimum 3 characters).
  - **`capacity`** (number, required): Vehicle passenger capacity (minimum 1).
  - **`vehicleType`** (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto').

#### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "janesmith@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Response
```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "janesmith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Notes
- Validate all required fields before creating a new captain account.
- Ensure the `vehicleType` field contains only allowed values ('car', 'motorcycle', or 'auto').
