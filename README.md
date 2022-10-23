# API-REST-JWT
API REST CRUD using JWT


## Description

REST CRUD API products using JWT: In this app we can register users, login with token, create, delete, update and delete products, and each action can be done using different roles like admin, moderator and user. 

### Instructions

Steps to follow to be able to test the project on your pc.

1. Open shell

```
Shell in Visual Studio Code
```

2. Clone project

```
Set "git clone https://github.com/GonzaloDeCastro/API-REST-JWT.git" in the shell
```

3. npm install

```
We install the necessary packages to be able to run the system with "npm install"
```

4. npm start

```
We start the server with the command "npm run dev"
```

5. Type in your browser 
```
"http://localhost:4000"
```

6. Connect Database
 
```
To connect your database, you need to use MongoDB, preferably MongoDB Atlas. You must to create an account and connect your database in the file "database.js" line 6
```

### Postman Collections Link 
```
https://www.getpostman.com/collections/c0a8c476df400af7e286
```
- Users

```
POST: http://localhost:4000/api/users/signup
```

- Auth

```
POST: http://localhost:4000/api/auth/signin
```

- Products

```
GET: http://localhost:4000/api/products
GET: http://localhost:4000/api/products/:productId
POST: http://localhost:4000/api/products
PUT: http://localhost:4000/api/products/:productId
DELETE: http://localhost:4000/api/products/:productId
```

### Work by

```
- De Castro Gonzalo
```
