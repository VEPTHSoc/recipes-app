import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import MenuImage from "../../components/MenuImage/MenuImage";
import {
  getCategoryName,
  getRecipesByCategoryName,
  getRecipesByRecipeName,
  getRecipesByIngredientName,
} from "../../data/MockDataAPI";

const SearchScreen = (props) => {
  const navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: (
        <SearchBar
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
            flex: 1,
          }}
          inputContainerStyle={{
            backgroundColor: "#EDEDED",
          }}
          inputStyle={{
            backgroundColor: "#EDEDED",
            borderRadius: 10,
            color: "black",
            fontWeight: "bold",
          }}
          searchIcon
          clearIcon
          round
          onChangeText={(text) => params.handleSearch(text)}
          placeholder="Search"
          value={params.data}
        />
      ),
    };
  };

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const { navigation } = props;
  navigation.setParams({
    handleSearch: handleSearch,
    data: getValue,
  });

  handleSearch = (text) => {
    let recipeArray1 = getRecipesByCategoryName(text);
    let recipeArray2 = getRecipesByIngredientName(text);
    let recipeArray3 = getRecipesByIngredientName(text);

    let aux = recipeArray1.concat(recipeArray2);
    let recipeArray = [...new Set(aux)];
    if (text == "") {
      setValue(text), setData([]);
    } else {
      setValue(text), setData(recipeArray);
    }
  };

  getValue = () => {
    return value;
  };
  onPressRecipe = item => {
    props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );


  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={state.data}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14,
  },
});
