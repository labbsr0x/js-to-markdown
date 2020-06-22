exports.lineAsCode = (line) => {
  if (globalConfiguration.outputJsMarkdown) {
    return `'${line}\\n'+\n`;
  } else {
    return `${line}\n`;
  }
};

exports.lineAsMarkdown = (line) => {
  line = line.trim();
  if (globalConfiguration.outputJsMarkdown) {
    return `'${line.replace("//", "")}\\n\\n'+\n`;
  } else {
    const regexReplaceTilte = /(#)([\w])/g;
    return `${line.replace("//", "").replace(regexReplaceTilte, "$1 $2")}\n\n`;
  }
};

exports.getCodeBlockStart = () => {
  if (globalConfiguration.outputJsMarkdown) {
    return "'```'+\n";
  } else {
    return "```\n";
  }
};

exports.getCodeBlockEnd = () => {
  if (globalConfiguration.outputJsMarkdown) {
    return "'```'+\n";
  } else {
    return "```\n";
  }
};

exports.escapeJSCaracthersInLIne = (jsLine) => {
  return jsLine.replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/'/g, "\\'");
};
