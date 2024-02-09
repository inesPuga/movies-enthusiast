# movies-enthusiast

## Setup project

1. Run the services in docker-compose.yml. Here's how to create a PostgreSQL container for the database.

2. Create an .env file in the root of the project.

Replace the words "changeMe" with your credentials.
Copy this content into that file:

```
POSTGRES_USER=changeMe
POSTGRES_PASSWORD=changeMe
POSTGRES_DB=changeMe
POLLING_FREQ=60
ENTITIES_PER_ITERATION=50
```

3. Then go to backend/src/main/resources/application.yml. Replace the words "changeMe" to your credentials.

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
Now, you can run the backend: backend/src/main/java/org/example/backend/ApiApplication.java.
<img width="722" alt="Screenshot 2024-02-09 at 00 30 59" src="https://github.com/inesPuga/movies-enthusiast/assets/95829292/0baabcd0-1c73-46a1-b47e-f899fd417e0a">

### Frontend
Go the frontend folder, then run the ```npm run start```
The frontend (Angular CLI) requires a minimum Node.js version of v18.13

## Product solution

1. Movies list
<img width="1800" alt="Screenshot 2024-02-09 at 07 50 00" src="https://github.com/inesPuga/movies-enthusiast/assets/95829292/f0195df4-f3cd-4f51-b8af-05b829bfaa28">


2. Order by revenue (Ascending or Descending)
<img width="1800" alt="Screenshot 2024-02-09 at 07 50 55" src="https://github.com/inesPuga/movies-enthusiast/assets/95829292/b2690470-38a6-473c-9785-2dec533f9644">


3. Search by movie name
<img width="1800" alt="Screenshot 2024-02-09 at 07 56 24" src="https://github.com/inesPuga/movies-enthusiast/assets/95829292/a12b080c-78e3-493d-b6f4-17d0ba2467aa">


4. Top 10 movies with highest revenue in 2002
<img width="1800" alt="Screenshot 2024-02-09 at 07 56 51" src="https://github.com/inesPuga/movies-enthusiast/assets/95829292/9520bb5f-1403-4970-9b79-c8a293e679eb">


5. Movie details
<img width="1800" alt="Screenshot 2024-02-09 at 08 04 06" src="https://github.com/inesPuga/movies-enthusiast/assets/95829292/ef0c30af-cb4c-4562-9281-b5191c2700ff">


## Solved problems

```
Error: Could not find or load main class org.example.backend.ApiApplication 
Caused by: java.lang.ClassNotFoundException: org.example.backend.ApiApplication
```

Go to the maven backend settings & click on install
