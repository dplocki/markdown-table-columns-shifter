# Markdown Table Columns Shifter

![GPL-3.0 license](https://img.shields.io/github/license/dplocki/markdown-table-columns-shifter)
![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fdplocki%2Fmarkdown-table-columns-shifter%2Fbadge%3Fref%3Dmain&style=flat)

This repository contains a script for manipulating the order of markdown-style table columns. You can shift, remove, or duplicate columns.

## Install

```sh
npm install markdown-table-columns-shifter --save
```

## Supported Tables

The function works on any table data set represented as text, where each column is separated by the | character.

```md
| Country       | Capital City | Population (millions) | Area (km²)   |
|---------------|--------------|-----------------------|--------------|
| Canada        | Ottawa       | 38                    | 9,984,670    |
| Germany       | Berlin       | 83                    | 357,386      |
| Japan         | Tokyo        | 126                   | 377,975      |
| Australia     | Canberra     | 25                    | 7,692,024    |
| Brazil        | Brasília     | 213                   | 8,515,767    |
```

These are used in [Markdown](https://www.markdownguide.org/) or [Gerkin](https://cucumber.io/docs/gherkin/) as parameters for the [Scenario Outline](https://cucumber.io/docs/gherkin/reference/#scenario-outline).

The table can have an indent (a common feature in Gherkin scripts).

```feature
Scenario Outline: eating
  Given there are <start> cucumbers
  When I eat <eat> cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | eat | left |
    |    12 |   5 |    7 |
    |    20 |   5 |   15 |
```

Works correctly for both filled tables as well as *compressed* ones (no filling spaces added for readability).

```md
|Country|Capital City|Population (millions)|Area (km²)|
|---|---|---|---|
|Canada|Ottawa|38|9,984,670|
|Germany|Berlin|83|357,386|
```

## Main Functionality

The `markdownTableColumnsShift` function which accept the layout of the new columns, and the table to convert. It returns the new table as a string value.

### Column Layout

The first parameter for `markdownTableColumnsShift` is an array of numbers representing the intended layout of the columns. Each number represents the index of the original layout (which is: `[0, 1, 2, 3, 4 ...]`).

It is counted from **1**. The number **0** represents the table indent, even if table doesn't have it (it is treated as empty string).

```
Column index:  0     1      2     3
Table body:        | abc  | def | ghi |
                   | bcd  | efg | hij |
```

## Example

More examples can be found in the [source code of the package](https://github.com/dplocki/markdown-table-columns-shifter/tree/main/examples).

### Shift column

```js
markdownTableColumnsShift([1, 3, 4, 2], originalTable))
```

The result:

```md
| Country       | Population (millions) | Area (km²)   | Capital City |
|---------------|-----------------------|--------------|--------------|
| Canada        | 38                    | 9,984,670    | Ottawa       |
| Germany       | 83                    | 357,386      | Berlin       |
| Japan         | 126                   | 377,975      | Tokyo        |
| Australia     | 25                    | 7,692,024    | Canberra     |
| Brazil        | 213                   | 8,515,767    | Brasília     |
```

### Column Duplication

```js
markdownTableColumnsShift([1, 2, 2, 3, 4], originalTable))
```

The result:

```md
| Country       | Capital City | Capital City | Population (millions) | Area (km²)   |
|---------------|--------------|--------------|-----------------------|--------------|
| Canada        | Ottawa       | Ottawa       | 38                    | 9,984,670    |
| Germany       | Berlin       | Berlin       | 83                    | 357,386      |
| Japan         | Tokyo        | Tokyo        | 126                   | 377,975      |
| Australia     | Canberra     | Canberra     | 25                    | 7,692,024    |
| Brazil        | Brasília     | Brasília     | 213                   | 8,515,767    |
```

### Remove Column

```js
markdownTableColumnsShift([1, 2, 4], originalTable))
```

The result:

```md
| Country       | Capital City | Area (km²)   |
|---------------|--------------|--------------|
| Canada        | Ottawa       | 9,984,670    |
| Germany       | Berlin       | 357,386      |
| Japan         | Tokyo        | 377,975      |
| Australia     | Canberra     | 7,692,024    |
| Brazil        | Brasília     | 8,515,767    |
```
