import { moveMarkdownColumns } from "../src/table.shift";

describe('moveMarkdownColumns', () => {
  it('should return empty test getting empty text', () => {
    const result = moveMarkdownColumns([], '');

    expect(result).toBe('');
  });
});
