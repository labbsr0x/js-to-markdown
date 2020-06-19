const mockFileWithCBsTag =
  'import React from "react";  \n' +
  'import { StyleSheet } from "react-native"; \n' +
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
