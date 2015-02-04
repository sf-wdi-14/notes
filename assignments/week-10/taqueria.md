# Taqueria App

## Concept
The Mission needs more tacos! We will build an app that can create tacos to satisfy the hot demand.

The app's frontend will be separate from the app's backend.

### Frontend
You can find the frontend [here](https://github.com/sf-wdi-14/taqueria_frontend). Clone it, cd into it and run `$ grunt serve`. It should open up a working app in your browser.

This is where you will be working.

### Backend
You can find the backend [here](https://github.com/sf-wdi-14/taqueria_backend). Clone it into a separate directory (not inside the frontend app!), cd into it, migrate the database and run the server.

Verify that opening http://localhost:3000/tacos in your browser shows you an empty array `[]`.

You should not need to change the backend. It serves solely as an API and data storage for your frontend to persist data.

### Views
In your frontend, you will need the following views for tacos:

* Index
* Show
* Create
* Edit

Use restful routes with Angular to point to these views.

### Models
The backend holds only one model called `Taco`. It has these attributes:

* Meat
* Sauce
* Vegetable

All attributes are strings. RESTful routes to CRUD tacos in the backend have been prepared for you.

You will need a service in your frontend app that communicates with the backend to CRUD tacos.

## Backend Choice
As an interesting alternative to having your own backend, have a look at [Firebase](https://www.firebase.com/docs/web/quickstart.html). This could replace the Rails backend we've included. It provides additional functionality by keeping your frontend's data in sync with the database in real time. The choice is yours!
