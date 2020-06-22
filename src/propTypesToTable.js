const ParseProptypeUtils = require("./utils/parsePropTypes");
const DOUBLE_BREAKING_SPACE = "  ";

exports.parseProptypeToMDTable = (proptypes) => {
  let propTypesMDTableArray = [];

  if (!proptypes) {
    return;
  }

  const headerSeparator = globalConfiguration.outputJsMarkdown
    ? "---"
    : "\n---";
  const headerTitle = "## PropTypes";
  const tableTitle = "Property  | Type  | Default | Required | Description";
  const tableSeparator = "--------- | :---: |  :---:  |   :---:  | -----------";

  propTypesMDTableArray.push(
    ParseProptypeUtils.getStringPreparedToMarkdown(headerSeparator)
  );
  propTypesMDTableArray.push(
    ParseProptypeUtils.getStringPreparedToMarkdown(headerTitle)
  );
  propTypesMDTableArray.push(
    ParseProptypeUtils.getStringPreparedToMarkdown(tableTitle)
  );
  propTypesMDTableArray.push(
    ParseProptypeUtils.getStringPreparedToMarkdown(tableSeparator)
  );

  for (let [key, value] of Object.entries(proptypes)) {
    propTypesMDTableArray.push(parseProptype(key, value));
  }

  return propTypesMDTableArray;
};

const parseProptype = (propTypeName, propTyeObj) => {
  const valueName = propTyeObj.type ? propTyeObj.type.name : propTyeObj.name;

  if (valueName === "enum") {
    return parseOneOfProptype(propTypeName, propTyeObj);
  } else if (valueName === "shape") {
    return parseShapeProptype(propTypeName, propTyeObj);
  } else {
    return parseCommonProptypes(propTypeName, propTyeObj);
  }
};

const parseOneOfProptype = (propTypeName, propTyeObj) => {
  let oneOfValues = `One of: \[`;

  const reducer = (accumulator, currentValue) => {
    accumulator.value = accumulator.value + ", " + currentValue.value;
    return accumulator;
  };

  if (propTyeObj.type) {
    if (Array.isArray(propTyeObj.type.value)) {
      oneOfValues += propTyeObj.type.value.reduce(reducer).value;
    } else {
      oneOfValues += propTyeObj.type.value;
    }
  } else if (propTyeObj.value) {
    if (Array.isArray(propTyeObj.value)) {
      oneOfValues += propTyeObj.value.reduce(reducer).value;
    } else {
      oneOfValues += propTyeObj.value;
    }
  }

  oneOfValues = oneOfValues.replace(/,$/, "").replace(/'/g, "`");
  oneOfValues += `\]`;

  if (propTyeObj.description) {
    oneOfValues += ` - ${propTyeObj.description}`;
  }

  const tableRow = ParseProptypeUtils.getPropTypesTableRowAsString(
    propTypeName,
    propTyeObj.type ? propTyeObj.type.name : propTyeObj.name,
    ParseProptypeUtils.getDefaultValue(propTyeObj.defaultValue),
    propTyeObj.required,
    oneOfValues
  );

  return ParseProptypeUtils.getStringPreparedToMarkdown(tableRow);
};

const parseShapeProptype = (shapeKey, shapeObject) => {
  let propTypesShapeArray = [];

  const shapeTitleRow = ParseProptypeUtils.getPropTypesTableRowAsString(
    shapeKey,
    "object",
    "",
    shapeObject.required,
    shapeObject.description
  );

  propTypesShapeArray.push(
    ParseProptypeUtils.getStringPreparedToMarkdown(shapeTitleRow)
  );

  const objectEntries = shapeObject.type
    ? shapeObject.type.value
    : shapeObject.value;

  const internalPropTypesArray = Object.entries(objectEntries).map((entrie) => {
    return parseProptype(
      `${DOUBLE_BREAKING_SPACE}${shapeKey}.${entrie[0]}`,
      entrie[1]
    );
  });

  propTypesShapeArray = propTypesShapeArray.concat(internalPropTypesArray);

  const arrayToString = propTypesShapeArray.join("");
  return arrayToString;
};

const parseCommonProptypes = (propTypeKey, propTyeObj) => {
  const tableRow = ParseProptypeUtils.getPropTypesTableRowAsString(
    propTypeKey,
    propTyeObj.type ? propTyeObj.type.name : propTyeObj.name,
    ParseProptypeUtils.getDefaultValue(propTyeObj.defaultValue),
    propTyeObj.required,
    propTyeObj.description
  );

  return ParseProptypeUtils.getStringPreparedToMarkdown(tableRow);
};
