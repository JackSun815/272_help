---
sidebar_position: 4
---

# Ruby Gems

:::tip

Programming is about **abstraction**, creating layers that hide complexity and allow developers to focus on logic rather than low-level details. Gems in Ruby serve as a perfect example of this principle, encapsulating functionality into reusable packages. 
:::

Gems in Ruby are packages of code that extend or modify the functionality of Ruby applications. In Ruby on Rails, they are used to add features, such as user authentication, data validation, and payment processing, without having to write these features from scratch. They save a lot of time and efforts in developing your application, and we use many gems regularly in 272. 

To use a gem in Rails, you add it to your application's Gemfile specifying the gem's name (and optionally, version), then run `bundle install` to install it. After installation, you can use the functionality the gem provides in your application. 

For example, simply add the following line in your Gemfile to use rails version 7.0.4:
```python
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '7.0.4'
```

## Commonly Used Ruby Gems in 272 

We will go over some of the most commonly used gems in 272:

### sqlite3 

```python
# Use sqlite3 as the database for Active Record
gem 'sqlite3', '~> 1.4'
```

The sqlite3 gem integrates the SQLite database with Ruby applications, particularly with Ruby on Rails for Active Record, which is Rails' Object-Relational Mapping (ORM) layer. This gem allows Rails applications to perform database operations on SQLite, a lightweight, file-based database ideal for development and testing due to its simplicity and minimal setup requirements. Using sqlite3 ensures seamless interactions and data persistence within Rails applications without the overhead of more complex database systems.

### validates_timeliness

```python
gem 'validates_timeliness'
```

The validates_timeliness gem is designed to facilitate date and time validation in ActiveRecord models. It extends ActiveRecord's built-in validation methods, offering a more flexible way to validate dates and times. By using this gem, you can easily ensure that the date and time values in your applications are within expected ranges or formats, enhancing data integrity and preventing common errors related to incorrect date and time inputs.For example, you might use `validates_date :birthday, before: lambda { 18.years.ago }` to validate that a user's birthday indicates they are at least 18 years old. 

### CanCanCan
```python
gem 'cancancan'
```
The CanCan gem in Rails is a simple authorization solution that allows you to restrict what resources a given user is allowed to access. It provides a clean and simple way to define abilities for different user roles within your application. With CanCan, you declare "abilities" for your models, specifying what actions users can perform on given resources. 

To use CanCan in Rails, you primarily work with an Ability class where you define user permissions. For example, if you want to define that only admins can manage all resources, and users can read them, your ability.rb might look like this:

```python
class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user
    
    if user.admin?
      can :manage, :all
    else
      can :read, :all
    end
  end
end
```

### PG Search 
```python
gem 'pg_search'
```

PG Search is a gem that integrates with ActiveRecord to enable full-text search within a Rails application using PostgreSQL's native search capabilities. You can include PgSearch in your model and define the search scope. For instance:
```python
class Article < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :search_by_title, against: :title
end
```

Now, you can use this scope in your controllers:

```python
@articles = Article.search_by_title("Rails")
```












