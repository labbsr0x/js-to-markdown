const mockFileWithoutTagsResult_JSMD = [
  "'```'+\n",
  `'import React, { useState } from "react"; \\n'+\n`,
  "'import { \\n'+\n",
  "'  View, \\n'+\n",
  "'  Icon, \\n'+\n",
  "'  Colors, \\n'+\n",
  "'  Text, \\n'+\n",
  "'  Container, \\n'+\n",
  "'  NavigationHeader, \\n'+\n",
  "'  FlatList, \\n'+\n",
  "'  SearchBarInput, \\n'+\n",
  `'} from "react-native-ui"; \\n'+\n`,
  "'Testing the comments in a no tag file\\n\\n'+\n",
  "'export default class IconStory extends React.Component { \\n'+\n",
  "'  state = { \\n'+\n",
  "'    arrayWithFilter: iconsList.iconNameArray, \\n'+\n",
  `'    searchValue: "", \\n'+\n`,
  "'  }; \\n'+\n",
  "' \\n'+\n",
  "'  IconView = (name) => { \\n'+\n",
  "'    try { \\n'+\n",
  `'      const alias = name.split(",")[FIRST_ALIAS]; \\n'+\n`,
  "'      return ( \\n'+\n",
  "'        <View \\n'+\n",
  "'          key={name} \\n'+\n",
  "'          style={{ \\n'+\n",
  `'            flexDirection: "column", \\n'+\n`,
  "'            backgroundColor: Colors.Blue, \\n'+\n",
  "'            margin: 10, \\n'+\n",
  "'            borderRadius: 10, \\n'+\n",
  `'            alignItems: "center", \\n'+\n`,
  `'            justifyContent: "center", \\n'+\n`,
  "'            padding: 10, \\n'+\n",
  "'            height: 100, \\n'+\n",
  "'            width: 100, \\n'+\n",
  "'          }} \\n'+\n",
  "'        > \\n'+\n",
  "'          <Icon icon={alias} size={40} customColor={Colors.White} /> \\n'+\n",
  "'          <Text multiline tinyText style={{ color: Colors.White }}> \\n'+\n",
  "'            {name} \\n'+\n",
  "'          </Text> \\n'+\n",
  "'        </View> \\n'+\n",
  "'      ); \\n'+\n",
  "'    } catch (error) { \\n'+\n",
  "'      return; \\n'+\n",
  "'    } \\n'+\n",
  "'  }; \\n'+\n",
  "' \\n'+\n",
  "'  filterArrayWithValue = (value) => { \\n'+\n",
  "'    if (value) { \\n'+\n",
  "'      const arrayFiltered = this.state.arrayWithFilter.filter((item) => \\n'+\n",
  "'        item.toUpperCase().includes(value.toUpperCase()) \\n'+\n",
  "'      ); \\n'+\n",
  "' \\n'+\n",
  "'      this.setState({ \\n'+\n",
  "'        arrayWithFilter: [...arrayFiltered], \\n'+\n",
  "'        searchValue: value, \\n'+\n",
  "'      }); \\n'+\n",
  "'    } else { \\n'+\n",
  "'      this.setState({ \\n'+\n",
  "'        arrayWithFilter: iconsList.iconNameArray, \\n'+\n",
  "'        searchValue: value, \\n'+\n",
  "'      }); \\n'+\n",
  "'    } \\n'+\n",
  "'  }; \\n'+\n",
  "' \\n'+\n",
  "'  render() { \\n'+\n",
  "'    return ( \\n'+\n",
  "'      <Container> \\n'+\n",
  `'        <NavigationHeader type="centerTitle" title="Icons list" /> \\n'+\n`,
  "'        <SearchBarInput \\n'+\n",
  `'          tipo="searchBar" \\n'+\n`,
  "'          value={this.state.searchValue} \\n'+\n",
  `'          label={"Pesquisar"} \\n'+\n`,
  "'          labelColor={Colors.Blue} \\n'+\n",
  "'          selectColor={Colors.Blue} \\n'+\n",
  "'          style={{ \\n'+\n",
  "'            fontSize: 18, \\n'+\n",
  "'            color: Colors.Blue, \\n'+\n",
  "'          }} \\n'+\n",
  "'          onChangeText={(text) => { \\n'+\n",
  "'            this.filterArrayWithValue(text); \\n'+\n",
  "'          }} \\n'+\n",
  "'          onFocus={() => {}} \\n'+\n",
  "'          onBlur={() => {}} \\n'+\n",
  "'        /> \\n'+\n",
  "'        <FlatList \\n'+\n",
  "'          contentContainerStyle={{ \\n'+\n",
  `'            flexDirection: "row", \\n'+\n`,
  `'            flexWrap: "wrap", \\n'+\n`,
  `'            justifyContent: "space-around", \\n'+\n`,
  "'          }} \\n'+\n",
  "'          data={this.state.arrayWithFilter} \\n'+\n",
  "'          renderItem={({ item }) => this.IconView(item)} \\n'+\n",
  "'        /> \\n'+\n",
  "'      </Container> \\n'+\n",
  "'    ); \\n'+\n",
  "'  } \\n'+\n",
  "'} \\n'+\n",
  "'```'",
];

module.exports = mockFileWithoutTagsResult_JSMD;
