import { normalizeSync } from './string/diacritics';

class MString {
  normalize (text = '') {
    return normalizeSync(text);
  }

  diacritics (text) {
    const self = this;
    const retText = self.normalize(text) || '';
    return retText.toLowerCase();
  }
}

export default MString;
