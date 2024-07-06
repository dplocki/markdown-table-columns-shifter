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

export function moveMarkdownColumns(newColumnSetup: never[], tableContent: string) {
  return tableContent;
}
