# User Authentication

## Role based user authentication

Building role based user authentication is very important and required thing in Development. With the Express.js, building role based authentication in MERN applications is quite easy.
Simple application built in MERN stack, with role based authentication. There are simply two types of user roles are applied - normal user and admin.

#### Step to build this application:-
1. Creating new directory
2. Creating related folders for Frontend and Backend
3. Initialise react application in frontend - npx create-react-app .
4. Initialise backend setup with npm init command
5. Basic express setup - index.js file with initial setup code
6. Defining schema for user - username, password and role - Schema and model libraries of mongoose
7. Creating routes and apis for user login - express router
8. MongoDB Atlas for Database - creating project and cluster
9. Using mongoose to setup connection between Mongo Atlas and express app - using mongo connection string
10. User interface for the apis - 
    a. Login component for Login and send user data - /api/user/login - POST request
    b. Dashboard component to show content based on user's role - /api/user/:id - GET request
11. Testing all the functionalities
12. Push code to Github
13. Adding vercel.json file in backend to deploy it on vercel
14. Deployed backend on vercel with envrironment variable - mongo uri
15. Using deployed backend url and updating it in frontend with localhost url.
16. Again testing everything, fixing all the issues and pushing code to github.
17. Finally deployed frontend to vercel, environment variable - GENERATE_SOURCEMAP:false.
    
….. done

#### Steps to run application Locally
1. git clone https://github.com/rekha0suthar/user-auth.git
2. cd user-auth
3. cd frontend - npm install - npm start
4. cd backend - npm install - npm run dev

Deployed link: https://user-auth-two-orpin.vercel.app/
