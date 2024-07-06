import { getColumnLayout, moveMarkdownColumns } from "../src/table.shift";

function randomString(number:number=12, prefix:string=''): string {
  while (number--) {
    let tmp = Math.random() * 62 | 0;
    tmp += tmp > 9 ? (tmp < 36 ? 55 : 61) : 48;
    prefix += String.fromCharCode(tmp);
  }

  return prefix;
};

describe('getColumnLayout', () => {
  it('should return empty array for empty text', () => {
    expect(getColumnLayout('')).toEqual([]);
  });

  it('should reutrn empty array if text is not a table', () => {
    expect(getColumnLayout(randomString())).toEqual([]);
  });

  it('should return single array for single column content', () => {
    expect(getColumnLayout(`|${randomString()}|`)).toEqual([1]);
  });
});

describe('moveMarkdownColumns', () => {
  it('should return empty test getting empty text', () => {
    const result = moveMarkdownColumns([], '');

    expect(result).toBe('');
  });

  it('should return what get if that is not a markdown table', () => {
    const table = randomString();
    const result = moveMarkdownColumns([], table);

    expect(result).toBe(table);
  });
});
