import { Service } from 'angular-ecmascript/module-helpers';

export default class TrackerService extends Service {
  queryCorreosChile(code) {
    return this.$q((resolve, reject) => {
      Meteor.call('queryCorreosChile', code, (err, res) => {
        if (!err) resolve(res);
        else reject(err);
      });
    });
  }

  queryAliexpress(code) {
    return this.$q((resolve, reject) => {
      Meteor.call('queryCainiao', code, (err, res) => {
        if (!err) resolve(res);
        else reject(err);
      });
    });
  }
}

TrackerService.$inject = ['$q'];