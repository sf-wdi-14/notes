## Getting set up on Heroku with Node + Sequelize 

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

* In terminal after you deploy your app, type in `heroku ps:scale web=1 `
* If there are no errors, check out your app by going to the url provided at the end of the push or type in ```heroku open```

* Try opening your app now, `heroku open`
