import { markdownTableColumnsShift } from "markdown-table-columns-shifter";

const originalTable = `        | Name    | Age | City       |
        |---------|-----|------------|
        | Alice   | 30  | New York   |
        | Bob     | 25  | Los Angeles|
        | Charlie | 35  | Chicago    |
        | Diana   | 28  | Houston    |
`;

console.log('Oryginal table:');
console.log(originalTable);

console.log()
console.log('Remove column:')
console.log(markdownTableColumnsShift([0, 1], originalTable));

console.log()
console.log('Remove padding:')
console.log(markdownTableColumnsShift([1, 2, 3], originalTable));

console.log()
console.log('Remove padding:')
console.log(markdownTableColumnsShift([1, 2, 3], originalTable));
