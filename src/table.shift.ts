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
  const firstLine = tableContent.split('\n')[0];
  const columnHeaders = firstLine.split('|');

  if (!newColumnSetup || (newColumnSetup.length > 0 && columnHeaders.length > 0)) {
    throw Error('too many columns');
  }

  return tableContent;
}
