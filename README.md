# Semantix-Tech-ChallengeJR

## About

This project is an API Gateway alongside an automation. Both consume mock data about users from a Mockapi API, treat them accordingly to the formatted model requested 
and returns said data to whoever is using the service. This is a technical challenge presented by Semantix/LinkApi as a way of measuring a candidate skills for a role as a Jr Backend Developer.

## API Gateway
The API Gateway contains one endpoint that can be accessed via a GET API request, be it from a software like Postman/Insomnia, cURL or directly through the browser, which is:
```
{{baseurl}}/users
```
This endpoint also supports pagination, which can be used like so:
```
{{baseurl}}/users?page={page}&limit={limit}
```
Otherwise, the request will run by default one page, with a limit of ten users.

## Automation

The automation is turned on automatically as a cron job whenever the project starts, and it's set up to run on an hourly basis. It gets user data from the Mockapi API,
formats it to a specific data model, and upserts said data to a MongoDB Atlas database that should be set up in the project by whoever is using it, with it's
connection string as an environment variable in a .env file.

## Setting up the project

* Install all dependencies using the command `npm install` (or `yarn install` depending on your package manager).
* Create a .env file at the root directory, with a port, a valid MongoDB Atlas connection string, and a Mockapi URL. (like on .env.example).
* Run the command `npm start`. You should be notified on your console of a successful connection to the server, database, and the automation, as soon as it starts. (the delay can be changed manually in `src/jobs/cron.js`). 
* Afterwards, the project is all set up and ready to go.

## Dependencies (and their respective website pages)
* [Express](https://expressjs.com)
* [Axios](https://axios-http.com)
* [Dotenv](https://npmjs.com/package/dotenv)
* [Nodemon](https://nodemon.io/)
* [Node-cron](https://www.npmjs.com/package/node-cron)
* [Mongoose](https://mongoosejs.com/)


