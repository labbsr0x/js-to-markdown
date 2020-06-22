# JS-TO-MARKDOWN

![GitHub](https://img.shields.io/github/license/labbsr0x/js-to-markdown)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

A node program to generate markdown automatically from jsx files. Pull requests are welcome! 😃 🎉

## Table of Contents

- [Getting Started](#getting-started)
- [Running from command line](#running-from-command-line)
- [Configuration File](#onfiguration-file)
- [Configuration File Options](#configuration-file-options)
- [TAGS used to document the JS Code](#tags-used-to-document-the-js-code)
- [Examples](#examples)
  - [Using @CBAll tag](#using-@cball-tag)
  - [Using @CBStart, @CBEnd tags and markdown comments](#using-@cbstart,-@cbend-tags-and-markdown-comments)
  - [Generating markdown with PropTypes table](#generating-markdown-with-propTypes-table)
- [Roadmap](#roadmap)

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
| `outputJsMarkdown` | `false` |    no    | If `true` indicates that the output markdown will be writen as a JS file and an `index.js` file will be created too |
| `propTypesToTable` | `false` |    no    | If `true` generates a table with all file propTypes, if any                                                         |

---

## TAGS used to document the JS Code

To help in the JS Code documentation it is possible to add some `tags` as commentary in your code to generate a more complete markdown output.

All tags must be placed at the beginning of the line as a commentary.

⚠️ If there is no tag in the file, the entire code will be treated as a block of code, the same behavior as if using the @CBAll tag.

The possible `tags` that can be used are:

### `@ignore`

This tag is used to tell the script to not parse any line of the JS file.

It has to be placed as the **first line** of the code.

### `@CBAll`

The @CBAll (CB = Code Block) tag indicates that all lines of JS file needs to be parsed inside a markdown code block notation.

### `@CBStart` and `@CBEnd`

The @CBStart and @CBEnd (CB = Code Block) indicates that all lines between the start and the end tag will be parsed inside a markdown code block notation.

# Examples

## Using @CBAll tag

React Native Js code example:

```javascript
//@CBAll
import React from "react";
import { View, Icon, Container, Text } from "react-native";

export default class Welcome extends React.Component {
  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <Container>
        <View style={styles.mainContent}>
          <Icon name="welcome" size={60} customColor={Colors.Yellow} />
          <Text h3 style={styles.title}>
            JS-TO-MARKDOWN
          </Text>
        </View>
      </Container>
    );
  }
}
```

This code generates the `Welcome.md` file at `output` directory defined in the configuration file with:

```
import React from \'react\';
import { View, Icon, Container, Text } from \'react-native\';
export default class Welcome extends React.Component {
  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();
    if (showApp) {
      showApp();
    }
  };
  render() {
    return (
      <Container>
        <View style={styles.mainContent}>
          <Icon name=\'welcome\' size={60} customColor={Colors.Yellow} />
          <Text h3 style={styles.title}>
            JS-TO-MARKDOWN
          </Text>
        </View>
      </Container>
    );
  }
}
```

---

## Using @CBStart, @CBEnd tags and markdown comments

React Native Js code example:

```javascript
import React from "react";
import { View, Icon, Container, Text } from "react-native";

//# This is the Welcome file
//Exemple code of how to markdown your JS code
//---
export default class Welcome extends React.Component {
  //## Function to be called when the aplication starts
  //@CBStart
  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };
  //@CBEnd

  //---
  //## Render Method
  render() {
    //@CBStart
    return (
      <Container>
        <View style={styles.mainContent}>
          <Icon name="welcome" size={60} customColor={Colors.Yellow} />
          <Text h3 style={styles.title}>
            JS-TO-MARKDOWN
          </Text>
        </View>
      </Container>
    );
    //@CBEnd
  }
}
```

This code generates the `Welcome.md` file at `output` directory defined in the configuration file with:

# This is the Welcome file

Exemple code of how to markdown your JS code

---

## Function to be called when the aplication starts

```
  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();
    if (showApp) {
      showApp();
    }
  };
```

---

## Render Method

```
    return (
      <Container>
        <View style={styles.mainContent}>
          <Icon name=\'welcome\' size={60} customColor={Colors.Yellow} />
          <Text h3 style={styles.title}>
            JS-TO-MARKDOWN
          </Text>
        </View>
      </Container>
    );
```

---

## Generating markdown with PropTypes table

To enable the parse of PropTypes declarations into a table inside markdown is necessary to mark the `propTypesToTable` flag inside the configuration file as `true`

React Native Js code example:

```javascript
import React from "react";
import PropTypes from "prop-types";
import { View, Icon, Container, Text } from "react-native";

//# This is the Welcome file
//Exemple code of how to markdown your JS code
//---
export default class Welcome extends React.Component {
  //## Function to be called when the aplication starts
  //@CBStart
  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };
  //@CBEnd

  //---
  //## Render Method
  render() {
    //@CBStart
    return (
      <Container>
        <View style={styles.mainContent}>
          <Icon name="welcome" size={60} customColor={Colors.Yellow} />
          <Text h3 style={styles.title}>
            JS-TO-MARKDOWN
          </Text>
        </View>
      </Container>
    );
    //@CBEnd
  }
}

Welcome.defaultProps = {
  showApp: () => {},
  type: "highlight",
  seccondButtonMode: "highlight",
};

Welcome.propTypes = {
  /**
   * Function to be called on app starts
   */
  showApp: PropTypes.func,
  /**
   * This props enable the account to be removed after process
   */
  canRemoveAccount: PropTypes.bool.isRequired,
  /**
   * Indicates how the info will be presented to user
   */
  type: PropTypes.oneOf(["highlight", "opacity", "withoutFeedback"]),
  /**
   * Object with the params to be presented
   */
  params: PropTypes.shape({
    documentType: PropTypes.oneOf(DocumentPreviewScreen.DOCUMENT_TYPES)
      .isRequired,
    buttonMode: PropTypes.oneOf(["highlight", "opacity", "withoutFeedback"])
      .isRequired,
    resource: PropTypes.string.isRequired,
    leftButtonLabel: PropTypes.string,
    leftButtonAction: PropTypes.func,
    internalParams: PropTypes.shape({
      resourceLeftLabel: PropTypes.string.isRequired,
      resourceRightLabel: PropTypes.string,
    }),
    rigthButtonLabel: PropTypes.string,
    rigthButtonAction: PropTypes.func,
  }),
  seccondButtonMode: PropTypes.oneOf([
    "highlight",
    "opacity",
    "withoutFeedback",
  ]),
  documentType: PropTypes.oneOf(DocumentPreviewScreen.DOCUMENT_TYPES),
};
```

This code generates the `Welcome.md` file at `output` directory defined in the configuration file with:

# This is the Welcome file

Exemple code of how to markdown your JS code

---

## Function to be called when the aplication starts

```
  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();
    if (showApp) {
      showApp();
    }
  };
```

---

## Render Method

```
    return (
      <Container>
        <View style={styles.mainContent}>
          <Icon name=\'welcome\' size={60} customColor={Colors.Yellow} />
          <Text h3 style={styles.title}>
            JS-TO-MARKDOWN
          </Text>
        </View>
      </Container>
    );
```

---

## PropTypes

| Property                                     |  Type  |   Default   | Required | Description                                                                                            |
| -------------------------------------------- | :----: | :---------: | :------: | ------------------------------------------------------------------------------------------------------ |
| showApp                                      |  func  |  () => {}   |  false   | Function to be called on app starts                                                                    |
| canRemoveAccount                             |  bool  |    none     |   true   | This props enable the account to be removed after process                                              |
| type                                         |  enum  | 'highlight' |  false   | One of: [`highlight`, `opacity`, `withoutFeedback`] - Indicates how the info will be presented to user |
| params                                       | object |             |  false   | Object with the params to be presented                                                                 |
|   params.documentType                        |  enum  |    none     |   true   | One of: [DocumentPreviewScreen.DOCUMENT_TYPES]                                                         |
|   params.buttonMode                          |  enum  |    none     |   true   | One of: [`highlight`, `opacity`, `withoutFeedback`]                                                    |
|   params.resource                            | string |    none     |   true   |
|   params.leftButtonLabel                     | string |    none     |  false   |
|   params.leftButtonAction                    |  func  |    none     |  false   |
|   params.internalParams                      | object |             |  false   |
|     params.internalParams.resourceLeftLabel  | string |    none     |   true   |
|     params.internalParams.resourceRightLabel | string |    none     |  false   |
|   params.rigthButtonLabel                    | string |    none     |  false   |
|   params.rigthButtonAction                   |  func  |    none     |  false   |
| seccondButtonMode                            |  enum  | 'highlight' |  false   | One of: [`highlight`, `opacity`, `withoutFeedback`]                                                    |
| documentType                                 |  enum  |    none     |  false   | One of: [DocumentPreviewScreen.DOCUMENT_TYPES]                                                         |

## ROADMAP

- Parse [JSDocs](https://jsdoc.app/) tags to markdown;
- Accept other JS extensions (.jsx, .ts, .tsx, ...) to locate and parse files;
- Configuration option to choose if the Markdown file will be saved at output directory or where the original file is;
