const columnSplitter = '|';
const splitterRegex = /(?<!\\)\|/;
const lineSplitterRegex = /\r?\n|\r|\n/;

/**
 * Re-arranges the columns of a markdown table according to the specified layout.
 *
 * @param {number[]} newColumnSetup - An array containing the new order of the columns.
 * @param {string} tableContent - The markdown table to modify.
 * @returns {string} The markdown table with rearranged columns.
 */
export function markdownTableColumnsShift(newColumnSetup: number[], tableContent: string): string {
  const rows = tableContent.split(lineSplitterRegex);
  const rowsCells = rows.map(line => line.split(splitterRegex));
  const columnHeaders = rowsCells[0];

  if (!newColumnSetup || (newColumnSetup.length > 0 && columnHeaders.length < 3)) {
    throw Error('too many columns');
  }

  if (newColumnSetup.indexOf(0) > 0) {
    throw Error('newColumnSetup is no prefix before table is not should');
  }

  return rowsCells.map(cells => {
    const columnsIndex = cells.length;
    if (columnsIndex === 1) {
      return cells.join(columnSplitter);
    }

    const newColumns = newColumnSetup
      .filter(Boolean)
      .filter(index => columnsIndex > index + 1)
      .map(tokenIndex => cells[tokenIndex]);

    const result = columnSplitter + newColumns.join(columnSplitter) + columnSplitter;
    if (newColumnSetup[0] !== 0) {
      return result;
    }

    return cells[0] + result;
  }).join('\n');
}
