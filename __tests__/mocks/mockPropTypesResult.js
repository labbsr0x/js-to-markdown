const mockPropTypesResult = [
  '\n' +
    '---\n' +
    '\n' +
    '## PropTypes \n' +
    '\n' +
    'Property  | Type  | Default | Required | Description\n' +
    '--------- | :---: |  :---:  |   :---:  | -----------\n',
  'showApp | func | `() => {}` | false | Function to be called on app starts \n',
  'canRemoveAccount | bool | `none` | true | This props enable the account to be removed after process \n',
  "type | enum | `'highlight'` | false | One of: [undefined,undefined,undefined] - Indicates how the info will be presented to user \n",
  '`params` | object |   | false | Object with the params to be presented \n' +
    '  `params`.documentType | enum | `none` | true | One of: [`DocumentPreviewScreen.TYPES`] \n' +
    '  `params`.buttonMode | enum | `none` | true | One of: [`highlight`,`opacity`,`withoutFeedback`] \n' +
    '  `params`.resource | string | `none` | true |  \n' +
    '  `params`.leftButtonLabel | string | `none` | false |  \n' +
    '  `params`.leftButtonAction | func | `none` | false |  \n' +
    '  `params`.internalParams | object |   | false |  \n' +
    '  `  params.internalParams`.resourceLeftLabel | string | `none` | true |  \n' +
    '  `  params.internalParams`.resourceRightLabel | string | `none` | false |  \n' +
    '  `params`.rigthButtonLabel | string | `none` | false |  \n' +
    '  `params`.rigthButtonAction | func | `none` | false |  \n',
  "seccondButtonMode | enum | `'highlight'` | false | One of: [undefined,undefined,undefined] \n",
  'thirdButtonMode | enum | `none` | false | One of: [`Button.TYPES`] \n',
];

module.exports = mockPropTypesResult;
