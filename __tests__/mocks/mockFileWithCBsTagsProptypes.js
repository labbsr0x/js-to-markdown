const mockFileWithCBsTag =
  'import React from "react";  \n' +
  'import { StyleSheet } from "react-native"; \n' +
  'import PropTypes from "prop-types"; \n' +
  'import { \n' +
  '  Colors, \n' +
  '  View, \n' +
  '  SimpleItem, \n' +
  '  NavigationHeader, \n' +
  '  SectionHeader, \n' +
  '  FlatList, \n' +
  '} from "react-native-ui"; \n' +
  'import ListUtil from "./util"; \n' +
  ' \n' +
  'export default function IconList() { \n' +
  'static propTypes = {\n' +
  '  canRemoveAccount: PropTypes.bool,\n' +
  '  canRemoveAccountTest: PropTypes.bool.isRequired,\n' +
  '  type: PropTypes.oneOf(["highlight", "opacity", "withoutFeedback"]),\n' +
  '  params: PropTypes.shape({\n' +
  '  documentType: PropTypes.oneOf(BBDocumentPreviewScreen.DOCUMENT_TYPES).isRequired,\n' +
  '  buttonMode: PropTypes.oneOf(BBDocumentPreviewScreen.BUTTON_MODE),\n' +
  '  resource: PropTypes.string.isRequired,\n' +
  '  leftButtonLabel: PropTypes.string,\n' +
  '  leftButtonAction: PropTypes.func,\n' +
  '  rigthButtonLabel: PropTypes.string,\n' +
  '  rigthButtonAction: PropTypes.func,\n' +
  '}),\n' +
  '};\n' +
  '\n' +
  'static defaultProps = {\n' +
  '  canRemoveAccount: true,\n' +
  '};\n' +
  '//## Constants used to show the icon list \n' +
  '  //@CBStart \n' +
  '  const lines = ListUtil.knob(); \n' +
  '  const exampleItem = ListUtil.exampleItem(lines); \n' +
  '  const data = [exampleItem, { ...exampleItem, value: "Value" }]; \n' +
  '  //@CBEnd \n' +
  '//## Render Return of this function \n' +
  '  //@CBStart \n' +
  '  return ( \n' +
  '    <View style={{ flex: 1, backgroundColor: Colors.White }}> \n' +
  '      <NavigationHeader type="centerTitle" title="Text" /> \n' +
  '      <View style={styles.sectionHeader}> \n' +
  '        <SectionHeader>Section Title</SectionHeader> \n' +
  '      </View> \n' +
  '      <View> \n' +
  '        <FlatList \n' +
  '          data={data} \n' +
  '          renderItem={({ item }) => ( \n' +
  '            <SimpleItem \n' +
  '              icon="mobile-phone-close-1" \n' +
  '              title={item.title} \n' +
  '              subtitle={item.subtitle} \n' +
  '              value={item.value} \n' +
  '              description={item.description} \n' +
  '              complement={item.complement} \n' +
  '            /> \n' +
  '          )} \n' +
  '        /> \n' +
  '      </View> \n' +
  '    </View> \n' +
  '  ); \n' +
  '  //@CBEnd \n' +
  '} \n' +
  ' \n' +
  'const styles = StyleSheet.create({ \n' +
  '  sectionHeader: { \n' +
  '    flexDirection: "row", \n' +
  '    backgroundColor: Colors.Default_Background, \n' +
  '  }, \n' +
  '}); \n' +
  ' \n';

module.exports = mockFileWithCBsTag;
