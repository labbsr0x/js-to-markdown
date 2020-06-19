const mockFileWithoutTags =
  'import React, { useState } from "react"; \n' +
  'import { \n' +
  '  View, \n' +
  '  Icon, \n' +
  '  Colors, \n' +
  '  Text, \n' +
  '  Container, \n' +
  '  NavigationHeader, \n' +
  '  FlatList, \n' +
  '  SearchBarInput, \n' +
  '} from "react-native-ui"; \n' +
  '//Testing the comments in a no tag file \n' +
  'export default class IconStory extends React.Component { \n' +
  '  state = { \n' +
  '    arrayWithFilter: iconsList.iconNameArray, \n' +
  '    searchValue: "", \n' +
  '  }; \n' +
  ' \n' +
  '  IconView = (name) => { \n' +
  '    try { \n' +
  '      const alias = name.split(",")[FIRST_ALIAS]; \n' +
  '      return ( \n' +
  '        <View \n' +
  '          key={name} \n' +
  '          style={{ \n' +
  '            flexDirection: "column", \n' +
  '            backgroundColor: Colors.Blue, \n' +
  '            margin: 10, \n' +
  '            borderRadius: 10, \n' +
  '            alignItems: "center", \n' +
  '            justifyContent: "center", \n' +
  '            padding: 10, \n' +
  '            height: 100, \n' +
  '            width: 100, \n' +
  '          }} \n' +
  '        > \n' +
  '          <Icon icon={alias} size={40} customColor={Colors.White} /> \n' +
  '          <Text multiline tinyText style={{ color: Colors.White }}> \n' +
  '            {name} \n' +
  '          </Text> \n' +
  '        </View> \n' +
  '      ); \n' +
  '    } catch (error) { \n' +
  '      return; \n' +
  '    } \n' +
  '  }; \n' +
  ' \n' +
  '  filterArrayWithValue = (value) => { \n' +
  '    if (value) { \n' +
  '      const arrayFiltered = this.state.arrayWithFilter.filter((item) => \n' +
  '        item.toUpperCase().includes(value.toUpperCase()) \n' +
  '      ); \n' +
  ' \n' +
  '      this.setState({ \n' +
  '        arrayWithFilter: [...arrayFiltered], \n' +
  '        searchValue: value, \n' +
  '      }); \n' +
  '    } else { \n' +
  '      this.setState({ \n' +
  '        arrayWithFilter: iconsList.iconNameArray, \n' +
  '        searchValue: value, \n' +
  '      }); \n' +
  '    } \n' +
  '  }; \n' +
  ' \n' +
  '  render() { \n' +
  '    return ( \n' +
  '      <Container> \n' +
  '        <NavigationHeader type="centerTitle" title="Icons list" /> \n' +
  '        <SearchBarInput \n' +
  '          tipo="searchBar" \n' +
  '          value={this.state.searchValue} \n' +
  '          label={"Pesquisar"} \n' +
  '          labelColor={Colors.Blue} \n' +
  '          selectColor={Colors.Blue} \n' +
  '          style={{ \n' +
  '            fontSize: 18, \n' +
  '            color: Colors.Blue, \n' +
  '          }} \n' +
  '          onChangeText={(text) => { \n' +
  '            this.filterArrayWithValue(text); \n' +
  '          }} \n' +
  '          onFocus={() => {}} \n' +
  '          onBlur={() => {}} \n' +
  '        /> \n' +
  '        <FlatList \n' +
  '          contentContainerStyle={{ \n' +
  '            flexDirection: "row", \n' +
  '            flexWrap: "wrap", \n' +
  '            justifyContent: "space-around", \n' +
  '          }} \n' +
  '          data={this.state.arrayWithFilter} \n' +
  '          renderItem={({ item }) => this.IconView(item)} \n' +
  '        /> \n' +
  '      </Container> \n' +
  '    ); \n' +
  '  } \n' +
  '} \n';

module.exports = mockFileWithoutTags;
