---
sidebar_position: 5
---

# Relations, Scopes and Validations

## Relations 

Rails relations leverage Active Record associations to map relationships between different models. Recall in 67-250 and 67-262 where you learned about Entity relationship diagrams (ERD) and the Crow's foot notation. One of the most important terms to know when using crow's foot notation is cardinality. Cardinality acts as a parameter for the relationship between entities. For one entity, there is a minimum and maximum number that helps define its relationship with another entity.

Here's how you can define the common types in rails:

- **belongs_to**: Sets up a one-to-one connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model. 

- **has_one**: Indicates that one other model has a reference to this model. It's used to establish a one-to-one relationship where the foreign key is held on the other table.

- **has_many**: Describes a one-to-many connection with another model. This is used when a single instance of a model has zero or more instances of another model. 

- **has_many :through** and **has_one :through**: These associations set up a many-to-many or one-to-one connection with another model through a third model. 

For example, the entity `officers` belongs to one and only one `units`, while `units` can have zero or more `officers`. To set up the relation in rails:

**Officer Model (app/models/officer.rb)**:
```python
class Officer < ApplicationRecord
  belongs_to :unit
end
```
**Unit Model (app/models/unit.rb)**:
```python
class Unit < ApplicationRecord
  has_many :officers
end
end
```

## Scopes 

Scopes allow defining common queries at the model level to promote reuse and readability. A use case for scopes is often for filtering by status, date, date ranges, ordering, groupings, and more. ActiveRecord already makes it quite easy to return rich data from your database. Combining those superpowers with scopes allow you to define more memorable queries that you and your team can harness through your Ruby on Rails application.

For example, you have an entity `pets` with the following fields: 
```
name, pet_id, owner_id, female, date_of_birth, active
```

Your model might look like this:

_The following example is taken from PATS_

```js
class Pet < ApplicationRecord
  # Orders pets by their name in ascending order
  scope :alphabetical, -> { order(:name) }

  # Gets all active pets
  scope :active, -> { where(active: true) }

  # Gets all inactive pets
  scope :inactive, -> { where(active: false) } # Changed to false for clarity

  # Gets all female pets
  scope :females, -> { where(female: true) }

  # Gets all male pets
  scope :males, -> { where(female: false) }
end
```

### scopes to sql 

When you define scopes in a Rails model, under the hood, Active Record translates these scopes into SQL queries when you call them. However, this level of details is abstracted away so that it allows you to focus on the logic of your program. It's still important to understand what goes on behind the scenes and how 262 connects to what we are doing in this case. Here's how the scopes from the Pet model example correspond to SQL:

```sql
-- Orders pets by their name in ascending order --
SELECT "pets".* FROM "pets" ORDER BY "pets"."name" ASC

-- Get all active pets --
SELECT "pets".* FROM "pets" WHERE "pets"."active" = TRUE

-- Get all inactive pets --
SELECT "pets".* FROM "pets" WHERE "pets"."active" = FALSE

-- Get all female pets --
SELECT "pets".* FROM "pets" WHERE "pets"."female" = TRUE

-- Get all male pets --
SELECT "pets".* FROM "pets" WHERE "pets"."female" = FALSE
```

## Validations 

Validations ensure your application's data integrity by enforcing conditions that your models need to meet. Common validations include presence, uniqueness, and format validations.

- **Presence Validation**: Ensures that a specific field is not empty.
- **Uniqueness Validation**: Ensures that the value in a particular field is unique across the database.
- **Numericality Validation**: Ensures that a field contains only numbers and meets certain conditions like being greater than or equal to a specific value.
- **Format Validation**: Uses a regular expression to ensure the data entered into a field meets a specific format, such as an email address format validation.

For example, you may add the following validations from the example above:

```js
# First, make sure a name exists
validates :name, presence: true

# Second, make sure the animal is one of the types PATS treats
validate :animal_type_treated_by_PATS

# Third, make sure the owner_id is in the PATS system 
validate :owner_is_active_in_PATS_system

# Use private methods to execute the custom validations
# -----------------------------
  private
  def animal_type_treated_by_PATS
    is_active_in_system(:animal)
  end
  
  def owner_is_active_in_PATS_system
    is_active_in_system(:owner)
  end
```