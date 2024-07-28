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
// | Country       | Capital City | Population (millions) | Area (km²)   |
// |---------------|--------------|-----------------------|--------------|
// | Canada        | Ottawa       | 38                    | 9,984,670    |
// | Germany       | Berlin       | 83                    | 357,386      |
// | Japan         | Tokyo        | 126                   | 377,975      |
// | Australia     | Canberra     | 25                    | 7,692,024    |
// | Brazil        | Brasília     | 213                   | 8,515,767    |

console.log()
console.log('Swap columns [1, 3, 4, 2]:');
console.log(markdownTableColumnsShift([1, 3, 4, 2], originalTable));
// | Country       | Population (millions) | Area (km²)   | Capital City |
// |---------------|-----------------------|--------------|--------------|
// | Canada        | 38                    | 9,984,670    | Ottawa       |
// | Germany       | 83                    | 357,386      | Berlin       |
// | Japan         | 126                   | 377,975      | Tokyo        |
// | Australia     | 25                    | 7,692,024    | Canberra     |
// | Brazil        | 213                   | 8,515,767    | Brasília     |

console.log()
console.log('Remove column [1, 2, 4]:')
console.log(markdownTableColumnsShift([1, 2, 4], originalTable));
// | Country       | Capital City | Area (km²)   |
// |---------------|--------------|--------------|
// | Canada        | Ottawa       | 9,984,670    |
// | Germany       | Berlin       | 357,386      |
// | Japan         | Tokyo        | 377,975      |
// | Australia     | Canberra     | 7,692,024    |
// | Brazil        | Brasília     | 8,515,767    |

console.log()
console.log('Remove columns [1]:')
console.log(markdownTableColumnsShift([1], originalTable));
// | Country       |
// |---------------|
// | Canada        |
// | Germany       |
// | Japan         |
// | Australia     |
// | Brazil        |

console.log()
console.log('Column duplication [1, 2, 2, 3, 4]:')
console.log(markdownTableColumnsShift([1, 2, 2, 3, 4], originalTable));
// | Country       | Capital City | Capital City | Population (millions) | Area (km²)   |
// |---------------|--------------|--------------|-----------------------|--------------|
// | Canada        | Ottawa       | Ottawa       | 38                    | 9,984,670    |
// | Germany       | Berlin       | Berlin       | 83                    | 357,386      |
// | Japan         | Tokyo        | Tokyo        | 126                   | 377,975      |
// | Australia     | Canberra     | Canberra     | 25                    | 7,692,024    |
// | Brazil        | Brasília     | Brasília     | 213                   | 8,515,767    |

console.log()
console.log('Extend column do not causing problems [9, 8, 7, 6, 5, 4, 3, 2, 1]:')
console.log(markdownTableColumnsShift([9, 8, 7, 6, 5, 4, 3, 2, 1], originalTable));
// | Area (km²)   | Population (millions) | Capital City | Country       |
// |--------------|-----------------------|--------------|---------------|
// | 9,984,670    | 38                    | Ottawa       | Canada        |
// | 357,386      | 83                    | Berlin       | Germany       |
// | 377,975      | 126                   | Tokyo        | Japan         |
// | 7,692,024    | 25                    | Canberra     | Australia     |
// | 8,515,767    | 213                   | Brasília     | Brazil        |

console.log()
console.log('Place the indent column at the begining [0, 1, 2, 3, 4]:')
try {
    console.log('Will work, but there is no effect:');
    console.log(markdownTableColumnsShift([0, 1, 2, 3, 4], originalTable));
} catch (error) {
    console.log(' ... will not cause error');
}
// Will work, but there is no effect:
// | Country       | Capital City | Population (millions) | Area (km²)   |
// |---------------|--------------|-----------------------|--------------|
// | Canada        | Ottawa       | 38                    | 9,984,670    |
// | Germany       | Berlin       | 83                    | 357,386      |
// | Japan         | Tokyo        | 126                   | 377,975      |
// | Australia     | Canberra     | 25                    | 7,692,024    |
// | Brazil        | Brasília     | 213                   | 8,515,767    |

console.log()
console.log('Place the indent column in the middle [1, 2, 0, 4]:')
try {
    console.log(markdownTableColumnsShift([1, 2, 0, 4], originalTable));
} catch (error) {
    console.log(' ... will cause error');
}
// ... will cause error
