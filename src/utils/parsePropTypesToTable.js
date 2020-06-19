const DOUBLE_BREAKING_SPACE = '  ';

exports.parseProptypeToMDTable = (proptypes) => {
  let propTypesMDTableArray = [];

  const header =
    '\n---\n\n' +
    '## PropTypes \n\n' +
    'Property  | Type  | Default | Required | Description\n' +
    '--------- | :---: |  :---:  |   :---:  | -----------\n';

  propTypesMDTableArray.push(header);

  for (let [key, value] of Object.entries(proptypes)) {
    propTypesMDTableArray.push(parseProptype(key, value));
  }

  return propTypesMDTableArray;
};

const parseProptype = (propTypeName, propTyeObj) => {
  const valueName = propTyeObj.type ? propTyeObj.type.name : propTyeObj.name;

  if (valueName === 'enum') {
    return parseOneOfProptype(propTypeName, propTyeObj);
  } else if (valueName === 'shape') {
    return parseShapeProptype(propTypeName, propTyeObj);
  } else {
    return parseCommonProptypes(propTypeName, propTyeObj);
  }
};

const parseOneOfProptype = (propTypeName, propTyeObj) => {
  let oneOfValues = `One of: \[`;

  if (propTyeObj.type) {
    if (Array.isArray(propTyeObj.type.value)) {
      propTyeObj.type.value.forEach((element) => {
        oneOfValues += element.value + ',';
      });
    } else {
      oneOfValues += '`' + propTyeObj.type.value + '`';
    }
  } else if (propTyeObj.value) {
    if (Array.isArray(propTyeObj.value)) {
      propTyeObj.value.forEach((element) => {
        oneOfValues += element.value + ',';
      });
    } else {
      oneOfValues += '`' + propTyeObj.value + '`';
    }
  }

  oneOfValues = oneOfValues.replace(/,$/, '').replace(/'/g, '`');
  oneOfValues += `\]`;

  if (propTyeObj.description) {
    oneOfValues += ` - ${propTyeObj.description}`;
  }
  return `${propTypeName} | ${
    propTyeObj.type ? propTyeObj.type.name : propTyeObj.name
  } | ${getDefaultValue(propTyeObj.defaultValue)} | ${
    propTyeObj.required
  } | ${oneOfValues} \n`;
};

const parseShapeProptype = (shapeKey, shapeObject) => {
  let propTypesShapeArray = [];

  if (shapeKey.includes('`')) {
    propTypesShapeArray.push(
      `${shapeKey} | object |   | ${shapeObject.required} | ${
        shapeObject.description || ''
      } \n`
    );
  } else {
    propTypesShapeArray.push(
      `\`${shapeKey}\` | object |   | ${shapeObject.required} | ${
        shapeObject.description || ''
      } \n`
    );
  }

  shapeKey = shapeKey.replace(/`/g, '');

  const objectEntries = shapeObject.type
    ? shapeObject.type.value
    : shapeObject.value;

  for (let [key, value] of Object.entries(objectEntries)) {
    propTypesShapeArray.push(
      parseProptype(`${DOUBLE_BREAKING_SPACE}\`${shapeKey}\`.${key}`, value)
    );
  }

  const arrayToString = propTypesShapeArray.join('');

  return arrayToString;
};

const parseCommonProptypes = (propTypeKey, propTyeObj) => {
  return `${propTypeKey} | ${
    propTyeObj.type ? propTyeObj.type.name : propTyeObj.name
  } | ${getDefaultValue(propTyeObj.defaultValue)} | ${propTyeObj.required} | ${
    propTyeObj.description || ''
  } \n`;
};

const getDefaultValue = (defaultValueObject) => {
  let defaultValueResponse = '`none`';

  if (defaultValueObject && defaultValueObject.value) {
    defaultValueResponse = `\`${defaultValueObject.value}\``;
  }

  return defaultValueResponse;
};
