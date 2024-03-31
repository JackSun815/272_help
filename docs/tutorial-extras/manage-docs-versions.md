---
sidebar_position: 1
---

# Database Operations

### Create a new Rails server

```bash
rails new Probverb 
```

### Generate a new model

```bash
rails generate model Proverb english:string translation:string active:boolean 
```

### Run a rails server

```bash
rails server 
```

### Drop and migrate a database:

```bash
rails db:drop
rails db:migrate
```

### Alternate way to populate a databse:

```bash
rake db:contexts
```

### Generate a Controller:

```bash
  rails generate controller Probverb index, show, edit, new, create, update, destroy.
```

Note: you may not need to include all 7 controller actions for controller the you're generating.

### Test a model:

```bash
rails test test/models/probverb_test.rb
```

### Test all of your models:

```bash
rails test models
```

### Test a controller:

```bash
rails test test/controllers/probverbs_controller_test.rb
```

### Test all of your models:

```bash
rails test controllers
```