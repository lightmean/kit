# lightmean
A very light starter kit for MEAN stack apps.

### Structure:
```
.
├── app                      // Server side app details
│   ├── models               // All our main Mongoose models
│   │   └── nerd.js          // An example module
│   └── routes.js            // App routes (easy stuff b/c it's a Angular Single Page App)
├── config                   // Typically you'd store more configurations for your app
│   └── db.js                // Your MongoDB configs (url etc...)
├── data                     // Only if you are storing Mongo data locally ($ mongod --dbpath=./data)
│   ├── _tmp
│   ├── local.0
│   ├── local.ns
│   └── mongod.lock
├── package.json             // NPM stuff
├── public                   // This is what you are serving to the user
│   └── views                // You would add other Angular template files here
│       └── index.html       // The app's index
└── server.js                // This starts and configures the Express server
```
