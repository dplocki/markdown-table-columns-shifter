import { markdownTableColumnsShift } from "markdown-table-columns-shifter";

const originalTable = `|ID|Name|Age|Grade|Major|
        |---|---|---|---|---|
    |1|Alice Smith|20|A|Computer Science|
   |2|Bob Brown|21|B|Mathematics|
    |3|Carol White|22|A|Physics|
  |4|Dave Black|23|C|Chemistry|
     |5|Eve Green|20|B|Biology|`;

console.log('Oryginal table:');
console.log(originalTable);

console.log()
console.log('Remove column:')
console.log(markdownTableColumnsShift([0, 1, 2], originalTable));

console.log()
console.log('Remove padding:')
console.log(markdownTableColumnsShift([1, 2, 3], originalTable));
