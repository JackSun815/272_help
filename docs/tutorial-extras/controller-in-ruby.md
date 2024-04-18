---
sidebar_position: 3
---

# Testing

Testing is an integral part of the Rails framework, designed to ensure that your application performs correctly under specified conditions and continues to do so as changes are made. 


## Factories

Factories are used in Rails to generate test data dynamically. They are particularly useful in maintaining clean test code and avoiding duplication. Factories can be defined using gems like FactoryBot, which allow you to set up and use objects in tests efficiently.

### FactoryBot Setup

Factories allow you to define a blueprint for how objects should be created. You can define default values and ensure that your test objects are built with all necessary attributes filled in. For example, the following sets the default values for an officer:

```jsx
FactoryBot.define do
  factory :officer do
    first_name { "John" }
    last_name  { "Doe" }
    rank       { "Detective" }
    active     { true }
    ssn        { "123-45-6789" }
    unit
  end
end
```
### FactoryBot Usage
```jsx
test "should create officer" do
  officer = FactoryBot.create(:officer)
  assert officer.valid?
end
```


## Sets

In testing, particularly in Rails, the term "sets" refers to creating groups or collections of objects that can be used to test various functionalities in bulk or under different conditions.

Using sets can help simulate more complex scenarios where interactions between multiple objects need to be tested. Here’s how you might use FactoryBot to create a set of officers in different units or with varying attributes to test system behavior under diverse conditions:

```jsx
FactoryBot.create_list(:officer, 5, unit: some_unit)
FactoryBot.create_list(:officer, 3, rank: "Captain", active: false)
```

## Contexts

 In many testing frameworks, especially in Rails with FactoryBot, you can define contexts that group these sets together to setup scenarios. You can include these contexts in your tests to set up pre-defined scenarios, allowing you to test how different parts of your application interact under varied conditions.


```jsx
module Contexts
  module Officers
    def setup_officers_context
      @jblake = FactoryBot.create(:officer, unit: @major_crimes)
      @jgordon = FactoryBot.create(:officer, first_name: "Jim", last_name: "Gordon", rank: "Commissioner", username: "jgordon", unit: @headquarters)
      # More officers...
    end
  end
end
```
