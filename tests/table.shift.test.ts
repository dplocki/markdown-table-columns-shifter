import { getColumnLayout, moveMarkdownColumns } from "../src/table.shift";

const randomString = (number, prefix = '') => {
  while (number--) {
    let tmp = Math.random() * 62 | 0;
    tmp += tmp > 9 ? (tmp < 36 ? 55 : 61) : 48;
    prefix += String.fromCharCode(tmp);
  }

  return prefix;
};

describe('getColumnLayout', () => {
  it('should return empty array for empty text', () => {
    const result = getColumnLayout('');

    expect(result).toEqual([]);
  });
});

describe('moveMarkdownColumns', () => {
  it('should return empty test getting empty text', () => {
    const result = moveMarkdownColumns([], '');

    expect(result).toBe('');
  });

  it('should return what get if that is not a markdown table', () => {
    const table = randomString(10);
    const result = moveMarkdownColumns([], table);

    expect(result).toBe(table);
  });

});