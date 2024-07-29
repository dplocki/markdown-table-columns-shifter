import { markdownTableColumnsShift } from "markdown-table-columns-shifter";

const originalTable = '| Name    | Age | Special character | City       |\r|---------|-----|-------------------|------------|\r| Alice   | 30  |  \\|               | New York   |\r| Bob     | 25  |    \\|             | Los Angeles|\r| Charlie | 35  |        \\|         | Chicago    |\r| Diana   | 28  |   \\|              | Houston    |';

console.log('Oryginal table [1, 2, 3, 4]:');
console.log(originalTable.split('\r').join('\n'));
// | Name    | Age | Special character | City       |
// |---------|-----|-------------------|------------|
// | Alice   | 30  |  \|               | New York   |
// | Bob     | 25  |    \|             | Los Angeles|
// | Charlie | 35  |        \|         | Chicago    |
// | Diana   | 28  |   \|              | Houston    |

console.log()
console.log('Swap columns [1, 2, 4, 3]:');
console.log(markdownTableColumnsShift([1, 2, 4, 3], originalTable));
// | Name    | Age | City       | Special character |
// |---------|-----|------------|-------------------|
// | Alice   | 30  | New York   |  \|               |
// | Bob     | 25  | Los Angeles|    \|             |
// | Charlie | 35  | Chicago    |        \|         |
// | Diana   | 28  | Houston    |   \|              |

console.log()
console.log('Swap columns [4, 3]:');
console.log(markdownTableColumnsShift([4, 3], originalTable.split('\r').join('\r\n')));
// | City       | Special character |
// |------------|-------------------|
// | New York   |  \|               |
// | Los Angeles|    \|             |
// | Chicago    |        \|         |
// | Houston    |   \|              |
