import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from "react-native";
import { getRecipes, getCategoryName} from "../../data/MockDataAPI";

const RecipesListScreen = props =>{
    const navigationOptions =({navigation}) =>{
        return {
            title: navigation.getParam('title')
        };
    };
    const {navigation } =props;
    const item = navigation.getParam('category');
    const recipesArray = getRecipes(item.id);

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



    return(
        <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipesArray}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title,
    category: RecipeCard.category
  });
  

export default RecipesListScreen;