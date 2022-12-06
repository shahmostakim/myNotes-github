My first React app built while learning React JS framework following online tutorial

This simple note app uses db.json for storing data and a JSON server is needed to be installed and running to work as a dummy REST API. 

The React app makes request to specific routes in order to operate. A local JSON server listens for incoming requests and serves to the react app the specific data fetched from 'db.json' file. 

How to install and run this app on local machine: 

- install npm if not exists in your system 
- Download source codes to your local machine 
- cd to project folder from terminal 
- run 'npm start' 
- project should be running at 'localhost:3000' 

project is not ready yet. Need to install JSON server on your system. 
From project folder open terminal. 
- run "npm install -g json-server" 
- run "json-server --watch db.json", this will connect JSON server with db.json file 
if JSON server wants to run at port 3000 which may conflict with react, following command instead: 
- run "json-server --watch db.json --port 3004" mention any port number of your wish. 
