---
sidebar_position: 3
---

# CRUD Operations

CRUD refers to the four basic operations a software application should be able to perform – **Create**, **Read**, **Update**, and **Delete**. 

## CRUD Operations Overview
1. **Create**: Adding new records to the database.
2. **Read**: Retrieving existing records.
3. **Update**: Modifying the details of existing records.
4. **Delete**: Removing records from the database.

Recall in SQL, we have learned similar operations. Below is a handy table for all the CRUD operations you would need in the context of 272. 

| CRUD Operation    | SQL Clause | HTTP Verb   | Controller Action   | 
|-----------|-------------|------------|------------|
| **Create**    | INSERT       | POST  | create  | 
| **Read** | SELECT        | GET  |index/show/new/edit  | 
| **Update**    | UPDATE       | PATCH  | update  | 
| **Delete** | DELETE        | DELETE  | destroy  |
<br />

## CRUD in Ruby on Rails 

Rails provides a streamlined approach to performing CRUD operations through 
its Active Record ORM and scaffold generators. Below shows an example usage for each operation inside the model controller.

### **Create (C)** 
Handles the form submission, attempting to save a new Crime record to the database. 
```ruby
def create
  @crime = Crime.new(crime_params)
  if @crime.save
    flash[:notice] = "Successfully added #{@crime.name} to GCPD."
    redirect_to crimes_path
  else
    render :new
  end
end
```

### **Read (R)** 
Reading involves fetching records from the database. You can retrieve a single record, multiple records, or all records
```ruby
def index
  @active_crimes = Crime.where(active: true)
  @inactive_crimes = Crime.where(active: false)
end
```

### **Update (U)** 
Updating a record involves modifying its attributes and saving those changes:
```ruby
def update
  if @crime.update(crime_params)
    flash[:notice] = "Successfully updated the crime."
    redirect_to crimes_path
  else
    render :edit
  end
end
```

### **Delete (D)** 
Deleting a record removes it from the database:
```ruby
def destroy
  if @crime.destroy
    flash[:notice] = "Successfully removed the crime from the system."
    redirect_to crimes_path
  else
    flash[:alert] = "Failed to remove the crime."
    redirect_to crimes_path
  end
end
```