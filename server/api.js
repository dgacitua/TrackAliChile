import { Meteor } from 'meteor/meteor';
import { Promise } from 'meteor/promise';

import correoschile from 'correos-chile';

import Tracker from './utils/tracker';

Meteor.methods({
  queryCorreosChile: (code) => {
    try {
      check(code, String);

      let response = Promise.await(correoschile([code]));

      return response[0];
    }
    catch (err) {
      console.error(err);
      throw new Meteor.Error(501, 'Error al consultar CorreosChile', err);
    }
  },
  queryCainiao: (code) => {
    try {
      check(code, String);

      let fn = Meteor.wrapAsync(Tracker.cainiao),
         res = fn(code);

      return res;
    }
    catch (err) {
      console.error(err);
      throw new Meteor.Error(502, 'Error al consultar Cainiao/Aliexpress', err);
    }
  }
});

/*
  Export formats:
    CorreosChile: [{"datosgenerales":{},"registros":[{"estado":"RECIBIDO EN OFICINA DE CORREOSCHILE","fecha":"10/07/2017 7:38","lugar":"ESTACION CENTRAL CDP 02"},{"estado":"DESPACHADO A OFICINA DE CORREOSCHILE","fecha":"10/07/2017 3:25","lugar":"CEN CENTRO TECNOLOGICO POSTAL"},{"estado":"RECEPCION INTERNACIONAL POR CORREOSCHILE","fecha":"07/07/2017 10:14","lugar":"CEN CENTRO TECNOLOGICO POSTAL"},{"estado":"ENVIO DESPACHADO AL PAIS DE DESTINO","fecha":"11/06/2017 11:43","lugar":"OFICINA INTERNACIONAL"}]}]
    Cainiao: {"id":"RB254433138SG","states":[{"state":"RECIBIDO EN OFICINA DE CORREOSCHILE","date":"2017-07-10T07:38:00+08:00"},{"state":"DESPACHADO A OFICINA DE CORREOSCHILE","date":"2017-07-10T03:25:00+08:00"},{"state":"RECEPCION INTERNACIONAL POR CORREOSCHILE","date":"2017-07-07T10:14:00+08:00"},{"state":"Shipmnet arrived at destination country","date":"2017-07-07T06:14:00+08:00"},{"state":"Arrival at Processing Center (Country code: CL)","date":"2017-07-07T06:14:00+08:00"},{"state":"Arrive at destination country","date":"2017-06-19T23:40:58+08:00"},{"state":"Arrival at Destination Post (Country: CL)","date":"2017-06-19T04:18:00+08:00"},{"state":"Depart from transit country","date":"2017-06-11T15:50:06+08:00"},{"state":"Despatched to overseas (Country code: CL)","date":"2017-06-11T11:43:44+08:00"},{"state":"ENVIO DESPACHADO AL PAIS DE DESTINO","date":"2017-06-11T11:43:00+08:00"},{"state":"Hand over to airline","date":"2017-06-09T23:50:08+08:00"},{"state":"Received by line-haul","date":"2017-06-09T14:59:53+08:00"},{"state":"Outbound in sorting center","date":"2017-06-09T13:59:53+08:00"},{"state":"Shipment information received","date":"2017-06-09T13:33:00+08:00"},{"state":"Inbound in sorting center","date":"2017-06-09T12:59:53+08:00"},{"state":"Accepted by carrier","date":"2017-06-09T12:29:50+08:00"},{"state":"Waiting for pick up","date":"2017-06-07T12:56:54+08:00"},{"state":"Shipment confirmation","date":"2017-06-06T14:56:37+08:00"}],"destinyId":null,"trackerWebsite":"https://global.cainiao.com/detail.htm?mailNoList=RB254433138SG","retries":1}
*/