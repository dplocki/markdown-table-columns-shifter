import { moveMarkdownColumns } from "markdown-table-columns-shifter";

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
console.log(moveMarkdownColumns([0, 1], originalTable));

