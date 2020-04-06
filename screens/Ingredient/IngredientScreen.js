import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  getIngredientName,
  getIngredientUrl,
  getRecipesByIngredients,
} from "../../data/MockDataAPI";
import { render } from "react-dom";

const IngredientScreen = (props) => {
  const {title} = route.params;

  onPressRecipe = (item) => {
    props.navigation.navigation("Recipe", { item });
  };

  renderRecipes = ({ item }) => {
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPess={() => onPressRecipe(item)}
    >
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9"
        onPress={() => onPressRecipe(item)}
      >
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>;
  };

  const { navigation } = props;
  const ingredientId = navigation.getparam("ingredient");
  const ingredientUrl = getIngredientUrl(ingredientId);
  const ingredientName = navigation.getParam("name");

  return (
    <ScrollView style={styles.mainContainer}>
      <View
        style={{
          borderBottomWidth: 0.4,
          marginBottom: 10,
          borderBottomColor: "grey",
        }}
      >
        <Image
          style={styles.photoIngredient}
          source={{ uri: "" + ingredientUrl }}
        />
      </View>
      <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={getRecipesByIngredient(ingredientId)}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: "bold",
    fontSize: 20,
  },
  photoIngredient: {
    width: "100%",
    height: 250,
    alignSelf: "center",
  },
  ingredientInfo: {
    color: "black",
    margin: 10,
    fontSize: 19,
    textAlign: "left",
    fontWeight: "bold",
  },
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
});


export default IngredientScreen;