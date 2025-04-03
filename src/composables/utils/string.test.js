import { describe, it, expect, vi } from 'vitest';
import MString from './string';
import { normalizeSync } from './string/diacritics';

vi.mock('./string/diacritics', () => ({
  normalizeSync: vi.fn()
}));

describe('MString', () => {
  const mString = new MString();

  describe('normalize', () => {
    it('should call normalizeSync with the provided text', () => {
      const text = 'Test';
      normalizeSync.mockReturnValue('Normalized Text');

      const result = mString.normalize(text);

      expect(normalizeSync).toHaveBeenCalledWith(text);
      expect(result).toBe('Normalized Text');
    });

    it('should return an empty string if no text is provided', () => {
      normalizeSync.mockReturnValue('');

      const result = mString.normalize();

      expect(normalizeSync).toHaveBeenCalledWith('');
      expect(result).toBe('');
    });
  });

  describe('diacritics', () => {
    it('should normalize the text and convert it to lowercase', () => {
      const text = 'Tést';
      normalizeSync.mockReturnValue('Test');

      const result = mString.diacritics(text);

      expect(normalizeSync).toHaveBeenCalledWith(text);
      expect(result).toBe('test');
    });

    it('should return an empty string if normalize returns an empty string', () => {
      normalizeSync.mockReturnValue('');

      const result = mString.diacritics('');

      expect(normalizeSync).toHaveBeenCalledWith('');
      expect(result).toBe('');
    });
  });
});
