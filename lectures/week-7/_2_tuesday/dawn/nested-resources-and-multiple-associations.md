#Nested Resources & Associations in Rails

##Learning Objectives
by the end of today, you should be able to...
- Nest resources RESTfully
- Create a `has_many` association in rails
- Represent and store other relationships (aka favorites)

<img src="http://i.giphy.com/ZXXNaKynKfrzi.gif" alt="cute otters">

---

##Setup

Let's get started by working from our [rails-review app](https://github.com/sf-wdi-14/rails-review) that we've been riffing off of this week.

Either `clone` or `pull` for the latest version.

Don't forget to `bundle` & `rake db:migrate`

**Current Goal:** Create a `users#index` page that displays all users and links out to each user's `article#index` page.

---

##Users Index

Application should have a `users#index` page.

*Add an index route in your routes.rb*
```ruby
resources :users, only: :index
```

*Generate a users controller with an index action*
```bash
rails g controller users index
```

*Fetch all users from in the index action and pass them to the view*
```ruby
@users = User.all
```

*Display your users in an unordered list*
```ruby
<ul>
  <% @users.each do |user| %>
    <li><%= user.email %></li>
  <% end %>
</ul>
```
**Next:** No users in your database is no fun. Let's make some!
---
##Seeding the Database

Database should have seed data.

*Locate you seeds.rb file*
  - We want to first clean out all the data & then create a number of fake users, in this case 10.

```ruby
User.destroy_all

10.times do |i|
  User.create(
    email: "user#{i}@example.com",
    password: "password",
    password_confirmation: "password"
  )
end
```
---
##User has many Articles

Articles should belong to a User and each User should have many Articles.

*In your user model declare a user has many articles and ensure if a user is deleted so will all the articles associated with them*
```ruby
has_many :articles, dependent: :destroy
```

*In your article model declare a article belongs to a user*
```ruby
belongs_to :user
```
---

##Add a Foreign Key to Articles

Articles should reference the Users table with a foreign key. 

*In order for this relationship to create a new migration*
```bash
rails g migration addUserIdToArticles
```
*then add a `user_id` column to our articles table*
```ruby
add_column :articles, :user_id, :integer
```
*& finally migrate the changes*
```bash
rake db:migrate
```

---

##Test the relationship

Users should be able to access their associated articles.

*In rails console, query a user instance for its articles*
```bash
user = User.first
user.articles
=> #<ActiveRecord::Associations::CollectionProxy []>
```
If the last line does not throw an error, but rather returns an empty array then it is working properly.

*Add an article to this user instance*

```bash
user.articles << Article.create(
  title: "Doctors Recommend Getting 8 Centuries of Cryosleep",
  body: "Doctors at Stanford University issued a..."
)
```
Check `user.articles` again to make sure the article was associated with user correctly. If it was, woohoo!

---

##Nesting the routes

Articles should be nested under users RESTfully.

(Note: you should never have nesting more than two levels deep)

*Nest your articles routes inside your users routes*
```ruby
resources :users, only: :index do
  resources :articles
end
```
*Check how your routes have been modified*
```bash
rake routes
```

---

##Link to Each Article Index

Users' emails should each link to a respective `article#index` page.

*On your `user#index` make the users' names link to their repective `article#index`*

```html
<ul>
  <% @users.each do |user| %>
    <li><%= link_to user.email, user_articles_path(user) %></li>
  <% end %>
</ul>
```
*Delete all the content in your `article/index.html.erb`*

For the moment you shouldn't see any articles displayed on the page.

**Next:** Pass the user's corresponding articles to each `articles#index` page

---

##New Article Index Page

Article Index page displays only those associated with a specific user

*Modify your `article#index` to pass the view not all the articles, but only those of the user we're nested under*
```ruby
@user = User.find(params[:user_id])
@articles = @user.articles
```
Accessing the params to pull out the user's id will determine which articles we surface.

*Display these articles in your associated view, `articles/index.html.erb`*
```html
<ul>
  <% @articles.each do |article| %>
    <h3><%= article.title %></h3>
    <p><%= article.body %></p>
  <% end %>
</ul>
```
---

##Favorite Articles

Users can favorite Articles


---

##To Cover

- User index page
- Nest articles under users
- User has many articles to create
- User can favorite an article


* user has many articles [repo](https://github.com/sf-wdi-14/rails-review)
* favoriting [ref](https://github.com/OhligerJ/activity_app/blob/master/app/models/activity.rb)
* dependent destroy
* link to [querying methods](http://guides.rubyonrails.org/association_basics.html#the-has-many-through-association#scopes-for-has-many)

---

##Ref

* [Nested resources](https://github.com/wdi-sf-fall/notes/tree/master/week_07_rails_continued/day_03_nested_resources/dawn_nested_resources)
* [Nested resources 2](https://github.com/Curriculum-Resources/SF-14-Class-6-7-Notes/blob/master/nested_resources/fields_for_and_nested_resources.md)
* [Associations](https://github.com/wdi-sf-fall/notes/tree/master/week_07_rails_continued/day_02_associations_and_auth/dawn_associations)
* [Favorites]()


