import { Config } from 'angular-ecmascript/module-helpers';

import mainTpl from '../views/main/main.html';
import tracklistTpl from '../views/tracklist/tracklist.html';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('track', {
        url: '/track?qAli&qCorreos',
        templateUrl: mainTpl,
        controller: 'MainCtrl as main'
      })
      .state('tracklist', {
        url: '/tracklist',
        templateUrl: tracklistTpl,
        controller: 'TracklistCtrl as tracklist'
      });
 
    this.$urlRouterProvider.otherwise('/track');
    this.$locationProvider.html5Mode(true);
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];