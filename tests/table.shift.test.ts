import { moveMarkdownColumns } from "../src/table.shift";

describe('moveMarkdownColumns', () => {
  it('should return empty test getting empty text', () => {
    const result = moveMarkdownColumns([], '');

    expect(result).toBe('');
  });

  it('should return what get if that is not a markdown table', () => {
    const table = 'sddsds';
    const result = moveMarkdownColumns([], table);

    expect(result).toBe(table);
  });

});
