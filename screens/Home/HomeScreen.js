import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from "react-native";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

const HomeScreen = (props) => {
  const navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: () => (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
  });

  renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}
    >
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
        data={recipes}
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
});

export default HomeScreen;
