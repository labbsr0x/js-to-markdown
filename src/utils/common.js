exports.createIndexFilePath = () => {
  let path = globalConfiguration.output;

  return path + "index.js";
};

exports.createMDFilePath = (componentName) => {
  let path = globalConfiguration.output + componentName + ".md";

  if (globalConfiguration.outputJsMarkdown) {
    path = path + ".js";
  }

  return path;
};

/* istanbul ignore next */
exports.logError = (message) => {
  console.log("[ERROR] ".red + message);
};

/* istanbul ignore next */
exports.logSuccess = (message) => {
  console.log("[SUCCESS] ".green + message);
};
