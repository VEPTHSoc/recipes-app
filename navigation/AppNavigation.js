import {
  NavigationContainer,
  StackActions,
  getPathFromState,
  BaseRouter,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import BackButton from "../../components/BackButton/BackButton";

const Stack = createStackNavigator();

<NavigationContainer>
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShow: false }}
    />
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{ title: "Categories" }}
    />
    <Stack.Screen
      name="Recipe"
      component={RecipeScreen}
      options={{
        headerTransparent: "true",
        headerLeft: () => (
          <BackButton
            onPress={() => {
              goBack();
            }}
          />
        ),
      }}
    />
    <Stack.Screen name="RecipesList" component={RecipesListScreen} />
    <Stack.Screen
      name="Ingredient"
      component={IngredientScreen}
      options={{ title: { title } }}
    />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen
      name="IngredientDetails"
      component={IngredientsDetailsScreen}
    />
  </Stack.Navigator>
</NavigationContainer>;

const Drawer = createDrawerNavigator();
return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerContainer}>
      <Drawer.Screen name="Main" component={Stack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Drawer;
