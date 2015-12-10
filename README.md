# lightmean
A very light starter kit for MEAN stack apps.

### Structure:
```
.
├── app                            // Server side code
│   ├── models                     // Any mongoose models/schemas to validate your data
│   │   └── thing.js               // Sample mongoose model
│   └── routes.js                  // Config for the Express API routes, serves index.html
├── bower.json                     // List of client side deps, piped to 'public/lib'
├── config                         // Your config files, normally more 
│   └── db.js                      // Sample config file w/ mongodb path
├── data                           // Only if your run 'mongod --dbpath=./data
├── package.json                   // NPM server side deps list
├── public                         // Served to the client 
│   ├── js                         // Angular SPA logic   
│   │   ├── app.js                 // Strings  together all the other files
│   │   ├── appRoutes.js           // Configs routes, no-refresh SPA
│   │   ├── controllers            // Angular controllers  
│   │   │   ├── AboutCtrl.js       // A sample 'about' page controller
│   │   │   └── MainCtrl.js        // Controller for your main page
│   │   └── services               // Angular services, API wrappers etc
│   │       └── UsefulService.js   // Uses http to connect to endpoint from 'app/routes.js'
│   ├── libs                       // All bower client side deps piped here
│   └── views                      // Angular SPA views
│       ├── about.html             // Sample about page
│       ├── home.html              // Home page served at '/'
│       └── index.html             // Home base, served directly by Express
└── server.js                      // Starts and configures the Express server
```
