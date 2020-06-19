const mockFileWithCBsTagResult = [
  '## Constants used to show the icon list \n\n',
  '```\n',
  '  const lines = ListUtil.knob(); \n',
  '  const exampleItem = ListUtil.exampleItem(lines); \n',
  '  const data = [exampleItem, { ...exampleItem, value: "Value" }]; \n',
  '```',
  '## Render Return of this function \n\n',
  '```\n',
  '  return ( \n',
  '    <View style={{ flex: 1, backgroundColor: Colors.White }}> \n',
  '      <NavigationHeader type="centerTitle" title="Text" /> \n',
  '      <View style={styles.sectionHeader}> \n',
  '        <SectionHeader>Section Title</SectionHeader> \n',
  '      </View> \n',
  '      <View> \n',
  '        <FlatList \n',
  '          data={data} \n',
  '          renderItem={({ item }) => ( \n',
  '            <SimpleItem \n',
  '              icon="mobile-phone-close-1" \n',
  '              title={item.title} \n',
  '              subtitle={item.subtitle} \n',
  '              value={item.value} \n',
  '              description={item.description} \n',
  '              complement={item.complement} \n',
  '            /> \n',
  '          )} \n',
  '        /> \n',
  '      </View> \n',
  '    </View> \n',
  '  ); \n',
  '```'
];

module.exports = mockFileWithCBsTagResult;
