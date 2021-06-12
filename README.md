# ESA-Assignement4
Microservice SMS API

Download the code into a zip file and then follow the following commands to run the code

To Run the code

1. Change the MongoDb URL in the config/db.js file

2. Initialize package.json file and install dependencies
'''
Run the following commands 
npm init
npm install mongoose express body-parser
npm npm install dotenv
npm install --save express-rate-limit
npm install memory-cache --save

3. Running the server 
 
 Run the server by going to the folder where the file is saved and using node node server.js 
 
 Output when code runs successfully
 
 Server running at http://localhost:3000
 Database connection established!
 
 Example test case
 
 from : "1234567890"
 to : "123456"
 text : "hello"
 
 output : "message": "Forbidden.... Authorization failed."
