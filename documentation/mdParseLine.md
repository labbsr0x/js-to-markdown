 # Functions to parse lines to markdown

 ## lineAsCode

 Receives the original `line` from source code and returns it as a code block line.

```
exports.lineAsCode = (line) => {
  if (globalConfiguration.outputJsMarkdown) {
    return \`\'\${line}\\n\'+\n\`;
  } else {
    return \`\${line}\n\`;
  }
};
```
---

 ## lineAsMarkdown

 Receives the original `line` from source code and returns it as markdown notation line.

```
exports.lineAsMarkdown = (line) => {
  line = line.trim();
  if (globalConfiguration.outputJsMarkdown) {
    return \`\'\${line.replace("//", "")}\\n\\n\'+\n\`;
  } else {
    const regexReplaceTilte = /(#)([\w])/g;
    return \`\${line.replace("//", "").replace(regexReplaceTilte, "\$1 \$2")}\n\n\`;
  }
};
```
---

 ## getCodeBlockStart

 Returns the code block initial notation (```).

```
exports.getCodeBlockStart = () => {
  if (globalConfiguration.outputJsMarkdown) {
    return "\'\`\`\`\'+\n";
  } else {
    return "\`\`\`\n";
  }
};
```
---

 ## getCodeBlockEnd

 Returns the code block end notation (```).

```
exports.getCodeBlockEnd = () => {
  if (globalConfiguration.outputJsMarkdown) {
    return "\'\`\`\`\'+\n";
  } else {
    return "\`\`\`\n";
  }
};
```
---

 ## escapeJSCaracthersInLIne

 Receives the original `line` from source code and escape JS special characters.

```
exports.escapeJSCaracthersInLIne = (jsLine) => {
  return jsLine.replace(/\`/g, "\\\`").replace(/\\$/g, "\\\$").replace(/\'/g, "\\\'");
};
```
