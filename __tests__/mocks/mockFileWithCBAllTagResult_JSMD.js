const mockFileWithCBAllTagResult = [
  "'```'+\n",
  "'export default function Welcome() {\\n'+\n",
  "' \\n'+\n",
  "'    return ( \\n'+\n",
  "'      <View style={styles.container}> \\n'+\n",
  `'        <Icon name="START" size={60} customColor={Colors.Yellow} /> \\n'+\n`,
  "'        <Text h3 style={styles.title}> \\n'+\n",
  "'          Welcome Text \\n'+\n",
  "'        </Text> \\n'+\n",
  "'        <Text \\n'+\n",
  "'          smallText \\n'+\n",
  "'          style={styles.version} \\n'+\n",
  "'        >{\\`(Version \\${packageJson.version})\\`}</Text> \\n'+\n",
  "'        <Text body style={styles.body}> \\n'+\n",
  "'          Weelcome to js-to-markdown test suite \\n'+\n",
  "'        </Text> \\n'+\n",
  "'      </View> \\n'+\n",
  "'    ); \\n'+\n",
  "'}\\n'+\n",
  "'```'",
];

module.exports = mockFileWithCBAllTagResult;
