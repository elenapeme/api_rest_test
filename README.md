
#### SUMMARY

This is a REST API that connects to the INSURANCE API REST. I tried to make it as modular as I could. There are three main folders: services, controllers, and routes. I separated those files in order to separate the business logic from the consumption of the API itself. In services, there are the files that extract data from the INSURANCE API REST while in controllers, there are the files that manipulate that data to, finally, send it through the routes. 

#### INSTALLATION

After cloning the repository, you should write the following command:
```
npm install
```

#### USING THE API
To be able to use the APi, you should write the following command in the root folder:
```
nodemon app.js
```

#### ENDPOINTS
The API endpoints:

To get the token:
```
POST /API/LOGIN
```
- For that, you will need a user and a password. The user is the name of the client and the password is "password" + name of the client.

Getting the clients List:
```
GET /API/CLIENTS
```

Getting a specific client information:
```
GET /API/CLIENTS/:ID
```

Getting the policies of a specific client:
```
GET /API/CLIENTS/:ID/POLICIES
```

Getting the policies list:
```
GET /API/POLICIES/
```

Getting the policies of a specific client:
```
GET /API/POLICIES/:ID
```


#### TO DO
Sadly, for this specific amount of time, there are points that needs to still be finished:

- JWT role based authentication
- End to end test
- More unit tests

Thanks for your patience and attention!
