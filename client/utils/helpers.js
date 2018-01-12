import * as Constants from './constants';

export default class Helpers {
  static codeParser(code) {
    // dgacitua: If code is a number of 26 digits, it must be transformed to 12 digit format to be parsed by CorreosChile
    if (!isNaN(code) && code.length === 26) {
      return code.substring((code.length - (Constants.correosChileCodeLength + Constants.correosChileOffset)), (code.length - Constants.correosChileOffset));
    }
    // dgacitua: Leave all other code formats "as is"
    else {
      return code;
    }
  }
}