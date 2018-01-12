/*
  Based on https://github.com/hdnpt/geartrack/blob/master/src/cainiaoTracker.js
*/

import request from 'requestretry';
import cheerio from 'cheerio';
import moment from 'moment-timezone';
import he from 'he';

const cainiaoEndpoint = 'https://global.cainiao.com/detail.htm?mailNoList=';
const zone = 'Asia/Shanghai';

export default class CainiaoTracker {
  static getPackage(code, callback) {
    request.get({
      url: cainiaoEndpoint + code,
      timeout: 10000,
      maxAttempts: 2,
      retryDelay: 500,
      pool: false,
      agent: false,
      jar: true,
      json: true,
      gzip: true
    }, (error, response, body) => {
      if (error || response.statusCode != 200) {
        callback(error);
      }
      else {
        let parser = cheerio.load(body),
           newBody = he.decode(parser('#waybill_list_val_box').val()),
             value = JSON.parse(newBody);

        if (value.data[0].errorCode === 'ORDER_NOT_FOUND' || value.data[0].errorCode === 'RESULT_EMPTY') {
          callback('Order not found or empty!');
        }
        else {
          let section = value.data[0].section3 || value.data[0].section2,
            destinyId = value.data[0].section2.mailNo || null,
                 msgs = section.detailList.map(m => {
                  return {
                    state: m.desc,
                    date: moment.tz(m.time, 'YYYY-MM-DD HH:mm:ss', zone).format('DD/MM/YYYY HH:mm:ss'),
                    location: null
                  }
                });

          let entity = {
            id: code,
            data: {
              destinyId: destinyId,
              retries: response.attempts,
              trackerWebsite: cainiaoEndpoint + code
            },
            states: msgs
          };

          callback(null, entity);
        }
      }
    });
  }
}