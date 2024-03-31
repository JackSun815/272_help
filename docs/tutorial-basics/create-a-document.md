---
sidebar_position: 2
---

# MVC in Ruby on Rails

Ruby on Rails (Rails) is a web application framework that is built upon the MVC architecture, making it a prime example of MVC in action. Rails takes the concept of MVC and provides a structured environment where each component of the MVC framework has a specific convention and path within a Rails project. This section dives into how MVC manifests within the Rails ecosystem, emphasizing the framework's conventions that streamline web application development.

## Model in Rails
In Rails, models are Ruby classes that extend **ActiveRecord::Base**, linking them directly to the database table they are meant to represent. Models in Rails handle data, logic, and rules of the application. Thanks to Rails' ActiveRecord, models in Rails not only represent the structure and relationships of the data but also provide an interface to carry out CRUD (Create, Read, Update, Delete) operations directly on the database without needing to write SQL queries.

### Rails Model Key Points:
- **ActiveRecord Migrations**: Rails uses migrations to evolve your database schema over time in a version-controlled, reversible way.
- **Validations**: Models enforce data integrity and consistency through validations.
- **Associations**: Rails models use associations (like belongs_to, has_many) to define relationships between different data models.
<br />

## View in Rails
Views in Rails are essentially the HTML templates that get sent to the client's web browser. They are written in HTML, CSS, JavaScript, and an embedded Ruby (ERB) syntax that allows Ruby code to be included in web pages. Views in Rails do not contain any business logic; they merely present the data, which the controller provides, in the desired format.

### Rails Model Key Points:
- **ERB**: Embedded Ruby used within HTML to display dynamic content.
- **Layouts and Partials**: Reusable templates for a consistent application layout and DRY code.
- **Helpers**: Methods used to assist in rendering views, such as form builders or link generators.
<br />

## Controller in Rails
Controllers in Rails bridge the gap between models and views. They process incoming requests, manipulate data through models, and decide which view to render. Controllers in Rails are where the application's flow is defined, with different actions corresponding to CRUD operations and beyond.

### Rails Controller Key Points:
- **RESTful Resource Routing**: Rails encourages RESTful architecture in controller actions, typically mapping HTTP verbs to controller actions (e.g., GET to **#index**, POST to **#create**).
- **Strong Parameters**: A feature for preventing unwanted parameters data from entering your models as part of mass-assignment.
- **Filters**: Methods that run before, after, or "around" controller actions, such as **before_action**, to dry up the code and perform tasks like authentication.
<br />

## How They Work Together in Rails
1. **Request Cycle**: A browser request hits a Rails application's routes.
2. **Routing**: Rails routes the request to the appropriate controller action.
3. **Controller**: The controller interacts with the model to retrieve, save, or validate data.
4. **Model**: The model interacts with the database and returns data to the controller.
5. **Controller to View**: Once the controller has the necessary data, it renders the appropriate view.
6. **Response**: The view is sent back to the client, completing the request-response cycle.