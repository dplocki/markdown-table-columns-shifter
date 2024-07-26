import { markdownTableColumnsShift } from "markdown-table-columns-shifter";

const originalTable = `| Country       | Capital City | Population (millions) | Area (km²)   |
|---------------|--------------|-----------------------|--------------|
| Canada        | Ottawa       | 38                    | 9,984,670    |
| Germany       | Berlin       | 83                    | 357,386      |
| Japan         | Tokyo        | 126                   | 377,975      |
| Australia     | Canberra     | 25                    | 7,692,024    |
| Brazil        | Brasília     | 213                   | 8,515,767    |`

console.log('Oryginal table:');
console.log(originalTable);

console.log()
console.log('Swap columns:');
console.log(markdownTableColumnsShift([1, 3, 4, 2], originalTable));

console.log()
console.log('Remove column:')
console.log(markdownTableColumnsShift([1, 2, 4], originalTable));

console.log()
console.log('Remove columns:')
console.log(markdownTableColumnsShift([1], originalTable));

console.log()
console.log('Column duplication:')
console.log(markdownTableColumnsShift([1, 2, 2, 3, 4], originalTable));

console.log()
console.log('Extend column do not causing problems:')
console.log(markdownTableColumnsShift([9, 8, 7, 6, 5, 4, 3, 2, 1], originalTable));
