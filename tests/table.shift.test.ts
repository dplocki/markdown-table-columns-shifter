import { getColumnLayout, moveMarkdownColumns } from "../src/table.shift";

function randomNumber(min:number=1, max:number=7):number {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomString(number:number=12, prefix:string=''): string {
  while (number--) {
    let tmp = Math.random() * 62 | 0;
    tmp += tmp > 9 ? (tmp < 36 ? 55 : 61) : 48;
    prefix += String.fromCharCode(tmp);
  }

  return prefix;
};

function tableBuilder(columnsNumber:number=3, rowNumber:number=10) {
  return Array.from(Array(rowNumber).keys()).map(_ => {
    return '|' + Array
    .from(Array(columnsNumber).keys())
    .map(_ => randomString())
    .join('|') + '|'
  }).join('\n') + '\n';
}

function buildBaseColumnLayout(columnsNumber: number): Array<number> {
  return Array.from(Array(columnsNumber).keys()).map((columnIndex: number) => columnIndex + 1);
}

describe('getColumnLayout', () => {
  it('should return empty array for empty text', () => {
    expect(getColumnLayout('')).toEqual([]);
  });

  it('should reutrn empty array if text is not a table', () => {
    expect(getColumnLayout(randomString())).toEqual([]);
  });

  it('should return correct array for single column content', () => {
    expect(getColumnLayout(`|${randomString()}|`)).toEqual([1]);
  });

  it('should return correct array for two column content', () => {
    expect(getColumnLayout(`|${randomString()}|${randomString()}|`)).toEqual([1, 2]);
  });

  it('should return correct array even for more rows', () => {
    const columnsNumber = randomNumber(3, 7);
    const tableContent = tableBuilder(columnsNumber, randomNumber(3, 10));
    const expectedLayout = buildBaseColumnLayout(columnsNumber);

    expect(getColumnLayout(tableContent)).toEqual(expectedLayout);
  });

});

describe('moveMarkdownColumns', () => {
  it('should return empty test getting empty text', () => {
    expect(moveMarkdownColumns([], '')).toBe('');
  });

  it('should return what get if that is not a markdown table', () => {
    const table = randomString();
    const result = moveMarkdownColumns([], table);

    expect(result).toBe(table);
  });
});
