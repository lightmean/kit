# lightmean

*Oops, haven't been here in a while. Well Angular 2 is out so what's the point. This project won't be worked on anymore, ad the dependencies are out of date. The concepts are still there though, so feel free to use it as a learning resource!*

A very light starter kit for [MEAN](http://meanjs.org) stack apps.
MEAN = [MogoDB](http://mongodb.org/), [Express](http://expressjs.com/), [Angular](http://angularjs.org/), and [Node](http://nodejs.org/).

This is especially good for people who are just sarting out learning the MEAN stack, because it doesn't provide any extra, confusing functionality that doesn't make sense to beginners.

Also, if you are a seasoned developer who really wants to start from 'scratch', hopefully this will make you feel good about yourself.

### Future Branches/Features
In the future, feel free to build on this template, and create new, more advanced templates in seperate branches or even repos!
Examples: 
- User auth starter kit
- Geolocation (Google Maps?) starter kit
- Social media auth starter kit
- Hybrid app starter kit (Ionic?)
- Simple app clones (Twitter, Slack, etc)

### Annotated file tree:
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
