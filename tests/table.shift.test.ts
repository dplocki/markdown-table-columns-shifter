import { buildBaseColumnLayout, generateColumnsLayout, generateColumnsSet, randomNumber, randomString, tableBuilder } from "./generators";
import { getColumnLayout, moveMarkdownColumns } from "../src/table.shift";

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
    const tableContent = tableBuilder(generateColumnsSet(columnsNumber, randomNumber(3, 10)));
    const expectedLayout = buildBaseColumnLayout(columnsNumber);

    expect(getColumnLayout(tableContent)).toEqual(expectedLayout);
  });
});

describe('moveMarkdownColumns', () => {
  it('should throw exception for null as layout', () => {
    expect(() => moveMarkdownColumns((null as unknown as number[]), randomString())).toThrow(Error);
  });

  it('should return empty test getting empty text', () => {
    expect(moveMarkdownColumns([], '')).toBe('');
  });

  it('should throw error if 0 column is not in first place', () => {
    const columnSet = generateColumnsSet(3, randomNumber(3));
    const inputTable = tableBuilder(columnSet, ''.repeat(randomNumber(2, 4)));

    expect(() => moveMarkdownColumns([1, 2, 0], inputTable)).toThrow(Error);
  });

  it('should return what get if that is not a markdown table', () => {
    const table = randomString();
    const result = moveMarkdownColumns([], table);

    expect(result).toBe(table);
  });

  it('should throw an exception if there is excepting column for non-table', () => {
    expect(() => moveMarkdownColumns([1], randomString())).toThrow(Error);
  });

  it('should swap two columns in two column table', () => {
    const columnSet = generateColumnsSet(2, randomNumber(3));
    const expectedTable = tableBuilder([columnSet[1], columnSet[0]]);
    const inputTable = tableBuilder(columnSet);

    const result = moveMarkdownColumns([2, 1], inputTable);

    expect(result).toBe(expectedTable);
  });

  it('should swap all columns in three column table', () => {
    const columnSet = generateColumnsSet(3, randomNumber(3));
    const expectedTable = tableBuilder([columnSet[1], columnSet[2], columnSet[0]]);
    const inputTable = tableBuilder(columnSet);

    const result = moveMarkdownColumns([2, 3, 1], inputTable);

    expect(result).toBe(expectedTable);
  });

  it('should work corretly for many randomize columns', () => {
    const columnsNumber = randomNumber(4, 8);
    const columnsLayout = generateColumnsLayout(columnsNumber);
    const columnSet = generateColumnsSet(columnsNumber, randomNumber(3));
    const expectedTable = tableBuilder(columnsLayout.map((columnIndex) => columnSet[columnIndex - 1]));
    const inputTable = tableBuilder(columnSet);

    const result = moveMarkdownColumns(columnsLayout, inputTable);

    expect(result).toBe(expectedTable);
  });
});
