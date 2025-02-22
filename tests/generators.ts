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

export function generateColumnsSetGenerator(columnsNumber: number, rowNumber: number, generator: (() => string) = randomString) {
  return runTimes(columnsNumber, () => runTimes(rowNumber, () => generator()));
}

export function generateColumnsSet(columnsNumber: number, rowNumber: number) {
  return generateColumnsSetGenerator(columnsNumber, rowNumber, () => randomString(randomNumber()));
}

interface ITableBuilderOptions {
  tableIndent?: string;
  endLineCharacter?: string;
}

export function tableBuilder(columnsSet: Array<Array<string>>, parameters: ITableBuilderOptions = {}): string {
  const {
    tableIndent = '',
    endLineCharacter = '\n',
  } = parameters;

  const transposed = columnsSet[0].map((_, colIndex) => columnsSet.map(row => row[colIndex]));

  return transposed
    .map((line) => `${tableIndent}|` + line.join('|') + '|')
    .join(endLineCharacter);
}

export function generateColumnsLayout(n: number): Array<number> {
  const layout = Array.from(Array(n).keys())
    .map((i: number) => i + 1);

  for (let i = layout.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [layout[i], layout[j]] = [layout[j], layout[i]];
  }

  return layout;
}

export function shuffle<T>(array: Array<T>) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}
