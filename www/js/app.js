// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngCordova']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}); 

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.lists', {
      url: '/lists',
      views: {
        'menuContent': {
          templateUrl: 'templates/lists.html',
          controller: 'ListsCtrl'
        }
      }
    })

    .state('app.ink', {
      url: '/ink',
      views: {
        'menuContent': {
          templateUrl: 'templates/ink.html',
          controller: 'InkCtrl'
        }
      }
    })

    .state('app.motion', {
      url: '/motion',
      views: {
        'menuContent': {
          templateUrl: 'templates/motion.html',
          controller: 'MotionCtrl'
        }
      }
    })

    .state('app.components', {
      url: '/components',
      views: {
        'menuContent': {
          templateUrl: 'templates/components.html',
          controller: 'ComponentsCtrl'
        }
      }
    })

    .state('app.extensions', {
      url: '/extensions',
      views: {
        'menuContent': {
          templateUrl: 'templates/extensions.html',
          controller: 'ExtensionsCtrl'
        }
      }
    })

    .state('app.firstscreen', {
      url: '/firstscreen',
      views: {
        'menuContent': {
          templateUrl: 'views/firstscreen/firstscreen.html',
          controller: 'FirstscreenCtrl'
        }
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'views/login/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

    .state('app.adddocument', {
      url: '/addDocument',
      views: {
        'menuContent': {
          templateUrl: 'views/addDocument/addDocument.html',
          controller: 'AddDocumentCtrl'
        }
      }
    })

    .state('app.document', {
      url: '/document',
      views: {
        'menuContent': {
          templateUrl: 'views/document/Document.html',
          controller: 'DocumentCtrl'
        }
      }
    })

    .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'views/register/register.html',
          controller: 'RegisterCtrl'
        }
      }
    })

    .state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'views/categories/categories.html',
          controller: 'CategoriesCtrl'
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
