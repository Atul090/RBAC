Node Role Based Access Control

User Routes: 
    api/users/admin
    api/users/manager
    api/users/user

Auth Routes:
    api/auth/regiter
    api/auth/login


Roles: 
    Admin = > User Routes => all Routes
    Manager = >  User Routes => manager and user route
    User = > User Routes => user route

Structure:
app.js
config
riutes
contriller
middleware
models

database - mongodb


Added middleware for auth and role based middlewares


Add a UI in react
