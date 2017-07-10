import { Config } from 'angular-ecmascript/module-helpers';

import mainTpl from './main/main.html';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('main', {
        url: '/',
        templateUrl: mainTpl,
        controller: 'MainCtrl as main'
      });
 
    this.$urlRouterProvider.otherwise('/');
    this.$locationProvider.html5Mode(true);
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];