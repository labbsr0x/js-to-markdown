# JS-TO-MARKDOWN

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

A node program to generate markdown automatically from jsx files. Pull requests are welcome! 😃 🎉

## Getting Started

First install js-to-markdown globaly:

```sh
npm install js-to-storybook --global
```

## Running from command line

After installing js-to-markdown globaly, you can run it directly from the command line with a variety of useful options.

Here's how to js-to-markdown using `js-to-markdown.config.js` as a configuration file:

```sh
js-to-markdown -c js-to-markdown.config.js
```

## Configuration File

Is a JavaScript file

```javascript
module.exports = {
  input: "../path/to/input/dir",
  output: "../path/to/output/dir",
  subfolders: true,
};
```

## Configuration File Options

| Option.            | Default | Required | Description                                                                                                         |
| ------------------ | :-----: | :------: | ------------------------------------------------------------------------------------------------------------------- |
| `input`            | `none`  |   yes    | Path to the input directory to js files                                                                             |
| `output`           | `none`  |   yes    | Path to the output directory where the markdown files will be created                                               |
| `subfolders`       | `true`  |    no    | Search js files in subfolders under `input` directory                                                               |
| `subfolders`       | `true`  |    no    | Search js files in subfolders under `input` directory                                                               |
| `outputJsMarkdown` | `false` |    no    | If `true` indicates that the output markdown will be writen as a JS file and an `index.js` file will be created too |
