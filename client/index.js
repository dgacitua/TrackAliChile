import { Meteor } from 'meteor/meteor';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from '@uirouter/angularjs';
import Loader from 'angular-ecmascript/module-loader';

import RoutesConfig from './modules/routes';
import ServicesConfig from './modules/services';

import MainCtrl from './views/main/main';
import TracklistCtrl from './views/tracklist/tracklist';

const app = 'trackalichile';

angular.module(app, [
  angularMeteor,
  uiRouter,
  ServicesConfig.name,
  app
]);

new Loader(app)
  .load(MainCtrl)
  .load(TracklistCtrl)
  .load(RoutesConfig);

angular.element(document).ready(() => {
  angular.bootstrap(document, [ app ]);
});