# Routing And Services
Lecture on routing and services in Angular.

# Objective
Students will be able to...

- Build single page apps using routes with views, controller, parameters and promises
- Fetch data from a service
- Interact with an API using services

# Link
Remember [Let's Chat](https://lets-chat.firebaseapp.com/#/rooms)? That's a single page app (SPA) built with Angular. You can usually identify SPAs by fancy stuff behind the `#` in the url.

SPAs make heavy use of services, which are a little like models in Rails. They usually contain data that different controllers in Angular can access and manipulate.

# Educate and Engage & Active Learning
Code along if you wish!

As we deal with so many different parts of Angular, we also have to think about how to structure our front end app. We will use an excellent tool called "[Yeoman](http://yeoman.io/)" that can scaffold front end apps for us.

Installing it should be as easy as

```shell
npm install -g yo
npm install -g generator-angular
```

After that, let's create an app to list books. It's going to have a home page with a welcome message, and a second page that displays a collection of books. Very simple, nothing fancy. Let's call our app 'library'.

Run the following to get started:

```shell
mkdir library
cd library
yo angular library
```

This will generate a barebone front end app for you. When prompted, say no to Sass and press enter for the Angular modules it should include (the default selection is fine).

Running `grunt serve` should open up the generated website for us. For now, let's have a look at the auto-generated views and controllers.

It basically created the following:

- a layout file (the single page of the SPA)
- routes
- controllers
- views

Let's replace the existing pages and build:

- a WelcomeCtrl at `/`
- a BooksCtrl at `/books`
- a Book service that contains books the controller can fetch

# Reflect
Pair up and explain to each other the purpose of
- controllers
- services
- routes

# Now and Then
Angular is one of the preferred front end frameworks to build SPAs. Having a frontend separate from the backend is likely the way the internet will develop, for several reasons: it provides clear separation of concerns, makes your app faster, and development cleaner. It is, however, not the established way of building websites at the time of writing.
