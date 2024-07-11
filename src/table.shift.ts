export function getColumnLayout(tableContent: string) {
  const firstLine = tableContent.split('\n')[0];

  if (firstLine.indexOf('|') === -1) {
    return [];
  }

  let result = firstLine.split('|').map((_, index) => index);
  result.shift(); // the first | character
  result.pop(); // the last | character

  return result;
}

export function moveMarkdownColumns(newColumnSetup: number[], tableContent: string) {
  const lines = tableContent.split('\n');
  const columnHeaders = lines[0].split('|');

  if (!newColumnSetup || (newColumnSetup.length > 0 && columnHeaders.length < 3)) {
    throw Error('too many columns');
  }

  if (newColumnSetup.indexOf(0) > 0) {
    throw Error('newColumnSetup is no prefix before table is not  should ');
  }

  return lines.map(line => {
    const columns = line.split('|');
    if (columns.length === 1) {
      return line;
    }

    const newColumns = newColumnSetup
      .filter(Boolean)
      .map(tokenIndex => columns[tokenIndex]);

    return columns[0] + '|' + newColumns.join('|') + '|';
  }).join('\n');
}
