// # Functions to parse lines to markdown

// ## lineAsCode
// Receives the original `line` from source code and returns it as a code block line.
//@CBStart
exports.lineAsCode = (line) => {
  if (globalConfiguration.outputJsMarkdown) {
    return `'${line}\\n'+\n`;
  } else {
    return `${line}\n`;
  }
};
//@CBEnd

//---
// ## lineAsMarkdown
// Receives the original `line` from source code and returns it as markdown notation line.
//@CBStart
exports.lineAsMarkdown = (line) => {
  line = line.trim();
  if (globalConfiguration.outputJsMarkdown) {
    return `'${line.replace("//", "")}\\n\\n'+\n`;
  } else {
    const regexReplaceTilte = /(#)([\w])/g;
    return `${line.replace("//", "").replace(regexReplaceTilte, "$1 $2")}\n\n`;
  }
};
//@CBEnd

//---
// ## getCodeBlockStart
// Returns the code block initial notation (```).
//@CBStart
exports.getCodeBlockStart = () => {
  if (globalConfiguration.outputJsMarkdown) {
    return "'```'+\n";
  } else {
    return "```\n";
  }
};
//@CBEnd

//---
// ## getCodeBlockEnd
// Returns the code block end notation (```).
//@CBStart
exports.getCodeBlockEnd = () => {
  if (globalConfiguration.outputJsMarkdown) {
    return "'```'+\n";
  } else {
    return "```\n";
  }
};
//@CBEnd

//---
// ## escapeJSCaracthersInLIne
// Receives the original `line` from source code and escape JS special characters.
//@CBStart
exports.escapeJSCaracthersInLIne = (jsLine) => {
  return jsLine.replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/'/g, "\\'");
};
//@CBEnd
