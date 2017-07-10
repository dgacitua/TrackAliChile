import { Service } from 'angular-ecmascript/module-helpers';

import correoschile from 'correos-chile';
import geartrack from 'geartrack';

export default class TrackerService extends Service {
  queryCorreosChile(code) {
    return this.$q((resolve, reject) => {
      correoschile([code]).then((res) => {
        console.log(res);
        resolve(res);
      }).catch((err) => {
        console.error(err);
        reject(err);
      });
    });
  }

  queryAliexpress(code) {
    return this.$q((resolve, reject) => {
      geartrack.cainiao.getInfo(code, (err, res) => {
        if (!err) {
          console.log(res);
          resolve(res.status);
        }
        else {
          console.error(err);
          reject(err);
        }
      });
    });
  }
}

TrackerService.$inject = ['$q'];