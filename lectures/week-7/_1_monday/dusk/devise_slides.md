## Authentication with
# Devise

---

## Agenda

1. Review difference between authentication and authorization
1. Introduce the devise Rails gem
1. Explore devise's components
1. Implement devise in a simple project

---

## Question Exercise

Think about when you did authorization in Node and today's class.

**Write down 3 questions** that you think other students might not understand about authentication and authorization.

(5 minutes)

---

# Authentication &
# Authorization
## In Review

---

## Authentication

* Determines whether a user exists in the system
* Permission to come in the door
* NOT what they can do once they're inside.

---

## Authorization

* Determines what a user can do
* Once they're in the door, where can they go?

---

# devise

---

## Authentication with Devise

Devise only provides authentication, but handles many challenging edge cases for you.

---

## What about authorization?

Devise pairs very well with the popular Rails authorization gems:

* `pundit`: harder to use, more powerful, less complex
* `cancancan`: easier to use, more restrictive, more complex

---

## Features

1. Automatic model and view generation
1. Built in high security and safety
1. Simple helpers for signing in and out, registration
1. Create, Read, Update, Destroy for Users
1. Email confirmation, password recovery, "remember me"

---

# Components

---

## Database Authenticatable

Storing your users in the database using strong encryption and password confirmation.

![database](/images/password_encryption.png)

---

## Registerable

Users can sign up, edit, and delete their own accounts through the web site.

![stuff](/images/registration.png)

---

## Recoverable

Provides the "Forgot your Password?" functionality to users via email.

![stuff](/images/forgot_password.png)

---

## Rememberable

Allows "Remember Me" functionality using cookies

![stuff](/images/remember_me.png)

---

## Trackable

Tracks the number of times, timestamps, and IP addresses of users and stores it in the database.

---

## Validatable

Adds Rails validation options for the email and password fields.

![valid](/images/password_length.png)

---

## Optional Components

---

## Omniauthable

Allows users to sign in with Facebook, Google, Twitter, etc.

![stuff](/images/social_connect.png)

---

## Confirmable

Requires users to confirm and activate their new account by email.

![stuff](/images/email_confirmation.png)

---

## Timeoutable

Ensures that a session automatically signs out after a set period of time.

Useful for high security sites!

![stuff](/images/timeout.jpg)

---

## Lockable

The system can automatically lock a user account after a number of failed login attempts.

![lockable](/images/failed_logins.png)

---

## Demonstration

---

## need help?

1. check the devise wiki when you need help
2. there's tons of stuff on Stack Overflow
