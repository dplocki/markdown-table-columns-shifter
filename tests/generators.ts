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

export function runTimes<T>(n: number, builder: (value: any) => T): Array<T> {
  return Array.from(Array(n).keys()).map<T>(builder);
}

export function generateColumnsSet(columnsNumber: number, rowNumber: number) {
  return runTimes(columnsNumber, () => runTimes(rowNumber, () => randomString(randomNumber())));
}

export function tableBuilder(columnsSet: Array<Array<string>>): string {
  const transposed = columnsSet[0].map((_, colIndex) => columnsSet.map(row => row[colIndex]));

  return transposed.map((line) => {
      return '|' + line.join('|') + '|';
    })
    .join('\n');
}

export function buildBaseColumnLayout(columnsNumber: number): Array<number> {
  return Array.from(Array(columnsNumber).keys()).map((columnIndex: number) => columnIndex + 1);
}
