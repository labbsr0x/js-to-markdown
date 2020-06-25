const MDPaseLine = require("./mdParseLine");
// # Functions to parse PropTypes to Table

// ## getPropTypesTableRowAsString
// Function that receives the proptype data and returns the propType table line as string.
//@CBStart
exports.getPropTypesTableRowAsString = (
  propertyName,
  type,
  defaultValue,
  isRequired = false,
  description = ""
) => {
  return `${propertyName} | ${type} | ${defaultValue} | ${isRequired} | ${description}`;
};
//@CBEnd

//---
// ## getDefaultValue
// Receives the propType defaultValue object and returns the default value as string, if exists, or the string `none`.
//@CBStart
exports.getDefaultValue = (defaultValueObject) => {
  let defaultValueResponse = "none";

  if (defaultValueObject && defaultValueObject.value) {
    defaultValueResponse = defaultValueObject.value;
  }

  return defaultValueResponse;
};
//@CBEnd

//---
// ## getStringPreparedToMarkdown
// Function to prepare string that will be added to markdown with especial breakline notation depending if it is a .md or a .md.js file.
//@CBStart
exports.getStringPreparedToMarkdown = (proptypeData) => {
  if (globalConfiguration.outputJsMarkdown) {
    const treatedJSData = MDPaseLine.escapeJSCaracthersInLIne(proptypeData);
    return `+ '${treatedJSData}\\n'\n`;
  }

  return `${proptypeData}\n`;
};
//@CBEnd
