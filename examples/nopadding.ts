import { markdownTableColumnsShift } from "markdown-table-columns-shifter";

const originalTable = `| Country       | Capital City | Population (millions) | Area (km²)   |
|---------------|--------------|-----------------------|--------------|
| Canada        | Ottawa       | 38                    | 9,984,670    |
| Germany       | Berlin       | 83                    | 357,386      |
| Japan         | Tokyo        | 126                   | 377,975      |
| Australia     | Canberra     | 25                    | 7,692,024    |
| Brazil        | Brasília     | 213                   | 8,515,767    |`

console.log('Oryginal table [1, 2, 3, 4]:');
console.log(originalTable);

console.log()
console.log('Swap columns [1, 3, 4, 2]:');
console.log(markdownTableColumnsShift([1, 3, 4, 2], originalTable));

console.log()
console.log('Remove column [1, 2, 4]:')
console.log(markdownTableColumnsShift([1, 2, 4], originalTable));

console.log()
console.log('Remove columns [1]:')
console.log(markdownTableColumnsShift([1], originalTable));

console.log()
console.log('Column duplication [1, 2, 2, 3, 4]:')
console.log(markdownTableColumnsShift([1, 2, 2, 3, 4], originalTable));

console.log()
console.log('Extend column do not causing problems [9, 8, 7, 6, 5, 4, 3, 2, 1]:')
console.log(markdownTableColumnsShift([9, 8, 7, 6, 5, 4, 3, 2, 1], originalTable));

console.log()
console.log('Place padding column at the begining [0, 1, 2, 4]:')
try {
    console.log('Will work, but it, there is not effect:');
    console.log(markdownTableColumnsShift([0, 1, 2, 4], originalTable));
} catch (error) {
    console.log(' ... will not cause error');
}

console.log()
console.log('Place padding column in the middle [1, 2, 0, 4]:')
try {
    console.log(markdownTableColumnsShift([1, 2, 0, 4], originalTable));
} catch (error) {
    console.log(' ... will cause error');
}

