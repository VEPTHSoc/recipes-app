import React from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncImageAnimated,
  Image,
  TouchableHighlight,
} from "react-native";



const SplashScreen = props =>{
    return(
        <View style={styles.container}>
        <Image style={styles.photo} source={require('../../../assets/icons/cookie100.png')} />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2cd18a",
  },
  photo: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;