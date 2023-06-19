# dizzy-vase-3091  A Beauty Booking System

> Project Code : dizzy-vase-3091<br/>
> frontend Deployed link :  https://glambookingsys.netlify.app/ <br/>
> backend deployed link :  https://dull-teal-pelican-vest.cyclic.app/  <br/>

Dizzy Vase website is an online platform designed to connect beauty professionals with clients looking to book beauty-related sessions. The website offers a user-friendly interface that allows clients to search for services and book appointments with beauty professionals in their area.
Upon visiting the website, users can create an account and browse through a wide range of beauty services offered by professionals, such as haircuts, facials, manicures, pedicures, makeup application, and more. Users can then select their preferred service, date, time, and location.
Beauty professionals can also create an account on the website and set up their availability by opening slots. They can specify the services they offer, their rates, and their preferred work schedule. They can then receive booking requests from clients and confirm or decline them based on their availability.
Overall, a beauty booking system website provides a convenient and efficient way for clients to find and book beauty services while also helping beauty professionals manage their appointments and grow their businesses.


## Features

 - Authentication: The project includes JWT-based authentication to secure user data.
 - Authorization: The project includes role-based authorization to restrict access to certain routes or functionality.
 - Cross-platform compatibility: The project is designed to be compatible across multiple platforms and devices.

 - Hashing: User passwords are securely hashed to protect against unauthorized access.
 - dotenv: The project uses dotenv to manage environment variables and sensitive configuration data.
 - Relationship: The project includes database schema relationships between collections to support complex data structures.
 - Aggregation: The project uses MongoDB's aggregation framework to perform advanced queries and data manipulations.
 - Redis: To check the token is blacklisted or not.
 
 ## TechStack
 
 ### Client
 - HTML,CSS,JavaScript,Bootstrap,jQuery
 
 ### Sever 
 - Node.js, Express,
 
 ### Database
 - MongoDB,LocalStorage,Redis

### Admin Route
    -Register New Admin (method:POST) "admin/register"
    -Login Admin (method:POST)  "admin/login"
    -Admin Refresh Access Token (method:POST) "/refresh-token";
    -Register New Salon (method:POST) "admin/register-salon";
    -Get All Salons (method:POST) "admin/salons";
    -Update Salon Details (method:POST) "/update-details";
    
### User Authentication
    - Get Users List(Method: POST): /login/
   
 ### User Route
    - Get Users List(Method: POST): /register/
    - Get Users List(Method: GET): /refresh-token/
    - Get Users List(Method: POST): /getotp/
    - Get Users List(Method: POST): /verifyotp/
    - Get Users List(Method: POST): /resetpassword/
    - Get Users List(Method: GET): /getsalon/
  
  
  
  ## Run Locally
 ### Clone the project
     -https://github.com/8309h/dizzy-vase-3091 

### Go to the project directory
    - cd dizzy-vase-3091
    
### Install dependencies

    - npm install

### Start the server
    - npm run server
    
## Environment Variables
 To run this project, you will need to add the following environment variables to your .env file

      -PORT = 4000
      -MONGO_URL = MongoDb Database
      -SENDGRID_KEY =To send mail while forget password and to receive mail after order confrom.
      -JWT_ACCESS_TOKEN_SECRET_KEY =JWT tokens
      -JWT_REFRESH_TOKEN_SECRET_KEY = Refresh token
      -GOOGLE_CLIENT_ID = For Login with Google 
      -GOOGLE_CLIENT_SECRET = For Login with Google 


## Contributors
-[Harshal Wagh](https://github.com/8309h) <br/>
-[Raghavendra Jingade](https://github.com/JRaghu842) <br/>
-[Pranay Mishra](https://github.com/THEPRANAYMISHRA) <br/>
-[Binod Okheda](https://github.com/BinodOkheda) 


