#!/usr/bin/env node
const glob = require('glob');
const fs = require('fs');
const colors = require('colors');
const yargs = require('yargs');

const options = yargs.usage('Usage: --config <ConfigFilePath>').option('c', {
  alias: 'config',
  describe: 'Path to cfg file js-to-markdown.config.js',
  type: 'string',
  demandOption: true,
}).argv;

/** LOCAL DEPENDENCIES */
const configuration = require(`${options.config}`);
const CommonUtils = require('./src/utils/common');
const ConfigUtils = require('./src/utils/configValidation');
const FileUtils = require('./src/utils/writeInFile');
const MDParseLine = require('./src/utils/mdParseLine');
const ParsePropTypes = require('./src/utils/parsePropTypesToTable');
var reactDocs = require('react-docgen');
const filterFileWithTags = require('./src/filterFileWithTags');

const arrayOfComponentsToIndex = [];

const getFilesFromInputDirectories = function (callback) {
  glob(
    globalConfiguration.input +
      (globalConfiguration.subfolders ? '/**' : '') +
      '/*.js',
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
  const fileData = fs.readFileSync(filePath, 'UTF-8');

  if (fileData.length <= 0) {
    return;
  }

  const options = {
    filename: filePath,
    parserOptions: {
      plugins: ['jsx', 'classProperties'],
      errorRecovery: true,
    },
  };
  var componentInfo = reactDocs.parse(fileData, null, null, options);

  const componentName = componentInfo.displayName;
  const mdFilePathWithComponantName = CommonUtils.createMDFilePath(
    componentName
  );
  const fileSeparatedByTags = filterFileWithTags(fileData);

  if (fileSeparatedByTags.IGNORE || componentName === '') {
    return;
  }

  arrayOfComponentsToIndex.push(componentName);
  const propTypesTable = ParsePropTypes.parseProptypeToMDTable(
    componentInfo.props
  );

  if (fileSeparatedByTags.MDLINES.length > 0) {
    FileUtils.writeMDFile(
      componentName,
      mdFilePathWithComponantName,
      fileSeparatedByTags.MDLINES,
      propTypesTable
    );
  } else if (fileSeparatedByTags.NOTAGSRESULT.length > 0) {
    FileUtils.writeMDFile(
      componentName,
      mdFilePathWithComponantName,
      fileSeparatedByTags.NOTAGSRESULT,
      propTypesTable
    );
  }
};

/** MAIN */
global.globalConfiguration = ConfigUtils.treatConfigurationProps(configuration);

if (ConfigUtils.isValideDirectoriesProps()) {
  getFilesFromInputDirectories((err, res) => treatFiles(err, res));
}
