import MString from './string';

class Utils {
  constructor() {
    const self = this;
    self._string = new MString();
  }

  get string() {
    const self = this;
    return self._string;
  }
}

const utils = new Utils();

export default utils;
