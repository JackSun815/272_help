---
sidebar_position: 3
---

# Views in Ruby

Views in Ruby on Rails are typically built using HTML and embedded Ruby (ERB) code. They are responsible for displaying the data passed by the controllers to the users. Views are located in the app/views folder, and are organized based on the controller they are associated with.

### Example of a simple view in Ruby.

Here is how you might display a list of officers in the officers/index.html.erb file:

```jsx
<h1>Officers List</h1>
<ul>
  <% @officers.each do |officer| %>
    <li><%= officer.full_name %> - <%= officer.unit.name %></li>
  <% end %>
</ul>
```

This view uses ERB to iterate over an @officers instance variable, which is typically set in the corresponding controller, and displays each officer's name and unit.

## Introduction to Partials.

Partials are small, reusable code snippets that can be included in other views. They help reduce duplication and keep views organized. Partials are prefixed with an underscore (_) to differentiate them from regular views.

### Example of a partial in Ruby.


```jsx
# app/views/shared/_navbar.html.erb
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/officers">Officers</a></li>
    <li><a href="/units">Units</a></li>
  </ul>
</nav>
```

### Using a partial in a view.

To use a partial, you use the render method within a view:

```jsx
<%= render 'shared/navbar' %>
```

This line will include the content of the _navbar.html.erb partial into the view where it's called.

## Relationships between views and partials.

Partials and views are closely related. While views can function independently, partials are meant to be embedded within views. This relationship helps in managing complex user interfaces by breaking them down into manageable and reusable components.

### Benefits of using partials.

<ol>
  <li>DRY Principle: Don't Repeat Yourself. Partials help avoid code duplication.</li>
  <li>Ease of Maintenance: Updating a single partial updates all instances where the partial is used.</li>
  <li>Enhanced Readability: Smaller, specific files are easier to read and understand than one large view file.</li>
</ol>

## Best Practices

When using views and partials, it’s important to keep them focused on presentation. Heavy logic should be placed in helpers or controllers, not directly in the view or partial, to maintain clean code and separation of concerns.

```jsx
# Good example: Using a helper method to format time
<%= time_tag(officer.created_at, format: :short) %>

# Bad example: Complex logic in view
<% if officer.created_at > Time.now - 1.day %>
  <span>New!</span>
<% end %>
```

In summary, views generate the pages that users interact with, while partials allow you to reuse template segments across different views. Understanding how to effectively use these tools will significantly improve the organization and maintenance of your Rails applications.
