## Introducing Behavior-Driven Development (BDD)

---

## What's BDD?

Behavior-Driven Development is a customer-centric approach to testing and development.

It is done in addition to test-driven development.

TDD tests your code from the *developer's perspective*.

BDD tests your features from the *user's perspective*.

---

## Different Kinds of Tests

There are different kinds of tests in test-driven development. Here are the most common types with Rails:

* **unit testing** - individual object behavior
    * helpers
    * models
    * mailers
    * jobs
* **integration testing** - how individual objects interact with each other
* **functional testing** - individual object error handling/outputs; "what happens if I do this weird thing?"
* **acceptance/feature testing** - user-centric "is this what the customer wants?"

Capybara (with rspec) covers the last category.

---

## What's "Acceptance" mean?

**Acceptance** is taken from manufacturing, where a design for a widget is *accepted* once it conforms to a particular required *behavior* that the **customer** expects.

**What are the *behavior* requirements for a flashlight?**

  * Turns on/off with a button press
  * Has adjustable beam of light
  * Easily replaceable light bulb

![candle-flashlight](images/candleflashlight.jpg)

---

## Acceptance Testing Examples

What are some other objects that we can describe?

---

## Acceptance Testing Exercise

Pair with a partner. Imagine that you are responsible for a manufacturing company, and you have to decide if a product fits the expected requirements.

Remember, acceptance tests are about behavior and not appearance.

**Write down a list of *acceptance* requirements for every day objects.**

You can pick anything you want; here are a few ideas:

1. Microwave Oven
2. Bookshelf with drawers
3. Washing Machine
4. Spider-Man's web shooters

---

## User Stories

In Behavior-Driven Development, the list of customer's requirements are called *User Stories*, meaning that they are expectations that the user of your application will have.

When you are designing your application, it's very useful to write out your User Stories before you write any code.

Most user stories start with "Users should be able to..." or "Users can..." or "As a User, I can..."

---

## Writing out User Stories

Netflix:

- As a visitor, I can create a new account
- As a visitor, I can log in to my existing account
- As a user, I can add a movie to my movie queue
- As a user, I can search for a movie
- As an admin, I can change the accessibility of movies

What are some other stories?

---

## Writing out User Stories

Amazon:

- As a visitor, I can create a new account
- As a visitor, I can log in to my existing account
- As a visitor or user, I can view purchasable items
- As a visitor or user, I can add items to my shopping cart

What are some other stories?

---

## User Stories Exercise

Pair with a partner. Write down some user stories for Facebook.

There's hundreds of them for Facebook! Don't overthink it.

---

## User Stories Exercise

We are going to build a web site that allows you to create and share recipes.

- As a visitor, I can see a list of recipes
- As a user of the site, I can delete my own recipe

Q: What are some other user stories for this site?

---

# Introducing Capybara

---

## Capybara is a BDD testing gem

Capybara allows you to write tests with RSpec that run in your browser and simulate real user behavior.

* Visit pages
* Fill in form fields
* Click on buttons
* Find text on the page
* Many more!

---

## Installing capybara

Capybara and supporting gems are installed into the Gemfile in the *test* group.

Q: Why isn't it also put into the development group?

**In the gemfile, install test gems:**

```ruby
# Gemfile
group :test do
  gem 'capybara'
  gem 'launchy'
  gem 'selenium-webdriver'
end
```

**Rspec needs to be told to load capybara:**

```ruby
# spec/rails_helper.rb
# Add additional requires below this line. Rails is not loaded until this point!
require 'capybara/rails' # Add <<< this line below ^^^ this line
```

---

## Our first Capybara feature test

A Capybara feature test look a lot like any other RSpec test.

In fact, `feature`, `background`, and `scenario` are simply aliases for `describe`, `before`, and `it`.

```ruby
require 'rails_helper'

feature 'Managing Recipes', type: :feature do
  scenario 'creating a new recipe' do
    expect(false).to be true
  end
end
```

If we run `rspec spec/features` from the command line, this test will run (and fail).

---

## Building our first real test

We will build a test that will load the recipes page, fill in the form, and save.

Then we will use RSpec's expectation matchers (`expect`) to verify that our page behaviors correctly.

```ruby
# spec/features/recipes_feature_spec.rb

feature 'Managing Recipes', type: :feature do
  scenario 'creating a new recipe' do
    visit '/recipes/new'
    fill_in 'Title', with: 'Chocolate Milk'
    fill_in 'Instructions', with: 'step 1: drink it'
    click_button 'Save'

    expect(page).to have_content 'Chocolate Milk'
  end
end
```

---

## Building another test

What if we want to show a recipe? We will have to create a recipe first.

Now we will use FactoryGirl to create a recipe that will be displayed on the page.

```ruby
# spec/features/recipes_feature_spec.rb

feature 'Managing Recipes', type: :feature do
  # scenario 'creating a recipe' ...

  let(:recipe) { create(:recipe, title: 'Cool Recipe') }

  scenario 'showing a recipe' do
    visit "/recipes/#{recipe.id}"

    expect(page).to have_content 'Cool Recipe'
  end
end
```

---

## Building more tests

Pair up with a partner. Using the links below, and the user stories that you created earlier, make more feature specs.

[List of Capybara methods](https://github.com/jnicklas/capybara#the-dsl)

[Thoughtbot's Capybara Cheatsheet](https://learn.thoughtbot.com/test-driven-rails-resources/capybara.pdf)

---

## Viewing what Capybara sees

Since Capybara does everything behind the scenes (aka "headless") it can be challenging sometimes to know what is wrong. A useful tool is `save_and_open_page` which opens a browser to the current context of Capybara. (Remember to have the `launchy` gem installed.)

```ruby
scenario 'doing something' do
  visit '/recipes/new'
  save_and_open_page
end
```