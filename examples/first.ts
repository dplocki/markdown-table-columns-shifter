import { moveMarkdownColumns } from "markdown-table-columns-shifter";

const originalTable = `| Country       | Capital City | Population (millions) | Area (km²)   |
|---------------|--------------|-----------------------|--------------|
| Canada        | Ottawa       | 38                    | 9,984,670    |
| Germany       | Berlin       | 83                    | 357,386      |
| Japan         | Tokyo        | 126                   | 377,975      |
| Australia     | Canberra     | 25                    | 7,692,024    |
| Brazil        | Brasília     | 213                   | 8,515,767    |`

console.log('Oryginal table:');
console.log(originalTable);

console.log('Swap columns:');
console.log(moveMarkdownColumns([1, 3, 4, 2], originalTable));
