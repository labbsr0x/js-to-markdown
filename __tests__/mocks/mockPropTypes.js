const mockPropTypes = {
  showApp: {
    type: { name: 'func' },
    required: false,
    description: 'Function to be called on app starts',
    defaultValue: { value: '() => {}', computed: false },
  },
  canRemoveAccount: {
    type: { name: 'bool' },
    required: true,
    description: 'This props enable the account to be removed after process',
  },
  type: {
    type: {
      name: 'enum',
      value: ['highlight', 'opacity', 'withoutFeedback'],
    },
    required: false,
    description: 'Indicates how the info will be presented to user',
    defaultValue: { value: "'highlight'", computed: false },
  },
  params: {
    type: {
      name: 'shape',
      value: {
        documentType: {
          name: 'enum',
          computed: true,
          value: 'DocumentPreviewScreen.TYPES',
          required: true,
        },
        buttonMode: {
          name: 'enum',
          value: [
            { value: "'highlight'", computed: false },
            { value: "'opacity'", computed: false },
            { value: "'withoutFeedback'", computed: false },
          ],
          required: true,
        },
        resource: { name: 'string', required: true },
        leftButtonLabel: { name: 'string', required: false },
        leftButtonAction: { name: 'func', required: false },
        internalParams: {
          name: 'shape',
          value: {
            resourceLeftLabel: { name: 'string', required: true },
            resourceRightLabel: { name: 'string', required: false },
          },
          required: false,
        },
        rigthButtonLabel: { name: 'string', required: false },
        rigthButtonAction: { name: 'func', required: false },
      },
    },
    required: false,
    description: 'Object with the params to be presented',
  },
  seccondButtonMode: {
    type: {
      name: 'enum',
      value: ['highlight', 'opacity', 'withoutFeedback'],
    },
    required: false,
    description: '',
    defaultValue: { value: "'highlight'", computed: false },
  },
  thirdButtonMode: {
    type: {
      name: 'enum',
      value: 'Button.TYPES',
    },
    required: false,
    description: '',
  },
};

module.exports = mockPropTypes;
