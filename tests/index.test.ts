import { generateColumnsLayout, generateColumnsSet, generateColumnsSetGenerator, randomNumber, randomString, runTimes, shuffle, tableBuilder } from "./generators";
import { markdownTableColumnsShift } from "../src";

describe('markdownTableColumnsShift', () => {
  describe('during validation', () => {
    it('should throw exception for null as layout', () => {
      expect(() => markdownTableColumnsShift((null as unknown as number[]), randomString())).toThrow(Error);
    });

    it('should throw error if 0 column is not in first place', () => {
      const columnSet = generateColumnsSet(3, randomNumber(3));
      const inputTable = tableBuilder(columnSet, { tableIndent: ''.repeat(randomNumber(2, 4)) });

      expect(() => markdownTableColumnsShift([1, 2, 0], inputTable)).toThrow(Error);
    });

    it('should throw an exception if there is excepting column for non-table', () => {
      expect(() => markdownTableColumnsShift([1], randomString())).toThrow(Error);
    });

    it('should not throw an exception if there is more column than layout express', () => {
      const columnsNumber = randomNumber(4, 8);
      const columnsLayout = generateColumnsLayout(columnsNumber + 1);
      const columnSet = generateColumnsSet(columnsNumber, randomNumber(3));
      const inputTable = tableBuilder(columnSet);

      expect(() => markdownTableColumnsShift(columnsLayout, inputTable)).not.toThrow(Error);
    });
  });

  it('should ignore \\| from the input', () => {
    const columnsNumber = randomNumber(4, 8);
    const columnsLayout = generateColumnsLayout(columnsNumber);
    const columnSet = generateColumnsSetGenerator(
      columnsNumber,
      randomNumber(3),
      () => (randomString(randomNumber(0, 3)) + '\\|' + randomString(randomNumber(0, 3)))
    );
    const inputTable = tableBuilder(columnSet);
    const expectedTable = tableBuilder(columnsLayout.map((columnIndex) => columnSet[columnIndex - 1]));

    const result = markdownTableColumnsShift(columnsLayout, inputTable);

    expect(result).toBe(expectedTable);
  });

  it('should return empty test getting empty text', () => {
    expect(markdownTableColumnsShift([], '')).toBe('');
  });

  it('should return what get if that is not a markdown table', () => {
    const table = randomString();
    const result = markdownTableColumnsShift([], table);

    expect(result).toBe(table);
  });

  it('should swap two columns in two column table', () => {
    const columnSet = generateColumnsSet(2, randomNumber(3));
    const expectedTable = tableBuilder([columnSet[1], columnSet[0]]);
    const inputTable = tableBuilder(columnSet);

    const result = markdownTableColumnsShift([2, 1], inputTable);

    expect(result).toBe(expectedTable);
  });

  it('should swap all columns in three column table', () => {
    const columnSet = generateColumnsSet(3, randomNumber(3));
    const expectedTable = tableBuilder([columnSet[1], columnSet[2], columnSet[0]]);
    const inputTable = tableBuilder(columnSet);

    const result = markdownTableColumnsShift([2, 3, 1], inputTable);

    expect(result).toBe(expectedTable);
  });

  it('should work correctly for many randomize columns', () => {
    const columnsNumber = randomNumber(4, 8);
    const columnsLayout = generateColumnsLayout(columnsNumber);
    const columnSet = generateColumnsSet(columnsNumber, randomNumber(3));
    const expectedTable = tableBuilder(columnsLayout.map((columnIndex) => columnSet[columnIndex - 1]));
    const inputTable = tableBuilder(columnSet);

    const result = markdownTableColumnsShift(columnsLayout, inputTable);

    expect(result).toBe(expectedTable);
  });

  it('should kept indent column', () => {
    const columnsNumber = randomNumber(4, 8);
    const columnsLayout = generateColumnsLayout(columnsNumber);
    const columnSet = generateColumnsSet(columnsNumber, randomNumber(3));
    const tableIndent = ' '.repeat(randomNumber(3, 9));
    const expectedTable = tableBuilder(columnsLayout.map((columnIndex) => columnSet[columnIndex - 1]), { tableIndent });
    const inputTable = tableBuilder(columnSet, { tableIndent });

    const result = markdownTableColumnsShift([0].concat(columnsLayout), inputTable);

    expect(result).toBe(expectedTable);
  });

  it('should remove indent column', () => {
    const columnsNumber = randomNumber(4, 8);
    const columnsLayout = generateColumnsLayout(columnsNumber);
    const columnSet = generateColumnsSet(columnsNumber, randomNumber(3));
    const tableIndent = ' '.repeat(randomNumber(3, 9));
    const expectedTable = tableBuilder(columnsLayout.map((columnIndex) => columnSet[columnIndex - 1]));
    const inputTable = tableBuilder(columnSet, { tableIndent });

    const result = markdownTableColumnsShift(columnsLayout, inputTable);

    expect(result).toBe(expectedTable);
  });

  it('should remove indent column', () => {
    const columnsNumber = randomNumber(4, 8);
    const columnsLayout = generateColumnsLayout(columnsNumber);

    shuffle(columnsLayout);
    runTimes(randomNumber(2, 3), () => columnsLayout.pop());

    const columnSet = generateColumnsSet(columnsNumber, randomNumber(3));
    const expectedTable = tableBuilder(columnsLayout.map((columnIndex) => columnSet[columnIndex - 1]));
    const inputTable = tableBuilder(columnSet);

    const result = markdownTableColumnsShift(columnsLayout, inputTable);

    expect(columnsNumber).not.toBe(columnsLayout.length);
    expect(result).toBe(expectedTable);
  });

  it('should not return empty when in layout there are extra columns', () => {
    const columnsNumber = randomNumber(4, 8);
    const columnsLayout = generateColumnsLayout(columnsNumber + randomNumber(2, 4));
    const columnSet = generateColumnsSet(columnsNumber, randomNumber(3));
    const expectedTable = tableBuilder(columnsLayout.filter((column) => column <= columnSet.length).map((columnIndex) => columnSet[columnIndex - 1]));
    const inputTable = tableBuilder(columnSet);

    const result = markdownTableColumnsShift(columnsLayout, inputTable);

    expect(result).toBe(expectedTable);
  });

  [
    '\n ',
    '\r\n',
    '\r'
  ].forEach((endLineCharacter: string) => {
    const label = Array.from(endLineCharacter).map((c: string) => String(c.charCodeAt(0))).join(',');

    it(`should work correctly for the [${label}] endline`, () => {
      const columnsNumber = randomNumber(4, 8);
      const columnSet = generateColumnsSet(columnsNumber, randomNumber(3));
      const columnsLayout = generateColumnsLayout(columnsNumber);
      const inputTable = tableBuilder(columnSet, { endLineCharacter });
      const expectedTable = tableBuilder(columnsLayout.filter((column) => column <= columnSet.length).map((columnIndex) => columnSet[columnIndex - 1]));

      const result = markdownTableColumnsShift(columnsLayout, inputTable);

      expect(result).toBe(expectedTable);
    });
  });

});
