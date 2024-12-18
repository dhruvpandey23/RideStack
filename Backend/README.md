# Users Register Endpoint

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
}