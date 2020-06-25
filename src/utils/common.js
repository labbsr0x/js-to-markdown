// ## createIndexFilePath
// This function is called only if the `outputJsMarkdown` config prop is `true`.
// It will return the path to the index.js file that exports all js markdowns module.
// The index.js file will be created at `output` directory.
//@CBStart
exports.createIndexFilePath = () => {
  let path = globalConfiguration.output;

  return path + "index.js";
};
//@CBEnd

//---
// ## createMDFilePath
// This function receives a string representing the `componentName` and returns the path to the markdown that will be generated.
// The MD (markdown) file will have the **.md.js** extension if the `outputJsMarkdown` config prop is `true`.
// Otherwise, the MD extension will be **.md**.
//@CBStart
exports.createMDFilePath = (componentName) => {
  let path = globalConfiguration.output + componentName + ".md";

  if (globalConfiguration.outputJsMarkdown) {
    path = path + ".js";
  }

  return path;
};
//@CBEnd

//---
// ## Console log functions
// Functions used to put some style in the output message that is presented to user.
// It uses the `color` dependency to color the output.
/* istanbul ignore next */
//@CBStart
exports.logError = (message) => {
  console.log("[ERROR] ".red + message);
};

/* istanbul ignore next */
exports.logSuccess = (message) => {
  console.log("[SUCCESS] ".green + message);
};
//@CBEnd
