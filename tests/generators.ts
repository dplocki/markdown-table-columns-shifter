export function randomNumber(min: number = 1, max: number = 7): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomString(number: number = 12, prefix: string = ''): string {
  while (number--) {
    let tmp = Math.random() * 62 | 0;
    tmp += tmp > 9 ? (tmp < 36 ? 55 : 61) : 48;
    prefix += String.fromCharCode(tmp);
  }

  return prefix;
};

export function tableBuilder(columnsNumber: number = 3, rowNumber: number = 10) {
  return Array.from(Array(rowNumber).keys()).map(_ => {
    return '|' + Array
      .from(Array(columnsNumber).keys())
      .map(_ => randomString())
      .join('|') + '|'
  }).join('\n') + '\n';
}

export function buildBaseColumnLayout(columnsNumber: number): Array<number> {
  return Array.from(Array(columnsNumber).keys()).map((columnIndex: number) => columnIndex + 1);
}
