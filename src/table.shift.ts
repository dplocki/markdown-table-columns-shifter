export function getColumnLayout(tableContent: string) {
  const firstLine = tableContent.split('\n')[0];

  if (firstLine.indexOf('|') === -1) {
    return [];
  }

  const result = firstLine
    .split('|')
    .map((_, index) => index)
    .filter(index => index !== 0);

  result.pop();

  return result;
}

export function moveMarkdownColumns(newColumnSetup: never[], tableContent: string) {
  return tableContent;
}
