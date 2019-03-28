angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('account', {
    url: '/account',
    templateUrl: 'templates/account.html',
    controller: 'accountCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('squad', {
    url: '/squad',
    templateUrl: 'templates/squad.html',
    controller: 'squadCtrl'
  })

  .state('facts', {
    url: '/facts',
    templateUrl: 'templates/facts.html',
    controller: 'factsCtrl'
  })

  .state('quiz', {
    url: '/quiz',
    templateUrl: 'templates/quiz.html',
    controller: 'quizCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')


});