# movies-enthusiast

## Setup project

First create a file .env in the root of the project
Copy this content to that file:

```
POSTGRES_USER=changeMe
POSTGRES_PASSWORD=changeMe
POSTGRES_DB=changeMe
POLLING_FREQ=60
ENTITIES_PER_ITERATION=50
```

## Solved problems

```
Error: Could not find or load main class org.example.backend.ApiApplication 
Caused by: java.lang.ClassNotFoundException: org.example.backend.ApiApplication
```

Go to the maven backend settings & click on install