# Heroku Deployment with Rails

## Assumptions
- You use sqlite3 in development and test
- You use git
- You have a Heroku account
- You have an existing Rails app
- You are inside your app's directory

Verify these assumptions before you continue!

## Requirements
- Stage and commit your latest changes
- Run `$ heroku create`; you should see something like:

```shell
Creating morning-garden-4914... done, stack is cedar-14

https://morning-garden-4914.herokuapp.com/ | https://git.heroku.com/morning-garden-4914.git

Git remote heroku added
```

- Add the following to your Gemfile:

```ruby
group :production do
	# Heroku uses Postgres in production
  gem 'pg'

  # This gem will make Heroku serve your assets (CSS, JS, etc)
  gem 'rails_12factor'
end
```

- Move your 'sqlite3' gem into the `:test, :development` group in your Gemfile
- `$ bundle install`
- Stage and commit again
- `$ git push heroku master` - this will take a little bit, but eventually you should see a line at the bottom somewhere saying

```shell
Verifying deploy... done.
```

- `$ heroku run rake db:migrate`
- `$ heroku open` - You should see your beauty!

**Much easier than with Node, right? Lovely.**

## Things to keep in mind for understanding
- You deploy to Heroku from your computer. This is not related to GitHub whatsoever
- Deploy whenever you’re done implementing a new feature (keyword continuous deployment)
- If your deployment includes changes to your database, don't forget to run `$ heroku run rake db:migrate` after deploying
- If you run into errors, run `$ heroku logs` to check what's going on
