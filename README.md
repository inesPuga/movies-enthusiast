# movies-enthusiast

## Setup project

1. Run the services in the docker-compose.yml.
Here you're creating a PostgreSQL container for the database.

2. Create a file .env in the root of the project.

Replace the words "changeMe" to your credentials.
Copy this content to that file:

```
POSTGRES_USER=changeMe
POSTGRES_PASSWORD=changeMe
POSTGRES_DB=changeMe
POLLING_FREQ=60
ENTITIES_PER_ITERATION=50
```

3. Then go to the backend/src/main/resources/application.yml. Replace the words "changeMe" to your credentials.

```
spring:
  datasource:
    driverClassName: org.postgresql.Driver
    url: jdbc:postgresql://localhost:5432/movies-enthusiast-database
    username: changeMe
    password: changeMe
  jpa:
    hibernate:
      ddl-auto: create-drop
    defer-datasource-initialization: true
  sql:
    init:
      mode: always
```

### Backend
Now, you can run backend: backend/src/main/java/org/example/backend/ApiApplication.java.
<img width="722" alt="Screenshot 2024-02-09 at 00 30 59" src="https://github.com/inesPuga/movies-enthusiast/assets/95829292/0baabcd0-1c73-46a1-b47e-f899fd417e0a">

### Frontend
Go the frontend folder, then run the ```npm run start```
The frontend (Angular CLI) requires a minimum Node.js version of v18.13

## Solved problems

```
Error: Could not find or load main class org.example.backend.ApiApplication 
Caused by: java.lang.ClassNotFoundException: org.example.backend.ApiApplication
```

Go to the maven backend settings & click on install
