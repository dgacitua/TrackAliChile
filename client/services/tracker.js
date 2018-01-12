import Axios from 'axios';

import * as Constants from '../utils/constants';
import Helpers from '../utils/helpers';

export default {
  ping() {
    return Axios.get(`${Constants.backendURL}${Constants.pingEndpoint}`);
  },
  queryCorreosChile(code) {
    let parsedCode = Helpers.codeParser(code);
    return Axios.get(`${Constants.backendURL}${Constants.correosChileEndpoint}/${parsedCode}`);
  },
  queryCainiao(code) {
    return Axios.get(`${Constants.backendURL}${Constants.cainiaoEndpoint}/${code}`);
  }
}