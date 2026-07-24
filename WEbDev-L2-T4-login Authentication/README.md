# Login Authentication System

A simple authentication system that allows users to register, log in, access a protected dashboard, and securely log out.

## 📌 Project Overview

This project is a client-side Login Authentication System developed using HTML5, CSS3, and Vanilla JavaScript.

The application provides a basic authentication workflow that includes user registration, password validation, duplicate user checking, login credential validation, protected dashboard access, and logout functionality.

For client-side data storage, the application uses browser `localStorage`. Passwords are not stored as plain text; a basic hashing approach is used before storing user credentials.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JavaScript)
* Browser Local Storage
* Web Crypto API / SHA-256 Hashing

## ✨ Features

### 📝 User Registration

* Registration form with username/email and password fields
* Minimum password length validation of 8 characters
* Password must contain at least 1 number
* Empty field validation
* Duplicate username/email checking
* Clear error messages for invalid registration details

### 🔐 User Login

* Login form with username/email and password
* Credential validation
* Generic error message for incorrect credentials
* Prevents login with invalid credentials

### 🛡️ Protected Dashboard

* Dashboard accessible only after successful login
* Unauthorized users are redirected to the login page
* Session information is maintained using `localStorage`

### 🚪 Logout

* Logout button available on the dashboard
* Clears the active login session
* Redirects the user to the login page

### 🔒 Password Security

* Passwords are not stored as plain text
* Password hashing is used before storing credentials
* SHA-256 hashing is used as a basic client-side hashing approach

## 📂 Project Structure

```text
WEbDev-L2-T4-login Authentication/
│
├── register.html
├── login.html
├── dashboard.html
├── style.css
├── script.js
├── output.mp4
└── README.md
```

## 🚀 How to Run the Project

1. Clone or download the repository.
2. Open the `WEbDev-L2-T4-login Authentication` folder.
3. Open `register.html` in a modern web browser.
4. Create a new user account.
5. Login using the registered credentials.
6. Access the protected dashboard.
7. Click the Logout button to end the session.

## 🔄 Authentication Flow

```text
User Registration
        ↓
Validate Input
        ↓
Check Duplicate User
        ↓
Hash Password
        ↓
Store User Data
        ↓
Login
        ↓
Validate Credentials
        ↓
Create Login Session
        ↓
Access Protected Dashboard
        ↓
Logout
        ↓
Clear Session
        ↓
Redirect to Login
```

## 📝 Registration Validation

The registration form validates the following conditions:

* Username/email cannot be empty
* Password cannot be empty
* Password must contain at least 8 characters
* Password must contain at least 1 number
* Duplicate username/email is not allowed

Example:

```text
Password: password123
```

This password is valid because it contains:

* At least 8 characters
* At least 1 number

## 🔑 Login Validation

During login:

1. The entered username/email is checked.
2. The entered password is hashed.
3. The hashed password is compared with the stored hashed password.
4. If the credentials are correct, the user is redirected to the dashboard.
5. If the credentials are incorrect, a general error message is displayed.

Example error message:

```text
Invalid username/email or password.
```

The application does not reveal which specific credential is incorrect.

## 🛡️ Protected Page Security

The dashboard checks whether an active login session exists.

If a user tries to open the dashboard directly without logging in:

```text
No Active Session
        ↓
Redirect to Login Page
```

This prevents unauthorized access to the protected page.

## 🔐 Password Hashing

Passwords are hashed before being stored in browser storage.

The application uses a basic SHA-256 hashing approach to avoid storing passwords directly as plain text.

Example:

```text
Original Password
        ↓
SHA-256 Hashing
        ↓
Hashed Password Stored
```

> Note: Client-side authentication with localStorage is suitable for learning and demonstration purposes. Production applications should use secure server-side authentication, HTTPS, secure cookies, and properly implemented password hashing such as bcrypt or Argon2.

## 💾 Local Storage

The application uses browser `localStorage` to store:

* Registered user data
* Hashed passwords
* Active login session

The logout operation clears the active session and redirects the user to the login page.

## 🎨 User Interface Features

* Clean and simple authentication forms
* Registration page
* Login page
* Protected dashboard
* Clear validation messages
* Responsive layout
* User-friendly navigation
* Logout functionality

## 📚 Concepts Used

This project demonstrates:

* HTML forms
* CSS styling
* JavaScript DOM manipulation
* Form validation
* Event listeners
* Local Storage API
* Session management concepts
* Password hashing
* Conditional statements
* Page redirection
* Protected route logic

## 🎯 Project Objective

The objective of this project is to build a simple authentication system that demonstrates the complete user authentication flow:

* **Register** — Create a new user account
* **Validate** — Check user input and password requirements
* **Hash** — Secure the password before storage
* **Login** — Validate user credentials
* **Protect** — Restrict access to the dashboard
* **Logout** — Clear the active session

## 👨‍💻 Internship Task

This project was developed as part of:

**OIBSIP Web Development Internship — Level 2, Task 4**

**Built using HTML5, CSS3, and Vanilla JavaScript.**
