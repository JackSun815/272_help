---
sidebar_position: 1
---

# Database Operations

### Basic rails commands:

**These are the most basic commands necessary
to get started working in Rails.**

This command generates a new Rails application.
```python
rails new Probverb 
```

This line generates a new model in Rails.

```python
rails generate model Proverb english:string translation:string active:boolean 
```

This code will run a new Rails server.

```python
rails server 
```

These two lines can help you update a database
by dropping and then migrating it.

```pyhon
rails db:drop
rails db:migrate
```

*Alternatively, after making changes to a database,
you can repopulate it with this command.

```python
rake db:contexts
```

This line will help you generate a new controller in Rails.

```python
  rails generate controller Probverb index, show, edit, new, create, update, destroy.
```

*Note: you may not need to include all 7 controller actions for controller the you're generating.

### Running tests:

**The below commands will help you test models and controllers
after you've created or modified them.**

This line will test a specific model in your Rails application.
```python
rails test test/models/probverb_test.rb
```

This command tests all of the models in your Rails application.
```python
rails test models
```

This line will test a specific controller in your Rails application.

```python
rails test test/controllers/probverbs_controller_test.rb
```

This command will test all of the models in your Rails application.

```python
rails test controllers
```