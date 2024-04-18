---
sidebar_position: 3
---

# Testing

Testing is an integral part of the Rails framework, designed to ensure that your application performs correctly under specified conditions and continues to do so as changes are made. 


## Factories

Below is a list of important components in a model:

### Basic Setup
```jsx
class Officer < ApplicationRecord
```

Inheritance from **ApplicationRecord**: In Rails, models inherit from **ApplicationRecord** which in turn inherits from **ActiveRecord::Base**, linking the model to Rails' ORM.


### Association

Defining Relationships:
- **belongs_to** indicates a one-to-one connection with another model, which in this case is unit.
- **has_many** signifies a one-to-many relationship with other models like assignments and investigation_notes.
- **has_many :through** defines a many-to-many relationship through another model.

In the example of our officer model, we may have the following associations:
```jsx
belongs_to :unit
has_many :assignments
has_many :investigations, through: :assignments
has_many :investigation_notes
```

### Validations 

Validations are crucial to ensure that only valid data is saved to the database.
- **validates_presence_of** ensures specific fields are not empty.
- **validates_format_of** checks the data against a specific format using regular expressions.
- **validates_uniqueness_of** ensures that a value is unique across a table.
Custom validations can also be added, as seen with the validate lambda for is_active_in_system.

```jsx
validates_presence_of :first_name, :last_name, :unit_id, :role
validates_uniqueness_of :ssn
```

#### Difference between Validate and Validates 

The **validates** method is used to apply built-in validation helpers to one or more model attributes. It allows you to specify various constraints on data such as presence, length, format, and uniqueness among others. This method is typically used for quick and straightforward validations that involve no custom logic.

The **validate** method is used when you need to implement custom validation methods. This is useful when the built-in validation helpers do not meet your requirements, and you need more control over the validation process. It allows you to write a method that defines specific conditions that must be met.


### Scopes

Scopes allow you to define reusable query clauses that can be applied to models. They're especially useful for encapsulating query logic, making your code easier to read and maintain. Scopes are defined within the model file and can return ActiveRecord relations, which means they can be chained with other scopes or query methods.

```jsx
scope :alphabetical, -> { order('last_name, first_name') }
scope :for_unit, -> (unit_id){ where(unit_id: unit_id) }
```

### Callbacks

Callbacks are methods that get triggered automatically at certain points in the lifecycle of an Active Record object. These lifecycle moments can include creation, updating, saving, destroying, validation, and more. 

To define a callback, you specify the callback method within the model. Here is an example using some of the callbacks:

```jsx
before_save :normalize_name, :check_active_status
after_create :send_welcome_email

private
  def normalize_name
    self.name = name.downcase.titleize
  end

  def check_active_status
    self.active = true unless active?
  end

  def send_welcome_email
    EmailService.send_welcome_email(self)
  end
end
```

