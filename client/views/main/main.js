import { Controller } from 'angular-ecmascript/module-helpers';

export default class MainCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.myVar = 1313;

    this.TrackerService.queryCorreosChile('RB254433138SG').then((data) => {
      this.result1 = data;  
    });

    this.TrackerService.queryAliexpress('RB254433138SG').then((data) => {
      this.result2 = data;  
    });
  }
}

MainCtrl.$name = 'MainCtrl';
MainCtrl.$inject = ['TrackerService'];