#!/usr/bin/env node
const glob = require("glob");
const fs = require("fs");
const colors = require("colors");
const yargs = require("yargs");
const path = require("path");

const options = yargs.usage("Usage: --config <ConfigFilePath>").option("c", {
  alias: "config",
  describe: "Path to cfg file js-to-markdown.config.js",
  type: "string",
  demandOption: true,
}).argv;

/** LOCAL DEPENDENCIES */
const CommonUtils = require("./src/utils/common");
const ConfigUtils = require("./src/utils/configValidation");
const FileUtils = require("./src/utils/writeInFile");
const ParsePropTypes = require("./src/propTypesToTable");
var reactDocs = require("react-docgen");
const filterFileWithTags = require("./src/filterFileWithTags");

let configuration = "";

if (ConfigUtils.isValidPath(options.config)) {
  const pathResolved = path.resolve(options.config.toString());
  configuration = require(`${pathResolved}`);
} else {
  CommonUtils.logError("Invalid configuration file path.");
  process.exit(10);
}

const arrayOfComponentsToIndex = [];

const getFilesFromInputDirectories = function (callback) {
  glob(
    globalConfiguration.input +
      (globalConfiguration.subfolders ? "/**" : "") +
      "/*.js",
    callback
  );
};

const treatFiles = (err, res) => {
  if (err) {
    CommonUtils.logError(err);
  } else {
    res.forEach((filePath) => {
      processInputFile(filePath);
    });

    if (globalConfiguration.outputJsMarkdown) {
      FileUtils.writeIndexFile(arrayOfComponentsToIndex);
    }

    CommonUtils.logSuccess(
      `${arrayOfComponentsToIndex.length} markdowns generated at ${globalConfiguration.output}`
    );
  }
};

const processInputFile = (filePath) => {
  const fileData = fs.readFileSync(filePath, "UTF-8");

  if (fileData.length <= 0) {
    return;
  }

  const options = {
    filename: filePath,
    parserOptions: {
      plugins: ["jsx", "classProperties"],
      errorRecovery: true,
    },
  };

  var filename = filePath.replace(/^.*[\\\/]/, "").replace(".js", "");
  let regexComponentName;

  try {
    var componentInfo = reactDocs.parse(fileData, null, null, options);
  } catch (err) {
    componentInfo = {};
    regexComponentName = CommonUtils.getComponentNameWithRegex(fileData);
  }

  const componentName =
    componentInfo.displayName || regexComponentName || filename;
  const mdFilePathWithComponantName = CommonUtils.createMDFilePath(
    componentName
  );
  const fileSeparatedByTags = filterFileWithTags(fileData);

  if (fileSeparatedByTags.IGNORE || componentName === "") {
    return;
  }

  arrayOfComponentsToIndex.push(componentName);

  let propTypesTable = [];

  if (globalConfiguration.propTypesToTable) {
    propTypesTable = ParsePropTypes.parseProptypeToMDTable(componentInfo.props);
  }

  if (fileSeparatedByTags.NOTAGSRESULT.length > 0) {
    fileSeparatedByTags.MDLINES = fileSeparatedByTags.NOTAGSRESULT;
  }

  FileUtils.writeMDFile(
    componentName,
    mdFilePathWithComponantName,
    fileSeparatedByTags.MDLINES,
    propTypesTable
  );
};

/** MAIN */
global.globalConfiguration = ConfigUtils.treatConfigurationProps(configuration);

if (ConfigUtils.isValidDirectoriesProps()) {
  getFilesFromInputDirectories((err, res) => treatFiles(err, res));
}
