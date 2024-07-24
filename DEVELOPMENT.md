# Development

## Technology

* Typescript
* Jest

## Setup

Setup the development envirement:

```sh
npm ci
```

## Run tests

```sh
npm run test
```

Can be use with the `-- --watch` parameter.

## Using docker to development

Download the image with Node:

```sh
docker pull node
```

Run the code in the container:

```sh
docker run -it -v $(pwd):/home/node node bash
```

## Checking the package content

The command:

```sh
npm pack
```

Will create the `tgz` archive, which could be published.
