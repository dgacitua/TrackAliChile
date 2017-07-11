import { Controller } from 'angular-ecmascript/module-helpers';

export default class MainCtrl extends Controller {
  constructor() {
    super(...arguments);
  }

  convertCode() {
    if (!isNaN(this.code1) && this.code1.length === 26) {
      let temp = this.code1;
      temp = temp.substring(this.code1.length-15, this.code1.length-3);
      this.code2 = temp;
    }
  }

  trackAliexpress(code) {
    this.TrackerService.queryAliexpress(code).then((data) => {
      this.resultAliexpress = data;  
    });
  }

  trackCoreosChile(code) {
    this.TrackerService.queryCorreosChile(code).then((data) => {
      this.resultCorreosChile = data;  
    });
  }
}

MainCtrl.$name = 'MainCtrl';
MainCtrl.$inject = ['TrackerService'];