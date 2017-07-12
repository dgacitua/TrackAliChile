import { Controller } from 'angular-ecmascript/module-helpers';

const correosChileCodeLength = 12;
const lotOffset = 3;

export default class TracklistCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.tracklist = [];
  }

  convertCode() {
    if (!isNaN(this.code1) && this.code1.length === 26) {
      let temp = this.code1;
      temp = temp.substring(this.code1.length-(correosChileCodeLength+lotOffset), this.code1.length-lotOffset);
      this.code2 = temp;
    }
    else {
      this.code2 = this.code1;
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

TracklistCtrl.$name = 'TracklistCtrl';
TracklistCtrl.$inject = ['TrackerService'];