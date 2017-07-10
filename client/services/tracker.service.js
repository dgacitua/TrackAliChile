import correoschile from 'correos-chile';
import geartrack from 'geartrack';

/*@ngInject*/
export default class TrackerService {
  constructor($q) {
    this.$q = $q;
  }

  queryCorreosChile(codigo) {
    return this.$q((resolve, reject) => {
      correoschile([codigo]).then((res) => {
        console.log(res);
        resolve(res);
      }).catch((err) => {
        console.error(err);
        reject(err);
      });
    });
  }

  queryAliexpress(codigo) {
    return this.$q((resolve, reject) => {
      geartrack.cainiao.getInfo(codigo, (err, res) => {
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