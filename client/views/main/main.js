import { Controller } from 'angular-ecmascript/module-helpers';

export default class MainCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.codes = {};
    this.codes.qAli = this.$stateParams.qAli || '';
    this.codes.qCorreos = this.$stateParams.qCorreos || '';

    this.processingAli = 'blank';
    this.processingCorreos = 'blank';

    if (!!this.codes.qAli) this.trackAliexpress(this.codes.qAli);
    if (!!this.codes.qCorreos) this.trackCorreosChile(this.codes.qCorreos);
  }

  runQuery() {
    this.$state.go('track', this.codes);
  }

  convertCode() {
    this.codes.qCorreos = this.TrackerService.convertCode(this.codes.qAli);
  }

  trackAliexpress(code) {
    this.processingAli = 'loading';
    this.$stateParams.qAli = this.codes.qAli;

    this.TrackerService.queryAliexpress(code).then((data) => {
      this.resultAliexpress = data;
      this.processingAli = 'done';
    });
  }

  trackCorreosChile(code) {
    this.processingCorreos = 'loading';
    this.$stateParams.qCorreos = this.codes.qCorreos;

    this.TrackerService.queryCorreosChile(code).then((data) => {
      this.resultCorreosChile = data;
      this.processingCorreos = 'done';
    });
  }
}

MainCtrl.$name = 'MainCtrl';
MainCtrl.$inject = ['$state', '$stateParams', 'TrackerService'];