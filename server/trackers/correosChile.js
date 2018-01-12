import correoschile from 'correos-chile';
import moment from 'moment-timezone';

const zone = 'America/Santiago';

export default class CorreosChileTracker {
  static getPackage(code, callback) {
    correoschile([code])
      .then(res => {
        let response = { id: code };

        if (res[0].datosgenerales) {
          response.data = {
            destinyId: res[0].datosgenerales['Envio'],
            deliveryDate: moment.tz(res[0].datosgenerales['Fecha_Entrega'], 'DD/MM/YYYY HH:mm', zone).format('DD/MM/YYYY HH:mm:ss')  || null,
            receiver: res[0].datosgenerales['Entregado_a'] || null,
            receiverId: res[0].datosgenerales['Rut'] || null
          }
        }
        else {
          response.data = {};
        }

        if (res[0].registros) {
          response.states = res[0].registros.map(s => {
            return {
              state: s.estado,
              date: moment.tz(s.fecha, 'DD/MM/YYYY HH:mm', zone).format('DD/MM/YYYY HH:mm:ss'),
              location: s.lugar
            }
          })
        }
        else {
          response.states = {};
        }

        callback(null, response);
      })
      .catch(err => {
        callback(err);
      });
  }
}