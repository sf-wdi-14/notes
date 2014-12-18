## Getting set up on Heroku with Node + Postgres (DO NOT IF YOU HAVE SEQUELIZE)

### Before you do anything
1. Make sure you have an account with heroku: https://www.heroku.com/

2. Make sure you have installed the heroku toolbelt - [https://toolbelt.heroku.com/](https://toolbelt.heroku.com/)

### To start:


* Create a `Procfile` 
	- In terminal, run `touch Procfile`. Must be called with a capitol P
	- make sure it is named "Procfile" (no extention) 
	- make sure your Procfile is in the same folder as your app.js file) 
	- in terminal type `echo "web: node app.js" >> Procfile`



* In your `index.js` file, where you get your server started, include the port number in your app.listen function.  Example - 
```
app.listen(process.env.PORT || 3000)
```

this ensures that when we set the PORT config variable, heroku will run on it (we will set the PORT to 80 for heroku)

* Your package.json file is __crucial__ - when you deploy your application, heroku will check the package.json file for all dependencies so whenever you install anything with npm make sure to use --save. You can always check your package.json to see if you are missing anything. 

* Create a heroku app via the command line
```
heroku apps:create example
```
Where `example` is the name of your app. This will create a url like: `http://example.herokuapp.com`

* Add a git remote called "heroku"

Run `$ heroku git:remote -a example` where example is the name of your app.

* Commit and push all your data at this point.

* To push to heroku, enter the following command
```
git push heroku master
```

Then start a dyno: `$ heroku ps:scale web=1`

### Adding a database
Your code is now on Heroku, but your database and data are not. Postgres can be used on Heroku by installing the Postgres add-on.

To add Postgres to your app, run `$ heroku addons:add heroku-postgresql`.

In your `db.js`, replace the lines that look like:

```javascript
db.config = {
  database: "people",
  port: 5432,
  host: "localhost"
};
```

with `db.config = {}`.

Also, replace

```javascript
db.connect = function(runAfterConnecting) {
  pg.connect(db.config, function(err, client, done){
    if (err) {
      console.error("OOOPS!!! SOMETHING WENT WRONG!", err);
    }
    runAfterConnecting(client);
    done();
  });
};
```

with

```javascript
db.connect = function(runAfterConnecting) {
  console.log(process.env.DATABASE_URL);
  
  pg.connect(process.env.DATABASE_URL, function(err, client, done){
    if (err) {
      console.error("OOOPS!!! SOMETHING WENT WRONG!", err);
    }
    runAfterConnecting(client);
    done();
  });
};
```

Save, stage, commit and push to heroku `$ git push heroku master`.

Then say `$ heroku open` - you should see an error message.

In your terminal, run `$ heroku logs` and look for a line that starts with "postgres://". Copy the whole line and then run

`$ psql {{ copied content here }}`.

You're now connected to psql on Heroku. A database has already been created for you, but you need to create the tables that you were using locally (i.e. `CREATE TABLE ...`).

Exit psql `\q` and `heroku open`. If you see no error messages, you should be good!
