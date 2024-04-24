---
sidebar_position: 5
---

# APIs

An API is a set of protocols that enable different software components to communicate 
and transfer data

### Why use APIs in app development?

• Access to diverse information sources; more interesting
and creative apps

• Handle storage remotely, saving space on the device

• Updates to the API reflected in the app, reducing the
need to update the actual app (scalability)

• Allows access to IoT devices

• Improve security/governance (e.g., SSO)

• “The value of a network increases exponentially with its
size.”

• Documenting your API and opening up your services to other developers 
and/or partners increases your exposure to the broader market and 
potentially increases revenues

• Allows you to create more dynamic apps and interfaces
for your own apps

• Can reduce costs by reducing repetition, streamlining
services


### API endpoints

--An API endpoint is a specific point of interaction within an API through which certain actions are performed. It acts as a bridge between the client and the server, facilitating communication and data exchange. It is important to generate these endpoints for the following reasons:

• **Structure and Organization**: Endpoints define specific operations (e.g., retrieve, create, update, delete), organizing API functionalities clearly.

• **Scalability**: With defined endpoints, APIs can be more easily scaled and optimized as demand grows.

• **Security**: Endpoints enable finer control over data access, enhancing security where sensitive data is handled.

• **Integration and Flexibility**: Specific endpoints facilitate flexible interactions between different systems, allowing them to interact with precise parts of the API.

• **Maintenance and Versioning**: Clear endpoints simplify API updates and maintenance, facilitating version control without disrupting existing users.

### Generating the Endpoints

Creating an API endpoint in a Ruby on Rails application involves several components such as controllers, routes, serializers, and the format of the JSON output. Below, We’ll explain how these components fit into the process of generating a fully functional API endpoint.

#### Routes

Routes specific URL patterns are mapped to specific controller actions. Routes are defined in the config/routes.rb file.

```python
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :crimes
    end
  end
end
```

In this example, the resources :crimes line automatically creates routes for typical CRUD (Create, Read, Update, Delete) operations for crime records. It handles standard API operations such as GET, POST, PUT, and DELETE mapped to specific actions in the CrimesController.

#### Controllers

Accessing a route invokes the corresponding controller action.

```python
module Api
  module V1
    class CrimesController < ApplicationController
      def index
        crimes = Crime.all
        render json: CrimeSerializer.new(crimes).serialized_json
      end

      def show
        crime = Crime.find(params[:id])
        render json: CrimeSerializer.new(crime).serialized_json
      end

      def create
        crime = Crime.new(crime_params)
        if crime.save
          render json: CrimeSerializer.new(crime).serialized_json, status: :created
        else
          render json: crime.errors, status: :unprocessable_entity
        end
      end

      private

      def crime_params
        params.require(:crime).permit(:description, :date, :status)
      end
    end
  end
end
```

In this controller, actions like index, show, and create handle different HTTP requests. They use a CrimeSerializer to format the output correctly.

#### Serializers

Serializers format Ruby objects into JSON for API responses. They help in defining exactly which attributes of an object should be serialized. Serializers are especially using for minimizing the number of calls required to obtain certain information from the system.

```python
class CrimeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :description, :date, :status
end
```

This CrimeSerializer includes the FastJsonapi library to serialize crime objects, specifying that the id, description, date, and status attributes should be included in the JSON output.

#### JSON Output

The JSON output is what the API returns in response to requests. It's formatted by the serializer and is the final output that client applications will consume.

For a GET request to the index action in the CrimesController, the output might look like this:

```python
{
  "data": [
    {
      "id": "1",
      "type": "crime",
      "attributes": {
        "description": "Theft",
        "date": "2024-04-01",
        "status": "solved"
      }
    },
    {
      "id": "2",
      "type": "crime",
      "attributes": {
        "description": "Assault",
        "date": "2024-04-02",
        "status": "pending"
      }
    }
  ]
}
```

This JSON is constructed by the serializer in response to a request handled by the controller, routed from the endpoint defined in routes.rb.

