const mockFileWithIgnoreTag =
  '@ignore\n' +
  'export default function Welcome() {' +
  '    return (' +
  '      <View style={styles.container}>' +
  '        <Icon name="START" size={60} customColor={Colors.Yellow} />' +
  '        <Text h3 style={styles.title}>' +
  '          Welcome Text' +
  '        </Text>' +
  '        <Text' +
  '          smallText' +
  '          style={styles.version}' +
  '        >{`(Version ${packageJson.version})`}</Text>' +
  '        <Text body style={styles.body}>' +
  '          Weelcome to js-to-markdown test suite' +
  '        </Text>' +
  '      </View>' +
  '    );' +
  '}';

module.exports = mockFileWithIgnoreTag;
