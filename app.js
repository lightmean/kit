var app = angular.module('colindevs', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html'
  })
  ;
  $urlRouterProvider.otherwise('/home')
})
