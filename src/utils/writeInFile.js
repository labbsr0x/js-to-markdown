const fs = require('fs');
const CommonUtils = require('./common');

exports.writeMDFile = (
  componentName,
  fileName,
  mdLinesArray,
  propTypesArray
) => {
  const finalMDArray = mdLinesArray.concat(propTypesArray);

  const mdStringData = finalMDArray.join('');

  const file = fs.createWriteStream(fileName);

  if (globalConfiguration.outputJsMarkdown) {
    file.write('export const ' + componentName + ' = \n');
  }

  file.write(mdStringData);
  file.end();
};

exports.writeIndexFile = (arrayOfComponentsToIndex) => {
  const file = fs.createWriteStream(CommonUtils.createIndexFilePath());
  arrayOfComponentsToIndex.forEach((component) => {
    file.write(`import { ${component} } from './${component}.md';\n`);
  });

  file.write(`\nexport { \n ${arrayOfComponentsToIndex.join(',\n')} \n}`);
  file.end();
};
