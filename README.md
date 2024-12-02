#WAQF TASK TRACKER - Backend
This is the backend service for the Waqf Task Tracker application, which allows property managers to track and manage properties and tasks efficiently.

#Features
Add, update,  and retrieve property and task data.
RESTful API for managing properties and tasks.
Integration with MongoDB for database storage.
Error handling for all API routes.
Built-in validation using Mongoose.

#Tech Stack
Language: JavaScript (Node.js)
Framework: Express.js
Database: MongoDB
ORM(Object Relational Mapping): Mongoose //connect code with database
Tools: Nodemon, Postman

#Setup Instructions
step1-open cmd prompt and enter "git clone "yourRepositoryURL" "
step2- enter  "cd "repositoryName" "
step3-npm install
step4-code . (it will navigate you to VS code)
#Base URL: http://localhost:5000/api
#First i created the models folder in which propertymodel/Schema and tasksmodels are connected to mongodb using mongoose
#then created routers for both applied logic as well and at the end imported them in server.js
