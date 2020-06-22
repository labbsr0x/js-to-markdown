const MDPaseLine = require("./mdParseLine");

exports.getPropTypesTableHead = () => {};

exports.getPropTypesTableRowAsString = (
  propertyName,
  type,
  defaultValue,
  isRequired = false,
  description = ""
) => {
  return `${propertyName} | ${type} | ${defaultValue} | ${isRequired} | ${description}`;
};

exports.getDefaultValue = (defaultValueObject) => {
  let defaultValueResponse = "none";

  if (defaultValueObject && defaultValueObject.value) {
    defaultValueResponse = defaultValueObject.value;
  }

  return defaultValueResponse;
};

exports.getStringPreparedToMarkdown = (proptypeData) => {
  if (globalConfiguration.outputJsMarkdown) {
    const treatedJSData = MDPaseLine.escapeJSCaracthersInLIne(proptypeData);
    return `+ '${treatedJSData}\\n'\n`;
  }

  return `${proptypeData}\n`;
};
