import React from "react";
import {
  FlatList,
  Text,
  Image,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
} from "react-native";
import { getIngredientName, getAllIngredients } from "../../data/MockDataAPI";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

const IngredientsDetailsScreen = (props) => {
  const navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerTitleStyle: {
        fontSize: 16,
      },
    };
  };
  onPressIngredient = (item) => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate("Ingredient", { ingredient, name });
  };

  renderIngredient = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => this.onPressIngredient(item[0])}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  const { navigation } = props;
  const item = navigation.getParam("ingredients");
  const ingredientsArray = getAllIngredients(item);

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={ingredientsArray}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: RECIPE_ITEM_OFFSET,
    marginTop: 30,
    width:
      (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 60,
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: "black",
    fontSize: 13,
    textAlign: "center",
  },
  photo: {
    width:
      (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 60,
  },
});


export default IngredientsDetailsScreen;