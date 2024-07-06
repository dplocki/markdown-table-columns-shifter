export function getColumnLayout(tableContent: string) {
  if (tableContent.indexOf('|') === -1) {
    return [];
  }

  const result = tableContent
    .split('|')
    .map((_, index) => index)
    .filter(index => index !== 0);

  result.pop();

  return result;
}

export function moveMarkdownColumns(newColumnSetup: never[], tableContent: string) {
  return tableContent;
}
