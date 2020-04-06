import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import MenuButton from "../../components/MenuButton/MenuButton";

const DrawerContainer = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
            title="CATEGORIES"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
});
