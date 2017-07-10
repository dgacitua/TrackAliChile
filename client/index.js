import { Meteor } from 'meteor/meteor';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import Loader from 'angular-ecmascript/module-loader';

import RoutesConfig from './views/routes';
import ServicesConfig from './services/services';

import MainCtrl from './views/main/main';

const app = 'trackalichile';

angular.module(app, [
  angularMeteor,
  uiRouter,
  ServicesConfig.name,
  app
]);

new Loader(app)
  .load(MainCtrl)
  .load(RoutesConfig);

angular.element(document).ready(() => {
  angular.bootstrap(document, [ app ]);
});