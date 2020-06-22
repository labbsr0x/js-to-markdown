const mockFileWithCBAllTagResult = [
  "```\n",
  "export default function Welcome() {\n",
  " \n",
  "    return ( \n",
  "      <View style={styles.container}> \n",
  '        <Icon name="START" size={60} customColor={Colors.Yellow} /> \n',
  "        <Text h3 style={styles.title}> \n",
  "          Welcome Text \n",
  "        </Text> \n",
  "        <Text \n",
  "          smallText \n",
  "          style={styles.version} \n",
  "        >{\\`(Version \\${packageJson.version})\\`}</Text> \n",
  "        <Text body style={styles.body}> \n",
  "          Weelcome to js-to-markdown test suite \n",
  "        </Text> \n",
  "      </View> \n",
  "    ); \n",
  "}\n",
  "```\n",
];

module.exports = mockFileWithCBAllTagResult;
