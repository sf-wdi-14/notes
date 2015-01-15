# ActiveJob
## and
# sidekiq

---

## What is ActiveJob?

* new Rails 4 API
* simple library for running background tasks
* abstracts many different gems

---

## Why use queueing?

* image processing
* reading third party APIs
* sending emails
* geolocation

---

## ActiveJob

It's an abstraction, like ActiveRecord, that allows you to use many different "background queue" gems.

Each one has strengths and weaknesses.

---

## ActiveJob

* Resque
* sidekiq
* DelayedJob

---

## Using sidekiq

The simple industry standard.

* very fast
* very efficient
* very easy to use

---

# Installing sidekiq

---

## Setting up: Install Redis

Run this from any directory:

```
brew install redis
redis-server
```

Redis is a super fast key/value storage, like a combination between a database and a hash. Sidekiq and many other high performance gems use it.

---

## Installing sidekiq

Add this to the Gemfile

```ruby
gem 'sidekiq'
```

Hint: don't forget `bundle install`!

---

## Configure Rails

Tell Rails that it needs to use sidekiq for ActiveJob.

```ruby
# config/application.rb
module SidekiqApp
  class Application < Rails::Application
    config.active_job.queue_adapter = :sidekiq
  end
end
```

# Using ActiveJob

---

## Generating a new job

Creating new jobs is as easy as using a generator.

```
rails generate job archive_article
```

Output:

```bash
invoke  test_unit
create    test/jobs/archive_article_job_test.rb
create  app/jobs/archive_article_job.rb
```

---

## Looking at the job

```ruby
class ArchiveArticleJob < ActiveJob::Base
  # queue_as sets the priority [:default, :low_priority, :urgent]
  queue_as :default

  # Action when job is called
  def perform(*args)
    # Do something later
  end
end
```

---

## Using the job

We want to send an email to the user when a new article is created.

Jobs are called with `perform_now` or `perform_later`:

```ruby
ArchiveArticleJob.perform_later @article
```

Where would we put this?

---

## Using the job

In the controller!

```ruby
# Create article
def create
  @article = Article.new(article_params)

  if @article.save
    ArchiveArticleJob.perform_later @article
    redirect_to @article
  else
    render :new
  end
end
```

---

## Reviewing

When our job is ready to go, it will run the code in `perform`.

```ruby
# Action when job is called
def perform(*args)
  # Do some stuff here, like send an email
end
```

---

## Queueing the job for later

What if we want to send all of our emails once per day at noon?

```ruby
ArchiveArticleJob.set(wait_until: Date.tomorrow.noon).perform_later @article
```

Or exactly a week from now?

```ruby
ArchiveArticleJob.set(wait: 1.week).perform_later @article
```

---

## Doing something useful

Let's automatically make our articles be "archived" 30 days after they were posted.

```ruby
def perform(*args)
  # Do something!
end
```

What could we put here?

---

## Creating an archive

```
rails generate migration AddArchivedToArticle archived:boolean
```

---

## Using the archive flag

Now we can change our job to use this new attribute.

Since we know what parameters we're passing, we can replace `*args`.

```ruby
# app/jobs/archive_article_job.rb

class ArchiveArticleJob < ActiveJob::Base
  queue_as :default

  def perform(article)
    article.update_attributes(archived: true)
  end
end
```

---

## Changing the job queueing

Change our line in the controller to run the job after 30 days.

```ruby
# app/controllers/article_controller.rb

...

if @article.save
  ArchiveArticleJob.set(wait: 30.days).perform_later @article
  redirect_to @article
else
...

```

---

## Testing it

What if we want to test that the job works?

We can temporarily use `perform_now` to verify that it works correctly.

```ruby
# app/controllers/article_controller.rb

...

if @article.save
  ArchiveArticleJob.perform_now @article
  # ArchiveArticleJob.set(wait: 30.days).perform_later @article
  redirect_to @article
else
...